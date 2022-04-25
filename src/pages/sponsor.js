import React from "react";
import { motion } from "framer-motion";


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Sponsor() {

    document.querySelector("body").classList.remove("no-scroll");

    return (
        <motion.div
            className="colophon"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ opacity: 0 }}>

            <h2>MAZAL TOV!</h2>

            <div className="loghi">
                <div className="colonna">
                    <h4>Un progetto digitale del</h4>
                    <img className="logo" src={require("../images/meis.png").default} alt="MEIS, Museo Nazionale dell'Ebraismo Italiano e della Shoah" />
                </div>
                <div className="colonna">
                    <h4>Realizzato con il contributo della</h4>
                    <div className="imgText">
                        <img className="logo" src={require("../images/de_levy.png").default} alt="Fondazione Guglielmo de Levy" />
                        <span>Fondazione Guglielmo De Levy</span>
                    </div>
                </div>
            </div>
            <div className="curatelaWrapper">
                <div className="curatela">
                    <div className="nobreak">
                        <h5>a cura di</h5>
                        <ul>
                            <li>Sharon Reichel</li>
                            <li>Amedeo Spagnoletto</li>
                        </ul>
                    </div>

                    <div className="nobreak">
                        <h5>Grafica</h5>
                        <ul>
                            <li>Giulia Gallerani</li>
                        </ul>
                    </div>

                    <div className="nobreak">
                        <h5>Contenuti</h5>
                        <ul>
                            <li>Giovanni Benini (progetto di tirocinio)</li>
                            <li>Rachel Silvera</li>
                            <li>Sharon Reichel</li>
                        </ul>
                    </div>

                    <div className="nobreak">
                        <h5>Segreteria amministrativa</h5>
                        <ul>
                            <li>Nicola Novelli</li>
                        </ul>
                    </div>

                    <div className="nobreak">
                        <h5>Segreteria organizzativa</h5>
                        <ul>
                            <li>Alessandra Roncarati</li>
                            <li>Donatella Buonfrate</li>
                        </ul>
                    </div>

                    <div className="nobreak">
                        <h5>Web design</h5>
                        <ul>
                            <li>Stefano Furin</li>
                        </ul>
                    </div>

                    <div className="nobreak">
                        <h5>Foto</h5>
                        <ul>
                            <li>Francesco Mancin</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="patrocini-wrapper">
                <h3>La mostra MAZAL TOV! è stata realizzata da</h3>
                <img className="patrocini" src={require("../images/mostra-1.png").default} alt="MEIS, Museo Nazionale dell'Ebraismo Italiano e della Shoah" />
                <h4>Con il sostegno di</h4>
                <img className="patrocini" src={require("../images/mostra-2.png").default} alt="Sostenitori" />

                <h4>Con il patrocinio di</h4>
                <img className="patrocini" src={require("../images/mostra-3.png").default} alt="Patrocini" />

                <h4>Con il contributo di</h4>
                <img className="patrocini" src={require("../images/mostra-4.png").default} alt="Sponsor" />

            </div>
        </motion.div>

    );
}

export default Sponsor;
