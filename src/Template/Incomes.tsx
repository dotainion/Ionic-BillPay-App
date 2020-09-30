import { IonButton, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react';
import { addOutline, bookSharp, cameraSharp, chatbox, close, giftOutline, logoUsd, refreshSharp } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../components/Tools';
import widgets from '../components/Widgets';
import { w_calendar } from '../components/W_Utils';
import './TemplatePage.css';



class Incomes{
    /*data add array values [uses,amount,calendar,repeat,comment,photo]*/

    headerCategoryhighlight = (ID:string,cmd:any,cmdValue:string) =>{
        var index = 0;
        const id_s:any = ["income-cat","income-day","income-mon"];
        for (var item of id_s){
            index ++;
            if (item === ID){
                cmd[index-1](cmdValue);
            }else{
                cmd[index-1]("");
            }
        }
    }
    addItems = (value:any,newValue:any) =>{
        var data = [];
        var values = [newValue[0],newValue[1],newValue[2],newValue[3],newValue[4],newValue[5]];
        for (var item of value){data.push(item)}
        data.push(values);
        return data;
    }
    categoryItemSeperator(cmd:string,values:any){
        var data = [];
        var date = w_calendar.weekMonthDayYearExtract(new Date().toString());
        if (cmd === "daily"){
            var tempDate = date.fullMonth+"/"+date.day+"/"+date.year;
            for (var item of values){
                if (item[2] === tempDate){
                    data.push(item);
                }
            }
        }else if (cmd === "monthly"){
            for (var Item of values){
                if (Item[2].includes(date.fullMonth)){
                    data.push(Item);
                }
            }
        }
        return data;
    }
    AddIncomes = (data:any) =>{
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
                            if (data.get){data.get(income.addItems(data.value,value))};
                            if (data.dismiss){data.dismiss(false)}
                        }else{
                            tools.toast("No receonds to be added. Please provide $ amount");
                        }
                    }}>Add</IonButton>
                </IonItem>
            </IonModal>
        )
    }
    noteIncomeLabel(data:any){
        return(
            <IonItem onClick={()=>{if(data.onClick){data.onClick(true)}}}>
                <IonIcon color="danger" icon={bookSharp}/>
                <IonLabel style={{paddingLeft:"5px"}}>Add your first income</IonLabel>
            </IonItem>
        )
    }
    allCategory(data:any){
        var state;
        if (data.state){state = true}else{state = false}
        return(
            <IonContent hidden={!state}>
                <div className="catContentName">ALL CATEGORY</div>
                <IonList>
                    {
                        data.value.length?
                        data.value.map((item:any, index:number) =>
                            <IonItem onClick={()=>{}} className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                <IonIcon color="primary" icon={bookSharp}/>
                                <IonLabel class="incomeAdded">Income:{index+1}</IonLabel>
                                <IonLabel class="incomeAdded">Amount: ${item[1]}</IonLabel>
                                <IonIcon class="itemDelete itemDeleteHover" onClick={()=>{if(data.del){data.del(index)}}} icon={close}/>
                            </IonItem>
                        ):
                        <income.noteIncomeLabel onClick={()=>{if(data.onClick){data.onClick(true)}}}/>
                        
                    }
                </IonList>
            </IonContent>
        )
    }
    dailyCategory(data:any){
        var state;
        if (data.state){state = true}else{state = false}
        return(
            <IonContent hidden={!state}>
                <div className="catContentName">DAILY CATEGORY</div>
                <IonList>
                    {
                        income.categoryItemSeperator("daily",data.value).length?
                        income.categoryItemSeperator("daily",data.value).map((item:any, index:number) =>
                            <IonItem onClick={()=>{}} className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                <IonIcon color="primary" icon={bookSharp}/>
                                <IonLabel class="incomeAdded">Income:{index+1}</IonLabel>
                                <IonLabel class="incomeAdded">Amount: ${item[1]}</IonLabel>
                                <IonIcon class="itemDelete itemDeleteHover" onClick={()=>{if(data.del){data.del(index)}}} icon={close}/>
                            </IonItem>
                        ):
                        <income.noteIncomeLabel onClick={()=>{if(data.onClick){data.onClick(true)}}}/>
                    }
                </IonList>
            </IonContent>
        )
    }
    monthlyCategory(data:any){
        var state;
        if (data.state){state = true}else{state = false}
        return(
            <IonContent hidden={!state}>
                <div className="catContentName">MONTHLY CATEGORY</div>
                <IonList>
                    {
                        income.categoryItemSeperator("monthly",data.value).length?
                        income.categoryItemSeperator("monthly",data.value).map((item:any, index:number) =>
                            <IonItem onClick={()=>{}} className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                <IonIcon color="primary" icon={bookSharp}/>
                                <IonLabel class="incomeAdded">Income:{index+1}</IonLabel>
                                <IonLabel class="incomeAdded">Amount: ${item[1]}</IonLabel>
                                <IonIcon class="itemDelete itemDeleteHover" onClick={()=>{if(data.del){data.del(index)}}} icon={close}/>
                            </IonItem>
                        ):
                        <income.noteIncomeLabel onClick={()=>{if(data.onClick){data.onClick(true)}}}/>
                    }
                </IonList>
            </IonContent>
        )
    }
    show(data:any){
        var highLightStyle = "3px solid red";
        const [showAddIncome, setShowAddIncome] = useState(false);
        const [ITEMS_VALUE, SET_ITEMS_VALUE] = useState([] as any[]);

        const [catAll, setCatAll] = useState(highLightStyle);
        const [catDaily, setCatDaily] = useState("");
        const [catMonthly, setCatMonthly] = useState("");
        const cat_cmd = [setCatAll,setCatDaily,setCatMonthly];
        return (
            <>
                <IonItem hidden={!data.state} class="categoryHeaderContainer" lines="full">
                    <IonLabel id="income-cat" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                        income.headerCategoryhighlight(e.currentTarget.id,cat_cmd,highLightStyle);
                    }} style={{borderBottom:catAll}}>ALL</IonLabel>
                    <IonLabel id="income-day" class="categoryHeader catHeaderVLine" onClick={(e)=>{
                        income.headerCategoryhighlight(e.currentTarget.id,cat_cmd,highLightStyle);
                    }} style={{borderBottom:catDaily}}>DAILY</IonLabel>
                    <IonLabel id="income-mon" class="categoryHeader" onClick={(e)=>{
                        income.headerCategoryhighlight(e.currentTarget.id,cat_cmd,highLightStyle);
                    }} style={{borderBottom:catMonthly}}>MONTHLY</IonLabel>
                </IonItem>
                
                <IonContent hidden={!data.state}>
                    <income.AddIncomes get={(value:any)=>{SET_ITEMS_VALUE(value)}} isOpen={showAddIncome} dismiss={()=>{setShowAddIncome(false)}} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>

                    <income.allCategory del={(index:number)=>{}} state={catAll} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>
                    <income.dailyCategory del={(index:number)=>{}} state={catDaily} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>
                    <income.monthlyCategory del={(index:number)=>{}} state={catMonthly} value={ITEMS_VALUE} onClick={()=>{setShowAddIncome(true)}}/>
                </IonContent>

                <IonCard hidden={!data.state} class="addButtonContainer" onClick={()=>{setShowAddIncome(true)}}>
                    <IonIcon class="AddButtonIcon" icon={addOutline}/>
                </IonCard>
            </>
        )
    }
}


export var income = new Incomes();
