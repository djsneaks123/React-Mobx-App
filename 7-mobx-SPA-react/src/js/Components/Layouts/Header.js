/* Styles */
import logo from "../../../resources/logo.svg";
import "../../../css/Header.css"
import React from "react"
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Layout from "./Layout";


export default class Header extends React.Component{
  constructor(){
    super()
    this.state = {
      collapsed: true,
    }
  }

  toggleCollapse() {
      const collapsed = !this.state.collapsed;
      this.setState({collapsed});
  }


	render(){
    console.log("header prop below")
    console.log(this.props);
    const location  = this.props;
    const collapsed = this.state.collapsed;
    const homeClass = location.pathName === "/" ? "active" : "";
    const featuredClass = location.pathName.match(/^\/Featured/) ? "active" : "";
    const archivesClass = location.pathName.match(/^\/Archives/) ? "active" : "";
    const settingsClass = location.pathName.match(/^\/Settings/) ? "active" : "";
    const todoClass = location.pathName.match(/^\/Todo/) ? "active" : "";
    const fireTireClass = location.pathName.match(/^\/FireTire/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

		return(
      <div className="App">
        <div className="App-header wrapper">
          <nav className="navbar navbar-default">
            <div className="container-fluid hambergerOverlay">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Mobx SPA</a>
              </div>
              <div id="navbar" className={"navbar-collapse " + navClass}>
                <ul className="nav navbar-nav">
                  <li className={homeClass}> <NavLink to="/">Home</NavLink></li>
                  <li className={featuredClass}><NavLink to="/Featured">Featured</NavLink></li>
                  <li className={archivesClass}><NavLink to="/Archives/SomeArticle">Archives</NavLink></li>
                  <li className={settingsClass}><NavLink to="/Settings">Settings</NavLink></li>
                  <li className={todoClass}><NavLink to="/Todo">Todo</NavLink></li>
                  <li className={fireTireClass}><NavLink to="/FireTire">FireTire</NavLink></li>
                </ul>
              </div>
            </div>
          </nav>
          <div>
            <img src={logo}className="App-logo"alt="logo" />
            <h1 className="App-title">
              Welcome to David's First React and Mobx Single Page Application using sequelize.js!
            </h1>
          </div>
        </div> 
      </div>
    );
	}         	
}