import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import tools from '../components/Tools';
import { Rewards, Offers, Banking, Earnings, Notes, Incomes, Budgets, Accounts, Reports, Expense } from './T_Widgets';


export const Template:React.FC = () =>{
    var cmd = tools.getCmdData().cmd;
    var headerTitle = tools.getCmdData().name;
    var headerIcon = tools.getCmdData().icon;
    return( 
        <IonPage>
            <Widget.Header backButton={true} title={headerTitle} image="img" icon={headerIcon}/>
            
            <IonContent>
                <Rewards state={tools.compare(cmd,"reward",true,false)}/>
                <Offers state={tools.compare(cmd,"offer",true,false)}/>
                <Banking state={tools.compare(cmd,"banking",true,false)}/>
                <Earnings state={tools.compare(cmd,"earning",true,false)}/>
                <Notes state={tools.compare(cmd,"note",true,false)}/>
                <Incomes state={tools.compare(cmd,"income",true,false)}/>
                <Budgets state={tools.compare(cmd,"budget",true,false)}/>
                <Accounts state={tools.compare(cmd,"account",true,false)}/>
                <Reports state={tools.compare(cmd,"report",true,false)}/>
                <Expense state={tools.compare(cmd,"expense",true,false)}/>
            </IonContent>
        </IonPage>
    )
}

export default Template;