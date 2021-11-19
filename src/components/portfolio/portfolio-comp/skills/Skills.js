import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './skills.css'

export default function Skills() {

    const { face } = useSelector(state => ({
        ...state.faceDisplayedReducer
    }))

    // useEffect(() => {
    // }, [face])

    // console.log('on monte')

    return (
        <>
            <svg className="section__skills-bg-svg-1"
                viewBox="0 0 330 941">
                <path id="section__skills-bg-svg-1-elt"
                    d="M 16.5 0 L 329.25 940.5 H 0 V 50 L 16.5 0 Z"
                />
            </svg>
            <svg className="section__skills-bg-svg-2"
                viewBox="0 0 328 1024">
                <path id="section__skills-bg-svg-2-elt"
                    d="M 327.5 526 L 0 1024 H 328 V 0 H 1.5 L 327.5 526 Z"
                />
            </svg>

            <section className="section__skills">

                <div className="intro-of-myself">
                    <h2>Mes compétences</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto eius impedit, saepe animi, aperiam modi blanditiis asperiores quo magnam dolor molestias nostrum quaerat? Explicabo.
                    </p>
                </div>

                <div className="my-skills">

                <p className="competence comp1">Développeur front-end</p>
                    <p className="competence comp2">HTML</p>
                    <p className="competence comp3">CSS</p>
                    <p className="competence comp4">Javascript</p>
                    <p className="competence comp5">Scss</p>
                    <p className="competence comp6">React</p>
                    <p className="competence comp7">Maîtrise de l'orthographe</p>
                    <p className="competence comp8">Figma</p>
                    <p className="competence comp9">English spoken</p>
                    <p className="competence comp10">Fast learner</p>



                    <svg viewBox="0 0 100 100">
                        <path
                            id="txt1" // dev front
                            d="M 50, 20 L 80 20, 80 30, 20 30, 20 20 Z "
                        />

                        <path
                            id="line12"
                            d="M 50, 20 L 50 10"
                        />
                        <path
                            id="txt2" // html
                            d="M 50, 10 L 65 10, 65 0, 35 0, 35 10 Z "
                        />

                        <path
                            id="line13"
                            d="M 35, 30 L 25 40"
                        />
                        <path
                            id="txt3" // css
                            d="M 25, 40 L 10 40, 10 50, 40 50, 40 40 Z "
                        />

                        <path
                            id="line14"
                            d="M 65, 30 L 75 40"
                        />
                        <path
                            id="txt4" // js
                            d="M 75, 40 L 90 40, 90 50, 60 50, 60 40 Z "
                        />

                        <path
                            id="line35"
                            d="M 25, 50 L 15 60"
                        />
                        <path
                            id="txt5" // SCSS
                            d="M 15, 60 L 0 60, 0 70, 30 70, 30 60 Z "
                        />

                        <path
                            id="line46"
                            d="M 75, 50 L 85 60"
                        />
                        <path
                            id="txt6" // react
                            d="M 85, 60 L 100 60, 100 70, 70 70, 70 60 Z "
                        />
                        <path
                            id="txt7" // ortho
                            d="M 50, 70 L 35 70, 35 80, 65 80, 65 70 Z "
                        />
                        <path
                            id="txt8" // figma
                            d="M 15, 80 L 0 80, 0 90, 30 90, 30 80 Z "
                        />
                        <path
                            id="txt9" // svg
                            d="M 85, 80 L 100 80, 100 90, 70 90, 70 80 Z "
                        />
                        <path
                            id="txt8" // english
                            d="M 50, 90 L 65 90, 65 100, 35 100, 35 90 Z "
                        />
                    </svg>

                </div>

            </section>
        </>
    )
}
