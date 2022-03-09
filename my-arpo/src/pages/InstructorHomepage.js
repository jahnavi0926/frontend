import React from 'react'
const heading = {
    fontSize: '12px',
    color: 'white'
}
// #rcorners {
//     border-radius: '25px';
//     background: #73AD21;
//     padding: 20px; 
//     width: 200px;
//     height: 150px;  
// }

export default function InstructorHomepage(props) {
    // let className = props.primary ? 'primary' : ''
    return (
        <>
            {/* <div>InstructorHomepage</div> */}
            {/* <div>
                <img src="" class="img-fluid">Help</img>
            </div> */}

            <div class="container px-4 py-4 col-sm-100">
                <div class="row gx-5">
                    <div class="col">
                        <div class="h-75 p-3 border rounded bg-info font-italic font-weight-bold ">Notifications</div>
                    </div>
                    <div class="col">
                        <div class="h-75 p-3 border bg-green rounded bg-info ">
                            Important Links

                            <p>
                                <div>
                                    <h5 style={heading}>
                                        DOAA Website
                                        <br></br>
                                        Pingala
                                        {/* add links */}
                                    </h5>
                                </div>
                            </p>
                        </div>

                    </div>
                    <div class="col">
                        <div class="h-75 p-3 border bg-green rounded bg-info">Institute News</div>
                    </div>
                </div>
            </div>

        </>

    )
}


