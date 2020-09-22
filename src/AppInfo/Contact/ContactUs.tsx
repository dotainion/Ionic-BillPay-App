import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../../components/Widgets';
import '../../pages/Home/Home.css';
import './Contact.css';
import { cardItems } from './Utils';
import { Emailing } from './Components';
import { mailOpenOutline } from 'ionicons/icons';


const ContactUs:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Contact us" icon={mailOpenOutline}/>

            <Emailing/>
            
            <IonContent>
                <Widget.createCards items={cardItems()}/>
            </IonContent>
        </IonPage>
    )
}

export default ContactUs;