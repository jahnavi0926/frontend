import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    render() {
        return (
            <div className="card" style={{ width: "18rem",backgroundColor:"green" }}>
            
                <div className="card-body">
                    
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">
                        {this.props.desc}
                    </p>

                </div>

            </div>
        
        )
    }
}
