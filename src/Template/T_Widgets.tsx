import { IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/react';
import { bookSharp, close } from 'ionicons/icons';
import React from 'react';
import tools from '../components/Tools';
import { w_calendar } from '../components/W_Utils';
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

class Widgets{
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
    noItem(data:any){
        const ifHiden = (value:any) =>{
            console.log("testing this value",value)
            if (value.length >= 1){
                return false;
            }else{
                return true;
            }
        }
        return(
            <IonItem class="noItemContainer" onClick={()=>{if(data.onClick){data.onClick(true)}}}>
                <IonIcon class="noItemIcon" icon={bookSharp}/>
                <IonLabel hidden={!ifHiden(data.switch)} class="noItemLabel noItemHover">{data.msg}</IonLabel>
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
                            <IonItem className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                <IonIcon color="primary" icon={bookSharp}/>
                                <IonLabel onClick={()=>{if(data.openItem){data.openItem(item)}}} class="incomeAdded">Expense:{index+1}</IonLabel>
                                <IonLabel onClick={()=>{if(data.openItem){data.openItem(item)}}} class="incomeAdded">Amount: ${item[1]}</IonLabel>
                                <IonIcon class="itemDelete itemDeleteHover" onClick={()=>{if(data.del){data.del(index)}}} icon={close}/>
                            </IonItem>
                        ):
                        <t_widgets.noItem msg={data.msg} switch={data.value} onClick={()=>{if(data.onClick){data.onClick(true)}}}/>
                        
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
                        t_widgets.categoryItemSeperator("daily",data.value).length?
                        t_widgets.categoryItemSeperator("daily",data.value).map((item:any, index:number) =>
                            <IonItem className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                <IonIcon color="primary" icon={bookSharp}/>
                                <IonLabel onClick={()=>{if(data.openItem){data.openItem(item)}}} class="incomeAdded">Expense:{index+1}</IonLabel>
                                <IonLabel onClick={()=>{if(data.openItem){data.openItem(item)}}} class="incomeAdded">Amount: ${item[1]}</IonLabel>
                                <IonIcon class="itemDelete itemDeleteHover" onClick={()=>{if(data.del){data.del(index)}}} icon={close}/>
                            </IonItem>
                        ):
                        <t_widgets.noItem msg={data.msg} switch={data.value} onClick={()=>{if(data.onClick){data.onClick(true)}}}/>
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
                        t_widgets.categoryItemSeperator("monthly",data.value).length?
                        t_widgets.categoryItemSeperator("monthly",data.value).map((item:any, index:number) =>
                            <IonItem className="incomeAddedHover" key={index} lines={tools.compare(tools.platform(),true,"none","")}>
                                <IonIcon color="primary" icon={bookSharp}/>
                                <IonLabel onClick={()=>{if(data.openItem){data.openItem(item)}}} class="incomeAdded">Expense:{index+1}</IonLabel>
                                <IonLabel onClick={()=>{if(data.openItem){data.openItem(item)}}} class="incomeAdded">Amount: ${item[1]}</IonLabel>
                                <IonIcon class="itemDelete itemDeleteHover" onClick={()=>{if(data.del){data.del(index)}}} icon={close}/>
                            </IonItem>
                        ):
                        <t_widgets.noItem msg={data.msg} switch={data.value} onClick={()=>{if(data.onClick){data.onClick(true)}}}/>
                    }
                </IonList>
            </IonContent>
        )
    }
}
export var t_widgets = new Widgets();
