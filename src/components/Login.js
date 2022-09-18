import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class SignUp extends Component {
    render() {
        return (

           <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card border-0 shadow rounded-3 my-5">
          <div className="card-body p-4 p-sm-5">
            <h1 className="card-title text-center mb-4 fw-light fs-5"><h2>Sign In</h2></h1>
            <form>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
              </div>

              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                <label className="form-check-label" htmlFor='rememberPasswordCheck'>
                  Remember password
                </label>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit"><Link className="nav-link" to="/home">Sign in</Link></button>
              </div>
              <hr className="my-4"/>
              <div className="d-grid mb-2">
              <button className="btn btn-danger btn-login text-uppercase fw-bold" type="submit"><Link className="nav-link" to="/home">Login With Google</Link></button>
                
              </div>
              <div className="d-grid">
              <button className="btn btn-info btn-login text-uppercase fw-bold" type="submit"><Link className="nav-link" to="/home">Login With FaceBook</Link></button>
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


        )
    }
}