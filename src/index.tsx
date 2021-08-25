import 'bootstrap/dist/css/bootstrap.min.css';
import { ConnectedRouter as Router } from 'connected-react-router';
import React from 'react';
import { Container } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import NavLayout from './components/layout/navbar';
import i18next from './configs/i18n';
import ROUTES from './constants/routes';
import Epg from './pages/epg';
import EpgDetails from './pages/epg/details';
import Home from './pages/home';
import Vod from './pages/vod';
import VodDetails from './pages/vod/details';
import store, { history } from './redux';
import './styles/index.css';


ReactDOM.render(
    <>
        <Provider store={store}>
            <NavLayout />
            <Container>
            <Router history={history}>
                <I18nextProvider i18n={i18next}>
                    <Switch>
                        <Route exact path={ROUTES.home} component={Home} />
                        <Route exact path={ROUTES.epg} component={Epg} />
                        <Route exact path={ROUTES.vod} component={Vod} />
                        <Route exact path={ROUTES.vodDetails} component={VodDetails} />
                        <Route exact path={ROUTES.epgDetails} component={EpgDetails} />
                    </Switch>
                </I18nextProvider>
            </Router>
            </Container>
        </Provider>
    </>,
    document.getElementById('root'),
);
