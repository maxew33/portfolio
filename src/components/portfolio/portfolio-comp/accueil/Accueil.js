import React, {useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'
import Draggable from 'react-draggable'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import body from '../../assets/body.png'
import headCartoon from '../../assets/head-cartoon.png'
import headReal from '../../assets/head-real.png'
import avatartoon from '../../assets/avatartoon.png'
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

    useEffect(() => {
        console.log('montage')

        const chest = document.querySelector('.chest-container'),
            chestTop = document.querySelector('.chest-top-front'),
            accessoryContainer = [...document.querySelectorAll('.accessory-container')],
            accessory = [...document.querySelectorAll('.avatar-accessory')]

        let chestOpen = false
        let accessoryThrown = 0

        accessoryContainer.forEach(container => container.classList.add('accessory-hidden'))

        chest.addEventListener('click', () => {

            if (!chestOpen && accessoryThrown < accessory.length) {
                accessoryThrown < (accessory.length - 1) ? chestTop.classList.toggle('open') : (chestTop.classList.add('wide-open'))
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

        const clipValue = (20*ui.y / heightRef) + '%'

        document.documentElement.style.setProperty('--avatar-clip-value', clipValue)
    }

    const handleReloadStatus = () => {
        console.log('click')
    }


    return (
        <>
            <svg className="section__accueil-bg-svg"
                viewBox="0 0 659 810">
                <path id="section__accueil-bg-svg-elt"
                    d="M 316.24 0 L 0 810 H 659 V 286.161 L 316.24 0 Z"
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
                            <div className="pull-me-face">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </div>
                        </Draggable>
                    </div>
                </div>

                <p className="status">développeur front-end</p>

                <button 
                className="reload-status"
                onClick = {handleReloadStatus}>
                    <FontAwesomeIcon icon={faRedo} />
                </button>

                <p className="presentation">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quam repellendus amet. Porro ad veniam laboriosam. Non placeat atque, tempore, consequuntur laudantium accusantium ad totam architecto blanditiis doloremque officiis? Explicabo eum nihil quas tempora aliquam, quos odit optio eligendi, porro minus, perferendis saepe vero id aliquid ab cumque deserunt necessitatibus.
                </p>

                <div className="chest-container">
                    <div className="chest-top">
                        <div className="chest-top-front">
                        </div>
                    </div>
                    <div className="chest-bottom">
                    </div>
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
