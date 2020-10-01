import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, close, logoUsd } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../components/Tools';
import widgets from '../components/Widgets';
import './TemplatePage.css';
import './Budget.css';
import { t_widgets } from './T_Widgets';



class Budget{
    /*data add array values [uses,amount,calendar,repeat,comment,photo]*/

    displayItem(data:any){
        var TEXTS = ["Cost: ","Date: "];
        return(
            <IonModal isOpen={data.isOpen} onDidDismiss={()=>{if(data.dismiss){data.dismiss(false)}}}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle slot="start">Expense item</IonTitle>
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
    AddExpenses(data:any){
        const [expense_amount, set_expense_amount] = useState("");
        const [expense_calendar, set_expense_calendar] = useState("");
        return (
            <IonModal isOpen={data.isOpen} onDidDismiss={()=>{if (data.dismiss){data.dismiss(false)}}}
                onDidPresent={()=>{set_expense_amount("");set_expense_calendar("");
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
                    <IonItem class="ionItem" lines="none">
                        <IonIcon icon={logoUsd}/>
                        <IonInput type="number" placeholder="Amount" onIonChange={(e)=>{
                                if (e.detail.value){set_expense_amount(e.detail.value)};
                            }} class="addPopUpHover incomeInputAdd" value={expense_amount}/>
                    </IonItem>
                    <widgets.calenderPicker onClick={(e:any)=>{
                        set_expense_calendar(e.data)
                    }} class="addPopUpHover incomeInputAdd" lines="none"/>
                </IonContent>
                <IonItem lines="none">
                    <IonButton slot="end" onClick={()=>{
                        if (expense_amount){
                            var value = [
                                expense_amount,
                                expense_calendar,
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
        const [showAddExpense, setShowAddExpense] = useState(false);
        const [showSelectedExpense, setShowSelectedExpense] = useState(false);
        const [ITEMS_VALUE, SET_ITEMS_VALUE] = useState([] as any[]);
        const [displayItemValue, setDisplayItemValue] = useState([] as any[]);

        const [catAll, setCatAll] = useState(highLightStyle);
        const [catDaily, setCatDaily] = useState("");
        const [catMonthly, setCatMonthly] = useState("");
        const cat_cmd = [setCatAll,setCatDaily,setCatMonthly];

        var noItemMsg = "Add your first budget";
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
                    <budget.displayItem value={displayItemValue} isOpen={showSelectedExpense} dismiss={()=>{setShowSelectedExpense(false)}}/>
                    <budget.AddExpenses get={(value:any)=>{SET_ITEMS_VALUE(value)}} isOpen={showAddExpense} dismiss={()=>{setShowAddExpense(false)}} value={ITEMS_VALUE} onClick={()=>{setShowAddExpense(true)}}/>

                    <t_widgets.allCategory msg={noItemMsg} openItem={(value:any)=>{setShowSelectedExpense(true);setDisplayItemValue(value)}} del={(index:number)=>{
                        t_widgets.update(update,setUpdate,()=>{
                            t_widgets.deleteItem(index,ITEMS_VALUE,SET_ITEMS_VALUE);
                        });
                    }} state={catAll} value={ITEMS_VALUE} onClick={()=>{setShowAddExpense(true)}}/>
                    <t_widgets.dailyCategory msg={noItemMsg} openItem={(value:any)=>{setShowSelectedExpense(true);setDisplayItemValue(value)}} del={(index:number)=>{
                        t_widgets.update(update,setUpdate,()=>{
                            t_widgets.deleteItem(index,ITEMS_VALUE,SET_ITEMS_VALUE);
                        });
                    }} state={catDaily} value={ITEMS_VALUE} onClick={()=>{setShowAddExpense(true)}}/>
                    <t_widgets.monthlyCategory msg={noItemMsg} openItem={(value:any)=>{setShowSelectedExpense(true);setDisplayItemValue(value)}} del={(index:number)=>{
                        t_widgets.update(update,setUpdate,()=>{
                            t_widgets.deleteItem(index,ITEMS_VALUE,SET_ITEMS_VALUE);
                        });
                    }} state={catMonthly} value={ITEMS_VALUE} onClick={()=>{setShowAddExpense(true)}}/>
                </IonContent>

                <IonCard hidden={!data.state} class="addButtonContainer" onClick={()=>{setShowAddExpense(true)}}>
                    <IonIcon class="AddButtonIcon" icon={addOutline}/>
                </IonCard>
            </>
        )
    }
}


export var budget = new Budget();
