import { React, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './skills.css'

export default function Skills() {

    const { face } = useSelector(state => ({
        ...state.faceDisplayedReducer
    }))

    const toggleSectionSkills = () => {
        console.log('toggle')
        document.querySelector('.section__skills').classList.toggle('section__skills--hidden')
        document.querySelector('.section__my-life').classList.toggle('section__my-life--hidden')
    }

    // useEffect(() => {
    // }, [face])

    // console.log('on monte')

    return (
        <>

            <section className="section__skills">

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
                <div className="intro-of-myself">
                    <h2>Mes compétences</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto eius impedit, saepe animi, aperiam modi blanditiis asperiores quo magnam dolor molestias nostrum quaerat? Explicabo.
                    </p>
                </div>
                
                <button
                    className="toggle-section-skills"
                    onClick={toggleSectionSkills}>
                    toggle
                </button>

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

            <section className="section__my-life section__my-life--hidden">
                <div>my life</div>
                <button
                    className="toggle-section-skills"
                    onClick={toggleSectionSkills}>
                    toggle
                </button>
                <p className="lorem">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo itaque repellat possimus. Id laborum itaque magni quas fugiat nemo, quasi ab voluptatibus repellendus ullam nulla culpa. Magni sint, consequuntur tempora ipsum beatae, natus dolore laudantium minus aliquid eveniet rerum est similique fugiat possimus eius corrupti, commodi ut aliquam iure modi non ea asperiores? Maxime porro atque, veniam tempora necessitatibus deleniti consectetur explicabo distinctio eveniet quae velit dolorem amet unde accusamus pariatur laboriosam at incidunt ipsam molestias voluptatem officia. Saepe harum at, obcaecati recusandae aspernatur, impedit iusto assumenda iste beatae dolorum dolores ipsum ut! Cumque laudantium ad molestias optio possimus officiis amet quis tempore deleniti dicta vel ullam ducimus, at voluptas eligendi? Hic minus magni quam ullam iure quis tempore odit inventore at repudiandae eligendi alias numquam laboriosam, facere, nemo possimus! Ut rem quia alias voluptas saepe ullam suscipit ipsam numquam deserunt placeat, soluta cumque laborum sunt sit aperiam excepturi blanditiis facere officia ipsum. Illum dolores, sunt fugit totam consectetur unde facere quas animi recusandae accusantium harum, doloremque voluptatibus ipsum quos ullam provident! Consequuntur quas alias autem eaque obcaecati, culpa blanditiis, doloribus voluptatem ipsum ipsa sed repudiandae voluptate fuga eius quis illum iusto? Laboriosam optio est eum assumenda quibusdam vel veniam ea illum fuga, exercitationem rerum voluptatibus quia maxime doloremque repellat reprehenderit doloribus. Nam blanditiis ab hic in reprehenderit temporibus incidunt dolore! Aspernatur consequatur reprehenderit temporibus quidem non molestias nam officiis cumque mollitia, earum sit. Veniam, sapiente. Officiis illo repellat quo architecto nostrum quas adipisci facilis laborum voluptas temporibus dolore laudantium, accusantium ducimus assumenda veritatis. Ab fuga nihil nostrum, eius facere provident? Sequi voluptatibus iusto eum neque quia delectus quis ratione hic blanditiis ipsa? Dolore amet impedit, temporibus earum fugit ipsam, ut perferendis magni quasi tenetur culpa, quam voluptatum accusamus consectetur expedita quo iste in itaque officia veritatis! Dolorem rerum natus beatae aspernatur similique molestias, fuga nesciunt? Distinctio, maxime veritatis minima ipsum nobis quod eos cum obcaecati error enim incidunt? Cumque quidem ipsam nam, inventore rem quae eveniet sit natus possimus, doloribus reprehenderit id, ullam repellat libero perspiciatis sint. Ex quasi libero provident eum velit aut quidem, delectus quam nemo error, quod nesciunt cumque quisquam iure minus nihil fugiat. Aspernatur quo quidem qui maiores culpa, beatae praesentium, libero nobis quam enim nihil vero esse ab ducimus vitae cumque ratione repellendus veniam at id possimus. Dolore alias ad rem, beatae fugiat reprehenderit, optio nihil reiciendis dicta officiis aliquam excepturi laboriosam iste animi non a aperiam in asperiores maxime saepe neque fuga? Aut itaque beatae eaque, quo, facere, sed earum doloremque perferendis alias aliquid assumenda eius ratione! Temporibus facilis adipisci autem ut corporis rerum tempore, tenetur pariatur dolor voluptatibus perspiciatis obcaecati optio magnam sed fugit necessitatibus reiciendis aperiam iste. Ab atque omnis cumque!
                </p>
            </section>
        </>
    )
}
