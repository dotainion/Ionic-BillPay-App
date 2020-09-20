import React from 'react';
import { IonPage, IonContent, IonLabel } from '@ionic/react';
import Widget from '../components/Widgets';
import { trash } from 'ionicons/icons';

export const Trash:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Trash" icon={trash}/>
            
            <IonContent>
                <div style={{marginTop:"40%",marginBottom:"40%",textAlign:"center"}}>
                    <IonLabel>Comming soon</IonLabel>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Trash;