import React, { Fragment } from "react";


const HomePage = () => {
    return (
        <Fragment>
            <div>HomePage</div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    
                    <a className="navbar-brand" href="#">
                        Tech Shop
                    </a>

                    
                    <div className="collapse navbar-collapse " id="navbarIcons">
                        <div className="d-flex ms-auto">
                            <a href="#" className="btn  me-2 border-0 " title="Search">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                            <a href="#" className="btn me-2 border-0" title="Cart">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                            <a href="#" className="btn border-0" title="User">
                                <i className="fa-solid fa-user"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default HomePage;

