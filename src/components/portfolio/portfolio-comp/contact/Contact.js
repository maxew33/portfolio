import { React, useEffect } from 'react'
import './contact.css'

export default function Contact() {

  useEffect(() => {
    const container = document.querySelector('.container'),
      postcard = document.querySelector('.postcard-border'),
      animationContainer = document.querySelector('.animation-container'),
      form = document.querySelector('.postcard-left-form')


    form.addEventListener('submit', (event) => {
      event.preventDefault()
      container.style.overflow = 'hidden'
      animationContainer.style.display = 'block'
      setTimeout(function () {
        postcard.style.display = 'none'
      }, 1000);
    }
    )
  }, [])

  return (

    <>
      <section className="section__contact">

        <div className="container">
          <div className="postcard-border">
            <div className="postcard">
              <div className="postcard-left">
                <form className="postcard-left-form">
                  <div className="postcard-left-salutation">Cher Max,</div>
                  <div className="postcard-left-input postcard-left-message">
                    <textarea name="message" required defaultValue={""} />
                    <label>Message</label>
                  </div>
                  <div className="postcard-left-input postcard-left-nom">
                    <input type="text" name="nom" required />
                    <label>Nom</label>
                  </div>
                  <div className="postcard-left-input postcard-left-mail">
                    <input type="email" name="email" required />
                    <label>Email</label>
                  </div>
                  <input type="submit" className="postcard-left-submit-btn" />
                </form>
              </div>
              <div className="postcard-right">
                <div className="postcard-right-timbre">
                  TIMBRE
                </div>
                <div className="postcard-right-exp">
                  <div className="postcard-right-nom">maxew</div>
                  <div className="postcard-right-adresse">Bordeaux</div>
                  <div className="postcard-right-mail">
                    <a>
                      maxew@monadresse.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="animation-container">
            {/* ------------- ENVELOPPE ------------- */}
            <div className="enveloppe-container">
              <div className="enveloppe">
              </div>
            </div>
            {/* ------------- MESSAGE ENVOYE ------------- */}
            <div className="confirmation-envoi">
              <span className="message-container">
                <span>message</span>
                <span>envoyé</span>
              </span>
            </div>
            {/* ------------- MAIL BOX N VAN ------------- */}
            <div className="ground" />
            <div className="van">
              <div className="logo">
                <i className="fab fa-mailchimp" />
              </div>
              <div className="vitre" />
              <div className="roue avant">
                <div className="boulons" />
                <div className="boulons" />
                <div className="boulons" />
                <div className="boulons" />
              </div>
              <div className="roue arriere">
                <div className="boulons" />
                <div className="boulons" />
                <div className="boulons" />
                <div className="boulons" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <svg className="section__contact-bg-svg section-bg-svg"
        viewBox="0 0 100 100">
        <path id="section__contact-bg-svg-elt"
          d="M 0,0 V 100 H 80 C 80,100 30,75 30,50 30,30 65,0 65,0 Z"
        />
      </svg>

    </>
  )
}
