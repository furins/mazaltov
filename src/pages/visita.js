import React from "react";
import { motion } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Visita() {
    document.querySelector("body").classList.remove("no-scroll");
    //estetica

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
                    <h2>VISITA VIRTUALE</h2>
                </div>
                <div className="pure-g">
                    <div className="pure-u-1 ">
                        <div style={{ position: "relative", paddingTop: `56.25%`, width: `90vw` }}>
                            <iframe
                                src="https://iframe.videodelivery.net/e6b5da35c5d46e342d8ec348dcda36e3?autoplay=true&poster=https%3A%2F%2Fvideodelivery.net%2Fe6b5da35c5d46e342d8ec348dcda36e3%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600"
                                style={{ border: "none", position: "absolute", top: 0, left: 0, height: `100%`, width: `100%` }}
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                                allowFullScreen={true}
                                title="video presentazione"></iframe>
                        </div>
                    </div>
                </div>

            </div>
        </motion.div >
    );
}

export default Visita;
