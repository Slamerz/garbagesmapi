import React, {Component} from "react";
import {Navigation} from "./Navigation";
import Tabs from "@material-ui/core/Tabs";
import {RESOURCES} from "../helpers";
import {Link} from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";

export class Header extends Component{
    render() {
        return (
            <>
                <h1>Smapi</h1>
                <AppBar>
                    <Tabs>
                        {RESOURCES.map(resource => <Link to={`/${resource}`}><Tab label={resource} /></Link>)}
                    </Tabs>
                </AppBar>
        </>
        )
    }
}