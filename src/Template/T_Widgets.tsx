import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, bookSharp, cameraSharp, chatbox, close, giftOutline, logoUsd, readerOutline, refreshSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../components/Tools';
import widgets from '../components/Widgets';
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
    const [ITEMS_VALUE, SET_ITEMS_VALUE] = useState([] as any[]);

    const AddIncomes = () =>{
        const [income_uses, set_income_uses] = useState("");
        const [income_amount, set_income_amount] = useState("");
        const [income_calendar, set_income_calendar] = useState("");
        const [income_repeat, set_income_repeat] = useState("");
        const [income_comment, set_income_comment] = useState("");
        const [income_photo, set_income_photo] = useState("");

        const addItems = () =>{
            var data = [];
            var values = [
                income_uses,
                income_amount,
                income_calendar,
                income_repeat,
                income_comment,
                income_photo
            ];
            for (var item of ITEMS_VALUE){data.push(item)}
            data.push(values);
            SET_ITEMS_VALUE(data);
        }
        return (
            <IonModal isOpen={showAddIncome} onDidDismiss={()=>{setShowAddIncome(false)}}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Add Incomes</IonTitle>
                        <IonIcon slot="end" onClick={()=>{
                            setShowAddIncome(false)
                        }} class="back-close back-close-hover" icon={close}/>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem class="addPopUpHover" lines="none">
                        <IonIcon icon={giftOutline}/>
                        <IonItem class="incomeChoiceInputAdd">
                            <IonSelect interface="popover" onIonChange={(e)=>{
                                set_income_uses(e.detail.value);
                            }} placeholder="Choose your income uses" value={income_uses}>
                                <IonSelectOption><IonIcon icon={logoUsd}/>testing</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={logoUsd}/>
                        <IonInput type="number" placeholder="Amount" onIonChange={(e)=>{
                                if (e.detail.value){set_income_amount(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={income_amount}/>
                    </IonItem>
                    <widgets.calenderPicker onClick={(e:any)=>{
                            set_income_calendar(e.data)
                        }} class="addPopUpHover incomeInputAdd" lines="none"/>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={refreshSharp}/>
                        <IonInput placeholder="Do not repeat" onIonChange={(e)=>{
                                if (e.detail.value){set_income_repeat(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={income_repeat}/>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={chatbox}/>
                        <IonInput placeholder="Comments" onIonChange={(e)=>{
                                if (e.detail.value){set_income_comment(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={income_comment}/>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={cameraSharp}/>
                        <IonInput placeholder="Photo" onIonChange={(e)=>{
                                if (e.detail.value){set_income_photo(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={income_photo}/>
                    </IonItem>
                </IonContent>
                <IonItem lines="none">
                    <IonButton slot="end" onClick={()=>{
                        if (income_amount){
                            addItems();
                            setShowAddIncome(false);
                        }else{
                            tools.toast("No receonds to be added. Please provide $ amount");
                        }
                    }}>Add</IonButton>
                </IonItem>
            </IonModal>
        )
    }
    return (
        <>
            <IonItem hidden={!data.state} class="categoryHeaderContainer" lines="full">
                <IonLabel id="income-cat" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                    clickCategoryHandler(e.currentTarget.id);
                }} style={{borderBottom:catStyle}}>ALL</IonLabel>
                <IonLabel id="income-day" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                    clickCategoryHandler(e.currentTarget.id);
                }} style={{borderBottom:dayStyle}}>DAILY</IonLabel>
                <IonLabel id="income-mon" class="categoryHeader" onClick={(e)=>{
                    clickCategoryHandler(e.currentTarget.id);
                }} style={{borderBottom:monStyle}}>MONTHLY</IonLabel>
            </IonItem>

            <IonContent hidden={!data.state}>
                <AddIncomes/>
                <IonList>
                    {
                        ITEMS_VALUE.length?
                        ITEMS_VALUE.map((item, index) =>
                            <IonItem className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                <IonIcon color="primary" icon={bookSharp}/>
                                <IonLabel class="incomeAdded">Income:{index+1}</IonLabel>
                                <IonLabel class="incomeAdded">Amount:{item[1]}</IonLabel>
                            </IonItem>
                        ):
                        <IonItem>
                            <IonIcon color="danger" icon={bookSharp}/>
                            <IonLabel style={{paddingLeft:"5px"}}>Add your first income</IonLabel>
                        </IonItem>
                        
                    }
                </IonList>
            </IonContent>

            <IonCard hidden={!data.state} class="addButtonContainer" onClick={()=>{setShowAddIncome(true)}}>
                <IonIcon class="AddButtonIcon" icon={addOutline}/>
            </IonCard>
        </>
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
export function Notes(data:any){
    const [openNote, setOpenNote] = useState(false);
    const [notes, setNotes] = useState([] as any[]);

    const AddNotes = () =>{
        return(
            <IonModal isOpen={openNote} onDidDismiss={()=>{setOpenNote(false)}}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Add Note</IonTitle>
                        <IonIcon slot="end" onClick={()=>{
                            setOpenNote(false)
                        }} class="back-close back-close-hover" icon={close}/>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="textAreaContainer">
                        <IonInput class="textSubject" placeholder="Subject"/>
                        <IonTextarea rows={10} class="textArea" placeholder="Place your text here"/>
                        <widgets.textConfigureWidgets IDS={[]}/>
                    </div>
                </IonContent>
                <IonItem>
                    <IonButton slot="end" onClick={()=>{

                    }}>Save</IonButton>
                </IonItem>
            </IonModal>
        )
    }
    return (
        <>
            <IonContent hidden={!data.state}>
                <AddNotes/>
                {
                    notes.length?
                    notes.map((note, index)=>
                        <IonItem key={index}>
                            <IonIcon icon={readerOutline}/>
                            <IonLabel>Note:{index}</IonLabel>
                        </IonItem>
                    ):
                    <IonItem>
                        <IonLabel>Click the Add button to place your first note</IonLabel>
                    </IonItem>
                }
            </IonContent>
            
            <IonCard hidden={!data.state} class="addButtonContainer" onClick={()=>{setOpenNote(true)}}>
                <IonIcon class="AddButtonIcon" icon={addOutline}/>
            </IonCard>
        </>
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



