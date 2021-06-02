import * as React from 'react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { images } from '../image-data/image-data';
import ProgressiveImage from "react-progressive-graceful-image";
import { useHistory } from "react-router-dom";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const titleVariants = {
  exiting: { opacity: 0, height: 0 },
  normal: { opacity: 1, height: "43px" },
};



/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const Scroller = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isExiting, setIsExiting] = useState(false)
  const history = useHistory();


  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const isDragging = useRef(false);
  function onTap(event, info) {
    if (!isDragging.current) {
      setIsExiting(isExiting => true)
      history.push('/page/' + imageIndex + '/')
    }

  }
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="scroller"
          transition={{
            boxShadow: { duration: 0 },
            x: { type: 'spring', stiffness: 100, damping: 20 },
            opacity: { duration: 0.2 },
          }}
          whileHover={{ scale: 1.05 }}

          onDragStart={() => {
            isDragging.current = true;
          }}
          onTap={onTap}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            setTimeout(() => {
              isDragging.current = false;
            }, 150);
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <span className="scroller-img-wrapper">
            <ProgressiveImage
              src={images[imageIndex].thumb}
              placeholder={images[imageIndex].thumb}>
              {(src) => (
                <motion.img
                  src={src} alt="" draggable="false"
                />)}</ProgressiveImage>
          </span>
          <motion.div
            animate={isExiting ? 'exiting' : 'normal'}
            variants={titleVariants}
            className="scroller-text">{images[imageIndex].nome} {images[imageIndex].cognome}
          </motion.div>
        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {'→'}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {'←'}
      </div>
    </>
  );
};
