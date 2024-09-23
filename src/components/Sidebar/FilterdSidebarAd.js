import React from 'react';
import { Image } from 'react-bootstrap';

const FilterdSidebarAd = ({filteredAdvertisements}) => {
    return (
        <div>
            {filteredAdvertisements.map((ads, index) =>
            ads.map((ad) => (
              <div key={ad.id} className="advertisement-container">
                <Image
                  src={`https://ajkal.us/img/ad/${ad.ad_banner}`} // Ensure the URL structure is correct
                  alt={`Advertisement ${index + 1}`}
                  className="img-fluid mt-2 pt-1"
                />
                <p className="advertisement-text">{ad.ad_position}</p>
              </div>
            ))
          )}
        </div>
    );
};

export default FilterdSidebarAd;