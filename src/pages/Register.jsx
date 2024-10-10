function Register() {
    return <div className="login-page bg-body-secondary">
        <div className="login-box">
            <div className="login-logo">
                <a href="../index2.html"><b>Admin</b>LTE</a>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">
                        Register a new membership
                    </p>
                    <form action="../index3.html" method="post">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Name" />
                            <div className="input-group-text">
                                <span className="bi bi-person"></span>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-text">
                                <span className="bi bi-envelope"></span>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-text">
                                <span className="bi bi-lock-fill"></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="d-grid gap-2"> <button type="submit" className="btn btn-primary">Sign In</button> </div>
                            </div>
                        </div>
                    </form>
                    <p className="mb-0 mt-2">
                        <a href="register.html" className="text-center">
                            Register a new membership
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
}


export default Register