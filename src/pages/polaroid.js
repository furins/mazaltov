import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useParams
} from "react-router-dom";
// import ProgressiveImage from "react-progressive-graceful-image";
import { useDispatch } from 'react-redux'

//Ease
// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
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
  // const [canScroll, setCanScroll] = useState(false);

  document.querySelector("body").classList.remove("no-scroll");



  // contenuto
  return (
    <>
      <motion.div
        //onAnimationComplete={() => setCanScroll(true)}
        className='single'
        initial='initial'
        animate='animate'
        exit='exit'>
        <div className='detailed-information'>
          <div className='container'>
            <div className="spacer-90"></div>
            <div className="spacer-90"></div>

            <h2>FOTO MATRIMONI</h2>

            <div className='row'>
              <div className="pure-g" style={{ width: `90vw` }}>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid01.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid02.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid03.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid04.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid05.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid06.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid07.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid08.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid09.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid10.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid11.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid12.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid13.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid14.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid15.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid16.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid17.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid18.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid19.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid20.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid21.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid22.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid23.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid24.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid25.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid26.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid27.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid28.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid29.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid30.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid31.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid32.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid33.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid34.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid35.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid36.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid37.jpg").default} alt="" className="foto--matrimoni" />
                </div>
                <div className="card pure-u-1 pure-u-md-1-3">
                  <img src={require("../images/polaroid/polaroid38.jpg").default} alt="" className="foto--matrimoni" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Foto;
