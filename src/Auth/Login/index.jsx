import React from 'react'
import { Form, div } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="home-btn d-none d-sm-block">
        <div to="/" className="text-dark">
          {/* <i className="bx bx-home h2" /> */}
        </div>
      </div>
      <div className="account-pages my-5 pt-sm-5">
       
          <div className="justify-content-center">
            <div>
              <div className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <div>
                    <div>
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </div>
                    <div className="col-5 align-self-end">
                      {/* <img src={profile} alt="" className="img-fluid" /> */}
                    </div>
                  </div>
                </div>
                <div className="pt-0">
                  <div className="auth-logo">
                    <div to="/" className="auth-logo-light">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          {/* <img
                            src={lightlogo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          /> */}
                        </span>
                      </div>
                    </div>
                    <div to="/" className="auth-logo-dark">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          {/* <img
                            src=
                            alt=""
                            className="rounded-circle"
                            height="34"
                          /> */}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <Form
                      className="form-horizontal"
                      
                    >
                     

                      <div className="mb-3">
                        {/* <Label className="form-label">Email</Label> */}
                        {/* <Input
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email
                              ? true
                              : false
                          }
                        /> */}
                        {/* {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">
                            {validation.errors.email}
                          </FormFeedback>
                        ) : null} */}
                      </div>

                      <div className="mb-3">
                        {/* <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          autoComplete="off"
                          value={validation.values.password || ""}
                          type="password"
                          placeholder="Enter Password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          invalid={
                            validation.touched.password &&
                              validation.errors.password
                              ? true
                              : false
                          }
                        /> */}
                        {/* {validation.touched.password &&
                          validation.errors.password ? (
                          <FormFeedback type="invalid">
                            {validation.errors.password}
                          </FormFeedback>
                        ) : null} */}
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <h5 className="font-size-14 mb-3">Sign in with</h5>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <div
                              to="#"
                              className="social-list-item bg-primary text-white border-primary"
                              
                            >
                              <i className="mdi mdi-facebook" />
                            </div>
                          </li>
                         
                          <li className="list-inline-item">
                            <div
                              to="#"
                              className="social-list-item bg-danger text-white border-danger"
                              
                            >
                              <i className="mdi mdi-google" />
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 text-center">
                        <div to="/forgot-password" className="text-muted">
                          <i className="mdi mdi-lock me-1" />
                          Forgot your password?
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  Don&#39;t have an account ?{" "}
                  <div to="/register" className="fw-medium text-primary">
                    
                    Signup now{" "}
                  </div>{" "}
                </p>
                <p>
                  ©  Skote. Crafted with
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                </p>
              </div>
            </div>
          </div>
       
      </div>
   </>
  )
}

export default Login