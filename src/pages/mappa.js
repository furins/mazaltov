import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Mappa3D from "../components/mappa3d";
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Mappa() {
    document.querySelector("body").classList.add("no-scroll");
    const [target, setTarget] = React.useState("miao");

    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>
                        <motion.div
                            exit={{ opacity: 0, height: `100vh` }}
                            transition={transition} className='row center top-row'>
                            <div className='row top-row' >
                                <header style={{ height: `50vh` }}>
                                    <Mappa3D target={target} />
                                </header>
                            </div>
                        </motion.div>
                        <div className='row bottom-row'>
                            <div className='bottom darkbackground'>
                                <button onClick={e => { setTarget("ciao") }}>Obiettivo ciao</button>
                                <button onClick={e => { setTarget("miao") }}>Obiettivo miao</button>
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Mappa;
