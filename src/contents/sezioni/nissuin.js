import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Nissuin() {
    const titolo = "Nissuin";
    const prima = "/ketubbah";
    const dopo = "/matrimonio-civile";
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
                                                Completati i kiddushin, dopo un momento in cui il celebrante pronuncia un
                                                breve discorso augurale, si giunge alla fase conclusiva del matrimonio, i
                                                nissuin o le nozze. La sposa e lo sposo si trovano sotto al baldacchino
                                                insieme a due testimoni e all’officiante, di norma un rabbino, circondati
                                                dalla famiglia, dai parenti e dagli amici. Dopo la lettura e la consegna
                                                alla sposa della ketubbah, segue la recitazione delle sheva berachot, le
                                                sette benedizioni nuziali, canti rituali dedicati al matrimonio e al futuro
                                                della coppia. Conclusa la recitazione delle sette benedizioni, il celebrante
                                                porge un calice di vino agli sposi e ciascuno ne beve un sorso. Al termine
                                                della celebrazione lo sposo rompe il bicchiere per ricordare simbolicamente,
                                                anche in un momento di gioia, la distruzione del Tempio di Gerusalemme. I
                                                sette giorni che seguono le nozze sono considerati per gli sposi come festa
                                                solenne, essi non si occupano di affari o di impegni, ma dedicano il loro
                                                tempo a gioire, allietati da parenti e amici.
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-1-2">
                                                <h3 className="didascalia--titolo">Seder Nissuin.</h3>
                                                <div className="didascalia--descrizione">
                                                    Ordine della cerimonia di matrimonio, Padova, sec. XIX, manoscritto con
                                                    decori a stampa incollati
                                                </div>
                                                <div className="didascalia--prestatore">Comunità Ebraica di Padova</div>
                                                <p>
                                                    In questo testo, proveniente dalla Scola Spagnola di Padova, è riportato
                                                    l’ordine della cerimonia di matrimonio, condotta da un celebrante che
                                                    recita agli sposi due serie di benedizioni, connesse alle due fasi: i
                                                    kiddushin (la santificazione o destinazione) e i nissuin, le nozze vere e
                                                    proprie. In entrambi i casi la prima benedizione è sul vino, simbolo di
                                                    abbondanza e di allegria. Le altre sono dedicate alla creazione dell’uomo
                                                    e della donna, alla nazione d’Israele alla felicità e alla pace, alla
                                                    ricostruzione di Gerusalemme.
                                                </p>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-4">
                                                {visibile ? <Lightbox
                                                    image={require("../../images/full/nissuin/foto_03.jpg").default}
                                                    title="Seder Nissuin."
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/nissuin/foto_03.jpg").default}
                                                    alt="Seder Nissuin"
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
                                                />
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-4">
                                                {visibile ? <Lightbox
                                                    image={require("../../images/full/nissuin/foto_04.jpg").default}
                                                    title="Seder Nissuin."
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/nissuin/foto_04.jpg").default}
                                                    alt="Seder Nissuin"
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
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

export default Nissuin;
