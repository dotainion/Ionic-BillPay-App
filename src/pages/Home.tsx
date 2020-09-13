import { IonContent, IonPage, IonButton } from '@ionic/react';
import React from 'react';
import './Home.css';
import tools from '../components/Tools';
import Widgets from '../components/Widgets';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Widgets.routes/>
      <Widgets.Header name="Home"/>
        <IonContent fullscreen>
          <IonButton onClick={()=>{
            tools.clickById("login");
          }}>login</IonButton>
          <IonButton onClick={()=>{
            tools.clickById("recover");
          }}>recover</IonButton>
          <IonButton onClick={()=>{
            tools.clickById("register");
          }}>register</IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Home;
