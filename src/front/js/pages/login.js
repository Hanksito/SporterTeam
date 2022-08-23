import React, { useState } from "react";
import "../../styles/login.css";


export const Login = () => {

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("")

    return (
        <div className="container-fluid p-0" id="loginstyle">
            <section className="vh-100 bg-image-fluid">
                <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="card" style={{ borderRadius: "15px" }}>
                                    <div className="card-body p-5">
                                        <h2 className="text-uppercase text-center mb-5">LOGIN</h2>
                                        <form>
                                            <div className="form-outline mb-4">
                                                <input type="email" className="form-control form-control-lg"
                                                    value={userEmail}
                                                    onChange={(e) => { setUserEmail(e.target.value); }} />
                                                <label className="form-label"

                                                >Your Email</label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input type="password" className="form-control form-control-lg"
                                                    value={userPassword}
                                                    onChange={(e) => { setUserPassword(e.target.value); }} />

                                                <label className="form-label"

                                                >Password</label>
                                            </div>

                                            <div className="d-flex justify-content-center">
                                                <button type="button"
                                                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                                >Enter
                                                </button>
                                            </div>

                                            <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                                                className="fw-bold text-body">Register here</a></p>

                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};