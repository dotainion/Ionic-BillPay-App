import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, bookSharp, close, logoUsd } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../components/Tools';
import widgets from '../components/Widgets';
import './TemplatePage.css';
import './Budget.css';
import { T_Utils } from './T_Widgets';


class Budget{
    display(data:any){
        const itemName = ["Cost","Calendar"];
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
    AddBudget(data:any){
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
                    <IonButton class="addItemButton" slot="end" onClick={()=>{
                        if (expense_amount && expense_calendar){
                            var value = [
                                expense_amount,
                                expense_calendar,
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
        const [cateHighLight, setCatHighlight] = useState(["3px solid red","",""]);
        const [openAddModel, setOpenAddModel] = useState(false);
        const [openItemDisplay, setOpenItemDisplay] = useState(false);
        const [openItemClickValue, setOpenItemClickValue] = useState([] as any[]);
        const [holdsItems, setHoldsItems] = useState([] as any[]);
        var t_utils = new T_Utils();
        return (
            <IonContent hidden={!data.state}>
                <IonItem class="categoryHeaderContainer" lines="full">
                    <IonLabel id="income-cat" class="categoryHeader catHeaderVLine" onClick={async (e)=>{
                        setCatHighlight(["3px solid red","",""]);
                    }} style={{borderBottom:cateHighLight[0]}}>ALL</IonLabel>
                    <IonLabel id="income-day" class="categoryHeader catHeaderVLine" onClick={async (e)=>{
                        setCatHighlight(["","3px solid red",""]);
                    }} style={{borderBottom:cateHighLight[1]}}>DAILY</IonLabel>
                    <IonLabel id="income-mon" class="categoryHeader" onClick={async (e)=>{
                        setCatHighlight(["","","3px solid red"]);
                    }} style={{borderBottom:cateHighLight[2]}}>MONTHLY</IonLabel>
                </IonItem>
                
                <budget.AddBudget value={holdsItems} get={(value:any)=>{
                        setHoldsItems(t_utils.addItems(holdsItems,value));
                    }} isOpen={openAddModel} dismiss={()=>{setOpenAddModel(false)}}/>
                <budget.display value={openItemClickValue} isOpen={openItemDisplay} 
                    dismiss={()=>{setOpenItemDisplay(false)}}/>

                <IonContent hidden={tools.compare(cateHighLight[0],"",true,false)}>
                    <div className="catContentName">ALL CATEGORY</div>
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
                            <budget.emptyItemText hideByValu={holdsItems} onClick={()=>{setOpenAddModel(true)}}/>                           
                        }
                    </IonList>
                </IonContent>

                <IonContent hidden={tools.compare(cateHighLight[1],"",true,false)}>
                    <div className="catContentName">DAILY CATEGORY</div>
                    <IonList>
                        {
                            t_utils.categoryItemSeperator("daily",holdsItems).length?
                            t_utils.categoryItemSeperator("daily",holdsItems).map((item:any, index:number) =>
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
                            <budget.emptyItemText hideByValu={holdsItems} onClick={()=>{setOpenAddModel(true)}}/>                            
                        }
                    </IonList>
                </IonContent>

                <IonContent hidden={tools.compare(cateHighLight[2],"",true,false)}>
                    <div className="catContentName">MONTHLY CATEGORY</div>
                    <IonList>
                        {
                            t_utils.categoryItemSeperator("monthly",holdsItems).length?
                            t_utils.categoryItemSeperator("monthly",holdsItems).map((item:any, index:number) =>
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
                            <budget.emptyItemText hideByValu={holdsItems} onClick={()=>{setOpenAddModel(true)}}/>                            
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


export var budget = new Budget();
