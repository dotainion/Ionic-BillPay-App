import React from 'react';
import { IonIcon, IonItem } from '@ionic/react';
import { languageSharp } from 'ionicons/icons';
import tools from './Tools';
import '../components/AppInfo.css';


class AppInformations{
    Nav(){
        return(
            <IonItem style={{width:"100%"}} lines="none">
                <IonIcon class="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("show-language");
                }} icon={languageSharp}/>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("help")
                }}>Help</span>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("privacy")
                }}>Privacy</span>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("terms")
                }}>Terms</span>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("aboutus")
                }}>About us</span>
            </IonItem>
        )
    }
}

var Info = new AppInformations()
export default Info;