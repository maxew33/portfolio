import React, { Fragment, useState } from 'react'

import Draggable from 'react-draggable'

import TvShow from '../tv-show/TvShow'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLevelUpAlt, faChevronDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import portfolioData from './portfolioData'

import './work.css'

export default function Work() {

    const [faceDisplayed, setFaceDisplayed] = useState('work')

    const handleDrag = (e, ui) => {

        /* when i drag the image will disappear with a clip path*/

        /* percentage of the y deplacement */

        let clipPathY = 100 - (100 * ui.y / (document.querySelector('.portfolio__card-btn-container').getBoundingClientRect().height - ui.node.clientHeight))

        clipPathY < 0 && (clipPathY = 0)

        document.querySelector('#' + ui.node.dataset.id).style.clipPath = 'polygon(0% 0%, 100% 0%, 100% ' + clipPathY + '%, 0% ' + clipPathY + '%)'

        /* the element above the grab element will grow when i pull down */

        const grabbyElt = document.querySelector('[data-pullme=' + ui.node.dataset.id)

        grabbyElt.style.height = 'calc(4vmin + ' + ui.y + 'px'
    }

    let portfolioTopAngle = 0,
        portfolioBottomAngle = 0


    // toggle between work n tv

    const toggleSectionWork = () => {

        console.log(faceDisplayed)

        let newFaceDisplayed
        faceDisplayed === 'work' ? newFaceDisplayed = 'tv' : newFaceDisplayed = 'work'
        setFaceDisplayed(newFaceDisplayed)

        console.log(faceDisplayed)

        document.querySelector('.section__work').classList.toggle('section__work--hidden')
        document.querySelector('.section__tv-show').classList.toggle('section__tv-show--hidden')

        Array.from(document.querySelectorAll('.arrow')).forEach(arrow => arrow.classList.toggle('arrow--hidden'))
    }

    // change the portfolio container

    const changePortfolioPart = (tab) => {

        if (tab === 'part1') {
            portfolioTopAngle += 360
            document.documentElement.style.setProperty('--rotate-portfolio-container-top', portfolioTopAngle + 'deg')
        }
        else {
            portfolioBottomAngle -= 360
            document.documentElement.style.setProperty('--rotate-portfolio-container-bottom', portfolioBottomAngle + 'deg')
        }

        setTimeout(() => {

            document.querySelector('.portfolio-container__part1').classList.toggle('portfolio-container__part--set-index')

            document.querySelector('.portfolio-container__part2').classList.toggle('portfolio-container__part--set-index')

            document.querySelector('.portfolio-container__tab-part1').classList.toggle('portfolio-container__part--set-opacity')

            document.querySelector('.portfolio-container__tab-part2').classList.toggle('portfolio-container__part--set-opacity')

        }, 200)
    }

    return (
        <>
            <section className="section__work">

                <h2 className="section__title">
                    Mes réalisations
                </h2>

                <div className="portfolio-container">

                    {/* creation of the 2 containers sgowing my work */}
                    {portfolioData.map((data, index) => {
                        return (
                            <div className={'portfolio-container__part portfolio-container__part' + (index + 1) + (index === 0 ? ' portfolio-container__part--set-index' : '')}
                                key={index}>

                                <button
                                    className={'portfolio-container__tab portfolio-container__tab-part' + (index + 1) + (index === 0 ? ' portfolio-container__part--set-opacity' : '')}
                                    onClick={() => { changePortfolioPart('part' + (index + 1)) }}>
                                    <div>
                                        click me
                                    </div>
                                </button>

                                {/* Creation of the 7 cards of my work, the 8th is a link to the tv section called TvShow */}
                                <ul className="portfolio__cards">
                                    {data.map((item, idx) => {
                                        return (
                                            <Fragment key={item.id}>
                                                {item.title !== "TvShow" ?
                                                    (
                                                        <li
                                                            className="portfolio__cards-item"
                                                        >
                                                            <div className="portfolio__card">

                                                                <div className="portfolio__card-work-wrapper" >

                                                                    <h3 className="portfolio__card-work-title">
                                                                        {item.title}
                                                                    </h3>

                                                                    <div className="portfolio__card-text">
                                                                        <div className="portfolio__card-text-container">
                                                                            <p>
                                                                                {item.prez}
                                                                                <span className="text-separation"></span>
                                                                                {item.txt}
                                                                            </p>
                                                                        </div>
                                                                        <div className="portfolio__card--links">

                                                                            {item.directLink && (
                                                                                <a href={item.directLink} 
                                                                                target="_blank" 
                                                                                rel="noopener"
                                                                                aria-label={'link to ' + item.title + ' site'}>
                                                                                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                                                                                </a>
                                                                            )}
                                                                            {item.gitLink && (
                                                                                <a href={item.gitLink} 
                                                                                target="_blank" 
                                                                                rel="noopener"
                                                                                aria-label={'link to ' + item.title + ' on github'}>
                                                                                    <FontAwesomeIcon icon={faGithub} />
                                                                                </a>
                                                                            )}
                                                                            {item.codePenLink && (
                                                                                <a href={item.codePenLink} 
                                                                                target="_blank" 
                                                                                rel="noopener"
                                                                                aria-label={'link to ' + item.title + ' on codepen'}>
                                                                                    <FontAwesomeIcon icon={faCodepen} />
                                                                                </a>
                                                                            )}
                                                                        </div>
                                                                    </div>

                                                                    <div className="portfolio__card-work-img" id={'portfolio-container__part' + (index + 1) + '-wrapper' + idx}>
                                                                        <img
                                                                            src={item.img}
                                                                            alt={item.title} />
                                                                    </div>

                                                                </div>
                                                            </div>

                                                            <div className="portfolio__card-btn-container">

                                                                <div
                                                                    className="portfolio__card-pull-me-front"
                                                                    data-pullme={'portfolio-container__part' + (index + 1) + '-wrapper' + idx}
                                                                >
                                                                </div>
                                                                <Draggable
                                                                    axis="y"
                                                                    bounds="parent"
                                                                    onDrag={handleDrag}>
                                                                    <button
                                                                        className="portfolio__card-pull-me pull-me"
                                                                        data-id={'portfolio-container__part' + (index + 1) + '-wrapper' + idx}
                                                                    >
                                                                        pull
                                                                        <FontAwesomeIcon icon={faChevronDown} />
                                                                    </button>
                                                                </Draggable>
                                                            </div>
                                                        </li>
                                                    ) : (
                                                        <li className="work-to-tv"
                                                            key={item.id}>
                                                            <div className="work-to-tv__btn-container">
                                                                <button
                                                                    className="toggle-section-work"
                                                                    onClick={toggleSectionWork}>
                                                                    Davantage en vidéo
                                                                </button>

                                                                <div className="work-to-tv__rightSide">
                                                                    <div className="work-to-tv__rightSide--tvButton">
                                                                        <div className="work-to-tv__rightSide--tvButton-line">
                                                                        </div>
                                                                    </div>
                                                                    <div
                                                                        className="work-to-tv__rightSide--tvButton">
                                                                        <div className="work-to-tv__rightSide--tvButton-line">
                                                                        </div>
                                                                    </div>
                                                                    <div className="work-to-tv__rightSide--sound">
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )}
                                            </Fragment>
                                        )
                                    }
                                    )}
                                </ul>

                            </div>
                        )
                    })
                    }

                </div>

                <svg className="section__work-bg-svg-1 section-bg-svg"
                    viewBox="0 0 100 100">
                    <path
                        d="m 77,14 c 24,16 2.8,86 2.8,86 H 0 V 43 C 0,43 54,-1 77,14 Z"
                    />
                </svg>

                <svg className="section__work-bg-svg-2 section-bg-svg"
                    viewBox="0 0 100 100">
                    <path
                        d="M 100,100 H 52 c 0,0 -8.38193,-37.800392 -2,-55 4.266893,-11.499481 14.356887,-20.903396 25,-27 7.40394,-4.241136 25,-5.5 25,-5.5 z"
                    />
                </svg>

            </section>

            <section className="section__tv-show section__tv-show--hidden">

                <div className="tv-show-container">

                    <button
                        className="toggle-section-work toggle-section-work--right"
                        onClick={toggleSectionWork}>
                        Retour <FontAwesomeIcon icon={faLevelUpAlt} />
                    </button>
                    <button
                        className="toggle-section-work toggle-section-work--left"
                        onClick={toggleSectionWork}>
                        <span className="toggle-section-work-icon"
                            style={{ display: 'inline-block', transform: 'rotateY(180deg' }}><FontAwesomeIcon icon={faLevelUpAlt} /></span> Retour
                    </button>
                    <TvShow face={faceDisplayed} />

                </div>

                <svg className="section__work-bg-svg-1 section-bg-svg section__work-bg-svg-top"
                    viewBox="0 0 100 100">
                    <path
                        d="M 0,0 V 26 C 0,26 63,47 80,0 Z"
                    />
                </svg>

                <svg className="section__work-bg-svg-2 section-bg-svg section__work-bg-svg-top"
                    viewBox="0 0 100 100">
                    <path
                        d="m 100,0 c 0,0 -48,0 -48,0 6,22 11,27 24,30 10,2 24,-7 24,-13 z"
                    />
                </svg>

                <svg className="section__work-bg-svg-2 section-bg-svg"
                    viewBox="0 0 100 100">
                    <path
                d="M 0,100 H 100 C 100,100 70,60 50,60 30,60 8.5,80 0,100 Z"/>
                </svg>

            </section>
        </>
    )
}
