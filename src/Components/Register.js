import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      notifi: "success",
      status_btn_register: false,
      fullname: "",
      email: "",
      username: "",
      password: "",
      fullname_error: "",
      input_error: "",
      username_error: "",
      data_account: []
    }
  }

  // UNSAFE_componentWillMount(){
  //   axios.get('http://db.thirdtechtycoon.com/getaccount').then((data)=>{
  //     this.setState({
  //       data_account: data.data
  //     });
  //   });
  // }

  change_input = (event) => {
    this.setState({
      [event.target.name]: event.target.value.trim()
    });
  };

  method_register = ()=>{
    var account = {
      fullname: this.state.fullname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    axios.post('http://db.thirdtechtycoon.com/register', account)
    .then((result)=>{
      if (result.data.status === true){
        this.props.change_status_menu(true);
        this.props.notification('success', result.data.message);
      }
      else{
        this.props.notification('warning', result.data.message);
      }
    });
  }

  render() {
    return (
      <main className="login-page d-flex align-items-center">
        <div className="container">
          <div className="box">
            <div className="title">
              Đăng ký <br /> Quản lý cổ đông
            </div>
            <form>
              <div className="form-group">
                <label>Họ và tên</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  placeholder="Điền họ và tên vào đây"
                  onChange={(event) => this.change_input(event)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Điền email vào đây"
                  onChange={(event) => this.change_input(event)}
                />
              </div>
              <div className="form-group">
                <label>Tài khoản</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Điền tài khoản vào đây"
                  onChange={(event) => this.change_input(event)}
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Điền mật khẩu vào đây"
                  onChange={(event) => this.change_input(event)}
                />
              </div>
              <div className="form-group d-flex justify-content-between">
                <span><Link to="/">Đăng nhập</Link></span>
                <span><Link to="/forget">Quên mật khẩu</Link></span>
              </div>
              <div className="form-group text-center">
                <button type="button" onClick={() => this.method_register()} className="btn btn-success w-100 pl-5 pr-5">
        Đăng ký
            </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    change_status_menu: (status) => {
      dispatch({ type: "CHANGE_STATUS_MENU", status })
    },
    notification: (type_notifi, title_notifi) => {
      dispatch({ type: "NOTIFICATION", type_notifi, title_notifi })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);