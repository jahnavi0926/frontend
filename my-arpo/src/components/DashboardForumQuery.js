import React from 'react'
import PostNotificationComp from './PostNotificationComp'

function DashboardForumQuery() {
    return (
        <>
            <div>DashboardForumQuery</div>
            <PostNotificationComp />
            <PostNotificationComp />
            <PostNotificationComp />
            <PostNotificationComp />
            {/* add button */}
            <button type="button" class="btn btn-primary">Add New Post</button>
        </>
    )
}

export default DashboardForumQuery