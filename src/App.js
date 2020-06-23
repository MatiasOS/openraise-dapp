import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Web3ReactManager from 'components/Web3ReactManager';
import BondingCurveContainer from './containers/BondingCurveContainer';
import DashboardContainer from './containers/DashboardContainer';

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/">
                    <div className="invest-body-container">
                        <div className="app-shell">
                            <Web3ReactManager>
                                <BondingCurveContainer />
                            </Web3ReactManager>
                        </div>
                    </div>
                </Route>
                <Route exact path="/dashboard">
                    <div className="invest-body-container">
                        <div className="app-shell">
                            <Web3ReactManager>
                                <DashboardContainer />
                            </Web3ReactManager>
                        </div>
                    </div>
                </Route>
            </Switch>
        </HashRouter>
    );
};

export default App;
