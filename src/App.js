import React from 'react';
import {Layout, Header, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div>
        <Layout fixedHeader className={"main-menu"}>
            <Header className={'header-color'} title={<span id={"header-name"}><strong><a href="/">Pаvel Shikhоv</a></strong></span>}>
                <Navigation>
                    <Link className={"menu-item"} to="/">Main</Link>
                    <Link className={"menu-item"} to="/resume">Resume</Link>
                    <Link className={"menu-item"} to="/projects">Projects</Link>
                    <Link className={"menu-item"} to="/contact">Contact</Link>
                </Navigation>
            </Header>

            <Content>
                <div className="page-content" />
                <Main/>
            </Content>

        </Layout>
    </div>
  );
}

export default App;
