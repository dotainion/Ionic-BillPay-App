import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import './AppInfo.css';
import { documentOutline } from 'ionicons/icons';

const Privacy:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Privacy and Policies" icon={documentOutline}/>
   
            <IonContent>
                <div className="main-container">
                    <div className="sub-container">

                    </div>
                </div>
            </IonContent>

        </IonPage>
    )
}

export default Privacy;