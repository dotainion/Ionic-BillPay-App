import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, cameraSharp, chatbox, close, giftOutline, logoUsd, refreshSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../components/Tools';
import widgets from '../components/Widgets';
import './TemplatePage.css';
import './Incomes.css';
import { t_widgets } from './T_Widgets';



class Incomes{
    /*data add array values [uses,amount,calendar,repeat,comment,photo]*/

    displayItem(data:any){
        var TEXTS = ["Type: ","Cost: ","Date: ","Repeat: ","Comment: ","Photo: "];
        return(
            <IonModal isOpen={data.isOpen} onDidDismiss={()=>{if(data.dismiss){data.dismiss(false)}}}>
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
                                    <IonLabel>{TEXTS[index]+item}</IonLabel>
                                </div>
                            )})
                        }
                    </IonList>
                </IonContent>
            </IonModal>
        )
    }
    AddIncomes(data:any){
        const [income_uses, set_income_uses] = useState("");
        const [income_amount, set_income_amount] = useState("");
        const [income_calendar, set_income_calendar] = useState("");
        const [income_repeat, set_income_repeat] = useState("");
        const [income_comment, set_income_comment] = useState("");
        const [income_photo, set_income_photo] = useState("");
        return (
            <IonModal isOpen={data.isOpen} onDidDismiss={()=>{if (data.dismiss){data.dismiss(false)}}}
                onDidPresent={()=>{set_income_uses("");set_income_amount("");set_income_calendar("");
                    set_income_repeat("");set_income_comment("");set_income_photo("");
                }}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Add Incomes</IonTitle>
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
                            var value = [
                                income_uses,
                                income_amount,
                                income_calendar,
                                income_repeat,
                                income_comment,
                                income_photo
                            ]
                            if (data.get){data.get(t_widgets.addItems(data.value,value))};
                            if (data.dismiss){data.dismiss(false)}
                        }else{
                            tools.toast("No receonds to be added. Please provide $ amount");
                        }
                    }}>Add</IonButton>
                </IonItem>
            </IonModal>
        )
    }
    show(data:any){
        var highLightStyle = "3px solid red";
        const [update, setUpdate] = useState(false);
        const [showAddIncome, setShowAddIncome] = useState(false);
        const [showSelectedIncome, setShowSelectedIncome] = useState(false);
        const [ITEMS_VALUE, SET_ITEMS_VALUE] = useState([] as any[]);
        const [displayItemValue, setDisplayItemValue] = useState([] as any[]);

        const [catAll, setCatAll] = useState(highLightStyle);
        const [catDaily, setCatDaily] = useState("");
        const [catMonthly, setCatMonthly] = useState("");
        const cat_cmd = [setCatAll,setCatDaily,setCatMonthly];

        var noItemMsg = "Add your first income";
        return (
            <>
                <IonItem hidden={!data.state} class="categoryHeaderContainer" lines="full">
                    <IonLabel id="income-cat" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                        t_widgets.headerCategoryhighlight(e.currentTarget.id,cat_cmd,highLightStyle);
                    }} style={{borderBottom:catAll}}>ALL</IonLabel>
                    <IonLabel id="income-day" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                        t_widgets.headerCategoryhighlight(e.currentTarget.id,cat_cmd,highLightStyle);
                    }} style={{borderBottom:catDaily}}>DAILY</IonLabel>
                    <IonLabel id="income-mon" class="categoryHeader" onClick={(e)=>{
                        t_widgets.headerCategoryhighlight(e.currentTarget.id,cat_cmd,highLightStyle);
                    }} style={{borderBottom:catMonthly}}>MONTHLY</IonLabel>
                </IonItem>
                
                <IonContent hidden={!data.state}>
                    <income.displayItem value={displayItemValue} isOpen={showSelectedIncome} dismiss={()=>{setShowSelectedIncome(false)}}/>
                    <income.AddIncomes get={(value:any)=>{SET_ITEMS_VALUE(value)}} isOpen={showAddIncome} dismiss={()=>{setShowAddIncome(false)}} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>

                    <t_widgets.allCategory msg={noItemMsg} openItem={(value:any)=>{setShowSelectedIncome(true);setDisplayItemValue(value)}} del={(index:number)=>{
                        t_widgets.update(update,setUpdate,()=>{
                            t_widgets.deleteItem(index,ITEMS_VALUE,SET_ITEMS_VALUE);
                        });
                    }} state={catAll} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>
                    <t_widgets.dailyCategory msg={noItemMsg} openItem={(value:any)=>{setShowSelectedIncome(true);setDisplayItemValue(value)}} del={(index:number)=>{
                        t_widgets.update(update,setUpdate,()=>{
                            t_widgets.deleteItem(index,ITEMS_VALUE,SET_ITEMS_VALUE);
                        });
                    }} state={catDaily} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>
                    <t_widgets.monthlyCategory msg={noItemMsg} openItem={(value:any)=>{setShowSelectedIncome(true);setDisplayItemValue(value)}} del={(index:number)=>{
                        t_widgets.update(update,setUpdate,()=>{
                            t_widgets.deleteItem(index,ITEMS_VALUE,SET_ITEMS_VALUE);
                        });
                    }} state={catMonthly} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>
                </IonContent>

                <IonCard hidden={!data.state} class="addButtonContainer" onClick={()=>{setShowAddIncome(true)}}>
                    <IonIcon class="AddButtonIcon" icon={addOutline}/>
                </IonCard>
            </>
        )
    }
}


export var income = new Incomes();
