import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import MyLife from '../mylife/MyLife'

import './skills.css'

export default function Skills() {

    const { face } = useSelector(state => ({
        ...state.faceDisplayedReducer
    }))

    const [writeOnBoard, setWriteOnBoard] = useState(false)

    const toggleSectionSkills = () => {
        console.log('toggle')
        document.querySelector('.section__skills').classList.toggle('section__skills--hidden')
        document.querySelector('.section__my-life').classList.toggle('section__my-life--hidden')
    }

    useEffect(() => {
        face === 2 && setWriteOnBoard(true)
    }, [face])

    useEffect(() => {
        writeOnBoard && (setTimeout(function(){ document.querySelector('.my-skills').style.display='grid'}, 750))
    }, [writeOnBoard])

    return (
        <>

            <section className="section__skills">
                <div className="intro-of-myself">
                    <h2>Mes compétences</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto eius impedit, saepe animi, aperiam modi blanditiis asperiores quo magnam dolor molestias nostrum quaerat? Explicabo.
                    </p>
                </div>

                {/* <button
                    className="toggle-section-skills"
                    onClick={toggleSectionSkills}>
                    toggle
                </button> */}

                <div className="my-skills-container">

                    <div className="my-skills">

                        <p className="competence comp1">Développeur front-end</p>
                        <p className="competence comp2">HTML</p>
                        <p className="competence comp3">CSS</p>
                        <p className="competence comp4">Javascript</p>
                        <p className="competence comp5">Scss</p>
                        <p className="competence comp6">React</p>
                        <p className="competence comp7">Orthographe</p>
                        <p className="competence comp8">Figma</p>
                        <p className="competence comp9">English spoken</p>
                        <p className="competence comp10">Fast learner</p>

                        <svg
                            id="whiteboard"
                            viewBox="0 0 100 100">

                            <path
                                id="front-end-dev"
                                className="comp-drawn"
                                d="m 50.981662,18.34916 c 0,0 -30.542908,-3.518717 -27.761448,6.080381 1.654707,12.286873 51.076449,8.717618 53.451556,1.408537 1.894204,-9.832654 -28.863934,-5.818483 -28.863934,-5.818483" />
                            <path
                                id="arrow-html"
                                className="line-drawn"
                                d="m 47.698855,12.360459 c 0,0 1.050536,-1.17154 1.105882,-0.962808 0.08493,0.320302 0.325763,1.17503 0.251026,1.304907 -0.134238,0.23328 -0.851874,-0.190131 -0.93573,0.02543 -0.602184,1.547941 0.0369,2.885401 1.087047,4.882297" />
                            <path
                                id="HTML"
                                className="comp-drawn"
                                d="m 49.420385,0.64895889 c 0,0 -12.746436,-1.00415427 -14.930059,3.62857141 -0.689522,1.4628738 -0.278653,3.220421 2.116667,4.3656247 4.163223,1.99044 26.900777,5.094674 28.546652,-2.2489581 C 65.838777,3.3372486 61.544647,2.1966092 59.04933,1.3104172 55.816755,0.16239394 48.758927,1.4332594 48.758927,1.4332594" />
                            <path
                                id="arrow-css"
                                className="line-drawn"
                                d="m 25.273328,29.381725 c -2.041711,1.933768 -5.377106,5.913481 -4.280078,8.24425 0.06791,0.14429 0.821617,-0.379547 1.053706,-0.113229 0.390762,0.448393 -0.431387,1.731377 -0.431387,1.731377 -0.35599,0.223306 -0.904389,-0.760744 -1.272691,-1.296306" />
                            <path
                                id="CSS"
                                className="comp-drawn"
                                d="m 26.666219,39.561608 c 0,0 -16.418258,-0.616727 -16.7443441,5.726337 -0.3473614,6.756904 16.2964061,7.770734 27.3465761,4.346729 3.446214,-1.067844 4.4115,-5.956929 -0.302379,-8.769049 -2.808152,-1.675236 -11.660567,0.151191 -11.660567,0.151191" />
                            <path
                                id="arrow-scss"
                                className="line-drawn"
                                d="m 19.702009,51.784412 c 0,0 -3.839341,3.252308 -2.976563,4.984561 0.162443,0.326146 1.086682,0.118117 1.086682,0.118117 0.343973,0.52128 -1.186416,1.450126 -1.186416,1.450126 -0.639071,-0.155342 -0.564098,-1.370166 -0.564098,-1.370166" />
                            <path
                                id="scss"
                                className="comp-drawn"
                                d="m 18.898809,59.263615 c 0,0 -18.59222119,-0.648469 -18.56807984,5.839733 0.0198096,5.324009 18.96973684,7.848766 27.02529784,3.63802 1.866414,-0.975598 3.778636,-3.716756 2.882067,-5.622395 -1.913027,-4.0661 -13.16302,-2.910417 -13.16302,-2.910417" />
                            <path
                                id="arrow-javascript"
                                className="line-drawn"
                                d="m 73.280134,30.1689 c 2.098414,1.763423 3.546975,4.53021 3.638021,6.756323 0.01458,0.356496 0.975361,-0.408202 1.226047,-0.08422 0.363585,0.469893 -0.564589,1.690616 -0.564589,1.690616 -0.444847,0.404687 -1.263859,-1.287482 -1.263859,-1.287482" />
                            <path
                                id="javascript"
                                className="comp-drawn"
                                d="m 71.106768,39.38207 c -2.077617,-1.088276 -16.165277,1.987495 -11.008554,7.644567 2.988212,3.278154 25.540451,5.559049 29.907365,-1.407962 2.354747,-3.756783 -5.362515,-5.192457 -8.164285,-5.669643 -3.158044,-0.537865 -8.251505,-0.576736 -11.25424,0.850448" />
                            <path
                                id="arrow-react"
                                className="line-drawn"
                                d="m 77.012648,51.004837 c 0.605556,-0.182809 1.733906,3.689201 1.464657,5.480653 -0.05968,0.397063 1.016476,-0.129953 1.181177,0.236236 0.179493,0.399077 -0.661459,1.133928 -0.661459,1.133928 -0.544484,0.256247 -1.322916,-1.228421 -1.322916,-1.228421" />
                            <path
                                id="react"
                                className="comp-drawn"
                                d="m 87.180208,59.556549 c -0.157441,-0.629763 -17.715954,-2.345037 -17.15067,4.42232 0.807801,9.670677 25.210908,8.250274 28.849034,3.912055 1.878938,-2.240503 -0.767101,-6.549382 -3.335642,-7.285493 -2.983047,-0.854903 -9.307663,0.179538 -9.307663,0.179538" />
                            <path
                                id="plus-vert"
                                className="line-drawn"
                                d="m 52.633183,81.668153 c 0.588139,1.654098 0.152554,3.222886 0.04725,4.819198" />
                            <path
                                id="plus-hor"
                                className="line-drawn"
                                d="m 50.034597,84.030507 c 2.151206,-0.653079 4.272439,-0.480081 5.24442,-0.188989" />
                            <path
                                id="orthographe"
                                className="comp-drawn"
                                d="m 50.313489,68.863101 c -0.567286,0.05673 -19.628691,-0.627414 -17.166696,7.472801 1.244982,4.096117 33.245182,5.848278 34.517724,0.07756 1.267514,-5.747919 -6.900324,-6.836131 -11.281392,-6.748558 -2.345424,0.04688 -7.333794,0.935445 -7.333794,0.935445" />
                            <path
                                id="figma"
                                className="comp-drawn"
                                d="m 15.367998,79.553881 c -0.334087,0 -15.57913305,-0.418106 -14.63837919,4.610399 1.83498449,9.808335 28.99813219,8.002399 29.87274219,-1.937705 0.303498,-3.449307 -6.62751,-2.401709 -10.089425,-2.472243 -2.021964,-0.0412 -5.946747,1.202714 -5.946747,1.202714" />
                            <path
                                id="fast-learner"
                                className="comp-drawn"
                                d="m 52.251191,89.103395 c 0,0 -14.011113,-0.878318 -17.238884,4.065114 -4.475431,6.854261 28.244584,9.318811 30.201457,2.186508 0.571297,-2.08223 -3.05644,-4.172616 -5.345391,-5.048911 -3.245909,-1.242654 -10.423512,0.267267 -10.423512,0.267267" />
                            <path
                                id="english-spoken"
                                className="comp-drawn"
                                d="m 86.867967,79.826523 c -6.689687,-2.18012 -20.517676,1.271998 -17.578342,6.828465 3.022341,5.713383 29.909444,5.219592 30.33509,-0.731967 0.178816,-2.500273 -3.01002,-4.378611 -5.34539,-5.289317 -3.322291,-1.295569 -10.690781,0.39016 -10.690781,0.39016" />
                        </svg>

                    </div>

                </div>

            </section>

            

            <svg className="section__skills-bg-svg-1 section-bg-svg"
                    viewBox="0 0 100 100">
                    <path id="section__skills-bg-svg-1-elt"
                        d="M 0,100 V 13 C 0,13 36.163647,10.04591 46.464456,21.994335 63.45852,41.706604 57.202187,75.805111 49.85,100 Z"
                    />
                </svg>
                <svg className="section__skills-bg-svg-2 section-bg-svg"
                    viewBox="0 0 100 100">
                    <path id="section__skills-bg-svg-2-elt"
                        d="M 100,100 V 0 H 60 c 0,0 35,30 35,50 0,20 -37,50 -37,50 z"
                    />
                </svg>
{/* 
            <section className="section__my-life section__my-life--hidden">
                <div>my life</div>
                <button
                    className="toggle-section-skills"
                    onClick={toggleSectionSkills}>
                    toggle
                </button>
                <MyLife/>
            </section> */}
        </>
    )
}
