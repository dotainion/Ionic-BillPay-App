import React from 'react';
import { IonPage, IonBackButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle, IonLabel } from '@ionic/react';
import Widget from '../components/Widgets';

export const Notifications:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header/>
            <IonHeader>
                <IonToolbar>
                    <IonButtons onClick={()=>{
                    }} slot="start">
                        <IonBackButton defaultHref=""/>
                    </IonButtons>
                    <IonTitle>Notifications</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div style={{padding:"20px",paddingBottom:"20px"}}>
                <h1>Notified Information</h1>
                <p>Notification messages will be sent to customers as a
                    reminder bills that are due.</p>
                <p>Disconnection notification will be sent prior to account being disconnected.</p>
            </div>
            <IonContent style={{border:"3px solid teal"}}>
                <div style={{padding:"20px"}}>
                    <li>No faults in your area</li>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Notifications;