import React, { Component } from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

//Pages
import Lopez from "./pages/lopez";
import Mappa from "./pages/mappa";
import Home from "./pages/home";
import Model from "./pages/page";
import Culture from "./pages/matrimonio-culture";
import Foto from "./pages/polaroid";
import ZoomPage from "./pages/zoom";
import Indice from "./pages/indice";
import Sponsor from "./pages/sponsor";
import Presentazione from "./pages/presentazione";
import Visita from "./pages/visita";

//components
import Header from "./components/header";

//Styles
import "./App.scss";
import Chuppah from "./contents/sezioni/chuppah";
import Quiddushin from "./contents/sezioni/quiddushin";
import Dote from "./contents/sezioni/dote";
import Epitalamio from "./contents/sezioni/epitalamio";
import UsiECostumi from "./contents/sezioni/usi-e-costumi";
import Regolamenti from "./contents/sezioni/regolamenti";
import Miqveh from "./contents/sezioni/miqveh";
import Matrimonio from "./contents/sezioni/matrimonio-civile";
import MazalTov from "./contents/sezioni/mazal-tov";
import Ketubbah from "./contents/sezioni/ketubbah";
import Nissuin from "./contents/sezioni/nissuin";
import Regali from "./contents/sezioni/i-regali-degli-sposi";

function PagineSito() {
  let location = useLocation();
  return (

    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/presentazione' element={<Presentazione />} />
        <Route exact path='/visita' element={<Visita />} />
        <Route exact path='/mostra' element={<Mappa />} />
        <Route exact path='/lopez' element={<Lopez />} />
        <Route exact path='/page/:id' element={<Model />} />
        <Route exact path='/zoom/:id' element={<ZoomPage />} />
        <Route exact path='/indice' element={<Indice />} />

        <Route exact path='/foto' element={<Foto />} />
        <Route exact path='/culture' element={<Culture />} />

        <Route exact path='/colophon' element={<Sponsor />} />

        <Route exact path='/chuppah' element={<Chuppah />} />
        <Route exact path='/quiddushin' element={<Quiddushin />} />
        <Route exact path='/dote' element={<Dote />} />
        <Route exact path='/nissuin' element={<Nissuin />} />
        <Route exact path='/epitalamio' element={<Epitalamio />} />
        <Route exact path='/usi-e-costumi' element={<UsiECostumi />} />
        <Route exact path='/regolamenti' element={<Regolamenti />} />
        <Route exact path='/miqveh' element={<Miqveh />} />
        <Route exact path='/mazal-tov' element={<MazalTov />} />
        <Route exact path='/matrimonio-civile' element={<Matrimonio />} />
        <Route exact path='/ketubbah' element={<Ketubbah />} />
        <Route exact path='/i-regali-degli-sposi' element={<Regali />} />
      </Routes>
    </AnimatePresence >

  );
}

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Header />
        <PagineSito />
      </BrowserRouter>


    );
  }
}

export default App;
