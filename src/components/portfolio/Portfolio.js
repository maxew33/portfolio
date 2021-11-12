import { useState } from 'react'
import Accueil from './portfolio-comp/accueil/Accueil'
import Contact from './portfolio-comp/contact/Contact'
import Skills from './portfolio-comp/skills/Skills'
import Work from './portfolio-comp/work/Work'
import './portfolio.css'

export default function Portfolio() {

    const [faceAngle, setFaceAngle] = useState(0)

    const changeAngle = (value) => {
        setFaceAngle(faceAngle + value)
    }

    const arrayComp = [<Accueil />, <Work />, <Skills />, <Contact />]

    return (
        <>
            <div className="spinner-container">
                <div className="spinner" style={{ transform: "rotateY(" + faceAngle + "deg)" }}>
                    {arrayComp.map((item, index) => {
                        return (
                            <div className="face">
                                <div className="content">
                                    <button className="arrow arrow-left" onClick={() => changeAngle(90)}>prev</button>
                                    {arrayComp[index]}
                                    <button className="arrow arrow-right" onClick={() => changeAngle(-90)}>next</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
