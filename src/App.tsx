import React from 'react';
import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* pages */
import Menu from './components/Menu';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Recover from './pages/Recover';
import Payment from './Payment/Payment';
import Aboutus from './AppInfo/AboutUs';
import ContactUs from './AppInfo/Contact/ContactUs';
import Help from './AppInfo/Help';
import Privacy from './AppInfo/Privacy';
import Terms from './AppInfo/Terms';

import Chat from './pages/Chats/LiveChat';
import History from './pages/History';
import Notification from './pages/Notification';
import GeneralInfo from './pages/GeneralInfo';
import Faults from './pages/FaultInArea';

import Trash from './pages/Trash';
import Settings from './pages/Settings';
import Favorites from './pages/Favorites';
import Archieved from './pages/Archieved';

import TemplatePage from './Template/TemplatePage';

const App: React.FC = () => {

  return (
    <IonApp>
      
      <IonReactRouter>
        <IonSplitPane contentId="menu">
          <Menu/>
          <IonRouterOutlet id="menu">
            <Route path="/aboutus" component={Aboutus} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/contactus" component={ContactUs} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/help" component={Help} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/privacy" component={Privacy} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/terms" component={Terms} exact />
            <Redirect from="/" to="/" exact />
            
            <Route path="/trash" component={Trash} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/settings" component={Settings} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/favorites" component={Favorites} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/archeived" component={Archieved} exact />
            <Redirect from="/" to="/" exact />

            <Route path="/chat" component={Chat} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/history" component={History} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/notification" component={Notification} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/generalinfo" component={GeneralInfo} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/faults" component={Faults} exact />
            <Redirect from="/" to="/" exact />

            <Route path="/template" component={TemplatePage} exact />
            <Redirect from="/" to="/" exact />

            <Route path="/payment" component={Payment} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/home" component={Home} exact />
            <Redirect from="/" to="/" exact />
            <Route path="/login" component={Login} exact />
            <Redirect from="/" to="/login" exact />
          </IonRouterOutlet>
        </IonSplitPane>

        <Route path="/register" component={Register} exact />
        <Redirect from="/" to="/" exact />
        <Route path="/recover" component={Recover} exact />
        <Redirect from="/" to="/" exact />
        <Route path="/login" component={Login} exact />
        <Redirect from="/" to="/login" exact />
      </IonReactRouter>
      
    </IonApp>
  );
};

export default App;
