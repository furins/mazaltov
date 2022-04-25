import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Ketubbah() {
    const titolo = "Ketubbah";
    const prima = "/qiddushin";
    const dopo = "/nissuin";
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
                                                Ketubbah, termine che in ebraico significa “scritto”, è un documento le cui
                                                origini, secondo molti, sono già rintracciabili nei testi biblici e in cui
                                                sono incluse le responsabilità del marito nei confronti della sposa, come
                                                l’impegno ad onorarla, non farle mancare vestiario, alimenti e ogni
                                                necessità coniugale. In esso, oltre ad essere definito l’importo della dote,
                                                viene prevista obbligatoriamente una somma aggiuntiva che il marito si
                                                impegna a corrispondere alla moglie in caso di divorzio senza addebito. La
                                                ketubbah deve essere consegnata alla sposa subito dopo i kiddushin e prima
                                                dei nissuin. Il contratto matrimoniale nasce come istituto giuridico a
                                                tutela della moglie, un deterrente rispetto al possibile arbitrio di
                                                ripudiare a cuore leggero la consorte, lasciandola priva di garanzie. Questo
                                                documento personalizzato, fino all’epoca recente stilato a mano, è spesso
                                                arricchito da decorazioni e frasi ornamentali che testimoniano insieme la
                                                gioia dell’atto e lo status sociale dei contraenti. Fra il XVII ed il XIX
                                                secolo, l’Italia è il luogo in cui questa arte ha trovato maggiore sviluppo
                                                e magnificenza.
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>
                                        <div style={{ position: "relative", paddingTop: `56.25%` }}>
                                            <iframe
                                                title="Ketubbah"
                                                src="https://iframe.videodelivery.net/45d1e5b241bcaf7c1fe32de5ad08dd44?autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2F45d1e5b241bcaf7c1fe32de5ad08dd44%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                                style=
                                                {{
                                                    border: "none",
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    height: `100%`,
                                                    width: `100%`,
                                                }}

                                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                                allowfullscreen="true"
                                            ></iframe>
                                        </div>
                                        <div className="spacer-30"></div>
                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                <h3 className="didascalia--titolo">KETUBBAH</h3>
                                                <div className="didascalia--descrizione">
                                                    Nozze di Shabbetai del fu Izchak Uzziel e Naomi di Shelomoh Foa, venerdì 1
                                                    elul 5488, Modena, 1728, manoscritto su pergamena
                                                </div>
                                                <div className="didascalia--prestatore">
                                                    Biblioteca Estense Universitaria, Gallerie Estensi, Modena
                                                </div>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
                                                {visibile ? <Lightbox
                                                    image={require("../../images/full/kettubah/foto_01.jpg").default}
                                                    title="KETUBBAH."
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/kettubah/foto_01.jpg").default}
                                                    alt="Ketubbah"
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                <h3 className="didascalia--titolo">KETUBBAH</h3>
                                                <div className="didascalia--descrizione">
                                                    Nozze di Shemuel Chaim di Avraham Padova e Eva del fu Refael Yehoshua
                                                    Ravenna, venerdì 12 elul 5389, Carpi, 1629, manoscritto su pergamena
                                                </div>
                                                <div className="didascalia--prestatore">
                                                    Biblioteca Estense Universitaria, Gallerie Estensi, Modena
                                                </div>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
                                                {visibile2 ? <Lightbox
                                                    image={require("../../images/full/kettubah/foto_02.jpg").default}
                                                    title="Ketubbah."
                                                    onClose={() => { setVisibile2(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/kettubah/foto_02.jpg").default}
                                                    alt="Ketubbah"
                                                    className="responsive"
                                                    onClick={() => { setVisibile2(true) }}
                                                />
                                            </div>
                                            <div className="spacer-90"></div>
                                        </div>

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

export default Ketubbah;
