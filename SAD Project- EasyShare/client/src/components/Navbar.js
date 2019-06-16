import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import Tilt from 'react-tilt';
import easyshare from './Logo/easyshare.png';
class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link" >
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link" >
                        Register
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard" className="nav-link">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='' onClick={this.logOut.bind(this)} className="nav-link">
                        LogOut
                    </Link>
                </li>
            </ul>
        )

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light rounded" >
                <Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 50, width: 50 }} >
                    <div className="Tilt-inner">
                        <img style={{ height: 50, width: 50 }} options={{ max: 55 }} alt='logo' src={easyshare} />
                    </div>

                </Tilt>

                <button className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h2>EasyShare</h2>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" >
                                Home
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)