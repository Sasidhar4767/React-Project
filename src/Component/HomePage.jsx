import React, { useState } from "react";

const HomePage = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);

    // Toggle the login form visibility
    const toggleLoginForm = () => {
        setShowLoginForm((prevState) => !prevState);
    };

    return (
        <div>
            <div>HomePage</div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    {/* Navbar Brand */}
                    <a className="navbar-brand" href="#">
                        Tech Shop
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarIcons"
                        aria-controls="navbarIcons"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarIcons">
                        {/* Icons */}
                        <div className="d-flex ms-auto ">
                            <i className="fa-solid fa-magnifying-glass me-3 p-2" title="Search"></i>
                            <i className="fa-solid fa-cart-shopping me-3 p-2" title="Cart"></i>
                            {/* User Icon */}
                            <i
                                className="fa-solid fa-user p-2"
                                title="User"
                                style={{ cursor: "pointer" }}
                                onClick={toggleLoginForm} // Toggle the form on click
                            ></i>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Login Form - Visible based on `showLoginForm` */}
            {showLoginForm && (
                <div className="Loginform" style={styles.loginForm}>
                    <h3>Hello!</h3>
                    <p>Access account and manage orders</p>
                    <a href="./Form.html" className="form-btn">
                        <button className="loginSignup" style={styles.button}>
                            Login/Signup
                        </button>
                    </a>
                    <br />
                    <hr />
                    <p>Please login</p>
                </div>
            )}
        </div>
    );
};

// Inline styles for simplicity (can be replaced with CSS)
const styles = {
    loginForm: {
        position: "absolute",
        top: "60px",
        right: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
    },
    button: {
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default HomePage;


