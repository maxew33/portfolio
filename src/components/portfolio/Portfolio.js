import { useState, useEffect, useMemo } from 'react'
import { useSwipeable } from 'react-swipeable'
import { useSelector, useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Accueil from './portfolio-comp/accueil/Accueil'
import Contact from './portfolio-comp/contact/Contact'
import Skills from './portfolio-comp/skills/Skills'
import Work from './portfolio-comp/work/Work'
import './portfolio.css'

export default function Portfolio() {

    const [faceAngle, setFaceAngle] = useState(0)

    const { face, drag } = useSelector(state => ({
        ...state.faceDisplayedReducer,
        ...state.dragWatchReducer
    }))

    const dispatch = useDispatch()

    useEffect(() => { 
        console.log(
`               ____               _                  
               |  _ \\            (_)                 
               | |_) | ___  _ __  _  ___  _   _ _ __ 
               |  _ < / _ \\| '_ \\| |/ _ \\| | | | '__|
               | |_) | (_) | | | | | (_) | |_| | |   
               |____/ \\___/|_| |_| |\\___/ \\__,_|_|   
                                _/ |                 
                               |__/               `)
    }, [])

    const changeAngle = (value) => {
        setFaceAngle(faceAngle + value)

        value < 0 ? dispatch({ type: 'TURN_LEFT' }) : dispatch({ type: 'TURN_RIGHT' })

        Array.from(document.querySelectorAll('.component__navigation')).forEach(navigation => {
            navigation.style.display = 'none'
            setTimeout(() => { navigation.style.display = 'block' }, 250)
        })
    }

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            !drag && changeAngle(-90)
        },
        onSwipedRight: () => {
            !drag && changeAngle(90)
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: false,
        delta: 40  
    })

    let prevPage = face - 1
    prevPage < 0 && (prevPage = 3)

    let nextPage = face + 1
    nextPage > 3 && (nextPage = 0)

    const pagesName = [
        'accueil',
        'portfolio',
        'skills',
        'contact'
    ]

    const arrayPages = useMemo(() => {
        return [
            {
                pageDisplayed: <Accueil />,
                id: uuidv4()
            },
            {
                pageDisplayed: <Work />,
                id: uuidv4()
            },
            {
                pageDisplayed: <Skills />,
                id: uuidv4()
            },
            {
                pageDisplayed: <Contact />,
                id: uuidv4()
            }
        ]
    }, [])

    return (
        <>
            <div className="spinner-container" {...handlers}>
                <div className="spinner" style={{ transform: "rotateY(" + faceAngle + "deg)" }}>
                    {arrayPages.map((item, index) => {
                        return (
                            <div key={arrayPages[index].id} className="face">
                                <div className="content">
                                    <button className="arrow arrow-cta arrow-left" onClick={() => changeAngle(90)}>
                                        <div className="chevron">
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                        </div>
                                        <span className="component__navigation component__navigation-prev-page">
                                            {pagesName[prevPage]}
                                        </span>
                                    </button>
                                    {arrayPages[index].pageDisplayed}
                                    <button className="arrow arrow-cta arrow-right" onClick={() => changeAngle(-90)}>
                                        <span className="component__navigation component__navigation-next-page">
                                            {pagesName[nextPage]}
                                        </span>
                                        <div className="chevron">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
