import React from "react";
import PropTypes from 'prop-types';

const SpinWheel = ({what, timeout}) => (
    <div className="Blog-spin">
        <div className="text-center">
            <div className="spinner-border" role="status" /> <br />
            <span>Loading {what}...</span>
        </div>
    </div>
);

SpinWheel.propTypes = {
    what: PropTypes.string,
    timeout: PropTypes.number
}

SpinWheel.defaultProps = {
    what: "",
    timeout: 5000
}

export default SpinWheel;