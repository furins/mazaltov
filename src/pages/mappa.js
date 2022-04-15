import React, { useEffect } from "react";
import { AnimateSharedLayout } from "framer-motion";
import { change } from '../store/headerColorSlice'
import { useDispatch } from 'react-redux'
import Mappa3D from "../components/mappa3d";
import { useSelector } from 'react-redux'

function Mappa() {
    const dispatch = useDispatch();
    var ref = React.createRef()

    document.querySelector("body").classList.add("no-scroll");
    useEffect(() => {
        dispatch(change('light'));
    }, [dispatch]);
    const headerColor = useSelector(function (state) {
        return state.headerColor.value.payload
    })
    return (
        <>
            <main className="main">
                <div className='container fluid'>
                    <AnimateSharedLayout>
                        <div className='row top-row' >
                            <header className={headerColor} style={{ height: `50vh` }}>
                                <Mappa3D ref={ref} />
                            </header>
                            <div>
                                <button onClick={e => console.log(ref.current.canvas)} style={{ top: `85px`, zIndex: 99999, position: "absolute" }}>CLICK</button>
                            </div>
                        </div>
                        <div className='row bottom-row'>
                            <div className='bottom scroller-wrapper'>
                                <span>Descrizione Sale</span>
                            </div>
                        </div>
                    </AnimateSharedLayout>
                </div>
            </main >
        </>

    );
}

export default Mappa;
