import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Link } from "react-router-dom";
import Lightbox from "react-awesome-lightbox";

// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
function Regali() {
    const titolo = "I regali degli sposi";
    const prima = "/miqveh";
    const dopo = "/epitalamio";

    document.querySelector("body").classList.remove("no-scroll");
    window.scrollTo(0, 0);
    const [visibile, setVisibile] = React.useState(false);
    const [visibile2, setVisibile2] = React.useState(false);
    const [visibile3, setVisibile3] = React.useState(false);
    const [visibile4, setVisibile4] = React.useState(false);



    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>
                        <motion.div
                            exit={{ opacity: 0, height: `100vh` }}
                            transition={transition} className="row center" style={{ minHeight: `100vh`, height: "auto" }} >

                            <div className="inverted container--page mostra">

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
                                            Il costume di fare regali agli sposi per le nozze è molto antico. La
                                            Mishnah, una delle prime fonti legislative ebraiche, ne parla mettendo in
                                            rilievo l’aspetto di reciprocità. L’uso rispondeva anche allo scopo di
                                            aiutare la famiglia che si andava formando, con l’aspettativa di ricevere lo
                                            stesso sostegno in futuro. Esistono regali tradizionali che vengono offerti
                                            da parenti e amici come simbolo dell’affetto e dei principi morali e
                                            spirituali che ci si augura possano influenzare la vita della nuova coppia.
                                            Fra questi, troviamo i libri di preghiera e i candelabri per la sposa e il
                                            talled, il manto di preghiera, per lo sposo che lo indosserà per la prima
                                            volta proprio durante le nozze.
                                        </div>
                                    </div>
                                    <div className="spacer-30"></div>

                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            <h3 className="didascalia--titolo">SONETTO</h3>
                                            <div className="didascalia--descrizione">
                                                Crescenzo del Monte (Roma, 2 maggio 1868 - Roma, 27 luglio 1935)<br />I regali
                                                della sposa, Roma, 1935, manoscritto su carta
                                            </div>
                                            <div className="didascalia--prestatore">
                                                Archivio Storico della Comunità Ebraica di Roma
                                            </div>
                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-2">
                                            {visibile ? <Lightbox
                                                image={require("../../images/full/i_regali_degli_sposi/foto_23.jpg").default}
                                                title="Sonetto"
                                                onClose={() => { setVisibile(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/thumbs/i_regali_degli_sposi/foto_23.jpg").default}
                                                alt="Sonetto"
                                                className="responsive"
                                                onClick={() => { setVisibile(true) }}
                                            />
                                        </div>
                                    </div>
                                    <div className="spacer-90"></div>

                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            Questo sonetto in giudaico romanesco di Crescenzo Del Monte è dedicato ai
                                            doni che era uso destinare a una ragazza il giorno delle nozze. Oggetti per
                                            la casa, gioielli ma anche ricami di pizzo per impreziosire abiti e
                                            biancheria, ed un regalo, residuo di una antica usanza, originariamente
                                            assegnato solo dopo la prova della verginità.
                                        </div>
                                    </div>
                                    <div className="spacer-30"></div>
                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24 quote">
                                            «Ha avuto: padr' e madre, li posati;<br />
                                            lo sposo, li recchini de brillanti;<br />
                                            li sòceri, un anello de diamanti<br />
                                            e un bavèro de màrtera i quinati.<br />
                                            Pói: do’ sagliéri, ‘nzor Aròn Amati;<br />
                                            un portóglio, la zia Ricca Vivanti;<br />
                                            i gruppi, l’altri zii fra tutti quanti,<br />
                                            e ‘a sòre i manichetti ricamati»<br />
                                            <br />
                                            «E ‘o regale d’ ‘ii zéppeli, l’ha aùto?»<br />
                                            «’Ha aùt’, ‘ha aùto! Un paro de pennenti,<br />
                                            drent’ un astuccio tutto de velluto!<br />
                                            <br />
                                            Ma il fatto sta, ‘o regale s’ ‘èe pigliato;<br />
                                            quant’ a ‘ i zéppeli pói accitenti<br />
                                            quanno ch’è stat’ al dunque hanno trovato»<br />
                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-2 quote">
                                            Ha avuto: da padre e madre, li posati;<br />
                                            dallo sposo orecchini di brillanti;<br />
                                            dai suoceri un anello di diamanti<br />
                                            e un bavero di martora dai cognati.<br />
                                            Poi: due saliere dal signor Aron Amati;<br />
                                            un’oliera dalla zia Ricca Vivanti;<br />
                                            i candelabri, dagli altri zii fra tutti i quanti<br />
                                            e dalla sorella i manichetti ricamati<br />
                                            <br />
                                            E il regalo delle macchie (prova della verginità) l’ha avuto?<br />
                                            L’ha avuto, l’ha avuto! Un paio di pendenti,<br />
                                            dentro un astuccio tutto di velluto!<br />
                                            <br />
                                            Ma il fatto sta che il regalo se l’è pigliato<br />
                                            quanto agli zeppeli poi, un accidenti<br />
                                            quando è stato il momento hanno trovato!<br />
                                        </div>
                                        <div className="spacer-90"></div>
                                    </div>

                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            {visibile2 ? <Lightbox
                                                image={require("../../images/full/i_regali_degli_sposi/foto_03.jpg").default}
                                                title="Coppia di candelabri"
                                                onClose={() => { setVisibile2(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/thumbs/i_regali_degli_sposi/foto_03.jpg").default}
                                                alt="coppia di candelabri"
                                                className="responsive"
                                                onClick={() => { setVisibile2(true) }}
                                            />
                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-2">
                                            <h3>Coppia di candelabri</h3>
                                            <div className="didascalia--descrizione">
                                                ambito romano, inizio XIX sec., ottone
                                            </div>
                                            <div className="didascalia--prestatore">Collezione privata</div>
                                        </div>
                                        <div className="spacer-90"></div>
                                    </div>

                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            {visibile3 ? <Lightbox
                                                image={require("../../images/full/i_regali_degli_sposi/foto_13.jpg").default}
                                                title="Chatelaine"
                                                onClose={() => { setVisibile3(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/thumbs/i_regali_degli_sposi/foto_13.jpg").default}
                                                alt="Chatelaine"
                                                className="responsive"
                                                onClick={() => { setVisibile3(true) }}
                                            />

                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-2">
                                            <h3>Chatelaine</h3>
                                            <div className="didascalia--descrizione">
                                                Regno Unito (?), sec. XIX, argento
                                            </div>
                                            <div className="didascalia--prestatore">Collezione privata</div>
                                            <p>
                                                In memoria di Giorgio Fano (Roma 1907 – 1944 Fosse Ardeatine)<br />
                                                La chatelaine, o castellana, è un oggetto che in passato ovviava alla
                                                mancanza di tasche nelle gonne e veniva agganciata a una cintura dalla
                                                quale pendevano utensili utili per la donna, fra cui ditali, coltellini,
                                                matite e taccuini. Questo oggetto in particolare apparteneva alle donne
                                                della famiglia Levi di Firenze che lo tramandavano come regalo di
                                                matrimonio.
                                            </p>
                                        </div>
                                        <div className="spacer-90"></div>
                                    </div>

                                    <div className="pure-g">
                                        <div className="pure-u-1 pure-u-md-11-24">
                                            {visibile4 ? <Lightbox
                                                image={require("../../images/full/i_regali_degli_sposi/foto_09.jpg").default}
                                                title="Coppia di braccialetti intrecciati"
                                                onClose={() => { setVisibile4(false) }}
                                            /> : null}
                                            <img
                                                src={require("../../images/thumbs/i_regali_degli_sposi/foto_09.jpg").default}
                                                alt="Coppia di braccialetti intrecciati"
                                                className="responsive"
                                                onClick={() => { setVisibile4(true) }}
                                            />

                                        </div>
                                        <div className="pure-u-1 pure-u-md-1-2">
                                            <h3>Coppia di braccialetti intrecciati</h3>
                                            <div className="didascalia--descrizione">
                                                Treves de Bonfili, Italia, fine XIX secolo, oro
                                            </div>
                                            <div className="didascalia--prestatore">Collezione privata</div>
                                            <p>
                                                Questi braccialetti vengono donati da generazioni alle spose e alle
                                                discendenti della famiglia Treves de Bonfili.<br />
                                                Gli esemplari in mostra sono stati regalati a Elda Wollemborg in occasione
                                                delle nozze con Adolfo Corinaldi, tenutesi il 2 aprile 1925 a Padova. I
                                                braccialetti sono stati donati alla sposa dalla suocera Margherita
                                                Rignano, figlia di Sara Vittoria Treves de Bonfili.
                                            </p>
                                        </div>
                                        <div className="spacer-90"></div>
                                    </div>

                                </div>{/* fine testo */}
                            </div>
                        </motion.div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Regali;
