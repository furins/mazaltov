import React, { useEffect } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Scroller } from "../components/scroller.js";
import { change } from '../store/headerColorSlice'
import { useDispatch } from 'react-redux'

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Home() {
  const dispatch = useDispatch();
  //estetica
  useEffect(() => {
    dispatch(change('light'));
  }, [dispatch]);

  return (
    <>
      <main className="main">
        <div className='container fluid'>
          <AnimateSharedLayout>
            <motion.div
              exit={{ opacity: 0, height: 0 }}
              transition={transition} className='row center top-row'>
              <div className='top'>
                <h1 className="details">Album in onore delle nozze fra Corrado Lopez e Ada Sadun</h1>
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

export default Home;
