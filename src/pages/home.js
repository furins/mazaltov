import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { proxy } from 'valtio'
import Hls from 'hls.js';
import { Polaroid } from "../components/polaroid";
import { Link } from "react-router-dom";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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

    let video = useRef()
    useEffect(() => {
        let player = video.current

        var videoSrc = 'https://videodelivery.net/e6b5da35c5d46e342d8ec348dcda36e3/manifest/video.m3u8';

        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.attachMedia(player);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                hls.loadSource(videoSrc);
            });
        } else if (player.canPlayType('application/vnd.apple.mpegurl')) {
            player.src = videoSrc;
        }
        return (() => {
            player.pause()
        })
    })

    return (<>
        <motion.div
            className="indice fullheight"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ opacity: 0 }}>
            <video autoPlay playsInline muted loop ref={video} className="cover-video" poster={require('../images/pre-cover.png').default}></video>

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
                            <Polaroid src={require("../images/thumbs/inizio/foto_03.jpg").default} to='/presentazione' callback={() => { state.headerColor = 'light' }} title="Presentazione" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-20vh`, x: `5vw`, rotate: 0 } : { y: `-17vh`, x: `20vw`, rotate: 10 }}>
                            <Polaroid src={require("../images/sezioni/virtuale.jpg").default} to='/visita' callback={() => { state.headerColor = 'light' }} title="Visita virtuale" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-20vh`, x: `5vw`, rotate: 0 } : { y: `-17vh`, x: `-50vw`, rotate: 3 }}>
                            <Polaroid src={require("../images/sezioni/lamostra.jpg").default} to='/mostra' callback={() => { state.headerColor = 'light' }} title="La mostra" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-65vh`, x: 0, rotate: 0 } : { y: scostamento, x: `61vw`, rotate: -11 }}>
                            <Polaroid src={require("../images/sezioni/lopez.jpg").default} to='/lopez' callback={() => { state.headerColor = 'light' }} title="Album di nozze Lopez-Sadun" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-110vh`, x: `-5vw`, rotate: 0 } : { y: scostamento, x: `-35vw`, rotate: -15 }}>
                            <Polaroid src={require("../images/sezioni/matrimoni.jpg").default} to='/foto' callback={() => { state.headerColor = 'light' }} title="Foto matrimoni" />
                        </motion.div>
                        <motion.div className="card pure-u-1 pure-u-md-1-3" variants={cardVariants} style={isMobile ? { y: `-155vh`, x: `5vw`, rotate: 0 } : { y: scostamento, x: `-11vw`, rotate: 12 }}>
                            <Polaroid src={require("../images/sezioni/culture.jpg").default} to='/culture' callback={() => { state.headerColor = 'light' }} title="Il matrimonio nelle diverse culture" />
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




            </div>
            <div className="fascia fullwidth dark">
                <div className="spacer-30"></div>
                <div className="pure-g">

                    <div className="pure-u-1-3 pure-u-md-1-3">
                        <h4>Un progetto digitale del</h4>
                        <img className="logo--footer-w" src={require("../images/meis.png").default} alt="MEIS, Museo Nazionale dell'Ebraismo Italiano e della Shoah" />
                    </div>
                    <div className="pure-u-1-3 pure-u-md-1-3">
                        <h4>Realizzato con il contributo della</h4>
                        <div className="imgText">
                            <img className="logo--footer-h" src={require("../images/de_levy.png").default} alt="Fondazione Guglielmo de Levy" />
                            <span>Fondazione Guglielmo De Levy</span>
                        </div>
                    </div>
                    <div className="pure-u-1-3 pure-u-md-1-3">
                        <div className="spacer-60"></div>
                        <a href="https://meis.museum/la-fondazione/sostieni/" target="_blank" rel="noreferrer" className="link button width-100">
                            SOSTIENICI
                        </a>
                        <br />
                        <br />
                        <Link to="/colophon" className="link button width-100">
                            COLOPHON
                        </Link>

                    </div>
                </div>


                <div className="spacer-30"></div>

            </div>
        </motion.div >

    </>
    );
}

export default Indice;
