import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG45 } from "../../components/mappa3d";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Dote() {
    const titolo = "Dote";
    const prima = "/regolamenti";
    const dopo = "/miqveh";
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
                                                La ketubbah redatta in aramaico, la lingua del diritto talmudico, riporta
                                                anche l’ammontare complessivo della dote espressa in moneta locale. In
                                                passato prima del matrimonio si stilava di fronte a un notaio l’accordo
                                                dotale. Le doti erano costituite in parte da somme in denaro contante e in
                                                parte dal fardello, o il corredo di abiti, mobili e gioielli che la sposa
                                                portava con sé nella formazione della nuova famiglia. La dote era a carico
                                                della famiglia della sposa, in genere del padre. In sua mancanza, la cura e
                                                l’istituzione del monte dotale era affidata ai parenti prossimi o a
                                                confraternite assistenziali nel caso di fanciulle orfane.
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>
                                        <div style={{ position: "relative", paddingTop: `56.25%` }}>
                                            <iframe
                                                title="La dote"
                                                src="https://iframe.videodelivery.net/79d9727fc3069e439b855cf261b278ad?autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2F79d9727fc3069e439b855cf261b278ad%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                                style={{
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
                                                <h3 className="didascalia--titolo">
                                                    Copriletto matrimoniale, manifattura italiana, inizio XX sec., cotone con
                                                    ricami.
                                                </h3>
                                                <div className="didascalia--descrizione">Donazione Emma Cassuto Lascar</div>
                                                <div className="didascalia--prestatore">
                                                    Museo Nazionale dell’Ebraismo Italiano e della Shoah
                                                </div>
                                                <p>
                                                    Questo copriletto matrimoniale venne realizzato da Corinna Disegni in
                                                    occasione delle nozze con Augusto Cassuto, nella prima metà del Novecento.
                                                    La coppia era di estrazione modesta. La sposa, che era abile nell’arte del
                                                    ricamo, si fece da sola il corredo abbellendolo con ricami di figure
                                                    mitologiche.
                                                </p>
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
                                                {visibile ? <Lightbox
                                                    image={require("../../images/full/dote/foto_01.jpg").default}
                                                    title="Copriletto matrimoniale"
                                                    onClose={() => { setVisibile(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/dote/foto_01.jpg").default}
                                                    alt="Copriletto matrimoniale"
                                                    className="responsive"
                                                    onClick={() => { setVisibile(true) }}
                                                />
                                            </div>
                                        </div>
                                        <div className="spacer-30"></div>

                                        <div className="pure-g">
                                            <div className="pure-u-1 pure-u-md-11-24">
                                                {visibile2 ? <Lightbox
                                                    image={require("../../images/full/dote/foto_02.jpg").default}
                                                    title="KETUBBAH, NOZZE"
                                                    onClose={() => { setVisibile2(false) }}
                                                /> : null}
                                                <img
                                                    src={require("../../images/thumbs/dote/foto_02.jpg").default}
                                                    alt="KETUBBAH, NOZZE"
                                                    className="responsive"
                                                    onClick={() => { setVisibile2(true) }}
                                                />
                                            </div>
                                            <div className="pure-u-1 pure-u-md-1-2">
                                                <h3>KETUBBAH, NOZZE</h3>
                                                <div className="didascalia--descrizione">
                                                    Izchak di Isacchia Ajò con Fortunata di Benedetto Bachis, 8 marcheshvan
                                                    5583, 11 ottobre 1822, Pisa, pergamena manoscritta
                                                </div>
                                                <div className="didascalia--prestatore">
                                                    Collezione Gianfranco Moscati, Museo Nazionale dell’Ebraismo Italiano e
                                                    della Shoah
                                                </div>
                                            </div>
                                            <div className="spacer-90"></div>
                                        </div>

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

export default Dote;
