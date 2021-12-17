import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { v4 as uuidv4 } from 'uuid'
import Draggable from 'react-draggable'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faChevronDown, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import body from '../../assets/body.svg'
import headCartoon from '../../assets/head-cartoon.svg'
import headReal from '../../assets/head-real.webp'
import mustache from '../../assets/mustache.svg'
import glasses from '../../assets/glasses.svg'
import beard from '../../assets/beard.svg'
import beard2 from '../../assets/beard2.svg'
import bowTie from '../../assets/bow-tie.svg'
import fancy from '../../assets/fancy.svg'
import hat1 from '../../assets/hat1.svg'
import hat2 from '../../assets/hat2.svg'
import tie from '../../assets/tie.svg'
import helmet from '../../assets/helmet.svg'
import mustache2 from '../../assets/mustache2.svg'

import './accueil.css'

export default function Accueil() {

    const dispatch = useDispatch()

    const { drag } = useSelector(state => ({
        ...state.dragWatchReducer
    }))

    const [chestObjects, setChestObjects] = useState([
        {
            src: mustache,
            alt: "mustache",
            width: 'calc(35 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: glasses,
            alt: "sun glasses",
            width: 'calc(45 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: beard,
            alt: "big beard",
            width: 'calc(35* var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: bowTie,
            alt: "bow tie",
            width: 'calc(35 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: fancy,
            alt: "funny nose and glasses",
            width: 'calc(40 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: hat1,
            alt: "hat",
            width: 'calc(55 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: beard2,
            alt: "small beard",
            width: 'calc(35 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: hat2,
            alt: "sheriff hat",
            width: 'calc(55 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: tie,
            alt: "tie",
            width: 'calc(25 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: helmet,
            alt: "helmet",
            width: 'calc(55 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        },
        {
            src: mustache2,
            alt: "simple mustache",
            width: 'calc(35 * var(--avatar-length-unit))',
            zIndex: 10,
            id: uuidv4()
        }
    ]
    )

    const [myStatusIdx, setMyStatusIdx] = useState({
        index: 0,
        preventSpam: false
    })

    const [reloadButtonRotation, setReloadButtonRotation] = useState(360)


    useEffect(() => {

        const chest = document.querySelector('.chest-container'),
            chestTop = document.querySelector('.chest-top-front'),
            chestBottom = document.querySelector('.chest-bottom'),
            accessoryContainer = [...document.querySelectorAll('.accessory-container')],
            accessory = [...document.querySelectorAll('.avatar-accessory')]

        let chestOpen = false
        let accessoryThrown = 0

        // cta animation on page renddering
        setTimeout(() => {

            //arrows
            Array.from(document.querySelectorAll('.arrow-cta')).forEach(arrow => {
                arrow.classList.toggle('arrow-cta')
            })

            //status reload arrow
            setTimeout(() => {
                setReloadButtonRotation(reloadButtonRotation + 360)
                document.querySelector('.reload-status').style.transform = 'rotate(' + reloadButtonRotation + 'deg)'
            }
                , 250)

            //chest
            setTimeout(() => { chestTop.classList.toggle('open') }
                , 500)

            //pull
            setTimeout(() => { document.querySelector('.pull-me-face').style.opacity = 1 }
                , 750)
        }
            , 500)


        //chest opening / closing and stuff thrown


        accessoryContainer.forEach(container => container.classList.add('accessory-hidden'))

        chest.addEventListener('click', () => {

            if (!chestOpen && accessoryThrown < accessory.length) {
                if (accessoryThrown < (accessory.length - 1)) {
                    chestTop.classList.toggle('open')
                }
                else {
                    chestTop.classList.add('wide-open')
                    chestBottom.innerText = ''
                }
                accessory[accessoryThrown].classList.add('accessory-ejection')
                accessoryContainer[accessoryThrown].classList.remove('accessory-hidden')

                accessoryThrown++
                chestOpen = true

                accessoryThrown < accessory.length && (setTimeout(() => {
                    chestTop.classList.toggle('open')
                    chestOpen = false
                }, 750))
            }

        })
    }, [])

    const myStatus = [
        'est un développeur front-end...',
        'qui vous dit bonjour! 👋 ',
        'Il a hâte de vous rencontrer 🤝. ',
        'Il a codé ce site avec 💜 ...',
        'et avec React 💻 .',
        'Il sait se former tout seul 📚.',
        'C\'est aussi un mari 💑 ...',
        'et un papa 👦👦.',
        'C\'est un grand gaillard de 2m ☝ ...',
        'qui aime le rugby 🏉 ...',
        'Jouer à Hearthstone 🎮 ...',
        'mais n\'a pas de chance aux dés 🎲 .',
        'Il fait des blagues à papa 😅 ...',
        'et n\'a plus rien à dire 🤫 ...'
    ]

    const handleStart = e => {

        dispatch({ type: 'DRAG_START' })

        console.log(drag)

        /* when I take an accessory, set its z index to 20 */

        const myId = parseInt(e.target.dataset.id)

        const newArr = [...chestObjects]

        for (let i = 0; i < newArr.length; i++) {
            i !== myId ? (newArr[i].zIndex > e.target.style.zIndex && newArr[i].zIndex--) : newArr[i].zIndex = 20

        }

        setChestObjects(newArr)
    }

    const handleStop = () => {
        setTimeout(() =>
            dispatch({ type: 'DRAG_STOP' }), 50)

        console.log(drag)
    }

    const handlePullMeDrag = (e, ui) => {
        const heightRef = document.querySelector('.pull-me-face-container').getBoundingClientRect().height - document.querySelector('.pull-me-face').getBoundingClientRect().height

        let clipValue = (21 * ui.y / heightRef)
        clipValue > 20 && (clipValue = 20)

        console.log(clipValue)

        document.documentElement.style.setProperty('--avatar-clip-value', clipValue + '%')
    }

    const handleReloadStatus = () => {

        if (!myStatusIdx.preventSpam) {
            const statusHeight = document.querySelector('.status').getBoundingClientRect().height
            document.querySelector('.status').style.height = 0

            setReloadButtonRotation(reloadButtonRotation + 360)

            document.querySelector('.reload-status').style.transform = 'rotate(' + reloadButtonRotation + 'deg)'

            setMyStatusIdx({ index: myStatusIdx.index, preventSpam: true })

            setTimeout(() => {
                let myNewStatusIdx = myStatusIdx.index
                myNewStatusIdx++
                myNewStatusIdx >= myStatus.length && (myNewStatusIdx = 0)
                setMyStatusIdx({ index: myNewStatusIdx, preventSpam: true })
                document.querySelector('.status').style.height = statusHeight + 'px'
                console.log(myStatusIdx)

                setTimeout(() => {
                    setMyStatusIdx({ index: myNewStatusIdx, preventSpam: false })
                }, 250)
            }, 250)
        }
    }

    const handleClickColor1 = () => {
        document.querySelector('.color-active').classList.toggle('color-active')
        document.querySelector('.color1').classList.add('color-active')

        document.documentElement.style.setProperty('--color-1', '#374785')
        document.documentElement.style.setProperty('--color-2', '#e63946')
        document.documentElement.style.setProperty('--color-3', '#d7e3fc')
        document.documentElement.style.setProperty('--color-4', '#b6ccfe')
        document.documentElement.style.setProperty('--color-5', '#abc4ff')
        document.documentElement.style.setProperty('--font-color-1', 'black')
    }

    const handleClickColor2 = () => {
        document.querySelector('.color-active').classList.toggle('color-active')
        document.querySelector('.color2').classList.add('color-active')

        document.documentElement.style.setProperty('--color-1', '#A64AC9')
        document.documentElement.style.setProperty('--color-2', '#FCCD04')
        document.documentElement.style.setProperty('--color-3', '#FFB48F')
        document.documentElement.style.setProperty('--color-4', '#F5E6CC')
        document.documentElement.style.setProperty('--color-5', '#17E9E0')
        document.documentElement.style.setProperty('--font-color-1', 'black')
    }

    const handleClickColor3 = () => {
        document.querySelector('.color-active').classList.toggle('color-active')
        document.querySelector('.color3').classList.add('color-active')

        document.documentElement.style.setProperty('--color-1', '#f8e9a1')
        document.documentElement.style.setProperty('--color-2', '#f76c6c')
        document.documentElement.style.setProperty('--color-3', '#a8d0e6')
        document.documentElement.style.setProperty('--color-4', '#374785')
        document.documentElement.style.setProperty('--color-5', '#24305e')
        document.documentElement.style.setProperty('--font-color-1', 'black')
    }

    const handleClickColor4 = () => {
        document.querySelector('.color-active').classList.toggle('color-active')
        document.querySelector('.color4').classList.add('color-active')

        document.documentElement.style.setProperty('--color-1', '#F78888')
        document.documentElement.style.setProperty('--color-2', '#F3D250')
        document.documentElement.style.setProperty('--color-3', '#ECECEC')
        document.documentElement.style.setProperty('--color-4', '#90CCF4')
        document.documentElement.style.setProperty('--color-5', '#5DA2D5')
        document.documentElement.style.setProperty('--font-color-1', 'black')
    }

    const handleClickColor5 = () => {
        document.querySelector('.color-active').classList.toggle('color-active')
        document.querySelector('.color5').classList.add('color-active')

        document.documentElement.style.setProperty('--color-1', '#026670')
        document.documentElement.style.setProperty('--color-2', '#9FEDD7')
        document.documentElement.style.setProperty('--color-3', '#FEF9C7')
        document.documentElement.style.setProperty('--color-4', '#FCE181')
        document.documentElement.style.setProperty('--color-5', '#EDEAE5')
        document.documentElement.style.setProperty('--font-color-1', 'black')
    }

    const handleClickColor6 = () => {
        document.querySelector('.color-active').classList.toggle('color-active')
        document.querySelector('.color6').classList.add('color-active')

        document.documentElement.style.setProperty('--color-1', '#FBE8A6')
        document.documentElement.style.setProperty('--color-2', '#F4976C')
        document.documentElement.style.setProperty('--color-3', '#303C6C')
        document.documentElement.style.setProperty('--color-4', '#B4DFE5')
        document.documentElement.style.setProperty('--color-5', '#D2FDFF')
        document.documentElement.style.setProperty('--font-color-1', 'whitesmoke')
    }

    return (
        <>
            <svg className="section__accueil-bg-svg section-bg-svg"
                viewBox="0 0 100 100">
                <path id="section__accueil-bg-svg-elt"
                    d="m 12,100 c 0,0 -38,-118 34,-87 20.5,9 54,30 54,30 v 57 z"
                />
            </svg>

            <section className="section__accueil">

                <h1 className="full-name">
                    <span className="first-name">Maxime</span>
                    <span className="last-name">Malfilâtre</span>
                </h1>

                <div className="avatar-max">

                    <img
                        className="avatar-body"
                        src={body}
                        alt='avatar-body' />
                    <img
                        className="avatar-head avatar-head1"
                        src={headCartoon}
                        alt="avatar-head" />
                    <img
                        className="avatar-head avatar-head2"
                        src={headReal}
                        alt="avatar-head" />


                    <div className="pull-me-face-container">
                        <Draggable
                            axis="y"
                            bounds="parent"
                            onDrag={handlePullMeDrag}
                        >
                            <div className="pull-me-face pull-me">
                                <FontAwesomeIcon icon={faArrowDown} />
                            </div>
                        </Draggable>
                    </div>
                </div>

                <div className="chest-container">
                    <div className="chest-top">
                        <div className="chest-top-front open">
                        </div>
                    </div>
                    <div className="chest-bottom">
                    </div>
                </div>

                <div className="status">
                    {myStatus[myStatusIdx.index]}
                </div>

                <button
                    className="reload-status"
                    onClick={handleReloadStatus}
                    aria-label="reload status">
                    <FontAwesomeIcon icon={faRedo} />
                </button>

                <div className="social-network__accueil">
                    <a href="https://github.com/maxew33"
                        target="_blank"
                        rel="noopener"
                        aria-label="link to my Github page">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/maxime-malfilatre-1a3b97204/"
                        target="_blank"
                        rel="noopener"
                        aria-label="link to my Github page">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/m4xew"
                        target="_blank"
                        rel="noopener"
                        aria-label="link to my twitter page">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://codepen.io/maxew33"
                        target="_blank"
                        rel="noopener"
                        aria-label="link to my codepen page">
                        <FontAwesomeIcon icon={faCodepen} />
                    </a>
                </div>

                {chestObjects.map((item, index) => {
                    return (
                        <Draggable
                            bounds="parent"
                            key={chestObjects[index].id}
                            onStart={handleStart}
                            onStop={handleStop}>
                            <div className={'accessory-container accessory-container' + (index + 1)}
                                data-id={index}
                                style={{
                                    width: chestObjects[index].width,
                                    zIndex: chestObjects[index].zIndex
                                }}>
                                <img
                                    className="avatar-accessory"
                                    src={chestObjects[index].src}
                                    alt={chestObjects[index].alt} />

                            </div>
                        </Draggable>
                    )
                })}

                {/* <div className="color-picker-container">
                    <button onClick={handleClickColor1}
                        className="color color1 color-active">set de couleur n°1</button>
                    <button onClick={handleClickColor2}
                        className="color color2">set de couleur n°2</button>
                    <button onClick={handleClickColor3}
                        className="color color3">set de couleur n°3</button>
                    <button onClick={handleClickColor4}
                        className="color color4">set de couleur n°4</button>
                    <button onClick={handleClickColor5}
                        className="color color5">set de couleur n°5</button>
                    <button onClick={handleClickColor6}
                        className="color color6">set de couleur n°6</button>
                </div> */}

                {/* 
<Draggable
handle=".layer2"
bounds=".section__accueil"
>
<svg
   viewBox="0 0 20 57.304001">
  <g/>
  <path
     style={{fill:"#85b735"}}
     d="M 3.9637411,50.965573 10.365651,57.304 16.767447,50.965573 11.483626,10.527183 H 9.3154282 Z"
     className="layer2"/>
  <path
     style={{fill:"#85b735"}}
     d="M 9.3154282,10.527183 5.5924269,3.7184457 10.584958,1.3061845 15.206627,3.7184457 11.483626,10.527183 Z"/>
  <path
     style={{fill:"#f4f3ef"}}
     d="M 6.0038818e-7,1.2854539 6.0077595,7.5218636 10.535402,1.3061845 4.5356785,3.2465798e-6 Z"/>
  <path
     style={{fill:"#f4f3ef"}}
     d="M 15.112893,7.5218636 10.584958,1.3061845 15.53228,1.1543124 20.00009,4.0014493 Z"/>
     <path
     className="layer2"
     style={{fill:"transparent"}}
     d="M 3.9637411,50.965573 10.365651,57.304 16.767447,50.965573 11.483626,10.527183 13.985119,5.9701093 15.112893,7.5218636 20.00009,4.0014493 15.53228,1.1543124 10.535402,1.3061845 4.5356785,3.2465798e-6 6.0038818e-7,1.2854539 6.0077595,7.5218636 6.9155989,6.1552949 9.3154282,10.527183 Z"/>
</svg>
</Draggable> */}
            </section>
        </>
    )
}
