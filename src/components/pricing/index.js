import React, {Component} from 'react'
import MainButton from '../utils/Button'
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {
    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: [
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere explicabo et eveniet voluptas quidem.',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere explicabo et eveniet voluptas quidem. <lorm5></lorm5>',
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facere explicabo et eveniet voluptas quidem.',
        ],
        linkTo: [
            'https://sales.balcomy',
            'https://sales.medium',
            'https://sales.star',
        ],
        delay: [500, 0, 500],
    }

    showBoxes = () => (
        this.state.prices.map( (price, i) => (
            <Zoom delay={ this.state.delay[i] } key={ i }>
                <div className="pricing_item" >
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${ price }</span>
                            <span>{ this.state.positions[i] }</span>
                        </div>
                        <div className="pricing_description">
                            { this.state.desc[i] }
                        </div>
                        <div className="pricing_buttons">
                            <MainButton 
                                text="Purchase"
                                bck="#ffa800"
                                color="#fff"
                                link={ this.state.linkTo[i] }
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        { this.showBoxes() }
                    </div>
                </div>
            </div>
        )
    }
}

export default Pricing; 