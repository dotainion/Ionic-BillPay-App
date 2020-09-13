import React from 'react';
import { IonPage, IonBackButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle, IonLabel } from '@ionic/react';


export const Notifications:React.FC = () =>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons onClick={()=>{
                    }} slot="start">
                        <IonBackButton defaultHref=""/>
                    </IonButtons>
                    <IonTitle>Notifications</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div style={{marginTop:"40%",marginBottom:"40%",textAlign:"center"}}>
                    <IonLabel>Comming soon</IonLabel>
                </div>

            </IonContent>

        </IonPage>
    )
}

export default Notifications;