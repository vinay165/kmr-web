import React from 'react';
import './index.scss';

const Banner = ({bannerMessage}) => {
    return(
        <div className="banner">
          {bannerMessage}
        </div>
    )
}

export default Banner;