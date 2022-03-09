import React from 'react'

function ForumViewDescription() {
    return (
        <>
            {/* subject and description */}
            <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Subject</label>
                <input className="form-control" id="exampleFormControlInput1" placeholder="read the subject here" />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="read the description here"></textarea>
            </div>

        </>
    )
}

export default ForumViewDescription
