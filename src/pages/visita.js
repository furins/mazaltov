import React from "react";
import { motion } from "framer-motion";
import Hls from 'hls.js';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function loadVideo(video) {
    var videoSrc = 'https://videodelivery.net/e6b5da35c5d46e342d8ec348dcda36e3/manifest/video.m3u8';

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.attachMedia(video);
        hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            hls.loadSource(videoSrc);
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
    }
}


function Visita() {
    document.querySelector("body").classList.remove("no-scroll");
    //estetica

    return (
        <motion.div
            className="indice fullheight"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ opacity: 0 }}>
            <div className="container--page">

                <div className="row">
                    <h2>VISITA VIRTUALE</h2>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1 ">
                        <video
                            loop autoplay controls controlsList="nodownload"
                            ref={(input) => { loadVideo(input) }}
                            poster={require('../images/poster-visita.jpg').default}
                            style={{ border: "none", position: "absolute", top: 0, left: 0, height: `100%`, width: `100%`, objectFit: "cover" }}>
                        </video>
                    </div>
                </div>

            </div>
        </motion.div >
    );
}

export default Visita;
