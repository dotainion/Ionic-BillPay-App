import React from 'react';
import { IonPage, IonBackButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle, IonLabel, IonGrid, IonCol, IonImg, IonCard, IonRow } from '@ionic/react';
import Widget from '../../components/Widgets';
import '../../pages/Home/Home.css';
import './Contact.css';
import tools from '../../components/Tools';
import { cardItems } from './Utils';
import worldIcon from './images/worldOf.jpg';
import { Emailing } from './Components';


const ContactUs:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header/>

            <Emailing/>
            
            <IonHeader>
                <IonToolbar>
                    <IonButtons onClick={()=>{
                    }} slot="start">
                        <IonBackButton defaultHref=""/>
                    </IonButtons>
                    <IonTitle>Contact us</IonTitle>
                    <IonImg slot="end" class="header-icon" src={worldIcon}/>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <Widget.createCards items={cardItems()}/>
            </IonContent>
        </IonPage>
    )
}

export default ContactUs;