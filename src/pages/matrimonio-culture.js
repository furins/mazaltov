import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useParams
} from "react-router-dom";
import YoutubeEmbed from "../components/YoutubeEmbed";
import { useDispatch } from 'react-redux'

//Ease
// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
document.querySelector("body").classList.remove("no-scroll");

const Culture = () => {
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

        <div className="spacer-90"></div>
        <div className="spacer-90"></div>


        <div className='detailed-information'>
          <div className='container'>
            <h1>IL MATRIMONIO NELLE DIVERSE CULTURE</h1>
            <YoutubeEmbed embedId="JhPKOPS2KZ8" title="Il matrimonio nelle diverse culture" />
            <div className="spacer-90"></div>

            <div className='row container--page'>

              <h2>INVITO A NOZZE</h2>

              <p>Una grande festa per celebrare la multietnicità di Ferrara e la mostra del MEIS “Mazal Tov! Il matrimonio ebraico”.</p>

              <p>L'evento si è svolto mercoledì 14 luglio nel bookshop del museo, esponenti di religioni e culture diverse hanno raccontato le tradizioni, gli usi e costumi delle nozze. Dalle caratteristiche del matrimonio ebraico si passa ad esplorare quelle del matrimonio islamico. Si viaggia dalla Nigeria alla Cina per scoprire come si differenzia un evento cruciale che accomuna da secoli il mondo intero.</p>

              <p>Interventi:<br />
                Hassan Samid –  Presidente del centro di cultura islamica di Ferrara<br />
                Miriam Camerini – Regista, scrittrice, studiosa di ebraismo<br />
                Blessing Eneji – Esponente della comunità nigeriana di Ferrara<br />
                Jin Cai – Presidente onorario del Centro Interculturale Italo-Cinese di Ferrara<br />
                <br />
                Modera: Amedeo Spagnoletto – Direttore del MEIS</p>

            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Culture;
