import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import { notifications } from 'ionicons/icons';

export const Notifications:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Notification" icon={notifications}/>

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