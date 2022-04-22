import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Miqveh() {
    const titolo = "Miqveh";
    const prima = "/dote";
    const dopo = "/i-regali-degli-sposi";
    const rotazione = [DEG45, -1 * DEG45]

    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);
    const [visibile, setVisibile] = React.useState(false);

    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>
                        <motion.div
                            exit={{ opacity: 0, height: `100vh` }}
                            transition={transition} className="row center top-row">
                            <header style={{ height: `50vh`, position: "relative" }}>
                                <Mappa3D target={titolo} rotazione={rotazione} />
                            </header>

                        </motion.div>
                        <div className="row bottom-row" style={{ minHeight: `50vh`, height: "auto" }}>
                            <div className='bottom'>
                                <div className="inverted container--page" >
                                    <div className="spacer-30"></div>

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
                                                Il mikveh, termine che in ebraico ha il significato di raccolta, è una vasca
                                                o un bagno di acqua limpida che rende ritualmente pulita o pura la persona
                                                che vi si immerge. Nell’ebraismo l’enfasi è posta sul fine spirituale e non
                                                fisico della pulizia. La sposa viene accompagnata il giorno che precede le
                                                nozze da parenti e amiche sposate al mikveh. Qui si immerge nell’acqua e in
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
                                                <h3 className="didascalia--titolo">mikveh.</h3>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-4">
                                                {visibile ? <Lightbox
                                                    image="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/Talmud-Kiddushin-3-1024x683.jpeg"
                                                    title="TALMUD BABILONESE. TRATTATO KIDDUSHIN."
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/Talmud-Kiddushin-3-1024x683.jpeg"
                                                    alt="foto talmud 2"
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="spacer-90"></div>

                                    </div>{/* fine testo */}
                                </div>
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Miqveh;
