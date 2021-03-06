import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function UsiECostumi() {
    const titolo = "Usi e costumi";
    const prima = "/mazal-tov";
    const dopo = "/regolamenti";

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
                                            Al cerimoniale ben definito e consolidato, si sono aggiunti nel corso del
                                            tempo usi caratteristici di differenti tradizioni. In alcuni casi le
                                            influenze delle culture circostanti sono entrate a far parte del costume
                                            ebraico, ad esempio gli ebrei sefarditi provenienti dai paesi islamici
                                            ancora oggi, anche in Italia, mantengono l’uso di decorare con l’henne le
                                            mani e i piedi della sposa e delle donne che partecipano al corteo nuziale.
                                            In altri si sono affermate usanze proprie di una comunità, come a Roma, dove
                                            i parenti degli sposi organizzano una veglia di studio, detta mishmarah, a
                                            cui fa seguito la consumazione di cibi e dolci tradizionali. Il carattere
                                            pubblico di questo rito ha portato allo sviluppo di tante forme di
                                            coinvolgimento e di partecipazione delle famiglie e degli invitati. Dai
                                            preziosi doni per gli sposi alle composizioni poetiche, fino ai piccoli
                                            oggetti effimeri e quotidiani; libriccini con preghiere, kippot, inviti e
                                            libri di firme che contribuiscono a ricordare l’evento e sono testimonianze
                                            della vitalità dell’ebraismo.
                                        </div>
                                    </div>
                                    <div className="spacer-30"></div>

                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            <h3 className="didascalia--titolo">
                                                Album in onore delle nozze fra Corrado Lopez e Ada Sadun
                                            </h3>
                                            <p>
                                                Album in onore delle nozze fra Corrado Lopez e Ada Sadun, a cura del
                                                fratello dello sposo Sabatino Lopez, 1899, albo cartaceo manoscritto e con
                                                disegni, rilegato in pelle, con angoli e iniziali in argento L’album è un
                                                dono di Sabatino Lopez, critico letterario e commediografo di successo
                                                nella Milano di inizio '900, per le nozze del fratello. Contiene una
                                                raccolta di firme, dediche, componimenti e disegni di intellettuali e
                                                artisti fra cui spiccano Trilussa, Pascoli, Verga, Carducci, Eleonora Duse
                                                e Giacomo Puccini.
                                                <br />
                                                <br />
                                                <a href="/lopez" className="link button">VISUALIZZA ALBUM → </a>
                                            </p>
                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-2">
                                            {visibile ? <Lightbox
                                                image={require("../../images/full/usi_e_costumi/foto_07.jpg").default}
                                                title=" Album in onore delle nozze fra Corrado Lopez e Ada Sadun."
                                                onClose={() => { setVisibile(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/thumbs/usi_e_costumi/foto_07.jpg").default}
                                                alt=" Album in onore delle nozze fra Corrado Lopez e Ada Sadun."
                                                className="responsive"
                                                onClick={() => { setVisibile(true) }}
                                            />
                                        </div>
                                    </div>

                                    <div className="spacer-90"></div>
                                </div>
                            </div>{/* fine testo */}
                        </motion.div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default UsiECostumi;
