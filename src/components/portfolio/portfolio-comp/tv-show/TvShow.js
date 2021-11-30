import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faCodepen, faGithub } from '@fortawesome/free-brands-svg-icons'

import './tvShow.css'

import dataTvShow from './dataTvShow'

export default function TvShow(props) {

    const [channel, setChannel] = useState(0)

    const [topBtnAngle, setTopBtnAngle] = useState(180)

    const [bottomBtnAngle, setBottomBtnAngle] = useState(180)

    const handleClick = (deltaChannel) => {

        let newChannel = channel + deltaChannel

        newChannel === dataTvShow.length && (newChannel = 0)

        newChannel < 0 && (newChannel = (dataTvShow.length - 1))

        setChannel(newChannel)

        //turn the button 

        deltaChannel === 1 ? setTopBtnAngle(topBtnAngle + 45) : setBottomBtnAngle(bottomBtnAngle - 45)

    }

    // useEffect watch the face displayed, when this face is displayed, play the video, stop it when it is not
    useEffect(() => {
        const myVideo = document.querySelector('.my-video')
        console.log('chgt de face')
        if (props.face === 'tv') {
            playVideo()
        }
        else {
            myVideo.pause()
        }
    },
        [props.face])


    useEffect(() => {

        playVideo()

        Array.from(document.querySelectorAll('.rightSide--tvButton-line'))[0].style.transform = 'rotate(' + topBtnAngle + 'deg)'

        Array.from(document.querySelectorAll('.rightSide--tvButton-line'))[1].style.transform = 'rotate(' + bottomBtnAngle + 'deg)'

    }, [channel])

    const playVideo = () => {

        document.querySelector('.my-video').src = dataTvShow[channel].src

        document.querySelector('.my-video').play().then(() => {
            console.log("Yay ! La vidéo est lancée !");
        }).catch((error) => {
            console.error('pb avec la video:', error)
        })

    }

    return (
        <>

            <div className="h3">{dataTvShow[channel].name}</div>

            <div class="tv">
                <div className="tv-screen">
                    <div className="channel">
                        {channel + 1}
                    </div>
                    <video
                        className="my-video"
                        loop="true">

                        <source
                            src={dataTvShow[channel].src}
                            type="video/mp4"
                        />

                        Sorry, your browser doesn't support embedded videos.
                    </video>
                </div>

                <div class="rightSide">
                    <div
                        class="rightSide--tvButton"
                        onClick={() => handleClick(1)}>
                        <div class="rightSide--tvButton-line">
                        </div>
                    </div>
                    <div
                        class="rightSide--tvButton"
                        onClick={() => handleClick(-1)}>
                        <div class="rightSide--tvButton-line">
                        </div>
                    </div>
                    <div class="rightSide--sound">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>

            <p>{dataTvShow[channel].txt}</p>

            {dataTvShow[channel].youtubeLink && (
                <a href={dataTvShow[channel].youtubeLink} target="_blank" rel="noopener">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            )}

            {dataTvShow[channel].gitHubLink && (
                <a href={dataTvShow[channel].gitHubLink} target="_blank" rel="noopener">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            )}

            {dataTvShow[channel].codePenLink && (
                <a href={dataTvShow[channel].codePenLink} target="_blank" rel="noopener">
                    <FontAwesomeIcon icon={faCodepen} />
                </a>
            )}


        </>
    )
}
