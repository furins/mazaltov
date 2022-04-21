import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { DEG06, DEG45 } from "../components/mappa3d";
import { proxy } from 'valtio'

import { Polaroid } from "../components/polaroid";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import Quiddushin from "../contents/sezioni/quiddushin"

const state = proxy({ headerColor: 'light', showLogo: false })

function Mappa() {
    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);





    const sezioni = {
        "default": { titolo: "I TEMI DELLA MOSTRA", text: require("../contents/sezioni/default.html").default, precedente: "musica", successivo: "qiddushin", rotazione: [0, 0] },
        "qiddushin": { titolo: "Kiddushin", text: <Quiddushin />, precedente: "default", successivo: "ketubbah", rotazione: [DEG06, -1 * DEG45] },
        "ketubbah": { titolo: "Ketubbah", text: require("../contents/sezioni/ketubbah.html").default, precedente: "qiddushin", successivo: "nissuin", rotazione: [DEG06, DEG45] },
        "nissuin": { titolo: "Nissuin", text: require("../contents/sezioni/nissuin.html").default, precedente: "ketubbah", successivo: "matrimonio-civile", rotazione: [DEG45, -1 * DEG06] },
        "matrimonio-civile": { titolo: "Il matrimonio civile", text: require("../contents/sezioni/matrimonio-civile.html").default, precedente: "nissuin", successivo: "chuppah", rotazione: [DEG06, -1 * DEG45] },
        "chuppah": { titolo: "Chuppah", text: require("../contents/sezioni/chuppah.html").default, precedente: "matrimonio-civile", successivo: "mazal-tov", rotazione: [DEG45, -1 * DEG45] },
        "mazal-tov": { titolo: "Mazal Tov!", text: require("../contents/sezioni/mazal-tov.html").default, precedente: "chuppah", successivo: "usi-e-costumi", rotazione: [DEG06, -1 * DEG06] },
        "usi-e-costumi": { titolo: "Usi e costumi", text: require("../contents/sezioni/usi-e-costumi.html").default, precedente: "mazal-tov", successivo: "regolamenti", rotazione: [DEG06, DEG45] },
        "regolamenti": {
            titolo: "Regolamenti", text: require("../contents/sezioni/regolamenti.html").default, precedente: "usi-e-costumi", successivo: "dote", rotazione: [DEG06, -1 * DEG45]
        },
        "dote": { titolo: "Dote", text: require("../contents/sezioni/dote.html").default, precedente: "regolamenti", successivo: "miqveh", rotazione: [DEG06, -1 * DEG45] },
        "miqveh": {
            titolo: "Miqveh", text: require("../contents/sezioni/miqveh.html").default, precedente: "dote", successivo: "i-regali-degli-sposi", rotazione: [DEG06, DEG45]
        },
        "i-regali-degli-sposi": { titolo: "I regali degli sposi", text: require("../contents/sezioni/i-regali-degli-sposi.html").default, precedente: "miqveh", successivo: "epitalamio", rotazione: [DEG06, DEG45] },
        "epitalamio": { titolo: "Epitalamio", text: require("../contents/sezioni/epitalamio.html").default, precedente: "i-regali-degli-sposi", successivo: "musica", rotazione: [DEG06, DEG45] },
        "musica": {
            titolo: "La musica", text: require("../contents/sezioni/musica.html").default, precedente: "epitalamio", successivo: "default", rotazione: [DEG06, DEG45]
        },
    }

    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>


                        <div className="row" style={{ minHeight: `50vh`, height: "auto" }}>
                            <div className='bottom'>
                                <div className="inverted container--page" >
                                    <div className="spacer-90"></div>
                                    <div className="spacer-30"></div>

                                    <div className="pure-g" style={{ width: `90vw` }}>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=1" callback={() => { state.headerColor = 'light' }} to="/quiddushin" title="Kiddushin" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=2" callback={() => { state.headerColor = 'light' }} to="/ketubbah" title="Ketubbah" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=3" callback={() => { state.headerColor = 'light' }} to="/nissuin" title="Nissuin" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=4" callback={() => { state.headerColor = 'light' }} to="/matrimonio-civile" title="Matrimonio civile" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=5" callback={() => { state.headerColor = 'light' }} to="/chuppah" title="Chuppah" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=6" callback={() => { state.headerColor = 'light' }} to="/mazal-tov" title="Mazal Tov!" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=7" callback={() => { state.headerColor = 'light' }} to="/usi-e-costumi" title="Usi e costumi" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=8" callback={() => { state.headerColor = 'light' }} to="/regolamenti" title="Regolamenti" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=9" callback={() => { state.headerColor = 'light' }} to="/dote" title="Dote" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=10" callback={() => { state.headerColor = 'light' }} to="/miqveh" title="Miqveh" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=11" callback={() => { state.headerColor = 'light' }} to="i-regali-degli-/sposi" title="I regali degli sposi" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src="https://placekitten.com/600/600?image=12" callback={() => { state.headerColor = 'light' }} to="/epitalamio" title="L'epitalamio" />
                                        </div>
                                    </div>
                                    <div className="spacer-90"></div>
                                </div>
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Mappa;
