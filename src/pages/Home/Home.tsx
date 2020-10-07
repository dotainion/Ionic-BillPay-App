import { IonContent, IonPage, withIonLifeCycle } from '@ionic/react';
import React, { Component } from 'react';
import './Home.css';
import Widgets from '../../components/Widgets';
import { cardItems } from './HomeUtils';
import { home } from 'ionicons/icons';
import tools from '../../components/Tools';

class Home extends Component{
  ionViewWillEnter(){
    tools.clickById("start-loader");
  }
  ionViewDidEnter(){
    tools.clickById("stop-loader");
  }
  render(){
    return (
      <IonPage>
        <Widgets.Header title="Home" icon={home}/>
        <Widgets.routes/>
        <Widgets.loadSpinner/>

        <IonContent>
          <Widgets.createCards items={cardItems()} onClick={()=>{tools.clickById("template")}}/>
        </IonContent>
        <Widgets.Footer/>
      </IonPage>
    );
  }
};

export default withIonLifeCycle(Home);
