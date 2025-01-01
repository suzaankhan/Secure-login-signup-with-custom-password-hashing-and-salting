import React from 'react'
import './video2.css'

function Video2 (props) {
    return (
        <>
            <div className="head">
                <h2>{props.text}</h2>
            </div>
            <div className="main">
                
                <div className="video-text2">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/9JSYB59QmZw?si=dhPvYtLTPSDWInQh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                    <h2>Some Sample caption here</h2>
                </div>
                <div className="video-text3">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/KcQoJS9R6Lk?si=e5FMu2dpiNDhGs-m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
                    </iframe>
                    <h2>Some Sample caption here</h2>
                </div>

            </div>

        </>
    )
}

export default Video2;