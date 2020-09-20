import { IonContent, IonPage, IonLabel, IonHeader, IonToolbar, IonTitle, IonCard, IonGrid, IonRow, IonCol, IonItem, IonIcon, IonButton, IonImg } from '@ionic/react';
import React from 'react';
import './Home.css';
import tools from '../../components/Tools';
import Widgets from '../../components/Widgets';
import { cardItems } from './HomeUtils';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Widgets.Header id="home-header"/>
      <Widgets.routes/>

        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent scrollEvents={true} onIonScroll={(e)=>{
          tools.hideWhenScroll(e.detail.scrollTop,"home-header");
        }}>
          <Widgets.createCards items={cardItems()}/>
        </IonContent>
    </IonPage>
  );
};

export default Home;
