import { useState, useEffect, useMemo } from 'react'
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

    const { face } = useSelector(state => ({
        ...state.faceDisplayedReducer
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('montage portfolio')

    }, [])

    const changeAngle = (value) => {
        setFaceAngle(faceAngle + value)

        value < 0 ? dispatch({ type: 'TURN_LEFT' }) : dispatch({ type: 'TURN_RIGHT' })

    }

    /* Pour connaître le nb de tours complets faits */
    // let turnNb = Math.floor(faceAngle / 360)

    /* Pour savoir quelle est la face affichée */
    // let faceVisible = 4 - (faceAngle - (360 * turnNb)) / 90
    // faceVisible === 4 && (faceVisible = 0)

    // let prevPage = faceVisible - 1
    // prevPage < 0 && (prevPage = 3)

    // let nextPage = faceVisible + 1
    // nextPage > 3 && (nextPage = 0)

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
                pageDisplayed: <Skills/* page={faceVisible}*/ />,
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
            <div className="spinner-container">
                <div className="spinner" style={{ transform: "rotateY(" + faceAngle + "deg)" }}>
                    {arrayPages.map((item, index) => {
                        return (
                            <div key={arrayPages[index].id} className="face">
                                <div className="content">
                                    <button className="arrow arrow-left" onClick={() => changeAngle(90)}>
                                        <FontAwesomeIcon icon={faChevronLeft} />
                                        {face}
                                        <span className="component__navigation component__navigation-prev-page">
                                            {pagesName[prevPage]}
                                        </span>
                                    </button>
                                    {arrayPages[index].pageDisplayed}
                                    <button className="arrow arrow-right" onClick={() => changeAngle(-90)}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                        <span className="component__navigation component__navigation-next-page">
                                            {pagesName[nextPage]}
                                        </span>
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
