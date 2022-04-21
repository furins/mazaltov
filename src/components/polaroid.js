import { Link } from "react-router-dom";

export const Polaroid = ({ src, alt, title, callback, to }) => {

    return <Link to={to} onClick={callback()} className="polaroid">
        <button className="polaroid--btn">
            <img className="polaroid--img" src={src} alt={alt} />
            <div className="polaroid--text">{title}</div>
        </button>
    </Link>
}