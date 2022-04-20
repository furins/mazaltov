import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useParams
} from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import { useDispatch } from 'react-redux'
import { change } from '../store/headerColorSlice'

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
document.querySelector("body").classList.remove("no-scroll");

const Foto = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = parseInt(id);

  //estetica
  // FIXME va corretto, deve usare il nuovo metodo per gestire gli stati
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, dispatch])

  // animazione
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);



  // contenuto
  return (
    <>
      <motion.div
        onAnimationComplete={() => setCanScroll(true)}
        className='single'
        initial='initial'
        animate='animate'
        exit='exit'>
        <div className='container fluid'>
          <div className='row center top-row'>
            <motion.div className='scroller-wrapper'
              transition={transition}
              initial={{
                backgroundColor: "rgba(37, 48, 129, 0.7)",
              }}
              animate={{
                backgroundColor: "#ffffff",
              }}>
              <div className='scroller'>
                <motion.div
                  className='scroller-img-wrapper'
                  transition={transition}
                  initial={{
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.5)",
                    borderRadius: "10px",
                  }}
                  animate={{
                    transition: { delay: 0.2, ...transition },
                    boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
                    borderRadius: "0px",
                  }}>
                  <motion.div
                    className='frame-single'
                    whileHover='hover'
                  >
                    <ProgressiveImage
                      src={require("../images/pre-cover.png").default}
                      placeholder={require("../images/pre-cover.png").default}>
                      {(src) => (<motion.img
                        src={src}
                        alt="pre_cover"
                        transition={transition}
                        initial={{
                          width: "350px",
                        }}
                        animate={{
                          transition: { delay: 0.2, ...transition },
                          width: "130vw",
                        }}
                      />)}</ProgressiveImage>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

          </div>
          <div className='row bottom-row'>
            <div className='top'>

              <h2>FOTO MATRIMONI</h2>


            </div>

          </div>
        </div>
        <div className='detailed-information'>
          <div className='container'>
            <div className='row'>
              testo
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Foto;
