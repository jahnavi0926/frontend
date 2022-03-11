import React from 'react'

function PostNotification() {
    return (
        <form class="form-inline">

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Default checkbox
                    </label>
            </div>
           
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">query</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">open</button>
        </form>
    )
}

export default PostNotification