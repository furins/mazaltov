import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D from "../components/mappa3d";
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Mappa() {
    document.querySelector("body").classList.remove("no-scroll");
    const [target, setTarget] = React.useState("default");
    const [pagina, setPagina] = React.useState("home");
    let titolo = "I TEMI DELLA MOSTRA"

    const impostaPagina = (val) => {
        // pagina è la stanza cliccata dall'utente
        setPagina(val);
    };

    const impostaTarget = (val) => {
        // target è la configurazione di inclinazione, posizione e elementi attivi sulla mappa. 
        // è un elemento transitorio, quindi per ora è necessario passare un "impostaTarget"
        // FIXME la configurazione di rotazione, posizione, oggetti visibili ecc deve essere impostabile direttamente nell'oggetto mappa, con delle properties.
        // FIXME se l'utente le modifica autonomamente, non devono poi essere forzate a ritornare com'erano.
        titolo = sezioni[val].titolo
        setTarget(val);
    };


    const sezioni = {
        "default": { titolo: "I TEMI DELLA MOSTRA", text: "" },
        "qiddushin": { titolo: "Kiddushin", text: require("../contents/sezioni/qiddushin.html").default },
        "ketubbah": { titolo: "Ketubbah", text: require("../contents/sezioni/ketubbah.html").default },
        "nissuin": { titolo: "Nissuin", text: require("../contents/sezioni/nissuin.html").default },
        "matrimonio-civile": { titolo: "Il matrimonio civile", text: require("../contents/sezioni/matrimonio-civile.html").default },
        "chuppah": { titolo: "Chuppah", text: require("../contents/sezioni/chuppah.html").default },
        "mazal-tov": { titolo: "Mazal Tov!", text: require("../contents/sezioni/mazal-tov.html").default },
        "usi-e-costumi": { titolo: "Usi e costumi", text: require("../contents/sezioni/usi-e-costumi.html").default },
        "regolamenti": { titolo: "Regolamenti", text: require("../contents/sezioni/regolamenti.html").default },
        "dote": { titolo: "Dote", text: require("../contents/sezioni/dote.html").default },
        "miqveh": { titolo: "Miqveh", text: require("../contents/sezioni/miqveh.html").default },
        "i-regali-degli-sposi": { titolo: "I regali degli sposi", text: require("../contents/sezioni/i-regali-degli-sposi.html").default },
        "epitalamio": { titolo: "Epitalamio", text: require("../contents/sezioni/epitalamio.html").default },
        "musica": { titolo: "La musica", text: require("../contents/sezioni/musica.html").default },
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
                                    <Mappa3D target={target} setPagina={impostaPagina} setTarget={impostaTarget} />
                                </header>
                            </div>
                        </motion.div>
                        <div className='row bottom-row' style={{ minHeight: `50vh`, height: "auto" }}>
                            <div className='bottom darkbackground'>
                                <h2>{titolo}</h2>
                                <ul className="stanze">
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("qiddushin") }}>Kiddushin</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("ketubbah") }}>Ketubbah</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("nissuin") }}>Nissuin</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("matrimonio-civile") }}>Matrimonio civile</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("chuppah") }}>Chuppah</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("mazal-tov") }}>Mazal Tov!</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("usi-e-costumi") }}>Usi e costumi</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("regolamenti") }}>Regolamenti</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("dote") }}>Dote</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("miqveh") }}>Miqveh</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("i-regali-degli-sposi") }}>I regali degli sposi</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("epitalamio") }}>L'epitalamio</button></li>
                                    <li><button className="link--stanza" onClick={e => { impostaTarget("musica") }}>La musica</button></li>
                                </ul>
                                <div className='container'>
                                    <div id="sezione" dangerouslySetInnerHTML={{ __html: sezioni[target].text }}></div>
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
