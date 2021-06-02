import React, { useEffect } from "react";
import { change } from '../store/headerColorSlice'
import { useDispatch } from 'react-redux'
import { useParams, Link } from "react-router-dom";
import { images } from '../image-data/image-data';


function Zoom() {
    const dispatch = useDispatch();
    let { id } = useParams();
    id = parseInt(id);

    //estetica
    useEffect(() => {
        dispatch(change('dark'));
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

    return (

        <div className="zoom">
            <div className='container fluid'>
                <img src={images[id].full} className="imageZoom" alt={images[id].cognome} />
                <div
                    className='details'>
                    <div><Link to={{ pathname: `/zoom/${previousId}/` }} className="link button">←</Link></div>
                    <div><Link to={{ pathname: `/page/${id}/` }} className="link button">X</Link></div>
                    <div><Link to={{ pathname: `/zoom/${nextId}/` }} className="link button">→</Link></div>
                </div>
            </div>
        </div>

    );
}

export default Zoom;
