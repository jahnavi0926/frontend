import React, { Component } from 'react'

export class LoginPage extends Component {
  render() {
    return (
      <div className='d-flex flex-column align-items-center bg-log pt-5'>

          <div>
            <img />
            <h1>| APRO</h1>
            <img />
          </div>

          <div>

            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3 btn-large">
                Submit
              </button>
            </form>

          </div>

      </div>
    )
  }
}

export default LoginPage