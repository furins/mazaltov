import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Regolamenti() {
    const titolo = "Regolamenti";
    const prima = "/usi-e-costumi";
    const dopo = "/dote";

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
                                            I festeggiamenti potevano sconfinare in condotte ritenute inappropriate
                                            tanto dalle autorità ebraiche quanto dai governanti. Per questo fino
                                            all’Ottocento, venivano emesse prammatiche ed editti che disciplinavano e
                                            limitavano le espressioni di gioia e allegria, imponendo la moderazione
                                            nell’utilizzo di abbigliamenti sfarzosi e nell’ostentazione del lusso. In
                                            alcuni casi venivano regolate anche le somme massime che potevano essere
                                            spese per le nozze e persino per le decorazioni delle ketubbot.
                                        </div>
                                    </div>
                                </div>
                                <div className="spacer-30"></div>

                                <div className="pure-g">
                                    <div className="pure-u-1 pure-u-md-11-24">
                                        <h3 className="didascalia--titolo">EDITTO PER LE FESTE E GLI SPOSALIZJ DEGLI EBREI</h3>
                                        <div className="didascalia--descrizione">
                                            Ferrara, 23 settembre 1782, stampa su carta
                                        </div>
                                        <div className="didascalia--prestatore">Collezione privata</div>
                                    </div>
                                    <div className="pure-u-1 pure-u-md-1-2">
                                        {visibile ? <Lightbox
                                            image={require("../../images/full/documenti/foto_01.jpg").default}
                                            title="Editto per le feste e gli sposalizj degli ebrei"
                                            onClose={() => { setVisibile(false) }}
                                        /> : null}
                                        <img
                                            src={require("../../images/thumbs/documenti/foto_01.jpg").default}
                                            alt="Editto per le feste e gli sposalizj degli ebrei"
                                            className="responsive"
                                            onClick={() => { setVisibile(true) }}
                                        />
                                    </div>
                                </div>

                                <div className="spacer-90"></div>

                            </div>{/* fine testo */}
                        </motion.div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Regolamenti;
