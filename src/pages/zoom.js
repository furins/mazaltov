import React from "react";

import { useParams, Link } from "react-router-dom";
import { images } from '../image-data/image-data';
import { motion } from "framer-motion";
import { useSelector } from 'react-redux'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Zoom() {
    const headerColor = useSelector(function (state) {
        return "zoom " + state.headerColor.value.payload
    })


    let { id } = useParams();
    id = parseInt(id);



    // navigazione
    let previousId = id - 1;
    if (previousId < 0) {
        previousId = 0;
    }
    let nextId = id + 1;
    if (nextId > images.lastIndex) {
        nextId = images.lastIndex;
    }

    return (

        <motion.div
            className={headerColor}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 1, ...transition },
            }}
            exit={{ opacity: 0 }}>
            <div className='container fluid fullheight'>
                <img src={images[id].full} className="imageZoom" alt={images[id].cognome} />
                <div
                    className='details shrinkable'>
                    <div><Link title="pagina precedente" to={{ pathname: `/zoom/${previousId}/` }} className="link button">←</Link></div>
                    <div><Link title="chiudi" to={{ pathname: `/page/${id}/` }} className="link button">X</Link></div>
                    <div><Link title="pagina successiva" to={{ pathname: `/zoom/${nextId}/` }} className="link button">→</Link></div>
                </div>
            </div>
        </motion.div>

    );
}

export default Zoom;
