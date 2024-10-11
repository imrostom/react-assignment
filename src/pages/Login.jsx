import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // For routing
import { validateLoginForm } from '../utils/validation';
import client from '../utils/client';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // To redirect on success

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { errors, isValid } = validateLoginForm(email, password);
        setErrors(errors);

        if (!isValid) return;

        setLoading(true);
        try {
            const { data: { data } } = await client.post('/login', { email, password });

            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))

            navigate('/dashboard'); // Redirect to dashboard on success
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed")
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page bg-body-secondary">
            <div className="login-box">
                <div className="login-logo">
                    <Link to="/"><b>News</b>Portal</Link>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <div className="input-group">
                                    <input
                                        type="email"
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <div className="input-group-text">
                                        <span className="bi bi-envelope"></span>
                                    </div>
                                </div>
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>


                            <div className="mb-3">
                                <div className="input-group">
                                    <input
                                        type="password"
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className="input-group-text">
                                        <span className="bi bi-lock-fill"></span>
                                    </div>
                                </div>
                                {errors.password && <p className="text-danger">{errors.password}</p>}
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="d-grid gap-2">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={loading}
                                        >
                                            {loading ? "Signing in..." : "Sign In"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <p className="mb-0 mt-2 text-center">
                            <Link to="/register">
                                Create Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
