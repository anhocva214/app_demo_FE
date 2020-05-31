import React, { Component } from "react";

export default class Step_3 extends Component {
  render() {
    return (
      <main className="step-3-page pt-3">
        <div className="container">
          <div className="money-current bg-warning">
            Số tiền hiện tại: <span>9999999$</span>
          </div>
          <div className="money-change d-flex align-items-center">
            <div className="form-group-2-div">
              <div className="form-group m-0 d-flex justify-content-between align-items-center">
                <button type="button" className="w-25 btn btn-success">
                  Chuyển khoản
                </button>
                <i className="fa fa-arrow-left" aria-hidden="true" />
                <i className="fa fa-arrow-left" aria-hidden="true" />
                <button type="button" className="w-25 btn btn-success">
                  Rút
                </button>
                <i className="fa fa-arrow-right" aria-hidden="true" />
                <i className="fa fa-arrow-right" aria-hidden="true" />
                <button type="button" className="w-25 btn btn-danger">
                  Thuế
                </button>
              </div>
              <div className="form-group text-center">
                <i className="fa fa-arrow-down" aria-hidden="true" />
                <br />
                <i className="fa fa-arrow-down" aria-hidden="true" />
                <br />
                <button type="button" className="w-25 btn btn-success">
                  Rút tiền ATM
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
