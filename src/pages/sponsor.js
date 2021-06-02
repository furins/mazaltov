import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { change } from '../store/headerColorSlice'
import { useDispatch } from 'react-redux'

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function Sponsor() {
    const dispatch = useDispatch();
    document.querySelector("body").classList.remove("no-scroll");
    //estetica
    useEffect(() => {
        dispatch(change('light'));
    }, [dispatch])

    return (
        <motion.div
            className="menu fullheight"
            initial={{ y: "-100vh" }}
            animate={{
                y: 0,
                transition: { duration: 0.6, ...transition },
            }}
            exit={{ y: "100vh" }}>
            SPONSOR
        </motion.div>
    );
}

export default Sponsor;
