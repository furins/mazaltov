import React from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Scroller } from "../components/scroller.js";


const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Lopez() {

  document.querySelector("body").classList.add("no-scroll");


  return (
    <>
      <main className="main">
        <div className='container fluid'>
          <AnimateSharedLayout>
            <motion.div
              exit={{ opacity: 0, height: 0 }}
              transition={transition} className='row center top-row'>
              <div className='top'>
                <img className="album" src={require("../images/album.png").default} alt="Album in onore delle nozze fra Corrado Lopez e Ada Sadun" />
              </div>
            </motion.div>
            <div className='row bottom-row'>
              <div className='bottom scroller-wrapper'>
                <Scroller />
              </div>
            </div>
          </AnimateSharedLayout>

        </div>
      </main>
    </>

  );
}

export default Lopez;
