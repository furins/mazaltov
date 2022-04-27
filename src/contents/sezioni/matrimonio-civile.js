import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Matrimonio() {
    const titolo = "Il matrimonio civile";
    const prima = "/mostra";
    const dopo = "/chuppah";

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
                                            In Italia gli effetti civili dei matrimoni celebrati secondo il rito ebraico
                                            sono riconosciuti in base alla legge 8 marzo 1989 n.101, che nello Stato ha
                                            dato attuazione all’Intesa tra la Repubblica italiana e l’Unione delle
                                            Comunità Israelitiche Italiane - UCEI, stipulata il 27 febbraio 1987. Il
                                            riconoscimento del matrimonio di rito ebraico è subordinato all’osservanza
                                            di alcune condizioni, regolate dal diritto. Perché l’atto sia trascritto nei
                                            registri anagrafici, deve essere preceduto dalla comunicazione degli sposi
                                            all’ufficiale di stato civile competente della loro intenzione di celebrare
                                            il matrimonio secondo il rito ebraico e, non ultimo, dal rilascio di un
                                            nulla osta che attesti l’inesistenza di impedimenti alla celebrazione
                                            secondo le leggi civili. Il ministro di culto celebrante deve possedere la
                                            cittadinanza italiana e svolge, in quella speciale circostanza, funzione di
                                            ufficiale di stato civile, infatti al termine delle nozze è suo specifico
                                            dovere dare lettura degli articoli del codice civile riguardanti i diritti e
                                            i doveri dei coniugi.
                                        </div>
                                        <div className="spacer-30"></div>
                                    </div>
                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            <h3 className="didascalia--titolo">MATRIMONIO DI LIONELLA NEPPI MODONA E GIUSEPPE VITERBO</h3>
                                            <div className="didascalia--descrizione">
                                                8 dicembre 1957 - 15 Kislev 5718, Firenze
                                            </div>
                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-2">
                                            {visibile ? <Lightbox
                                                image={require("../../images/full/matrimonio/foto_01.jpg").default}
                                                title="Matrimonio di Lionella Neppi Modona e Giuseppe Viterbo"
                                                onClose={() => { setVisibile(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/full/matrimonio/foto_01.jpg").default}
                                                alt="Matrimonio di Lionella Neppi Modona e Giuseppe Viterbo"
                                                className="responsive"
                                                onClick={() => { setVisibile(true) }}
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

export default Matrimonio;
