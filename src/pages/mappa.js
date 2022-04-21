import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D, { DEG06, DEG45 } from "../components/mappa3d";


const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Mappa() {
    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);
    const [target, setTarget] = React.useState("default");
    const [pagina, setPagina] = React.useState("home");

    const impostaPagina = (val) => {
        // pagina è la stanza cliccata dall'utente
        setPagina(val);
    };

    const impostaTarget = (val) => {
        // target è la configurazione di inclinazione, posizione e elementi attivi sulla mappa. 
        // è un elemento transitorio, quindi per ora è necessario passare un "impostaTarget"
        // FIXME la configurazione di rotazione, posizione, oggetti visibili ecc deve essere impostabile direttamente nell'oggetto mappa, con delle properties.
        // FIXME se l'utente le modifica autonomamente, non devono poi essere forzate a ritornare com'erano.
        setTarget(val);
    };


    const sezioni = {
        "default": { titolo: "I TEMI DELLA MOSTRA", text: require("../contents/sezioni/default.html").default, precedente: "musica", successivo: "qiddushin", rotazione: [0, 0] },
        "qiddushin": { titolo: "Kiddushin", text: require("../contents/sezioni/qiddushin.html").default, precedente: "default", successivo: "ketubbah", rotazione: [DEG06, -1 * DEG45] },
        "ketubbah": { titolo: "Ketubbah", text: require("../contents/sezioni/ketubbah.html").default, precedente: "qiddushin", successivo: "nissuin", rotazione: [DEG06, DEG45] },
        "nissuin": { titolo: "Nissuin", text: require("../contents/sezioni/nissuin.html").default, precedente: "ketubbah", successivo: "matrimonio-civile", rotazione: [DEG45, -1 * DEG06] },
        "matrimonio-civile": { titolo: "Il matrimonio civile", text: require("../contents/sezioni/matrimonio-civile.html").default, precedente: "nissuin", successivo: "chuppah", rotazione: [DEG06, -1 * DEG45] },
        "chuppah": { titolo: "Chuppah", text: require("../contents/sezioni/chuppah.html").default, precedente: "matrimonio-civile", successivo: "mazal-tov", rotazione: [DEG45, -1 * DEG45] },
        "mazal-tov": { titolo: "Mazal Tov!", text: require("../contents/sezioni/mazal-tov.html").default, precedente: "chuppah", successivo: "usi-e-costumi", rotazione: [DEG06, -1 * DEG06] },
        "usi-e-costumi": { titolo: "Usi e costumi", text: require("../contents/sezioni/usi-e-costumi.html").default, precedente: "mazal-tov", successivo: "regolamenti", rotazione: [DEG06, DEG45] },
        "regolamenti": {
            titolo: "Regolamenti", text: require("../contents/sezioni/regolamenti.html").default, precedente: "usi-e-costumi", successivo: "dote", rotazione: [DEG06, -1 * DEG45]
        },
        "dote": { titolo: "Dote", text: require("../contents/sezioni/dote.html").default, precedente: "regolamenti", successivo: "miqveh", rotazione: [DEG06, -1 * DEG45] },
        "miqveh": {
            titolo: "Miqveh", text: require("../contents/sezioni/miqveh.html").default, precedente: "dote", successivo: "i-regali-degli-sposi", rotazione: [DEG06, DEG45]
        },
        "i-regali-degli-sposi": { titolo: "I regali degli sposi", text: require("../contents/sezioni/i-regali-degli-sposi.html").default, precedente: "miqveh", successivo: "epitalamio", rotazione: [DEG06, DEG45] },
        "epitalamio": { titolo: "Epitalamio", text: require("../contents/sezioni/epitalamio.html").default, precedente: "i-regali-degli-sposi", successivo: "musica", rotazione: [DEG06, DEG45] },
        "musica": {
            titolo: "La musica", text: require("../contents/sezioni/musica.html").default, precedente: "epitalamio", successivo: "default", rotazione: [DEG06, DEG45]
        },
    }

    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>
                        <motion.div
                            exit={{ opacity: 0, height: `100vh` }}
                            transition={transition} className='row center top-row'>
                            <div className='row top-row' >
                                <header style={{ height: `50vh`, position: "relative" }}>
                                    <Mappa3D target={target} setPagina={impostaPagina} setTarget={impostaTarget} rotazione={sezioni[target].rotazione} />
                                </header>
                            </div>
                        </motion.div>
                        <div className='row bottom-row' style={{ minHeight: `50vh`, height: "auto" }}>
                            <div className='bottom'>
                                <div className="inverted container--page" id="sezione">
                                    <div className="spacer-90"></div>

                                    <h2 className="with-buttons">{sezioni[target].titolo}
                                        <button className={target === "default" ? "hidden" : "link--stanza small right"} onClick={e => { impostaTarget(sezioni[target].successivo) }}>→</button>
                                        <button className={target === "default" ? "hidden" : "link--stanza small right"} onClick={e => { impostaTarget(sezioni[target].precedente) }}>←</button>
                                    </h2>
                                    <div className="spacer-90"></div>
                                    <div className="">
                                        <div dangerouslySetInnerHTML={{ __html: sezioni[target].text }}></div>
                                    </div>
                                    <div className={target === "default" ? "hidden" : ""}>
                                        <div className="spacer-30"></div>
                                        <h3>ALTRE SEZIONI</h3>
                                    </div>
                                    <div className="buttons">
                                        <button className={target === "qiddushin" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("qiddushin") }}>Kiddushin</button>
                                        <button className={target === "ketubbah" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("ketubbah") }}>Ketubbah</button>
                                        <button className={target === "nissuin" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("nissuin") }}>Nissuin</button>
                                        <button className={target === "matrimonio-civile" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("matrimonio-civile") }}>Matrimonio civile</button>
                                        <button className={target === "chuppah" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("chuppah") }}>Chuppah</button>
                                        <button className={target === "mazal-tov" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("mazal-tov") }}>Mazal Tov!</button>
                                        <button className={target === "usi-e-costumi" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("usi-e-costumi") }}>Usi e costumi</button>
                                        <button className={target === "regolamenti" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("regolamenti") }}>Regolamenti</button>
                                        <button className={target === "dote" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("dote") }}>Dote</button>
                                        <button className={target === "miqveh" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("miqveh") }}>Miqveh</button>
                                        <button className={target === "i-regali-degli-sposi" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("i-regali-degli-sposi") }}>I regali degli sposi</button>
                                        <button className={target === "epitalamio" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("epitalamio") }}>L'epitalamio</button>
                                        <button className={target === "musica" ? "hidden" : "link--stanza"} onClick={e => { impostaTarget("musica") }}>La musica</button>
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

export default Mappa;
