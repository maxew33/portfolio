import React, {useState} from 'react'

import { v4 as uuidv4 } from 'uuid'
import Draggable from 'react-draggable'

import TvShow from '../tv-show/TvShow'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import portfolioBen from '../../assets/portfolio-ben.png'
import carousel from '../../assets/carousel.png'
import newsletter from '../../assets/newsletter.png'
import cocktail from '../../assets/cocktail.png'
import datePicker from '../../assets/date-picker.png'
import productPage from '../../assets/product-page.png'
import maxamp from '../../assets/maxamp.png'

import './work.css'
export default function Work() {

    const [faceDisplayed, setFaceDisplayed] = useState('work')

    const portfolioContentPartI = [
        {
            title: 'Portfolio Ben Priam',
            img: portfolioBen,
            gitLink: '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
        {
            title: 'Carousel',
            img: carousel,
            gitLink: '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
        {
            title: 'newsletter',
            img: newsletter,
            gitLink: '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
        {
            title: 'cocktail',
            img: cocktail,
            gitLink: '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        }
    ]

    const portfolioContentPartII = [
        {
            title: 'Maxamp',
            img: maxamp,
            gitLink: '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
        {
            title: 'Date Picker',
            img: datePicker,
            gitLink: '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
        {
            title: 'product page',
            img: productPage,
            gitLink: '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
    ]

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

        // document.querySelector('.portfolio-container__part1').style.backgroundColor = tab === 'part1' ? 'hsl(0deg, 0%, 75%)' : 'hsl(0deg, 0%, 50%)'

        // document.querySelector('.portfolio-container__part2').style.backgroundColor = tab === 'part2' ? 'hsl(0deg, 0%, 75%)' : 'hsl(0deg, 0%, 50%)'

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

                <h2>
                    Mes réalisations
                </h2>

                <div className="portfolio-container">

                    <div className="portfolio-container__part portfolio-container__part1 portfolio-container__part--set-index">
                        <button
                            className="portfolio-container__tab portfolio-container__tab-part1 portfolio-container__part--set-opacity"
                            onClick={() => { changePortfolioPart('part1') }}>
                            <div>
                                click me
                            </div>
                        </button>

                        <ul className="portfolio__cards">

                            {portfolioContentPartI.map((item, index) => {
                                return (
                                    <li
                                        className="portfolio__cards-item"
                                        key={portfolioContentPartI[index].id}>
                                        <div className="portfolio__card">

                                            <div className="portfolio__card-text">
                                                <div className="portfolio__card-text-container">
                                                    <p>
                                                        {portfolioContentPartI[index].txt}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="portfolio__card-work-wrapper" >

                                                <h3 className="portfolio__card-work-title">
                                                    {portfolioContentPartI[index].title}
                                                </h3>
                                                <div className="portfolio__card-work-img" id={"portfolio-container__part1-wrapper" + index}>
                                                    <img
                                                        src={portfolioContentPartI[index].img}
                                                        alt={portfolioContentPartI[index].title} />
                                                </div>
                                            </div>
                                        </div>

                                        {/* draggable btn, pull => hide img wtih clip path / let text appear*/}
                                        <div className="portfolio__card-btn-container">


                                            <div
                                                className="portfolio__card-pull-me-front"
                                                data-pullme={"portfolio-container__part1-wrapper" + index}
                                            >
                                            </div>
                                            <Draggable
                                                axis="y"
                                                bounds="parent"
                                                onDrag={handleDrag}>
                                                <button
                                                    className="portfolio__card-pull-me pull-me"
                                                    data-id={"portfolio-container__part1-wrapper" + index}
                                                >
                                                    pull
                                                    <FontAwesomeIcon icon={faChevronDown} />
                                                </button>
                                            </Draggable>
                                        </div>

                                    </li>
                                )
                            })}

                        </ul>

                    </div>

                    <div className="portfolio-container__part portfolio-container__part2">

                        <button
                            className="portfolio-container__tab portfolio-container__tab-part2 "
                            onClick={() => { changePortfolioPart('part2') }}>

                            <div>
                                click me
                            </div>
                        </button>

                        <ul className="portfolio__cards">

                            {portfolioContentPartII.map((item, index) => {
                                return (
                                    <li
                                        className="portfolio__cards-item"
                                        key={portfolioContentPartII[index].id}>
                                        <div className="portfolio__card">

                                            <div className="portfolio__card-text">
                                                <div className="portfolio__card-text-container">
                                                    <p>
                                                        {portfolioContentPartII[index].txt}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="portfolio__card-work-wrapper">
                                                <h3 className="portfolio__card-work-title">
                                                    {portfolioContentPartII[index].title}
                                                </h3>
                                                <div
                                                    className="portfolio__card-work-img"
                                                    id={"portfolio-container__part2-wrapper" + index}>
                                                    <img
                                                        src={portfolioContentPartII[index].img}
                                                        alt={portfolioContentPartII[index].title} />
                                                </div>
                                            </div>
                                        </div>
                                        {/* draggable btn, pull => hide img wtih clip path / let text appear*/}
                                        <div className="portfolio__card-btn-container">

                                            <div
                                                className="portfolio__card-pull-me-front"
                                                data-pullme={"portfolio-container__part2-wrapper" + index}
                                            >
                                            </div>

                                            <Draggable
                                                axis="y"
                                                bounds="parent"
                                                onDrag={handleDrag}>
                                                <button
                                                    className="portfolio__card-pull-me pull-me"
                                                    data-id={"portfolio-container__part2-wrapper" + index}
                                                >
                                                    pull
                                                    <FontAwesomeIcon icon={faChevronDown} />
                                                </button>
                                            </Draggable>

                                        </div>
                                    </li>
                                )
                            })}
                            <li className="work-to-tv">
                                <button
                                    className="toggle-section-work"
                                    onClick={toggleSectionWork}>
                                    vu à la tv
                                </button>
                            </li>
                        </ul>

                    </div>

                </div>

                <svg className="section__work-bg-svg-1 section-bg-svg"
                    viewBox="0 0 100 100">
                    <path id="section__work-bg-svg-1-elt"
                        d="m 77,14 c 24,16 2.8,86 2.8,86 H 0 V 43 C 0,43 54,-1 77,14 Z"
                    />
                </svg>

                <svg className="section__work-bg-svg-2 section-bg-svg"
                    viewBox="0 0 100 100">
                    <path id="section__work-bg-svg-2-elt"
                        d="M 100,100 H 52 c 0,0 -8.38193,-37.800392 -2,-55 4.266893,-11.499481 14.356887,-20.903396 25,-27 7.40394,-4.241136 25,-5.5 25,-5.5 z"
                    />
                </svg>

            </section>

            <section className="section__tv-show section__tv-show--hidden">

                <div className="tv-show-container">

<button
    className="toggle-section-work"
    onClick={toggleSectionWork}>
    toggle
</button>
<TvShow face={faceDisplayed}/>

                </div>

                

            <svg className="section__work-bg-svg-1 section-bg-svg"
                viewBox="0 0 100 100">
                <path id="section__work-bg-svg-1-elt"
                    d="M 0,0 V 0 C 2,5 70,5 80,0 Z m 77,14 c 24,16 2.8,86 2.8,86 H 0 V 43 C 0,43 54,-1 77,14 Z"
                />
            </svg>

            <svg className="section__work-bg-svg-2 section-bg-svg"
                viewBox="0 0 100 100">
                <path id="section__work-bg-svg-2-elt"
                    d="m 51.867461,-0.132292 c 0,0 16.796301,2.180679 25.239682,2.1419652 7.620296,-0.03494 22.760563,-2.1419652 22.760563,-2.1419652 z M 100,100 H 52 c 0,0 -8.38193,-37.800392 -2,-55 4.266893,-11.499481 14.356887,-20.903396 25,-27 7.40394,-4.241136 25,-5.5 25,-5.5 z"
                />
            </svg>

            </section>
        </>
    )
}
