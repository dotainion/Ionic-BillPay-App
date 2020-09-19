import { IonContent, IonPage, IonLabel, IonHeader, IonToolbar, IonTitle, IonCard, IonGrid, IonRow, IonCol, IonItem, IonIcon } from '@ionic/react';
import React, { createRef, useState } from 'react';
import './Home.css';
import tools from '../components/Tools';
import Widgets from '../components/Widgets';
import { bookmarkOutline, callOutline, cashOutline, chatboxOutline, flagOutline, giftOutline, heartOutline, home, ribbonOutline, saveOutline, settingsOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  var showHeaderValueState = 0;

  const templates = [
    {
      name:"Bills",
      icon:cashOutline,
      id:"Bills",
      cmd:"",
    },{
      name:"Settings",
      icon:settingsOutline,
      id:"Settings",
      cmd:"",
    },{
      name:"Offers",
      icon:ribbonOutline,
      id:"Offers",
      cmd:"",
    },{
      name:"Rewards",
      icon:giftOutline,
      id:"Rewards",
      cmd:"",
    },{
      name:"Banking",
      icon:saveOutline,
      id:"Banking",
      cmd:"",
    },{
      name:"Earning",
      icon:heartOutline,
      id:"Earning",
      cmd:"",
    },{
      name:"Faults",
      icon:flagOutline,
      id:"Faults",
      cmd:"",
    },{
      name:"Contact",
      icon:callOutline,
      id:"Contact",
      cmd:"",
    },{
      name:"Live Chat",
      icon:chatboxOutline,
      id:"Live Chat",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
    },{
      name:"test",
      icon:bookmarkOutline,
      id:"test",
      cmd:"",
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
                    <IonCard id={files.id} style={{width:tools.compare(tools.platform(),true,"105px","210px"),backgroundColor:"white"}} class="cardActive card" onClick={()=>{
                      var element = document.getElementById(files.id)?.style;
                      if (element?.backgroundColor === "white"){
                        element.backgroundColor = "skyblue";
                      }else{
                        if (element){
                          element.backgroundColor = "white";
                        }
                      }
                    }}>
                      <IonItem style={{textAlign:"center",color:"blue",fontWeight:"bold",cursor:"pointer"}} lines="full">
                        <IonLabel>{files.name}</IonLabel>
                      </IonItem>
                      <div style={{fontSize:tools.compare(tools.platform(),true,"90px","120px"),color:"navy"}}>
                        <IonIcon icon={files.icon}/>
                      </div>
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
