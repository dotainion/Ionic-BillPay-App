import React from 'react';
import { IonIcon } from '@ionic/react';
import { languageSharp } from 'ionicons/icons';
import tools from './Tools';
import '../components/AppInfo.css';


class AppInformations{
    Nav(){
        return(
            <div style={{textAlign:"center",width:"100%"}}>
                <IonIcon class="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("show-language");
                }} icon={languageSharp}/>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("help-outside")
                }}>Help</span>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("privacy-outside")
                }}>Privacy</span>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("terms-outside")
                }}>Terms</span>
                <span className="loginBottomNavStyle loginBottomNavHover" onClick={()=>{
                    tools.clickById("aboutus-outside")
                }}>About us</span>
            </div>
        )
    }
}

var Info = new AppInformations()
export default Info;