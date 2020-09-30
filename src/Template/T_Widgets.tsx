import { IonContent, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import tools from '../components/Tools';
import './TemplatePage.css';




export class T_Utils{

}
//*************************************************************
//*************************************************************
export function Rewards(data:any){
    return (
        <IonContent hidden={!data.state}>
            <IonItem>
                <IonLabel>There is no Rewards</IonLabel>
            </IonItem>
        </IonContent>
    )
}
//*************************************************************
//*************************************************************
export function Offers(data:any){
    return (
        <IonContent hidden={!data.state}>
            <IonItem>
                <IonLabel>There is no Offers</IonLabel>
            </IonItem>
        </IonContent>
    )
}
//*************************************************************
//*************************************************************
export function Banking(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
//*************************************************************
//*************************************************************
export function Earnings(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
//*************************************************************
//*************************************************************
export function Budgets(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
//*************************************************************
//*************************************************************
export function Accounts(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
//*************************************************************
//*************************************************************
export function Reports(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
//*************************************************************
//*************************************************************
export function Expense(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}



