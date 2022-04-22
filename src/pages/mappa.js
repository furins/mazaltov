import React from "react";
import { AnimateSharedLayout } from "framer-motion";
import { proxy } from 'valtio'

import { Polaroid } from "../components/polaroid";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const state = proxy({ headerColor: 'light', showLogo: false })

function Mappa() {
    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);



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
                                            <Polaroid src="https://placekitten.com/600/600?image=11" callback={() => { state.headerColor = 'light' }} to="i-regali-degli-sposi" title="I regali degli sposi" />
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
