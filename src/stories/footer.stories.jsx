import React from 'react';
import {Wrapper} from "./Wrapper.jsx";

export default {
    title: 'EFooter',
    component: Wrapper,
};

export const Footer = () =>
    <footer>
    <div className="container">
        <a href="/" className="logo-font">conduit</a>
        <span className="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
    </div>
</footer>;

