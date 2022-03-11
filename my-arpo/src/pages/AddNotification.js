import React from 'react'
import SubjectDescription from '../components/SubjectDescription'

function AddNotification() {
  return (<>
    <div>Post Notification</div>

    {/* Anonymous toggle */}
    {/* <div className="form-check form-switch" textAlign='right'>
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" for="flexSwitchCheckDefault">Anonymous</label>
    </div> */}
    
    < SubjectDescription />

    {/* add button */}
    <button type="button" class="btn btn-primary">Post</button>
  </>
  )
}

export default AddNotification