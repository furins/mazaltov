import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useParams, Link
} from "react-router-dom";
import { images } from '../image-data/image-data';
import ProgressiveImage from "react-progressive-graceful-image";
import { useDispatch } from 'react-redux'
import { change } from '../store/headerColorSlice'

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};



const Model = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  id = parseInt(id);

  //estetica
  useEffect(() => {
    dispatch(change(images[id].dark ? 'dark' : 'light'));
  }, [id, dispatch])


  // navigazione
  let previousId = id - 1;
  if (previousId < 0) {
    previousId = 0;
  }
  let nextId = id + 1;
  if (nextId > images.lastIndex) {
    nextId = images.lastIndex;
  }

  // animazione
  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);

  const animazioneLettereNome = images[id].nome.replace(/ /g, '\u00a0').split("").map((lettera, idx) =>
    <motion.span variants={letter} key={idx}>{lettera}</motion.span>
  );
  const animazioneLettereCognome = images[id].cognome.replace(/ /g, '\u00a0').split("").map((lettera, idx) =>
    <motion.span variants={letter} key={idx}>{lettera}</motion.span>
  );

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
                      src={images[id].full}
                      placeholder={images[id].thumb}>
                      {(src) => (<motion.img
                        src={src}
                        alt={images[id].nome}
                        transition={transition}
                        initial={{
                          width: "350px",
                        }}
                        animate={{
                          transition: { delay: 0.2, ...transition },
                          width: "108vw",
                        }}
                      />)}</ProgressiveImage>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

          </div>
          <div className='row bottom-row'> <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div><Link to={{ pathname: `/page/${previousId}/` }} className="link button">←</Link></div>
              <div><Link to={{ pathname: `/` }} className="link button">↑</Link></div>
              <div><Link to={{ pathname: `/page/${nextId}/` }} className="link button">→</Link></div>
            </motion.div>
            <motion.div className='model'>
              <motion.span className='first' variants={firstName}>
                {animazioneLettereNome}
              </motion.span>
              <motion.span className='last' variants={lastName}>
                {animazioneLettereCognome}
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='page-buttons'>
              <Link to={{ pathname: `/zoom/${id}/` }} className="link button">Ingrandisci pagina</Link>
            </motion.div>
          </div>

          </div>
        </div>
        <div className='detailed-information'>
          <div className='container'>
            <div className='row'>
              <div id="informazioni" dangerouslySetInnerHTML={{ __html: images[id].text }}></div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Model;
