import React from 'react';
import './Susu.css';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import Widget from '../../components/Widgets';
import { flowerOutline } from 'ionicons/icons';







export const Susu:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Susu" icon={flowerOutline}/>

            <IonContent>
                <div style={{marginTop:"40%",marginLeft:"50%",transform:"translate(-50%)"}}>
                    <IonButton style={{width:"150px"}}>Create a susu</IonButton>
                    <IonButton style={{width:"150px"}}>Join a susu</IonButton>
                </div>
            </IonContent>

        </IonPage>
    )
}

export default Susu;
