import React from 'react';
import { IonPage, IonBackButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle, IonLabel } from '@ionic/react';
import Widget from '../components/Widgets';
import './AppInfo.css';

export const Terms:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header/>
            <IonHeader>
                <IonToolbar>
                    <IonButtons onClick={()=>{
                    }} slot="start">
                        <IonBackButton defaultHref=""/>
                    </IonButtons>
                    <IonTitle>Terms and Conditions</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="main-container">
                    <div className="sub-container">
                        
                    </div>
                </div>

            </IonContent>

        </IonPage>
    )
}

export default Terms;