import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import plus from './plus.png';
import view from './view.png';
import cart from './cart.png';
import expense from './expense.png';
import { Link, withRouter } from 'react-router-dom';


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      id: '',
      expAmountuser: '',
      expAmoountexp: '',
      youOwe: '',
      youGet: '',
      EXPname: '',
      selecteduser: "",
      expenselist: []
    }
  }

  componentDidMount() {

    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      id: decoded.id,
      email: decoded.email,

    })
    fetch(`http://localhost:5000/user/dashboard/${decoded.id}`)
      .then(response => response.json())
      .then((userdata) => {
        this.setState({ id: userdata._id })
        this.setState({ expAmountuser: userdata.expAmount })
        this.setState({ youOwe: userdata.youOwe })
        this.setState({ youGet: userdata.youGet })
      });
    fetch(`http://localhost:5000/user/expenselist/${decoded.email}`)
      .then(response => response.json())
      .then((expdata) => {
        this.setState({ expenselist: expdata.expenselist });


      });

  }

  render() {
    return (

      <div className="wrapper fadeInDown">
        <div className='pt5'>
          <div className="card">
            <div className="card-header">
              <Link to="/addexp" className="btn btn-primary" >
                <input style={{ height: 15, width: 15 }} type="image" alt=""
                  src={plus}></input> Add Expense
                    </Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">Your Total Expenses {this.state.expAmountuser} Euro.</h5>
              <p className="card-text">You should pay  {this.state.youOwe} Euro. </p>
              <p className="card-text">You should get {this.state.youGet} Euro. </p>

            </div>
            <div className="card-header">
              <p>
                <a className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <input style={{ height: 20, width: 25 }} type="image" alt=""
                    src={view}></input> View all expenses
          </a>
              </p>
              <div className="collapse" id="collapseExample">
                <div className="card card-body">
                  <div className="card-header">
                    <input style={{ height: 40, width: 30 }} type="image" alt=""
                      src={expense}></input> Expenses
                          </div>
                  {this.state.expenselist.map((expense) =>
                    <div className="card">

                      <div className="card-body">
                        <h5 className="card-title"><input style={{ height: 20, width: 25 }} type="image" alt=""
                          src={cart}></input>
                          .  You paid {expense.expAmount} Euro for {expense.expName}.</h5>
                        <p className="card-text text-nowrap bd-highlight" style={{ width: "8rem" }}>Person involved  {expense.withWhom}</p>
                        <p className="card-text"> DateTime: {expense.date} </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    )
  }
}

export default withRouter(Dashboard);