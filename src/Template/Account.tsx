import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, bookSharp, chatbox, close, giftOutline, logoUsd, refreshSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../components/Tools';
import './TemplatePage.css';
import './Account.css';
import { T_Utils } from './T_Widgets';


class Budget{
    display(data:any){
        const itemName = ["Bank account","Other","Account name","Amount"]
        return(
            <IonModal isOpen={data.isOpen}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Incomes item</IonTitle>
                        <IonIcon slot="end" onClick={()=>{
                            if (data.dismiss){data.dismiss(false)}
                        }} class="back-close back-close-hover" icon={close}/>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        {
                            data.value.map((item:any, index:number)=>{return(
                                <div className="displayItemContainer" key={index}>
                                    <IonLabel>{itemName[index]+": "+item}</IonLabel>
                                </div>
                            )})
                        }
                    </IonList>
                </IonContent>
            </IonModal>
        )
    }
    AddAccount(data:any){
        const [bank_account, set_bank_account] = useState("");
        const [account_amount, set_amount_account] = useState("");
        const [other, set_other] = useState("");
        const [account_name, set_account_name] = useState("");
        return (
            <IonModal isOpen={data.isOpen} onDidDismiss={()=>{if (data.dismiss){data.dismiss(false)}}}
                onDidPresent={()=>{set_bank_account("");set_amount_account("");
                    set_other("");set_account_name("");
                }}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Add Expense</IonTitle>
                        <IonIcon slot="end" onClick={()=>{
                            if (data.dismiss){data.dismiss(false)}
                        }} class="back-close back-close-hover" icon={close}/>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonItem class="addPopUpHover" lines="none">
                        <IonIcon icon={giftOutline}/>
                        <IonItem class="incomeChoiceInputAdd">
                            <IonSelect interface="popover" onIonChange={(e)=>{
                                set_bank_account(e.detail.value);
                            }} placeholder="Choose your income uses" value={bank_account}>
                                <IonSelectOption><IonIcon icon={logoUsd}/>testing</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={refreshSharp}/>
                        <IonInput placeholder="Other" onIonChange={(e)=>{
                                if (e.detail.value){set_other(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={other}/>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={chatbox}/>
                        <IonInput placeholder="Amount Name" onIonChange={(e)=>{
                                if (e.detail.value){set_account_name(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={account_name}/>
                    </IonItem>
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={logoUsd}/>
                        <IonInput type="number" placeholder="Amount" onIonChange={(e)=>{
                                if (e.detail.value){set_amount_account(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={account_amount}/>
                    </IonItem>
                </IonContent>
                <IonItem lines="none">
                    <IonButton class="addItemButton" slot="end" onClick={()=>{
                        if (account_amount && account_name && account_amount){
                            var value = [
                                bank_account,
                                other,
                                account_name,
                                account_amount,
                            ]
                            if (data.get){data.get(value)};
                            if (data.dismiss){data.dismiss(false)}
                        }else{
                            tools.toastMsg("No receonds to be added. Please provide $ amount");
                        }
                    }}>Add</IonButton>
                </IonItem>
            </IonModal>
        )
    }
    emptyItemText(data:any){
        var hidden = true;
        if (data.hideByValu < 1){
            hidden = false;
        }
        var emptyItemMsg = "Click to add your first item";
        return(
            <IonItem hidden={hidden} class="noItemContainer" onClick={()=>{if(data.onClick){data.onClick(true)}}}>
                <IonIcon class="noItemIcon" icon={bookSharp}/>
                <IonLabel class="noItemLabel noItemHover">{emptyItemMsg}</IonLabel>
            </IonItem>  
        )
    }
    initialize(data:any){
        const [update, setUpdate] = useState(false);
        const [openAddModel, setOpenAddModel] = useState(false);
        const [openItemDisplay, setOpenItemDisplay] = useState(false);
        const [openItemClickValue, setOpenItemClickValue] = useState([] as any[]);
        const [holdsItems, setHoldsItems] = useState([] as any[]);
        var t_utils = new T_Utils();
        return (
            <IonContent hidden={!data.state}>
                <account.AddAccount value={holdsItems} get={(value:any)=>{
                        setHoldsItems(t_utils.addItems(holdsItems,value));
                    }} isOpen={openAddModel} dismiss={()=>{setOpenAddModel(false)}}/>
                <account.display value={openItemClickValue} isOpen={openItemDisplay} 
                    dismiss={()=>{setOpenItemDisplay(false)}}/>

                <IonContent>
                    <IonList>
                        {
                            holdsItems.length?
                            holdsItems.map((item:any, index:number) =>
                                <IonItem className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                    <IonIcon color="primary" icon={bookSharp}/>
                                    <IonLabel onClick={()=>{
                                        setOpenItemClickValue(item);
                                        setOpenItemDisplay(true);
                                    }} class="incomeAdded">Expense:{index+1}</IonLabel>
                                    <IonLabel onClick={()=>{
                                        setOpenItemClickValue(item);
                                        setOpenItemDisplay(true);
                                    }} class="incomeAdded">Amount: ${item[1]}</IonLabel>
                                    <IonIcon class="itemDelete itemDeleteHover" onClick={async ()=>{
                                        t_utils.deleteItem(index,holdsItems,()=>{
                                            if (update){setUpdate(false)}else{setUpdate(true)}
                                        })
                                    }} icon={close}/>
                                </IonItem>
                            ):
                            <account.emptyItemText hideByValu={holdsItems} onClick={()=>{setOpenAddModel(true)}}/>                            
                        }
                    </IonList>
                </IonContent>


                <IonCard class="addButtonContainer" onClick={()=>{setOpenAddModel(true)}}>
                    <IonIcon class="AddButtonIcon" icon={addOutline}/>
                </IonCard>
            </IonContent>
        )
    }
}


export var account = new Budget();
