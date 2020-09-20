import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import { flagOutline } from 'ionicons/icons';

export const Faults:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Faults" icon={flagOutline}/>

            <div style={{padding:"20px",paddingBottom:"20px"}}>
                <h1>Faults Information</h1>
                <p>Information will be send out notifying the plublic of 
                    any interuption of server in the area.</p>
            </div>
            <IonContent style={{border:"3px solid teal"}}>
                <div style={{padding:"20px"}}>
                    <li>No faults in your area</li>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default Faults;