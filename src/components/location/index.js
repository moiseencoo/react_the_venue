import React from 'react'

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.9073488230304!2d69.26355442754382!3d41.291137196286094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ac2722b6325%3A0x59435ac64956d108!2sIvliev+St%2C+Tashkent%2C+Uzbekistan!5e0!3m2!1sen!2s!4v1557448258716!5m2!1sen!2s" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0" 
                    allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location;