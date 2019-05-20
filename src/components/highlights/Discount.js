import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MainButton from '../utils/Button';

export default class Discount extends Component {

  state = {
      discountStart: 0,
      discountEnd: 30,
  }

  percantage = () => {
      if( this.state.discountStart < this.state.discountEnd ) {
            this.setState({
                discountStart: this.state.discountStart + 1
            })
      }
  }

  componentDidUpdate() {
      setTimeout( () => {
        this.percantage()
      }, 30)
  }

  render() {
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade
                    onReveal={ () => this.percantage() } 
                >  
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart} %</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                <Slide>
                    <div className="discount_description">
                        <h3>Get a Discount</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dolorum suscipit pariatur officia dicta molestiae ducimus velit laudantium officiis ab.</p>
                        <MainButton 
                            text="Purchase Tickets"
                            bck="#ffa800"
                            color="#fff"
                            link="https://google.com"
                            
                            />

                    </div>
                </Slide>
            </div>
        </div>
    )
  }
}