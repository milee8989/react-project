import React, { Component } from "react";



class Homepage extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand mx-auto" href="home.html">
                        <img src={require('../images/STS Logo.png')} width="100" height="100" className="logo d-inline-block" alt="" />
                    </a>
                    <h1 >STEAL THE SHOW</h1>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="profile.html">Profile</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="plan.html">Plan</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Category
                    </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="dress.html">Dress</a>
                                    <a className="dropdown-item" href="shoes.html">Shoes</a>
                                    <a className="dropdown-item" href="handbag.html">Handbag</a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="longin.html">Log In</a>
                            </li>



                        </ul>
                    </div>
                </nav>

                <video width="500" height="500" autoPlay>

                    <source src={require('../videos/runway.mp4')} type="video/mp4"/>
                </video>

                <video width="500" height="500" autoPlay>

                    <source src={require('../videos/runway2.mp4')} type="video/mp4"/>
                </video>

                <video width="500" height="500" autoPlay>

                    <source src={require('../videos/runway3.mp4')} type="video/mp4"/>
                </video>

                            <div className="center">
                                <div className="form-container rounded pt-1 pt-2">
                                    <a href="handbag.html">
                                        <input type="image" id="handbag" className="handbag icons rounded" src={require('../images/handbag.png')} width="100"
                                            height="100" />
                                    </a>
                                </div>

                                <div className="form-container rounded pt-1 pt-2">
                                    <a href="dress.html">
                                        <input type="image" id="dress" className="dress icons rounded" src={require('../images/dress.jpg')} width="100"
                                            height="100" />
                                    </a>
                                </div>

                                <div className="form-container rounded pt-1 pt-2">
                                    <a href="shoes.html">
                                        <input type="image" id="shoes" className="shoess icons rounded" src={require('../images/heel.jpg')} width="100"
                                            height="100" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        )
                    }
}

export default Homepage;