import React from "react";
import { motion } from "framer-motion";
import { proxy } from 'valtio'
import Hls from 'hls.js';
import { Polaroid } from "../components/polaroid";


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

const cardVariants: Variants = {
    offscreen: {},
    onscreen: {
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        },
        y: 0,
        x: 0,
        rotate: 0
    }
};
const isMobile = window.innerWidth < 768;
const scostamento = -(0.2 * window.innerHeight + window.innerWidth * 0.27);

function Indice() {
    document.querySelector("body").classList.remove("no-scroll");
    //estetica
    const state = proxy({ headerColor: 'light', showLogo: false })

    return (
        <motion.div
            className="indice fullheight"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ opacity: 0 }}>
            <video autoPlay muted loop ref={(input) => { loadVideo(input) }} className="cover-video" poster={require('../images/pre-cover.png').default}></video>

            <div className="container--page stellato">

                <div className="spacer-90"></div>
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={isMobile ? { once: true, amount: 0.1 } : { once: true, amount: 0.5 }}
                >
                    <div className="pure-g" style={{ width: `90vw` }}>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-20vh`, x: `5vw`, rotate: 0 } : { y: `-17vh`, x: `30vw`, rotate: -20 }}>
                            <Polaroid src="https://placekitten.com/600/600?image=13" to='/presentazione' callback={() => { state.headerColor = 'light' }} title="Presentazione" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-20vh`, x: `5vw`, rotate: 0 } : { y: `-17vh`, x: `20vw`, rotate: 10 }}>
                            <Polaroid src="https://placekitten.com/600/600?image=14" to='/visita' callback={() => { state.headerColor = 'light' }} title="Visita virtuale" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-20vh`, x: `5vw`, rotate: 0 } : { y: `-17vh`, x: `-50vw`, rotate: 3 }}>
                            <Polaroid src="https://placekitten.com/600/600?image=15" to='/mostra' callback={() => { state.headerColor = 'light' }} title="La mostra" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-65vh`, x: 0, rotate: 0 } : { y: scostamento, x: `61vw`, rotate: -11 }}>
                            <Polaroid src="https://placekitten.com/600/600?image=16" to='/lopez' callback={() => { state.headerColor = 'light' }} title="Album di nozze Lopez-Sadun" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-110vh`, x: `-5vw`, rotate: 0 } : { y: scostamento, x: `-35vw`, rotate: -15 }}>
                            <Polaroid src="https://placekitten.com/600/600?image=11" to='/foto' callback={() => { state.headerColor = 'light' }} title="Foto matrimoni" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-155vh`, x: `5vw`, rotate: 0 } : { y: scostamento, x: `-11vw`, rotate: 12 }}>
                            <Polaroid src="https://placekitten.com/600/600?image=12" to='/culture' callback={() => { state.headerColor = 'light' }} title="Il matrimonio nelle diverse culture" />
                        </motion.div>
                        {/* <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-20vh`, x: `5vw`, rotate: 0 } : { y: scostamento * 2.2, x: `-40vw`, rotate: -20 }}>
                            <Polaroid to='/mappa' callback={() => { state.headerColor = 'light' }} title="Musiche" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-200vh`, x: 0, rotate: 0 } : { y: scostamento * 2.2, x: `-40vw`, rotate: -7 }}>
                            <Polaroid to='/colophon/' callback={() => {
                                state.headerColor = 'dark'
                            }} title="Colophon" />
                        </motion.div> */}
                    </div>
                </motion.div>

                <div className="spacer-30"></div>
                <a href="https://meis.museum/la-fondazione/sostieni/" target="_blank" rel="noreferrer" className="link button width-100">
                    SOSTIENICI
                </a>
                <div className="spacer-30"></div>
            </div>
        </motion.div >
    );
}

export default Indice;
