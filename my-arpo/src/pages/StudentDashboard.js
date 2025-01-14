import React, { Component } from 'react'
import Card from '../components/Card'

export default class StudentDashboard extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         studentCards : [
             {
                title : "Notification",
                desc : "Some quick example text to build on the card title and make up the bulk of the card's content."

             },
             {
                title : "Important Links",
                desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
             },
             {
                title : "Institute News",
                desc : "Some quick example text to build on the card title and make up the bulk of the card's content."
             },             
        ],
      }
    }

    render() {
        return (
            
            <div>

                <div className='d-flex justify-content-around'>
                    {
                        this.state.studentCards.map((data,id) => (
                            <Card title={data.title} desc={data.desc} key={id}/>
                        ))
                    }
                </div>
                
            </div>

        )
    }
}
