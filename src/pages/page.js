import React, { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  useParams, Link
} from "react-router-dom";
import { images } from '../image-data/image-data';
import ProgressiveImage from "react-progressive-graceful-image";

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

const Model = ({ imageDetails }) => {
  let { id } = useParams();
  id = parseInt(id);
  let previousId = id - 1;
  if (previousId < 0) {
    previousId = 0;
  }
  let nextId = id + 1;
  if (nextId > images.lastIndex) {
    nextId = images.lastIndex;
  }
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

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

  return (
    <motion.div
      onAnimationComplete={() => setCanScroll(true)}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className='container fluid'>
        <div className='row center top-row'>
          <div className='top'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1.2, ...transition },
              }}
              className='details'>
              <div><Link to={{ pathname: `/page/${previousId}/` }}>Precedente</Link></div>
              <div><Link to={{ pathname: `/page/${nextId}/` }}>Successivo</Link></div>
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
              <a href="#informazioni" className="link button">Informazioni</a>
              <a href="#informazioni" className="link button">Visualizza pagina</a>
            </motion.div>
          </div>
        </div>
        <div className='row bottom-row'>
          <div className='bottom'>
            <motion.div className='image-container-single'>
              <motion.div
                initial={{
                  y: "-40vh",
                  width: 350
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerWidth > 1440 ? "50vh" : "50vh",
                  transition: { delay: 0.2, ...transition },
                }}
                className='thumbnail-single'>
                <motion.div
                  className='frame-single'
                  whileHover='hover'
                  transition={transition}>
                  <ProgressiveImage
                    src={images[id].full}
                    placeholder={images[id].thumb}>
                    {(src) => (<motion.img
                      src={src}
                      alt='an image'
                      style={{ scale: scale }}
                      initial={{ scale: 1.0 }}
                      animate={{
                        transition: { delay: 0.2, ...transition },
                        y: window.innerWidth > 1440 ? 0 : 0, // scostamento verso l'alto
                      }}
                    />)}</ProgressiveImage>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='detailed-information'>
        <div className='container'>
          <div className='row'>
            {/* <h2 className='title'>
              VISUALIZZA PAGINA
                    </h2>*/}
            <div id="informazioni" dangerouslySetInnerHTML={{ __html: images[id].text }}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Model;
