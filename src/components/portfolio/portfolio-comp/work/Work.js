import React from 'react'

import { v4 as uuidv4 } from 'uuid'
import Draggable from 'react-draggable'

import portfolioBen from '../../assets/portfolio-ben.png'
import carousel from '../../assets/carousel.png'
import newsletter from '../../assets/newsletter.png'
import cocktail from '../../assets/cocktail.png'
import datePicker from '../../assets/date-picker.png'
import productPage from '../../assets/product-page.png'
import maxamp from '../../assets/maxamp.png'

import './work.css'
export default function Work() {

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

    const portfolioContentPartII=[
        {
            title: 'Maxamp',
            img: maxamp,
            gitLink : '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
        {
            title: 'Date Picker',
            img: datePicker,
            gitLink : '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
        {
            title: 'product page',
            img: productPage,
            gitLink : '',
            txt: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?',
            id: uuidv4()
        },
    ]



// toggle between work n tv
    let portfolioTopAngle = 0,
        portfolioBottomAngle = 0

    const toggleSectionWork = () => {
        console.log('toggle')
        document.querySelector('.section__work').classList.toggle('section__work--hidden')
        document.querySelector('.section__tv-show').classList.toggle('section__tv-show--hidden')
    }

    const changePortfolioPart = (tab) => {

        if (tab === 'part1') {
            portfolioTopAngle += 360
            document.documentElement.style.setProperty('--rotate-portfolio-container-top', portfolioTopAngle + 'deg')
        }
        else {
            portfolioBottomAngle -= 360
            document.documentElement.style.setProperty('--rotate-portfolio-container-bottom', portfolioBottomAngle + 'deg')
        }

        document.querySelector('.portfolio-container__part1').style.backgroundColor = tab === 'part1' ? 'hsl(0deg, 0%, 75%)' : 'hsl(0deg, 0%, 50%)'

        document.querySelector('.portfolio-container__part2').style.backgroundColor = tab === 'part2' ? 'hsl(0deg, 0%, 75%)' : 'hsl(0deg, 0%, 50%)'

        setTimeout(() => {

            document.querySelector('.portfolio-container__part1').classList.toggle('portfolio-container__part--set-index')

            document.querySelector('.portfolio-container__part2').classList.toggle('portfolio-container__part--set-index')

            document.querySelector('.portfolio-container__part1-btn-txt').classList.toggle('portfolio-container__part--set-opacity')

            document.querySelector('.portfolio-container__part2-btn-txt').classList.toggle('portfolio-container__part--set-opacity')

        }, 200)
    }

    return (
        <>
            <section className="section__work">

                <h2>
                    My work
                </h2>

                <button
                    className="toggle-section-work"
                    onClick={toggleSectionWork}>
                    toggle
                </button>

                <div className="portfolio-container">

                    <div className="portfolio-container__part portfolio-container__part1 portfolio-container__part--set-index">
                        <button
                            className="portfolio-container__tab"
                            onClick={() => { changePortfolioPart('part1') }}>
                            <div className="portfolio-container__part1-btn-txt portfolio-container__part--set-opacity">
                                click me
                            </div>
                        </button>

                        <ul className="portfolio__cards">

                        {portfolioContentPartI.map((item, index) => {
                            return(
                                <li 
                                className="portfolio__cards-item"
                                key={portfolioContentPartI[index].id}>
                                <div className="portfolio__card">
                                    <div className="portfolio__card-work-wrapper">
                                        <div className="portfolio__card-work-img">
                                            <img
                                                src={portfolioContentPartI[index].img}
                                                alt={portfolioContentPartI[index].title} />
                                        </div>
                                        <h3 className="portfolio__card-work-title">
                                            {portfolioContentPartI[index].title}
                                        </h3>
                                    </div>
                                    <div className="portfolio__card-text">
                                        <div className="portfolio__card-text-container">
                                            <p>
                                                {portfolioContentPartI[index].txt}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="portfolio__card-pull-me"></button>
                                </div>
                            </li> 
                            )
                        })}

{/* 
                            <li className="portfolio__cards-item">
                                <div className="portfolio__card">
                                    <div className="portfolio__card-work-wrapper">
                                        <div className="portfolio__card-work-img">
                                            <img
                                                src={portfolioBen}
                                                alt="portfolio photographe" />
                                        </div>
                                        <h3 className="portfolio__card-work-title">
                                            Ben portfolio
                                        </h3>
                                    </div>
                                    <div className="portfolio__card-text">
                                        <div className="portfolio__card-text-container">
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?
                                            </p>
                                        </div>
                                    </div>
                                    <button className="portfolio__card-pull-me"></button>
                                </div>
                            </li>
                            <li className="portfolio__cards-item">
                                <div className="portfolio__card">
                                    <div className="portfolio__card-work-wrapper">
                                        <div className="portfolio__card-work-img">
                                            <img
                                                src={newsletter}
                                                alt="newsletter" />
                                        </div>
                                        <h3 className="portfolio__card-work-title">
                                            Newsletter
                                        </h3>
                                    </div>
                                    <div className="portfolio__card-text">
                                        <div className="portfolio__card-text-container">
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?
                                            </p>
                                        </div>
                                    </div>
                                    <button className="portfolio__card-pull-me"></button>
                                </div>
                            </li>
                            <li className="portfolio__cards-item">
                                <div className="portfolio__card">
                                    <div className="portfolio__card-work-wrapper">
                                        <div className="portfolio__card-work-img">
                                            <img
                                                src={cocktail}
                                                alt="cocktail recipes" />
                                        </div>
                                        <h3 className="portfolio__card-work-title">
                                            Cocktail
                                        </h3>
                                    </div>
                                    <div className="portfolio__card-text">
                                        <div className="portfolio__card-text-container">
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?
                                            </p>
                                        </div>
                                    </div>
                                    <button className="portfolio__card-pull-me"></button>
                                </div>
                            </li>
                            <li className="portfolio__cards-item">
                                <div className="portfolio__card">
                                    <div className="portfolio__card-work-wrapper">
                                        <div className="portfolio__card-work-img">
                                            <img
                                                src={carousel}
                                                alt="Rick and Morty carousel" />
                                        </div>
                                        <h3 className="portfolio__card-work-title">
                                            Carousel
                                        </h3>
                                    </div>
                                    <div className="portfolio__card-text">
                                        <div className="portfolio__card-text-container">
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus accusamus accusantium at a eius? Unde quo adipisci pariatur sed distinctio aut a illo asperiores dolore?
                                            </p>
                                        </div>
                                    </div>
                                    <button className="portfolio__card-pull-me"></button>
                                </div>
                            </li>
                             */}
                        </ul>

                    </div>

                    <div className="portfolio-container__part portfolio-container__part2">

                        <button
                            className="portfolio-container__tab"
                            onClick={() => { changePortfolioPart('part2') }}>

                            <div className="portfolio-container__part2-btn-txt">
                                click me
                            </div>
                        </button>

                        <ul className="portfolio__cards">

                        {portfolioContentPartII.map((item, index) => {
                            return(
                                <li 
                                className="portfolio__cards-item"
                                key={portfolioContentPartII[index].id}>
                                <div className="portfolio__card">
                                    <div className="portfolio__card-work-wrapper">
                                        <div className="portfolio__card-work-img">
                                            <img
                                                src={portfolioContentPartII[index].img}
                                                alt={portfolioContentPartII[index].title} />
                                        </div>
                                        <h3 className="portfolio__card-work-title">
                                            {portfolioContentPartII[index].title}
                                        </h3>
                                    </div>
                                    <div className="portfolio__card-text">
                                        <div className="portfolio__card-text-container">
                                            <p>
                                                {portfolioContentPartII[index].txt}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="portfolio__card-pull-me"></button>
                                </div>
                            </li> 
                            )
                        })}
                        </ul>

                    </div>
                </div>

                <svg className="section__work-bg-svg-1"
                    viewBox="0 0 628 1024">
                    <path id="section__work-bg-svg-1-elt"
                        d="M 342.5 0 L 628 1024 H 0 V 500.166 L 342.5 0 Z"
                    />
                </svg>

                <svg className="section__work-bg-svg-2"
                    viewBox="0 0 305 891">
                    <path id="section__work-bg-svg-2-elt"
                        d="M 305 0 L 0 891 H 305 L 305 0 Z"
                    />
                </svg>

            </section>

            <section className="section__tv-show section__tv-show--hidden">
                <div>tv show</div>

                <button
                    className="toggle-section-work"
                    onClick={toggleSectionWork}>
                    toggle
                </button>

                <div class="tv">
                    <div className="tv-screen">
                        <div className="tvContent">
                            <img src="https://zupimages.net/up/21/16/gwdh.png" alt="" class="tvNoise" />
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="rightSide--tvButton">
                            <div className="rightSide--tvButton-line">
                            </div>
                        </div>
                        <div className="rightSide--tvButton">
                            <div className="rightSide--tvButton-line">
                            </div>
                        </div>
                        <div className="rightSide--pourLeStyle">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
