import React, { useEffect } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { change } from '../store/headerColorSlice'
import { useDispatch } from 'react-redux'
import Mappa3D from "../components/mappa3d";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Mappa() {
    const dispatch = useDispatch();
    document.querySelector("body").classList.add("no-scroll");
    useEffect(() => {
        dispatch(change('light'));
    }, [dispatch]);

    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>
                        <div className='row top-row'>
                            <Mappa3D />
                        </div>
                        <div className='row bottom-row'>
                            <div className='bottom scroller-wrapper'>
                                <span>Descrizione Sale</span>
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main>
        </>

    );
}

export default Mappa;
