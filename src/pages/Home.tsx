import { IonContent, IonPage, IonLabel, IonHeader, IonToolbar, IonTitle, IonCard, IonGrid, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css';
import tools from '../components/Tools';
import Widgets from '../components/Widgets';

const Home: React.FC = () => {
  var showHeaderValueState = 0;

  const templates = [
    {
      name:"Bills",
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    },{
      name:"test"
    }
  ]
  return (
    <IonPage>
      <Widgets.Header/>
      <Widgets.routes/>

        <IonHeader id="home-header">
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent scrollEvents={true} onIonScroll={(e)=>{
          var headerElement = document.getElementById("home-header")
          if (showHeaderValueState < e.detail.scrollTop){
            if (headerElement){
              headerElement.hidden = true;
            }
            showHeaderValueState = e.detail.scrollTop - 5;
          }else{
            if (headerElement){
              headerElement.hidden = false;
            }
            showHeaderValueState = e.detail.scrollTop;
          }
        }}>
          <IonGrid>
            <IonRow>
              {
                templates.map((files, index)=>{return(
                  <IonCol key={index}>
                    <IonCard style={{width:tools.compare(tools.platform(),true,"105px","210px")}} class="cardActive card">
                      <IonLabel>{files.name}</IonLabel>
                    </IonCard>
                  </IonCol>
                )})
              }
            </IonRow>
          </IonGrid>
        </IonContent>
    </IonPage>
  );
};

export default Home;
