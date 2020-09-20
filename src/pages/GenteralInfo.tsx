import React from 'react';
import { IonPage, IonBackButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle, IonLabel } from '@ionic/react';
import Widget from '../components/Widgets';

export const GeneralInfo:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header/>
            <IonHeader>
                <IonToolbar>
                    <IonButtons onClick={()=>{
                    }} slot="start">
                        <IonBackButton defaultHref=""/>
                    </IonButtons>
                    <IonTitle>General Information</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{padding:"20px",paddingBottom:"60px"}}>
                    <h1>General Information</h1>
                    <p>Interruption of services due to natural disasters or unforeseen events.</p>
                    <p>Scheduled maintenance and repair of broken lines
                        Fallen Poles or Lines</p>
                    <li>No information available</li>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default GeneralInfo;