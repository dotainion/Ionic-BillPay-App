import React from 'react';
import { IonPage, IonContent, IonLabel } from '@ionic/react';
import Widget from '../components/Widgets';
import { leafOutline } from 'ionicons/icons';

export const History:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Bill Hostory" icon={leafOutline}/>

            <IonContent>
                <div style={{marginTop:"40%",marginBottom:"40%",textAlign:"center"}}>
                    <IonLabel>Comming soon</IonLabel>
                </div>

            </IonContent>

        </IonPage>
    )
}

export default History;