import React, { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'
import Draggable from 'react-draggable'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faChevronDown, faHandPointLeft } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import body from '../../assets/body.png'
import headCartoon from '../../assets/head-cartoon.png'
import headReal from '../../assets/head-real.png'
import mustache from '../../assets/mustache.png'
import glasses from '../../assets/glasses.png'
import beard from '../../assets/beard.png'
import bowTie from '../../assets/bow-tie.png'
import fancy from '../../assets/fancy.png'
import hat1 from '../../assets/hat1.png'
import hat2 from '../../assets/hat2.png'
import tie from '../../assets/tie.png'
import helmet from '../../assets/helmet.png'
import mustache2 from '../../assets/mustache2.png'

import './accueil.css'

export default function Accueil() {

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
            alt: "goat beard",
            width: 'calc(25 * var(--avatar-length-unit))',
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
        },
    ]
    )

    const [myStatusIdx, setMyStatusIdx] = useState({
        index: 0,
        preventSpam: false
    })

    const [reloadButtonRotation, setReloadButtonRotation] = useState(360)


    useEffect(() => {
        console.log('montage')

        const chest = document.querySelector('.chest-container'),
            chestTop = document.querySelector('.chest-top-front'),
            chestBottom = document.querySelector('.chest-bottom'),
            accessoryContainer = [...document.querySelectorAll('.accessory-container')],
            accessory = [...document.querySelectorAll('.avatar-accessory')]

        let chestOpen = false
        let accessoryThrown = 0

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
        'vous dit bonjour! 👋 ',
        'est un mari 💑 ...',
        'et un papa 👦👦...',
        'a codé ce site avec 💜 et React...',
        'est aussi un grand gaillard de 2m ☝ ...',
        'aime jouer à Hearthstone 🎮 ...',
        'sait se former tout seul 📚 ...',
        'aime le rugby 🏉 ...',
        'n\'a pas de chance aux dés 🎲 ...',
        'fait des blagues à papa 😅 ...',
        'a hâte de vous rencontrer 🤝... ',
        'n\'a plus rien à dire 🤫 ...'
    ]

    const handleStart = e => {

        /* when I take an accessory, set its z index to 20 */

        const myId = parseInt(e.target.dataset.id)

        const newArr = [...chestObjects]

        for (let i = 0; i < newArr.length; i++) {
            i !== myId ? (newArr[i].zIndex > e.target.style.zIndex && newArr[i].zIndex--) : newArr[i].zIndex = 20

        }

        setChestObjects(newArr)
    }

    const handlePullMeDrag = (e, ui) => {
        const heightRef = document.querySelector('.pull-me-face-container').getBoundingClientRect().height - document.querySelector('.pull-me-face').getBoundingClientRect().height

        const clipValue = (20 * ui.y / heightRef) + '%'

        document.documentElement.style.setProperty('--avatar-clip-value', clipValue)
    }

    const handleReloadStatus = () => {

        if (!myStatusIdx.preventSpam) {
            document.querySelector('.status').style.height = 0

            setReloadButtonRotation(reloadButtonRotation + 360)

            document.querySelector('.reload-status').style.transform = 'rotate(' + reloadButtonRotation + 'deg)'

            setMyStatusIdx({ index: myStatusIdx.index, preventSpam: true })

            setTimeout(() => {
                console.log('click')
                let myNewStatusIdx = myStatusIdx.index
                myNewStatusIdx++
                myNewStatusIdx >= myStatus.length && (myNewStatusIdx = 0)
                setMyStatusIdx({ index: myNewStatusIdx, preventSpam: true })
                document.querySelector('.status').style.height = '4.5vw'
                console.log(myStatusIdx)

                setTimeout(() => {
                    setMyStatusIdx({ index: myNewStatusIdx, preventSpam: false })
                }, 250)
            }, 250)
        }
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
                                pull
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </Draggable>
                    </div>
                </div>

                <div className="chest-container">
                    <div className="chest-top">
                        <div className="chest-top-front">
                        </div>
                    </div>
                    <div className="chest-bottom">
                        click me <FontAwesomeIcon icon={faHandPointLeft} />
                    </div>
                </div>

                <div className="status">
                    {myStatus[myStatusIdx.index]}
                </div>

                <button
                    className="reload-status"
                    onClick={handleReloadStatus}>
                    <FontAwesomeIcon icon={faRedo} />
                </button>

                {/* <p className="presentation">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quam repellendus amet. Porro ad veniam laboriosam. Non placeat atque, tempore, consequuntur laudantium accusantium ad totam architecto blanditiis doloremque officiis? Explicabo eum nihil quas tempora aliquam, quos odit optio eligendi, porro minus, perferendis saepe vero id aliquid ab cumque deserunt necessitatibus.
                </p> */}

                <div className="social-network__accueil">
                    <a href="https://github.com/maxew33" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/maxime-malfilatre-1a3b97204/" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/m4xew" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://codepen.io/maxew33" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={faCodepen} />
                    </a>
                </div>

                {chestObjects.map((item, index) => {
                    return (
                        <Draggable
                            bounds="parent"
                            key={chestObjects[index].id}
                            onStart={handleStart}>
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

            </section>
        </>
    )
}
