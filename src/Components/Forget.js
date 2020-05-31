import React, { Component } from "react";
import {Link} from 'react-router-dom';


export default class Forget extends Component {
  render() {
    return (
      <main className="login-page d-flex align-items-center">
        <div className="container">
          <div className="box">
            <div className="title">
              Quên mật khẩu <br /> Quản lý cổ đông
            </div>
            <div className="form-group">
              <label>Tài khoản</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Điền tài khoản vào đây"
              />
            </div>
            <div className="form-group">
              <label>Email đăng ký</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Điền email vào đây"
              />
            </div>
            <div className="form-group d-flex justify-content-between">
              <span><Link to="/register">Đăng ký</Link></span>
              <span><Link to="/">Đăng nhập</Link></span>
            </div>
            <div className="form-group text-center">
              <button
                type="button"
                className="btn btn-success w-100  pl-5 pr-5"
              >
                Gửi mật khẩu qua email
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
