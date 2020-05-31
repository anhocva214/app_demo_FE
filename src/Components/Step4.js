import React, { Component } from "react";

export default class Step_4 extends Component {
  render() {
    return (
      <main className="step-4-page pt-3">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="avatar">
                <img src="/img/avatar-2.jpg" alt="img" className="w-100" />
              </div>
            </div>
            <div className="col-6">
              <div className="information">
                <ul>
                  <li>ID: 12313132</li>
                  <li>Họ và tên: Nguyễn Thị Mỹ Lệ</li>
                  <li>Xếp hạng: Kim cương</li>
                  <li>Điểm: 999999</li>
                  <li>Tiền: 999$</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <img src="/img/qrcode.png" alt="qrcode" className="w-100" />
            </div>
          </div>
          <div className="row show-product">
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/cute-clipart/64/000000/home.png" />
              <div className="name">Nhà 1 tầng</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/officel/80/000000/iphone.png" />
              <div className="name">I Phone Pro</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/cute-clipart/64/000000/home.png" />
              <div className="name">Nhà 1 tầng</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/cute-clipart/64/000000/home.png" />
              <div className="name">Nhà 1 tầng</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/officel/80/000000/iphone.png" />
              <div className="name">I Phone Pro</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/cute-clipart/64/000000/home.png" />
              <div className="name">Nhà 1 tầng</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/cute-clipart/64/000000/home.png" />
              <div className="name">Nhà 1 tầng</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/officel/80/000000/iphone.png" />
              <div className="name">I Phone Pro</div>
            </div>
            <div className="col-4">
              <img alt="img" src="https://img.icons8.com/cute-clipart/64/000000/home.png" />
              <div className="name">Nhà 1 tầng</div>
            </div>
          </div>
          <div className="row news-market">
            <div className="col-9">
              <div className="title">
                <span>Tin tức về chợ</span>
              </div>
              <div className="news-list">
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
                <li className="item">Hướng dẫn sử dụng thanh toan online</li>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center pt-4">
              <div className="form-group btn-money">
                <button type="button" className="w-100 mb-4 btn btn-success">
                  Nạp tiền
                </button>
                <button type="button" className="w-100 mb-4 btn btn-warning">
                  {" "}
                  Chuyển tiền
                </button>
                <button type="button" className="w-100 btn btn-danger">
                  Mua trả góp
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
