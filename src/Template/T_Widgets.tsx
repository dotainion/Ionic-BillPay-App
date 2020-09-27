import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonModal, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, cameraSharp, chatbox, close, giftOutline, logoUsd, refreshSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../components/Tools';
import widgets from '../components/Widgets';
import './TemplatePage.css';




export class T_Utils{

}
export function Rewards(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Offers(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Banking(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Earnings(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Incomes(data:any){
    const [catStyle, setCatStyle] = useState("");
    const [dayStyle, setDayStyle] = useState("");
    const [monStyle, setMonStyle] = useState("");
    const clickCategoryHandler = (ID:string) =>{
        const id_s:any = [{id:"income-cat",cmd:setCatStyle},{id:"income-day",cmd:setDayStyle},{id:"income-mon",cmd:setMonStyle}];
        for (var item of id_s){
            if (item.id === ID){
                item.cmd("3px solid red");
            }else{
                item.cmd("");
            }
        }
    }

    const [showAddIncome, setShowAddIncome] = useState(false);
    const AddIncomes = () =>{
        return (
            <IonModal isOpen={showAddIncome} onDidDismiss={()=>{setShowAddIncome(false)}}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Add Incomes</IonTitle>
                        <IonIcon slot="end" onClick={()=>{
                            setShowAddIncome(false)
                        }} class="add-back-close add-back-close-hover" icon={close}/>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem class="addPopUpHover" lines="none">
                        <IonIcon icon={giftOutline}/>
                        <IonItem class="incomeChoiceInputAdd">
                            <IonSelect interface="popover" placeholder="Choose your income uses" value="">
                                <IonSelectOption>testing</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={logoUsd}/>
                        <IonInput placeholder="Amount" class="addPopUpHover incomeInputAdd"/>
                    </IonItem>
                    <widgets.calenderPicker class="addPopUpHover incomeInputAdd" lines="none"/>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={refreshSharp}/>
                        <IonInput placeholder="Do not repeat" class="addPopUpHover incomeInputAdd"/>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={chatbox}/>
                        <IonInput placeholder="Comments" class="addPopUpHover incomeInputAdd"/>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={cameraSharp}/>
                        <IonInput placeholder="Photo" class="addPopUpHover incomeInputAdd"/>
                    </IonItem>
                </IonContent>
                <IonItem lines="none">
                    <IonButton slot="end">Add</IonButton>
                </IonItem>
            </IonModal>
        )
    }
    return (
        <IonContent hidden={!data.state}>
            <IonItem lines="full">
                <IonLabel id="income-cat" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                    clickCategoryHandler(e.currentTarget.id);
                }} style={{borderBottom:catStyle}}>CATEGORY</IonLabel>
                <IonLabel id="income-day" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                    clickCategoryHandler(e.currentTarget.id);
                }} style={{borderBottom:dayStyle}}>DAILY</IonLabel>
                <IonLabel id="income-mon" class="categoryHeader" onClick={(e)=>{
                    clickCategoryHandler(e.currentTarget.id);
                }} style={{borderBottom:monStyle}}>MONTHLY</IonLabel>
            </IonItem>

            <AddIncomes/>

            <IonCard class="incomeAdd" onClick={()=>{setShowAddIncome(true)}}>
                <IonIcon class="incomeAddIcon" icon={addOutline}/>
            </IonCard>
        </IonContent>
    )
}
export function Budgets(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Notes(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Accounts(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Reports(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}
export function Expense(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}



