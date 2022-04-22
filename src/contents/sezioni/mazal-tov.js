import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function MazalTov() {
    const titolo = "Mazal Tov!";
    const prima = "/chuppah";
    const dopo = "/usi-e-costumi";
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
                                                Dopo la rottura del bicchiere tutti i partecipanti al matrimonio gridano a
                                                gran voce: Mazal Tov! Un augurio di buona fortuna che accompagna gli sposi
                                                nella nuova fase della loro vita insieme e alimenta la speranza che l’amore
                                                non si affievolisca nel tempo, ma resti per sempre saldo. Terminata la
                                                cerimonia religiosa sono tanti i modi di sottolineare la gioia per la nuova
                                                unione, dopo il banchetto nuziale lo sposo e la sposa sono festeggiati come
                                                se fossero un re e una regina e vengono loro dedicati canti e balli. Nel
                                                corso delle danze marito e moglie vengono sollevati sopra a delle sedie,
                                                attorniati da parenti e amici. Un vortice di allegria che chiude un evento
                                                ancora oggi centrale nelle vite degli ebrei italiani.
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                <h3 className="didascalia--titolo">Jenny Hassan, Il calice degli sposi</h3>
                                                <div className="didascalia--descrizione">
                                                    10 maggio 2021, opera materica su tela, tecnica mista acrilico e
                                                    cristalli.
                                                </div>
                                                <p>
                                                    L’opera è stata creata in occasione del matrimonio di Robert Hassan con
                                                    Micol Anticoli in data 17 Sivan 5774 - 15 giugno 2014.<br />
                                                    La frase che incornicia il bicchiere è un verso del salmo 137 “Se ti
                                                    dimentico, Gerusalemme, si paralizzi la mia destra” che è declamata
                                                    durante la rottura del calice a ricordo della distruzione del Tempio.
                                                </p>
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

export default MazalTov;
