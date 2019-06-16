import React, { Component } from 'react'
import '../Logo/Logo.css';
import bill from '../Image/bill.jpg';


class Landing extends Component {
  render() {
    return (
      <div className="wrapper fadeInDown">
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12">
              <h4 style={{ color: "navy" }}>Smartly manage debts between friends</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img style={{ paddingTop: 80, height: 280, width: 250 }} src={bill} className="db img-fluid" alt="" ></img>
          </div>

          <div className="col-sm-4">
            <h6 style={{ paddingTop: 80, color: "navy" }}>Manage lending debts easily</h6>
            <p>Easyshare will help managing your share with friends such as bills etc.  </p>
          </div>
        </div><hr></hr>



      </div>
    )
  }
}

export default Landing