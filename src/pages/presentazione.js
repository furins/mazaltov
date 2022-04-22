import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { proxy } from 'valtio'
import fregio from '../images/fregio.svg'



const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


function Presentazione() {
    document.querySelector("body").classList.remove("no-scroll");
    //estetica
    const state = proxy({ headerColor: 'light', showLogo: false })

    return (
        <motion.div
            className="indice fullheight"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ opacity: 0 }}>
            <div className="container--page">

                <div className="row">
                    <h2>PRESENTAZIONE</h2>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1 ">
                        <div style={{ position: "relative", paddingTop: `56.25%` }}>
                            <iframe
                                src="https://iframe.videodelivery.net/2f931ebc4449b863934754c128f5e54f?autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2F2f931ebc4449b863934754c128f5e54f%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                style={{ border: "none", position: "absolute", top: 0, left: 0, height: `100%`, width: `100%` }}
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen={true}
                                title="video presentazione"></iframe>
                        </div>
                    </div>
                </div>
                <div className="spacer-90"></div>
                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-3 l-box">
                        <img className="responsive" src={require('../images/pre-cover.png').default} alt="mazal tov!" />
                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 l-box">
                        <p>Una mostra per raccontare uno dei riti più antichi e affascinanti dell’ebraismo: il matrimonio.</p>
                        <p>Ieri, oggi, domani: il matrimonio ebraico si nutre di precetti e riti del passato, è l’emblema della continuità, affonda le sue radici nella Bibbia; eppure convive con un presente vibrante, dialoga con la cultura nella quale è immerso, segna la nascita di una nuova famiglia. “Mazal Tov!” racconta proprio questo equilibrio tra antico e moderno, accostando preziosi documenti ad opere di arte contemporanea. Al centro ci sono decine di storie; frammenti di discorsi amorosi lunghi secoli e fissati per sempre attraverso oggetti; atti; scatti.</p>
                        {/* <p>Le prime sale illustrano le due fasi e le pratiche che compongono il cerimoniale nuziale: i Qiddushin (o Erusin) e i Nissuin. Anticamente celebrati separatamente, essi si svolgono attualmente insieme, uno immediatamente conseguente all’altro. A renderli caratteristici, l’ambientazione sotto la chuppah, il baldacchino di tessuto che unisce simbolicamente sotto lo stesso tetto i due sposi; la firma della Ketubbah, l’atto nuziale nato anche con lo scopo di tutelare i diritti della donna e che con il tempo è stato arricchito da finissime decorazioni, e la rottura del bicchiere, immortalata da tantissimi film e immagini. Per raccontare in maniera chiara ed esaustiva tutti i passaggi si è scelto di accostare opere e strumenti comunicativi diversi: in mostra verranno esposte le preziose Ketubbot del '600 e del '700 custodite dalle Gallerie Estensi di Modena (Biblioteca Estense Universitaria); il teatrino dell’artista genovese Emanuele Luzzati proveniente dal Museo Ebraico di Bologna e il filmato di un matrimonio contemporaneo. L’esposizione prosegue con una riflessione sul riconoscimento del matrimonio ebraico da parte dello Stato Italiano e il racconto - attraverso cimeli di famiglia - delle tradizioni che con il tempo hanno caratterizzato le nozze: la dote, i regali per lo sposo e per la sposa (che possono variare da una edizione completa del Talmud ad un orologio griffato) e la produzione di componimenti d’occasione.</p>
                        <p> Tra gli esemplari in mostra, un oggetto con una storia tutta da riscoprire: l’album di dediche realizzato dal drammaturgo Sabatino Lopez in onore delle nozze di suo fratello Corrado e della moglie Ada Sadun. Critico letterario e commediografo di successo nella Milano di inizio '900, Lopez decise di donare ai due sposi un regalo del tutto originale: un albo decorato con le firme di amici e colleghi d’eccezione. Tra le pagine spiccano infatti testi autografi - tra gli altri - di Giovanni Pascoli; Giovanni Verga, Giosuè Carducci; Eleonora Duse; Giacomo Puccini; Federico De Roberto e tantissimi altri protagonisti della letteratura e del teatro italiano.</p>
                        <p>    Ad arricchire la mostra anche delle opere di arte contemporanea: Sigalit Landau firma “Salt Crystal Bridal Gown”, un progetto in collaborazione con il fotografo Yotam From - che segue il processo di cristallizzazione di un abito nero immerso nel Mar Morto ed è ispirato all’opera “Il Dibbuk” di S. Ansky, la storia di una giovane sposa posseduta da uno spirito.</p>
                        <p>    Florah Deborah, francese di nascita e milanese di adozione, rielabora e fa comprendere al visitatore il mikveh, il bagno rituale in apposite vasche piene di acqua piovana o sorgiva che compiono le donne alla vigilia del matrimonio. La sua opera “Una per Tutte, Tutte per Una” è stata realizzata appositamente per il MEIS.</p>
                        <p>   L’opera su tela di Jenny Hassan, artista romana, si concentra sul calice degli sposi. La frase che la incornicia è un verso del salmo 137 che viene pronunciato ad alta voce durante la rottura del bicchiere in ricordo della distruzione dell’antico Tempio di Gerusalemme.</p> */}


                    </div>
                    <div className="pure-u-1 pure-u-md-1-3 l-box">
                        <img className="responsive" src={require('../images/pre-cover.png').default} alt="mazal tov!" />
                    </div>

                </div>
                <div className="pure-g">
                    <div className="spacer-30"></div>
                    <div className="row buttons">
                        <Link to='/mappa' onClick={() => { document.querySelector(".menu").classList.remove("showMenu"); state.headerColor = 'light' }} className="link button width-100">
                            VISITA VIRTUALE
                        </Link>
                        <Link to='/mostra' onClick={() => { document.querySelector(".menu").classList.remove("showMenu"); state.headerColor = 'light' }} className="link button width-100">
                            LA MOSTRA
                        </Link>
                        <Link to='/lopez' onClick={() => { document.querySelector(".menu").classList.remove("showMenu"); state.headerColor = 'light' }} className="link button width-100">
                            ALBUM DI NOZZE LOPEZ-SADUN
                        </Link>
                        <Link to='/foto' onClick={() => { document.querySelector(".menu").classList.remove("showMenu"); state.headerColor = 'light' }} className="link button width-100">
                            FOTO MATRIMONI
                        </Link>
                        <Link to='/culture' onClick={() => { document.querySelector(".menu").classList.remove("showMenu"); state.headerColor = 'light' }} className="link button width-100">
                            IL MATRIMONIO NELLE DIVERSE CULTURE
                        </Link>
                    </div>
                </div>

                <div className="spacer-90"></div>
                <img src={fregio} alt="fregio" className="fregio" />
            </div>
            <div className="fascia p-15">
                <div className="spacer-30"></div>

                <div className="pure-g">
                    <div className="pure-u-1 pure-u-md-1-2 w-box p-30">
                        <div className="quote">
                            <p>La mostra “Mazal Tov! Il matrimonio ebraico”, che illustra uno dei momenti più significativi della vita ebraica, è il modo più appropriato per riabbracciare il pubblico del Museo.</p>

                            <p>Dopo un lungo periodo di blocco forzato, durante il quale molte delle belle esperienze che arricchiscono il nostro spirito hanno, purtroppo, conosciuto grandi limitazioni, riapriamo offrendo un approfondimento su un tema che ha sempre destato grande curiosità ed interesse.</p>

                            <p>Una mostra che unisce al rigore scientifico l'intento di intrattenere e accompagnare il visitatore alla scoperta di un rito contrassegnato da tradizioni ricche e variegate</p>

                            <p>Le nozze sono un'esperienza dal carattere fortemente identitario, che resta indelebile nell'esistenza e che ha coniugato nel tempo dettami antichi e usi locali, discipline immutabili e costumi del momento; con un impatto sul modo di vestire, di festeggiare, di celebrare e di allietare i propri invitati.</p>

                            <p>Sono grato ai curatori, il Direttore Amedeo Spagnoletto e Sharon Reichel, alla responsabile dell’allestimento, Giulia Gallerani, e a tutto lo staff del Museo, che, con grande professionalità e dedizione e contando su un tempo a disposizione limitato, hanno ideato e realizzato questa mostra, che, sono convinto, sarà accolta con entusiasmo e partecipazione.</p>

                            <p>Ringrazio sentitamente la Regione Emilia-Romagna, il Comune di Ferrara e l’UCEI, che vedono riconosciuto il loro ruolo come Enti Partecipanti nella nuovo Statuto del MEIS appena approvato dal Ministro della Cultura, e, con loro, il Ministero dell’Istruzione, l’ISCO di Ferrara, il Liceo Scientifico Statale A. Roiti, DiMedia, HERA, Fondazione De Levy e Fondazione Bottari Lattes, senza il cui generoso sostegno questa esposizione che riapre gli spazi del Museo ai tanti visitatori che attendiamo non sarebbe stata realizzabile.</p>

                        </div>
                        <div className="firma">
                            DARIO DISEGNI<br />
                            Presidente<br />
                            Museo Nazionale dell’Ebraismo Italiano e della Shoah
                        </div>


                    </div>
                    <div className="pure-u-1 pure-u-md-1-2 w-box p-30">
                        <div className="quote">
                            <p>L’ebraismo considera il matrimonio la condizione ideale dell’essere umano, un’unione fondata sull’amore e sul rispetto, la cui celebrazione riflette la gioia della coppia, della famiglia e della comunità.</p>
                            <p>Nella Torah e in particolare nella Genesi troviamo menzione del vincolo che lega l’uomo e la donna e l’incoraggiamento a formare una nuova famiglia. Per l’ebraismo questa unione è suggellata dal matrimonio e costituisce uno dei momenti fondamentali della vita di un individuo. Nel Deuteronomio, il quinto libro della Torah, si rintraccia il complesso di norme che regola la costituzione del vincolo e l’eventuale suo scioglimento contemplato dall’ebraismo attraverso il divorzio.</p>
                            <p>Il matrimonio è un rito che ha mantenuto nei secoli la stretta aderenza alle regole e ai dettami definiti quasi duemila anni fa e si è modellato nel tempo accogliendo costumi e mode, plasmandole e adattandole alla tradizione.</p>
                            <p>In una delle benedizioni che si recitano durante la celebrazione del matrimonio si manifestano tutte le espressioni di felicità e fiducia che una nuova unione reca con sé: la gioia e la letizia, l’allegria e il canto, il giubilo e il gaudio, l’amore e la fratellanza, la pace e l’amicizia. Ci auguriamo che tutti questi sentimenti vi accompagnino durante la visita e ancora a lungo.</p>

                        </div>

                        <div className="firma">
                            SHARON REICHEL<br />
                            Curatrice<br />
                            Museo Nazionale dell’Ebraismo Italiano e della Shoah
                        </div> <br />
                        <div className="firma">
                            AMEDEO SPAGNOLETTO <br />
                            Direttore<br />
                            Museo Nazionale dell’Ebraismo Italiano e della Shoah
                        </div>
                    </div>

                    <div className="spacer-30"></div>
                </div>
            </div>
        </motion.div >
    );
}

export default Presentazione;
