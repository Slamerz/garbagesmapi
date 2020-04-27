// @ts-nocheck
import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Loading from "./Loading";
import Films from "./Films";
import { makeRequest } from "./utils";
import Header from "./Header";

class App extends React.Component {
  state = {
    loading: true,
    navItems: [],
    sidebarItems: [],
  };

  componentDidMount() {
    this.fetchSidbarItems();
  }

  fetchSidbarItems = async () =>{
    const res = await makeRequest("/");
    this.setState((currentState) => ({
      ...currentState,
      navItems: Object.keys(res),
      loading: false,
    }));
  };

  fetchSideItemsFor = async (item) => {
    const res = await makeRequest(`/${item}`);
    this.setState((currentState) => ({
      ...currentState,
      sidebarItems: res.results,
    }));
  };

  render() {
    const { loading, navItems, sidebarItems } = this.state;
    if (loading) {
      return <Loading />;
    }

    return (
      <>
        <Header>
          <div>
            {navItems.map((si) => (
              <Link style={{display: "inline-block", padding:"5px", marginRight: "5px", border: "1px solid grey"}} key={si} to={`/${si}`} onClick={() => this.fetchSideItemsFor(si)}>
                {si}
              </Link>
            ))}
          </div>
        </Header>
        <div style={{display: "grid", gridTemplateColumns: "30% 60%", marginTop: "20px"}}>
          <div style={{border: "1px solid grey"}}>
            <ul>{sidebarItems.map((si) => {
                const urlSplit = si.url.split("/").reverse()
              return (
                  <Link key={`si-${si.title || si.name}`} to={`/${urlSplit[2]}/${urlSplit[1]}`}>
                    <li key={`si-${si.title || si.name}`}>
                      {si.title || si.name}
                    </li>
                  </Link>
              );
            })}
            </ul>
          </div>

          <Switch>
            <Route path="/films" component={Films} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
