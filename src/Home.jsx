import React from "react";
import PropTypes from "prop-types";
import "./Home.css";

const Home = ({title, description, image}) => {

    return <div>
        {image && <img src={image} alt="title" className="Home-image" />}
        <summary>
            <h3 className="Home-description-title">Description</h3>
            <p className="Home-description-text">{description}</p>
        </summary>
    </div>;
}

Home.propTypes = {
     title: PropTypes.string.isRequired,
     description: PropTypes.string, 
     image: PropTypes.string
}

Home.defaultProps = {
    description: "",
    image: null
}


export default Home;