import React, { Component } from "react";

export default class Step1 extends Component {
  render() {
    return (
      <main className="step-1-page pt-3">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="avatar">
                <img src="/img/avatar.jpg" alt="img" className="w-100" />
              </div>
            </div>
            <div className="col-8">
              <ul className="list-properties pt-3">
                <li className="item">Mệnh giá 1 cổ phần : 99999$</li>
                <li className="item">Số CP sở hữu : 100</li>
                <li className="item">Loại cổ phần : VIP</li>
                <li className="item">Mã số cty: 123456789</li>
              </ul>
            </div>
            <div className="col-12">
              <div className="info">
                <ul>
                  <li>Nguyễn Thị Mỹ Lệ</li>
                  <li>Số CMND: 123456789</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="news-24h">
                <div className="title">
                  <span>Tin tức 24h</span>
                </div>
                <ul className="list-news">
                  <li className="item d-flex justify-content-between">
                    <img
                      className="w-25"
                      src="https://cdn.24h.com.vn/upload/2-2020/images/2020-05-09/medium/1588988673-112-thumbnail.jpg"
                      alt="img"
                    />
                    <a href="/">
                      Lao đao vì Covid-19, công ty Shark Thủy lỗ khủng nhất từ
                      trước tới nay
                    </a>
                  </li>
                  <li className="item d-flex justify-content-between">
                    <img
                      className="w-25"
                      src="https://cdn.24h.com.vn/upload/2-2020/images/2020-05-09/medium/1588988673-112-thumbnail.jpg"
                      alt="img"
                    />
                    <a href="/">
                      Lao đao vì Covid-19, công ty Shark Thủy lỗ khủng nhất từ
                      trước tới nay
                    </a>
                  </li>
                  <li className="item d-flex justify-content-between">
                    <img
                      className="w-25"
                      src="https://cdn.24h.com.vn/upload/2-2020/images/2020-05-09/medium/1588988673-112-thumbnail.jpg"
                      alt="img"
                    />
                    <a href="/">
                      Lao đao vì Covid-19, công ty Shark Thủy lỗ khủng nhất từ
                      trước tới nay
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12">
              <div className="trade-CP">
                <div className="title">
                  <span>Giao dịch cổ phần</span>
                </div>
                <div className="d-flex justify-content-between pl-3 pr-3">
                  <div className="buy text-center">
                    <button type="button" className="btn btn-success pl-5 pr-5">
                      MUA
                    </button>
                    <br />
                    <i className="fa fa-arrow-down mt-2" aria-hidden="true" />
                    <br />
                    <i className="fa fa-arrow-down mt-1" aria-hidden="true" />
                    <br />
                    <span>30%</span>
                  </div>
                  <div className="sale text-center">
                    <button type="button" className="btn btn-danger pl-5 pr-5">
                      BÁN
                    </button>
                    <br />
                    <i className="fa fa-arrow-down mt-2" aria-hidden="true" />
                    <br />
                    <i className="fa fa-arrow-down mt-1" aria-hidden="true" />
                    <br />
                    <span>40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
