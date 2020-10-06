import React, { useState } from 'react';
import { IonPage, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonCheckbox, IonList } from '@ionic/react';
import Widgets from '../components/Widgets';
import AppInfo from '../components/AppInfo';
import tools from '../components/Tools';
import serverVar from '../components/ServerVar';
import './Home.css';
import { loginUser } from '../Firebase/Firebase';
import { Language } from '../components/Languages';


const Login: React.FC = () => {  
  const language = new Language();
  var MARGIN = tools.compare(tools.platform(),true,"2%","35%");

  const [ runOnce, setRunOnce ] = useState(true);
  const [ errorText, setErrorText ] = useState("");
  const [ rememberChecked, setRememberChecked ] = useState(false);

  var ionViewWillEnter = () =>{
    tools.isLogin(false);
    var creds = tools.getCreds();
    if (creds.username && creds.password){
      serverVar.LOGIN.username = creds.username;
      serverVar.LOGIN.password = creds.password;
      if (!rememberChecked){
        setRememberChecked(true);
      }
    }
  }
  if (runOnce){
    ionViewWillEnter()
    setRunOnce(false);
  }

  async function server(){
    tools.clickById("start-loader");
    setErrorText("");
    const response = await loginUser(serverVar.LOGIN.username,serverVar.LOGIN.password);
    if (response.state === true){
      if (rememberChecked){
        tools.saveCreds(serverVar.LOGIN.username,serverVar.LOGIN.password);
      }else{
        serverVar.LOGIN.username = "";
        serverVar.LOGIN.password = "";
        tools.clearCreds();
      }
      tools.isLogin(true);
      tools.clickById("stop-loader");
      tools.clickById("show-menu");
      tools.clickById("home"); 
    }else{
        setErrorText(response.message);
    }
    tools.clickById("stop-loader");
  }
  return (
    <IonPage>
      <Widgets.languages/>
      <Widgets.routes/>
      <Widgets.loadSpinner/>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>{language.texts().APPNAME}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
          <IonItem lines="none">
              <p style={{textAlign:"center",color:"red",width:"100%"}}>{errorText}</p>
          </IonItem>
          <IonList style={{marginLeft:MARGIN,marginRight:MARGIN,
                  padding:"4%",border:"1px solid #000"}}>
              <Widgets.textStyle subtitle="Sign in" textColor="blue" title={language.texts().APPNAME}/>

              <IonItem id="login-email" class="loginItemStyle">
                  <IonLabel position="floating">Email</IonLabel>
                  <IonInput type="text" onIonChange={e=>{
                    if (e.detail.value){
                      serverVar.LOGIN.username = e.detail.value;
                      tools.inputValidationReset("login-email");
                    }
                  }} value={serverVar.LOGIN.username}></IonInput>
              </IonItem>

              <IonItem id="login-password" class="loginItemStyle" style={{marginTop:"5px"}}>
                  <IonLabel position="floating">Password</IonLabel>
                  <IonInput type="password" onIonChange={e=>{
                    if (e.detail.value){
                      serverVar.LOGIN.password = e.detail.value;
                      tools.inputValidationReset("login-password");
                    }
                  }} value={serverVar.LOGIN.password}></IonInput>
              </IonItem>

              <div style={{marginTop:"20px",color:"navy"}}>
                  <IonCheckbox checked={rememberChecked} onIonChange={e =>{
                      setRememberChecked(e.detail.checked);
                  }}></IonCheckbox>
                  <IonLabel style={{paddingLeft:"5px"}}>Remember me</IonLabel>
              </div>

              <div style={{marginTop:"15px",color:"Crimson"}}>
                  <IonLabel class="underLine" onClick={()=>{
                      tools.clickById("recover");
                  }}>Forgot credentials?</IonLabel>
              </div>
              
              <IonItem style={{marginTop:"50px",color:"navy"}} lines="none">
                  <IonLabel class="underLine" onClick={()=>{
                      tools.clickById("register");
                  }}>Create account</IonLabel>
                  <IonButton id="login-go" style={{cursor:"pointer"}} onClick={()=>{
                      var validate = [
                          [serverVar.LOGIN.username,"login-email"],
                          [serverVar.LOGIN.password,"login-password"],
                      ]
                      if (tools.inputValidation(validate)){
                          if (tools.emailValidate(serverVar.LOGIN.username)){
                              server();
                          }else{
                              tools.inputValidation([["","login-email"]]);
                              setErrorText(language.texts().validEmail);
                          }
                      }else{
                        setErrorText(language.texts().provideValidCreds);
                      }
                  }}>Login</IonButton>
              </IonItem>
          </IonList>

          <IonItem style={{marginLeft:MARGIN,marginRight:MARGIN}} lines="full">
              <AppInfo.Nav/>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Login;