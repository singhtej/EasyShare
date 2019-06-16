import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import profile from './Image/profile.png';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            email: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            id: decoded.id,
        })
        fetch(`http://localhost:5000/user/profile/${decoded.id}`)
            .then(response => response.json())
            .then((userdata) => {
                this.setState({ id: userdata._id })
                this.setState({ first_name: userdata.first_name })
                this.setState({ last_name: userdata.last_name })
                this.setState({ email: userdata.email })
            });
    }

    render() {
        return (
            <div className="wrapper fadeInDown">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center"><img style={{ height: 50, width: 50 }} type="image" alt=""
                            src={profile} /> Hello,{this.state.first_name} </h1>
                    </div>

                    <table className="table col-md-12 mx-auto">
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>{this.state.id}</td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile