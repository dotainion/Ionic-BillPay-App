import { IonContent, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import tools from '../components/Tools';
import { w_calendar } from '../components/W_Utils';
import './TemplatePage.css';



export class T_Utils{
    update(state:boolean,onUpdate:any,onProccess:any,toast:boolean=true){
        var msg = "Are you sure you will like to delete this item?"
        if (toast){
            tools.toastWithCmd(msg,(returnValue:boolean)=>{
                if (returnValue){onProccess()}
                if (state){
                    onUpdate(false);
                }else{
                    onUpdate(true);
                }
            });  
        }      
    }
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
        for (var item of value){data.push(item)}
        data.push(newValue);
        return data;
    }
    deleteItem(index:number, value:any, func:any){
        var item = value;
        item.splice(index,1);
        func(item);
    }
    deleteByIndex(index:number, value:any){
        var item = value;
        item.splice(index,1);
        return item;
    }
    categoryItemSeperator(cmd:string,values:any){
        var data = [];
        var date = w_calendar.weekMonthDayYearExtract(new Date().toString());
        try{
            if (cmd === "daily"){
                var tempDate = date.fullMonth+"/"+date.day+"/"+date.year;
                for (var item of values){
                    if (item[2] === tempDate){
                        data.push(item);
                    }
                }
                return data;
            }else if (cmd === "monthly"){
                for (var Item of values){
                    console.log("testing inclues", Item)
                    if (Item[2].includes(date.fullMonth)){
                        data.push(Item);
                    }
                }
                return data;
            }
            return [];
        }catch{
            return data;
        }
    }
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
export function Share(data:any){
    return (
        <IonContent hidden={!data.state}>
            <div style={{textAlign:"center",marginTop:"40%",fontWeight:"bold",fontSize:"20px",color:"teal"}}>
                <IonLabel>{tools.getCmdData().name + " component is coming soon..."}</IonLabel>
            </div>
        </IonContent>
    )
}

