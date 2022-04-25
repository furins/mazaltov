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
    const prima = "/matrimonio-civile";
    const dopo = "/mazal-tov";
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
                                                La cerimonia nuziale ha luogo sotto la chuppah, o baldacchino, lo spazio in
                                                cui la coppia di sposi si trova per celebrare il matrimonio e che
                                                rappresenta simbolicamente la loro futura casa. Nell’antichità la chuppah
                                                era la tenda o la stanza dello sposo, questa usanza si è poi evoluta fino
                                                all’attuale composizione di un tessuto teso su quattro pali, in alcuni casi
                                                sostituito dal talled, il manto di preghiera dell’uomo, che si stende sul
                                                capo degli sposi. Oltre alla coppia, si trovano vicino al baldacchino i
                                                genitori dei due sposi, due testimoni e il rabbino che officia la cerimonia.
                                                In alcune tradizioni la chuppah viene costruita all’esterno, sotto il cielo
                                                e se possibile sotto le stelle, in segno di buon augurio; in altre viene
                                                allestita all’interno di una sinagoga. I baldacchini cambiano foggia a
                                                seconda del gusto del tempo e seguono la moda del momento, come i vestiti
                                                degli sposi, testimoni di una celebrazione antica che continua ancora oggi.
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                <h3 className="didascalia--titolo">EMANUELE LUZZATI (1921-2007).</h3>
                                                <div className="didascalia--descrizione">
                                                    Il Matrimonio, Italia, 1988, tavola, tecnica mista
                                                </div>
                                                <div className="didascalia--prestatore">Museo Ebraico di Bologna</div>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
                                                {visibile ? <Lightbox
                                                    image={require("../../images/full/nissuin/foto_01.jpg").default}
                                                    title="Emanuele Luzzati - il matrimonio"
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/nissuin/foto_01.jpg").default}
                                                    alt="Emanuele Luzzati - il matrimonio"
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
                                                />
                                            </div>
                                        </div>

                                        <div className="spacer-90"></div>
                                    </div>
                                </div>{/* fine testo */}
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Chuppah;
