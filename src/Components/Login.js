import React, { Component } from "react";
import { connect } from 'react-redux'
import axios from "axios";
import {
  v1 as uuidv1, v4 as uuidv4,
} from 'uuid';
import {Link} from 'react-router-dom';


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  };

  change_input = (event) => {
    this.setState({
      [event.target.name]: event.target.value.trim()
    });
  };


  method_login = () => {
    axios.post('http://db.thirdtechtycoon.com/login', { username: this.state.username, password: this.state.password })
      .then((result) => {
        if (result.data === true) {
          this.props.notification('success', 'Đăng nhập thành công !');
          this.props.change_status_menu(true);
          this.create_token_login(this.state.username, this.state.password);
        }
        else {
          this.props.notification('danger', 'Đăng nhập thất bại !');
          this.props.change_status_menu(false);
        }
      });
  };

  create_token_login = (username, password) => {
    var id1 = uuidv1();
    var id4 = uuidv4();

    var d = new Date();
    var month = d.getMonth() + 1;

    var token_item = {
      time: {
        day: d.getDate(),
        month: month,
        year: d.getFullYear(),
        hours: d.getHours(),
        minutes: d.getMinutes(),
        second: d.getSeconds()
      },
      accessToken: id1 + "-" + id4,
      username: username,
      password: password
    }
    localStorage.setItem('tokenLogin', token_item.accessToken);
    axios.post('http://db.thirdtechtycoon.com/insert_token_login_list', { 'token_item': token_item });
  }

  get_index_time = (day, month, year, hours, min, second) => {
    var index = day * 86400 + month * 2592000 + year * 946080000 + hours * 3600 + min * 60 + second;
    // console.log(index +"  ---   "+ day +" " + month + " " + year + " " + hours + " " + min + " " + second);
    return index;
  }

  check_time_of_token = (day, month, year, hours, min, second) => {
    var d = new Date();
    var index_time_old = this.get_index_time(day, month, year, hours, min, second);
    var index_time_current = this.get_index_time(d.getDate(), d.getMonth() + 1, d.getFullYear(), d.getHours(), d.getMinutes(), d.getSeconds());
    var index_time_exists = this.get_index_time(0, 0, 0, 0, 30, 0); // giới hạn 30 phút
    if ((index_time_current - index_time_old) > index_time_exists) return true; //vượt giới hạn thời gian
    return false
  }

  login_from_token = () => {
    var tokenLogin = localStorage.getItem('tokenLogin');
    if (tokenLogin !== null) {
      axios.post('http://db.thirdtechtycoon.com/submit_token_login', { 'access_token': tokenLogin }).then(result => {
        var check = this.check_time_of_token(result.data.time.day, result.data.time.month, result.data.time.year, result.data.time.hours, result.data.time.min, result.data.time.second);
        if (check === false) {
          this.props.notification('success', 'Đăng nhập thành công !');
          this.props.change_status_menu(true);
        };
      });
    };
  };

  render() {
    this.login_from_token();
    return (
      <main className="login-page d-flex align-items-center">
        <div className="container">
          <div className="box">
            <div className="title">
              Đăng nhập <br /> Quản lý cổ đông
            </div>
            <form>
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
                <span><Link to="/register">Đăng ký</Link></span>
                <span><Link to="/forget">Quên mật khẩu</Link></span>
              </div>
              <div className="form-group text-center">
                <button
                  type="button"
                  className="btn btn-success w-100  pl-5 pr-5"
                  onClick={() => this.method_login()}
                >
                  Đăng nhập
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
    // message: state.message
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    notification: (type_notifi, title_notifi) => {
      dispatch({ type: "NOTIFICATION", type_notifi, title_notifi })
    },
    change_status_menu: (status) => {
      dispatch({ type: "CHANGE_STATUS_MENU", status })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);