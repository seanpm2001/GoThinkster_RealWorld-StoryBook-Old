import React from 'react';
import {Wrapper} from "./Wrapper.jsx";

export default {
  title: 'Layout/Header',
  component: Wrapper,
};

export const Header = (args) =>
    <nav class="navbar navbar-light">
      <div class="container">
        <a class="navbar-brand" href="">conduit</a>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <a class="nav-link active" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"/>&nbsp;New Article
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"/>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sign in</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>;

