import React from 'react'
import SubjectDescription from '../components/ForumViewDescription'

function ForumView() {
  return (<>
    <div ><h2>Forum</h2></div>

    {/* Mark it resolved/unresolved */}
    <div className="form-check form-switch" textAlign='right'>
      <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" for="flexSwitchCheckDefault"><p class="text-left">Resolve</p></label>
    </div>
    < SubjectDescription />

    {/* add button */}
    <button type="button" class="btn btn-primary">Edit</button>
    <br></br>
    <button type="button" class="btn btn-primary">Reply</button>
  </>
  )
}

export default ForumView