import React from 'react';
import './index.scss';

const Banner = ({bannerMessage}) => {
    return(
        <div className="banner">
          <span className="banner__message">{bannerMessage}</span>
        </div>
    )
}

export default Banner;