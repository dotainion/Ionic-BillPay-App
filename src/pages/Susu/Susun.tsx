import React from 'react';
import './Susu.css';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../../components/Widgets';
import { flowerOutline } from 'ionicons/icons';
import { LoginAndJoinSusu } from './SusuWidgets';







export const Susu:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Susu" icon={flowerOutline}/>

            <IonContent>
                <LoginAndJoinSusu/>
            </IonContent>

        </IonPage>
    )
}

export default Susu;
