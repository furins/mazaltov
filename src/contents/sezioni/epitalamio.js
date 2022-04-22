import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Epitalamio() {
    const titolo = "Epitalamio";
    const prima = "/i-regali-degli-sposi";
    const dopo = "/mostra";
    const rotazione = [DEG45, -1 * DEG45]

    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);
    const [visibile, setVisibile] = React.useState(false);
    const [visibile2, setVisibile2] = React.useState(false);



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
                                                Presso le famiglie più istruite e benestanti, in particolare tra il Seicento
                                                e l’Ottocento, si diffonde l’uso di celebrare la coppia con inni e sonetti
                                                di circostanza. In italiano e in ebraico, i componimenti contenevano
                                                costanti riferimenti, giochi di parole, metafore che svelavano aspetti
                                                legati alle famiglie. Questi attestati di amicizia e affetto erano
                                                riprodotti su carta o su pergamena, ma non era raro che venissero impiegate
                                                nuove tecniche, come la stampa su seta.
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                <h3 className="didascalia--titolo">Leon Tedeschi, Epitalamio</h3>
                                                <div className="didascalia--descrizione">
                                                    Per le nozze di Moise Aghib di Livorno con Sara Tedeschi di Reggio,
                                                    stamperia Bernardo Paperini, Firenze, 1750, stampa su seta
                                                </div>
                                                <div className="didascalia--prestatore">Collezione Privata</div>
                                                <p>Canto composto da Leon Tedeschi, fratello della sposa.</p>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
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
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                {visibile2 ? <Lightbox
                                                    image="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/Talmud-Kiddushin-2-1024x683.jpeg"
                                                    title="TALMUD BABILONESE. TRATTATO KIDDUSHIN."
                                                    onClose={() => { setVisibile2(false) }}
                                                /> : null}
                                                <img
                                                    src="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/Talmud-Kiddushin-2-1024x683.jpeg"
                                                    alt="foto talmud 2"
                                                    className="responsive"
                                                    onClick={() => { setVisibile2(true) }}
                                                />
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
                                                <h3>Immanuel ben Refael Calvo, Epitalamio</h3>
                                                <p>
                                                    Per le nozze di Moise Aghib di Livorno con Sara Tedeschi di Reggio,
                                                    stamperia Isach de Pas, Firenze, 1752, stampa su seta <br />Collezione
                                                    Privata
                                                </p>
                                                <p>
                                                    Questo inno in ebraico celebra le stesse nozze dell’epitalamio in italiano
                                                    e venne composto a Salonicco da Immanuel figlio del rabbino Refael Calvo.
                                                    La stampa su seta risale a due anni dopo il matrimonio e si deve
                                                    probabilmente all’intenzione degli sposi di conservarne il ricordo.
                                                </p>
                                            </div>
                                            <div className="spacer-90"></div>
                                        </div>

                                    </div>

                                    <div className="spacer-90"></div>
                                </div>{/* fine testo */}
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Epitalamio;
