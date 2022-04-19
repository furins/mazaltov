import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { proxy } from 'valtio'
import YoutubeEmbed from "../components/YoutubeEmbed";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Indice() {
    document.querySelector("body").classList.remove("no-scroll");
    //estetica

    const state = proxy({ headerColor: 'light' })


    return (
        <motion.div
            className="indice fullheight"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ opacity: 0 }}>
            <YoutubeEmbed embedId="Zs6z96ubfrQ" />
            <div className="container">
                <div className="row">
                    <div className="column">
                        <h2>Introduzione alla mostra</h2>
                    </div>
                    <div className="column"> <ul>
                        <li>
                            <Link to='/mappa' onClick={() => { document.querySelector(".menu").classList.remove("showMenu"); state.headerColor = 'light' }}>
                                VISITA VIRTUALE
                            </Link>
                        </li>
                        <li>
                            <Link to='/lopez' onClick={() => { document.querySelector(".menu").classList.remove("showMenu"); state.headerColor = 'light' }}>
                                ALBUM IN ONORE DELLE NOZZE FRA CORRADO LOPEZ E ADA SADUN
                            </Link>
                        </li>
                        <li>
                            <Link to='/colophon/' onClick={() => {
                                document.querySelector(".menu").classList.remove("showMenu");
                                state.headerColor = 'dark'
                            }}>
                                COLOPHON
                            </Link>
                        </li>
                        <li>
                            <a href="https://meis.museum/la-fondazione/sostieni/" target="_blank" rel="noreferrer">
                                SOSTIENICI
                            </a>
                        </li>
                    </ul></div>
                </div>
            </div>

        </motion.div>
    );
}

export default Indice;
