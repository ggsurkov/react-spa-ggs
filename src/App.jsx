import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';


import PrivateRoute from './components/PrivateRoute'
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import News from './pages/News';
import Article from './pages/Article';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound';



class App extends Component {
    state = {
        user: null
    };

    login = user => {
        this.setState({user}, () => this.props.history.push('/news'));
    };

    logout = user => {
        this.setState({user: null}, () => this.props.history.push('/'));
    };

    render() {
        return (

                <div className="app">
                    <Toolbar user={this.state.user} />

                    <Content>
                        <Route path="/news" render={()=> <Sidenav topics={this.props.topics} />} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" render={props => <Login onLogin={this.login}/>} />
                            <Route path="/logout" render={props => <Logout onLogout={this.login}/>} />

                            <PrivateRoute exact path="/news/:topic?" user={this.state.user} component={News} data={this.props.articles} />
                            <PrivateRoute path="/news/:topic/:article" user={this.state.user} component={Article} data={this.props.articles} />
                            <Route path="/login" component={Login} />
                            <Route component={NotFound} />
                        </Switch>

                    </Content>
                </div>

        );
    }
}

export default withRouter(App);