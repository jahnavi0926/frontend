import React from 'react'
import DashboardForumQuery from '../components/DashboardForumQuery'
function InstructorForumDasboard() {
    return (
        <>

            <div>InstructorForumDasboard</div>
            {/* add button */}
            <button type="button" class="btn btn-primary">Resolve selected </button>

            {/* add button */}
             <button type="button" class="btn btn-primary">Reject selected </button>
            <DashboardForumQuery />
        </>

    )
}

export default InstructorForumDasboard