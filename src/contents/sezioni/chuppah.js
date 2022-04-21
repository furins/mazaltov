import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Chuppah() {
    const titolo = "Chuppah";

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
                                <Mappa3D target="chuppah" rotazione={[DEG45, -1 * DEG45]} />
                            </header>

                        </motion.div>
                        <div className="row bottom-row" style={{ minHeight: `50vh`, height: "auto" }}>
                            <div className='bottom'>
                                <div className="inverted container--page" >
                                    <div className="spacer-90"></div>

                                    <h2 className="with-buttons">{titolo}
                                        <Link className={"bottone--dx right"} to="/mazal-tov">→</Link>
                                        <Link className={"bottone--cx right"} to="/mostra">↑</Link>
                                        <Link className={"bottone--sx right"} to="/matrimonio-civile">←</Link>



                                    </h2>
                                    <div className="spacer-90"></div>
                                    <div className="">{/* inserire qui il testo */}
                                        <div className="pure-g">
                                            <div className="pure-u-1">
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
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                <h3 className="didascalia--titolo">TALMUD BABILONESE. TRATTATO KIDDUSHIN.</h3>
                                                <div className="didascalia--descrizione">
                                                    Venezia, Daniel Bomberg, 1519-1520, stampa su carta
                                                </div>
                                                <div className="didascalia--prestatore">Centro Bibliografico Ucei, Roma</div>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-4">
                                                {visibile ? <Lightbox
                                                    image="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/Talmud-Kiddushin-3-1024x683.jpeg"
                                                    title="Image Title"
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/Talmud-Kiddushin-3-1024x683.jpeg"
                                                    alt="foto talmud 2"
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
                                                />

                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-4">
                                                <img
                                                    src="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/Talmud-Kiddushin-2-1024x683.jpeg"
                                                    alt="foto talmud 2"
                                                    className="responsive"
                                                />
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                <img
                                                    src="https://mazaltov.meis.museum/exhibit/wp-content/uploads/2022/04/FEDE-NUZIALE-ALLEGRA-DI-NOLA-Italia-1865-2-1024x683.jpeg"
                                                    alt="foto anello"
                                                    className="responsive"
                                                />
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
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
                                </div>
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Chuppah;