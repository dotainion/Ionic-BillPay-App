import React from "react";
import { IonContent, IonLabel, IonCard, IonList } from "@ionic/react";

//import "./styles.css";


const Payment: React.FC = () => {
    return (
        <IonContent style={{border:"1px solid lightgray"}}>
            <IonCard style={{fontSize:"25px",padding:"10px"}}>
                <IonLabel>Information</IonLabel>
            </IonCard>
            
            <IonList style={{padding:"10px"}}>
                <IonLabel>Information on the company</IonLabel>
            </IonList>
        </IonContent>
    );
}


export default Payment
