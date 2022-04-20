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

//components
import Header from "./components/header";

//Styles
import "./App.scss";

function PagineSito() {
  let location = useLocation();
  return (

    <AnimatePresence initial={false} exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/mappa' element={<Mappa />} />
        <Route exact path='/lopez' element={<Lopez />} />
        <Route exact path='/culture' element={<Culture />} />
        <Route exact path='/foto' element={<Foto />} />


        <Route exact path='/page/:id/' element={<Model />} />


        <Route exact path='/zoom/:id/' element={<ZoomPage />} />


        <Route
          exact
          path='/indice/' element={<Indice />}
        />
        <Route
          exact
          path='/colophon/' element={<Sponsor />}
        />
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
