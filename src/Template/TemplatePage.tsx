import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import tools from '../components/Tools';
import { Rewards, Offers, Banking, Earnings, Reports, Share } from './T_Widgets';
import { note } from './Notes';
import { income } from './Income';
import { expense } from './Expense';
import { budget } from './Budget';
import { account } from './Account';


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
                <note.show state={tools.compare(cmd,"note",true,false)}/>
                <income.initialize state={tools.compare(cmd,"income",true,false)}/>
                <budget.initialize state={tools.compare(cmd,"budget",true,false)}/>
                <account.initialize state={tools.compare(cmd,"account",true,false)}/>
                <Reports state={tools.compare(cmd,"report",true,false)}/>
                <expense.initialize state={tools.compare(cmd,"expense",true,false)}/>
                <Share state={tools.compare(cmd,"share",true,false)}/>
            </IonContent>
        </IonPage>
    )
}

export default Template;