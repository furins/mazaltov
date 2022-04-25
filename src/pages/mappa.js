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
                                            <Polaroid src={require("../images/thumbs/qiddushin/foto_06.jpg").default} callback={() => { state.headerColor = 'light' }} to="/quiddushin" title="Kiddushin" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/kettubah/foto_01.jpg").default} callback={() => { state.headerColor = 'light' }} to="/ketubbah" title="Ketubbah" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/nissuin/foto_03.jpg").default} callback={() => { state.headerColor = 'light' }} to="/nissuin" title="Nissuin" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/usi_e_costumi/foto_13.jpg").default} callback={() => { state.headerColor = 'light' }} to="/matrimonio-civile" title="Matrimonio civile" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/mazaltov/foto_04.jpg").default} callback={() => { state.headerColor = 'light' }} to="/chuppah" title="Chuppah" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/mazaltov/foto_01.jpg").default} callback={() => { state.headerColor = 'light' }} to="/mazal-tov" title="Mazal Tov!" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/usi_e_costumi/foto_01.jpg").default} callback={() => { state.headerColor = 'light' }} to="/usi-e-costumi" title="Usi e costumi" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/inizio/foto_04.jpg").default} callback={() => { state.headerColor = 'light' }} to="/regolamenti" title="Regolamenti" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/dote/foto_06.jpg").default} callback={() => { state.headerColor = 'light' }} to="/dote" title="Dote" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/miqveh/foto_05.jpg").default} callback={() => { state.headerColor = 'light' }} to="/miqveh" title="Miqveh" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/i_regali_degli_sposi/foto_09.jpg").default} callback={() => { state.headerColor = 'light' }} to="i-regali-degli-sposi" title="I regali degli sposi" />
                                        </div>
                                        <div className="card pure-u-1 pure-u-md-1-3">
                                            <Polaroid src={require("../images/thumbs/epitalamio/foto_04.jpg").default} callback={() => { state.headerColor = 'light' }} to="/epitalamio" title="L'epitalamio" />
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
