import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Qiddushin() {
    const titolo = "Kiddushin";
    const prima = "/mostra";
    const dopo = "/ketubbah";
    const rotazione = [DEG45, -1 * DEG45]

    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);
    const [visibile, setVisibile] = React.useState(false);
    const [visibile2, setVisibile2] = React.useState(false);
    const [visibile3, setVisibile3] = React.useState(false);



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
                                            <div className="pure-u-1 p-15">
                                                Il vincolo matrimoniale ha bisogno di un momento di costituzione formale.
                                                Nell’ebraismo quest’atto prende il nome di kiddushin, che significa
                                                santificazione o destinazione. Il senso rimanda al rapporto uomo-donna che
                                                diventa univoco, esclusivo. Originariamente erano previste tre modalità
                                                alternative: la consegna alla donna dell’equivalente di una somma, anche
                                                minima, in denaro o di un oggetto di valore analogo alla presenza di due
                                                testimoni; la consegna di un documento sottoscritto o la consumazione di un
                                                rapporto consensuale a scopo di matrimonio. Fin dai primi secoli dell’era
                                                volgare si è imposta la prima come opzione esclusiva e si è diffusa l’usanza
                                                di consegnare come manufatto prezioso un anello, indossato dalla donna in
                                                modo perpetuo. Questo è infatti il simbolo, con la sua forma tonda,
                                                dell’eternità e della vita. Un tempo il matrimonio era caratterizzato da due
                                                fasi formali distinte, kiddushin e nissuin, di cui i kiddushin costituivano
                                                l’inizio del vincolo fra i nubendi. Oggi entrambe si svolgono sotto la
                                                chuppah, il baldacchino.
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g pswp-gallery">
                                            <div className="pure-u-1 pure-u-md-1-2 p-15">
                                                <h3 className="didascalia--titolo">TALMUD BABILONESE. TRATTATO KIDDUSHIN.</h3>
                                                <div className="didascalia--descrizione">
                                                    Venezia, Daniel Bomberg, 1519-1520, stampa su carta
                                                </div>
                                                <div className="didascalia--prestatore">Centro Bibliografico Ucei, Roma</div>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-4 p-15">
                                                {visibile ? <Lightbox
                                                    image={require("../../images/full/qiddushin/foto_01.jpg").default}
                                                    title="TALMUD BABILONESE. TRATTATO KIDDUSHIN."
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/qiddushin/foto_01.jpg").default}
                                                    alt="TALMUD BABILONESE. TRATTATO KIDDUSHIN."
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
                                                />

                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-4 p-15">
                                                {visibile2 ? <Lightbox
                                                    image={require("../../images/full/qiddushin/foto_03.jpg").default}
                                                    title="TALMUD BABILONESE. TRATTATO KIDDUSHIN."
                                                    onClose={() => { setVisibile2(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/qiddushin/foto_03.jpg").default}
                                                    alt="TALMUD BABILONESE. TRATTATO KIDDUSHIN."
                                                    className="responsive"
                                                    onClick={() => { setVisibile2(true) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-1-2 p-15">
                                                {visibile3 ? <Lightbox
                                                    image={require("../../images/full/qiddushin/foto_06.jpg").default}
                                                    title="FEDE NUZIALE, Italia, 1865, oro con ametista"
                                                    onClose={() => { setVisibile3(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/qiddushin/foto_06.jpg").default}
                                                    alt="foto anello"
                                                    className="responsive"
                                                    onClick={() => { setVisibile3(true) }}
                                                />

                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2 p-15">
                                                <h3>FEDE NUZIALE, Italia, 1865, oro con ametista</h3>
                                                <p>
                                                    All’interno l’incisione: “ADN (Allegra Di Nola) MDP (Mattatia Di Porto) 27
                                                    Agosto 1865”. Mattatia Di Porto sposò Allegra Di Nola il 27 agosto 1865.
                                                    In seguito al matrimonio, la coppia si trasferì a Pisa dove visse e
                                                    prosperò. Il figlio Settimio ereditò l’anello e lo donò alla moglie Egle
                                                    Coen quando lei diede la fede nuziale per la raccolta dell’oro alla patria
                                                    nel 1935. In questo modo non dovette indossare la fede in ferro che veniva
                                                    consegnata dal regime fascista. <br />Collezione Privata
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

export default Qiddushin;
