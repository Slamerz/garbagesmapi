import React, {Component} from 'react'
import {APIURL} from "../helpers";
import {Navigation} from "./Navigation";

export class People extends Component{
    URL = `${APIURL}/people/`
    constructor(props) {
        super(props);

        this.state = {
            people: []
        }
    }
    componentDidMount() {
        fetch(this.URL).then(resp => resp.json()).then(json => this.setState({...this.state, people: json.results}))
    }

    render() {
        const {people} = this.state
        return (<>
            <Navigation type={'people'} items={people}/>
        </>)
    }
}

