import React from 'react';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';

const VenueInfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                  <Zoom left
                        duration={500} >
                    <div className="vn_item">   
                        <div className="vn_outer">  
                            <div className="vn_inner">  
                                <div className="vn_icon_square bck_red">

                                </div>
                                <div 
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_calendar})`
                                    }}>
                                </div>
                                <div className="vn_title">
                                    Event Date & Time
                                </div>
                                <div className="vn_desc">
                                    6 June of 2019
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom right
                      delay={500}
                      duration={500}>
                    <div className="vn_item">   
                        <div className="vn_outer">  
                            <div className="vn_inner">  
                                <div className="vn_icon_square bck_yellow">

                                </div>
                                <div 
                                    className="vn_icon"
                                    style={{
                                        background: `url(${icon_location})`
                                    }}>
                                </div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    NGS
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                </div>
            </div>
        </div>
    );
}

export default VenueInfo;