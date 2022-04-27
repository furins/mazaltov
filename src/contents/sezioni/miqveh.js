import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Miqveh() {
    const titolo = "Miqveh";
    const prima = "/dote";
    const dopo = "/i-regali-degli-sposi";

    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);
    const [visibile, setVisibile] = React.useState(false);
    const [visibile2, setVisibile2] = React.useState(false);
    const [visibile3, setVisibile3] = React.useState(false);
    const [visibile4, setVisibile4] = React.useState(false);
    const [visibile5, setVisibile5] = React.useState(false);

    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>
                        <motion.div
                            exit={{ opacity: 0, height: `100vh` }}
                            transition={transition} className="row center" style={{ minHeight: `100vh`, height: "auto" }} >

                            <div className="inverted container--page mostra">

                                <h2 className="with-buttons p-15">
                                    <div className="navigazione--sale">
                                        <Link className={"bottone--sx"} to={prima}>←</Link>
                                        <Link className={"bottone--cx"} to="/mostra">↑</Link>
                                        <Link className={"bottone--dx"} to={dopo}>→</Link>
                                    </div>
                                    {titolo}
                                </h2>
                                <div className="spacer-30"></div>
                                <div className="">{/* inserire qui il testo */}
                                    <div className="pure-g">
                                        <div className="pure-u-1">
                                            Il miqveh, termine che in ebraico ha il significato di raccolta, è una vasca
                                            o un bagno di acqua limpida che rende ritualmente pulita o pura la persona
                                            che vi si immerge. Nell’ebraismo l’enfasi è posta sul fine spirituale e non
                                            fisico della pulizia. La sposa viene accompagnata il giorno che precede le
                                            nozze da parenti e amiche sposate al miqveh. Qui si immerge nell’acqua e in
                                            questa occasione deve avere cura di non avere addosso nulla, ad esempio
                                            smalto sulle unghie, anelli o del trucco, che impedisca il contatto diretto
                                            con l’acqua. La sua bocca non dovrà essere serrata, ma chiusa. Dal
                                            matrimonio in avanti, la donna ebrea è chiamata a ripetere l’immersione nei
                                            giorni che seguono ogni ciclo mestruale.
                                        </div>
                                    </div>
                                    <div className="spacer-30"></div>

                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            <h3 className="didascalia--titolo">Salt Crystal Bridal Gown III (sinistra) e VI (destra), 2014</h3>
                                            <div className="didascalia--descrizione">Sigalit Landau in collaborazione con Yotam From, stampa a colori</div>
                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-4">
                                            {visibile5 ? <Lightbox
                                                image={require("../../images/full/miqveh/foto_13.jpg").default}
                                                title="Salt Crystal Bridal Gown."
                                                onClose={() => { setVisibile5(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/full/miqveh/foto_13.jpg").default}
                                                alt="Salt Crystal Bridal Gown"
                                                className="responsive"
                                                onClick={() => { setVisibile5(true) }}
                                            />
                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-4">
                                            {visibile ? <Lightbox
                                                image={require("../../images/full/miqveh/foto_01.jpg").default}
                                                title="Salt Crystal Bridal Gown."
                                                onClose={() => { setVisibile(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/full/miqveh/foto_01.jpg").default}
                                                alt="Salt Crystal Bridal Gown"
                                                className="responsive"
                                                onClick={() => { setVisibile(true) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="spacer-90"></div>

                                    <h3 className="didascalia--titolo">Flora Deborah, Una per Tutte, Tutte per Una, 2021</h3>
                                    <p className="didascalia--testo">ceramica smaltata, cm 97x86</p>
                                    <div className="pure-g">

                                        <div className="pure-u-1 pure-u-md-1-3">
                                            {visibile2 ? <Lightbox
                                                image={require("../../images/full/miqveh/foto_02.jpg").default}
                                                title="Una per Tutte, Tutte per Una"
                                                onClose={() => { setVisibile2(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/full/miqveh/foto_02.jpg").default}
                                                alt="Una per Tutte, Tutte per Una"
                                                className="responsive"
                                                onClick={() => { setVisibile2(true) }}
                                            />
                                        </div>


                                        <div className="pure-u-1 pure-u-md-1-3">

                                            {visibile3 ? <Lightbox
                                                image={require("../../images/full/miqveh/foto_10.jpg").default}
                                                title="Una per Tutte, Tutte per Una"
                                                onClose={() => { setVisibile3(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/full/miqveh/foto_10.jpg").default}
                                                alt="Una per Tutte, Tutte per Una"
                                                className="responsive"
                                                onClick={() => { setVisibile3(true) }}
                                            />
                                        </div>


                                        <div className="pure-u-1 pure-u-md-1-3">

                                            {visibile4 ? <Lightbox
                                                image={require("../../images/full/miqveh/foto_04.jpg").default}
                                                title="Una per Tutte, Tutte per Una"
                                                onClose={() => { setVisibile4(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/full/miqveh/foto_04.jpg").default}
                                                alt="Una per Tutte, Tutte per Una"
                                                className="responsive"
                                                onClick={() => { setVisibile4(true) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="spacer-90"></div>

                                </div>{/* fine testo */}
                            </div>
                        </motion.div>

                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Miqveh;
