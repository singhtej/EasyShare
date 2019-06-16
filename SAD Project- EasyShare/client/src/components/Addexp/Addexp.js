import React, { Component } from 'react';
import './Addexp.css';
import { expense } from '../UserFunctions'
import jwt_decode from 'jwt-decode'

class Addexp extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            withWhom: '',
            expName: '',
            expAmount: '',
            expDes: '',
            users: [],
            selecteduser: "",
            validationError: "",
            email: '',
            createdBy: '',


        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }




    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const exp = {
            createdBy: this.state.email,
            withWhom: this.state.selecteduser,
            expName: this.state.expName,
            expAmount: this.state.expAmount,
            expDes: this.state.expDes
        }



        console.log(exp);
        expense(exp).then(res => {

        })
        this.props.history.push(`/profile`)


    }

    componentDidMount() {
        fetch("http://localhost:5000/user/users")
            .then(response => response.json())
            .then((userdata) => {

                let usersFromApi = userdata.users.map(user => { return { value: user.email, display: user.email } })
                this.setState({ users: [{ value: '', display: 'Select Whom ?' }].concat(usersFromApi) });
                console.log(usersFromApi)

            })

        const token = localStorage.usertoken
        const decoded = jwt_decode(token)


        this.setState({
            userid: decoded.id,
            email: decoded.email
        })

    }
    render() {

        return (
            <div className='pt5'>

                <div>
                    <div className="wrapper fadeInDown">
                        <div id="formContent">
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="fadeIn second">

                                    <select className="form-control" style={{ marginTop: '30px', width: '84%', marginLeft: '35px' }} value={this.state.selecteduser}
                                        onChange={(e) => this.setState({ selecteduser: e.target.value, validationError: e.target.value === "" ? "Select With Whom ?" : "" })}>
                                        {this.state.users.map((user) => <option key={user.value} value={user.value}>{user.display}</option>)}
                                    </select>

                                    <div style={{ color: 'red', marginTop: '5px' }}>
                                        {this.state.validationError}
                                    </div>
                                </div>


                                <input type="text" id="expName" className="fadeIn second" value={this.state.expName}
                                    onChange={this.onChange} name="expName" placeholder="Expense Name" />
                                <input type="text" id="expAmount" value={this.state.expAmount}
                                    onChange={this.onChange}
                                    className="fadeIn third" name="expAmount" placeholder="Expense Amount" />
                                <input type="text" id="expDes"
                                    value={this.state.expDes}
                                    onChange={this.onChange}
                                    className="fadeIn second" name="expDes" placeholder="Expense Description" />
                                <label htmlFor="equally" >Paid by you, Split Equally</label>
                                <button type="submit" className="btn btn-lg btn-primary btn-block" >
                                    Save
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Addexp;