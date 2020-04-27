// @ts-nocheck
import React from "react";
import { Link, Route } from "react-router-dom";
import { makeRequest } from "./utils";
import FilmItem from "./FilmItem";
export default class Films extends React.Component {
  state = {
    results: [],
  };
  async componentDidMount() {
    const {
      match: { path },
    } = this.props;
    try {
      const res = await makeRequest(path);
      this.setState((s) => ({ ...s, ...res }));
    } catch {
      // Todo error check this =]
    }
  }
  render() {
    const { match } = this.props;
    const { results } = this.state;
    return (
        <>
            <div>
          <h1>Films bro</h1>
          <Route path={`${match.path}/:filmID`} component={FilmItem} />
            </div>
        </>
    );
  }
}