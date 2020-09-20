import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import './AppInfo.css';
import { readerOutline } from 'ionicons/icons';

export const Terms:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} subTigle="Terms and Conditions" icon={readerOutline}/>

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