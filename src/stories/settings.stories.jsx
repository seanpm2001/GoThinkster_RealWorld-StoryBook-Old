import React from 'react';
import {Wrapper} from "./Wrapper.jsx";

export default {
    title: 'Pages/Settings',
    component: Wrapper,
};

export const Settings = () =>
    <div class="settings-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>
                    <form>
                        <fieldset>
                            <fieldset class="form-group">
                                <input class="form-control" type="text" placeholder="URL of profile picture"/>
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" placeholder="Your Name"/>
                            </fieldset>
                            <fieldset class="form-group">
                            <textarea class="form-control form-control-lg" rows="8"
                                      placeholder="Short bio about you"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="text" placeholder="Email"/>
                            </fieldset>
                            <fieldset class="form-group">
                                <input class="form-control form-control-lg" type="password" placeholder="Password"/>
                            </fieldset>
                            <button class="btn btn-lg btn-primary pull-xs-right">
                                Update Settings
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>;


