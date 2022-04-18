import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { images } from '../image-data/image-data';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Indice() {
    document.querySelector("body").classList.remove("no-scroll");
    //estetica

    const listItems = images.map((elemento, index) =>
        <li key={index}><Link to={{ pathname: `/page/${index}/` }}>{elemento.nome} {elemento.cognome}</Link></li>
    );

    return (
        <motion.div
            className="indice fullheight"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ opacity: 0 }}>
            <h2>INDICE</h2>
            <ul>{listItems}</ul>
        </motion.div>
    );
}

export default Indice;
