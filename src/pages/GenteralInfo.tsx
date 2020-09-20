import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import { alertOutline } from 'ionicons/icons';

export const GeneralInfo:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="General Information" icon={alertOutline}/>

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