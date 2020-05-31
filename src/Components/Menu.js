import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class componentName extends Component {
    render() {
        return (
            <main className="menu-page">
                <div className="container d-flex align-items-center h-100 justify-content-center">
                    <ul className="list">
                        <li className="item"><Link to="/step1">Tài sản con người</Link></li>
                        <li className="item"><Link to="/step2">Tài sản tài chính</Link></li>
                        <li className="item"><Link to="/step3">Tài sản trí tuệ</Link></li>
                        <li className="item"><Link to="/step4">Tài sản hệ thống</Link></li>
                        <li className="item"><Link to="/step5">Tài sản xã hội</Link></li>
                    </ul>
                </div>
            </main>
        )
    }
}
