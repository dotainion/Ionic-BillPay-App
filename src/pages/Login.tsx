import React, { useState } from 'react';
import { IonPage, IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton, IonCheckbox, IonList } from '@ionic/react';
import Widgets from '../components/Widgets';
import AppInfo from '../components/AppInfo';
import tools from '../components/Tools';
import axios from 'axios';
import serverVar from '../components/ServerVar';
import './Home.css';


const Login: React.FC = () => {  
  tools.isLogin(false);
  var serverRecall = 0;
  
  var MARGIN = tools.compare(tools.platform(),true,"2%","35%");

  const [ runOnce, setRunOnce ] = useState(true);
  const [ errorText, setErrorText ] = useState("");
  const [ rememberChecked, setRememberChecked ] = useState(false);

  var ionViewWillEnter = () =>{
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

  const server = () => {
    tools.clickById("start-loader");
    setErrorText("");
    axios.post(tools.URL.LOGIN,serverVar.LOGIN)
    .then(response =>{
        if (response.data === true){
            if (rememberChecked){
                tools.saveCreds(serverVar.LOGIN.username,serverVar.LOGIN.password);
            }else{
              serverVar.LOGIN.username = "";
              serverVar.LOGIN.password = "";
              tools.clearCreds();
            }
            tools.isLogin(true);
            tools.clickById("stop-loader");
            tools.clickById("home");            
        }else if (response.data === false){
            setErrorText(tools.MSG.wrongPassword);
            tools.clickById("stop-loader");
        }else if (response.data === null){
          setErrorText(tools.MSG.userNotExist);
          tools.clickById("stop-loader");
        }else{
          setErrorText(tools.MSG.somethingWrong);
          tools.clickById("stop-loader");
        }
        
    })
    .catch(()=>{
      if (serverRecall <= 10){
        serverRecall ++;
        server();
      }else{
        setErrorText(tools.MSG.serverDown);
        tools.clickById("stop-loader");
      }
    });
  }

  return (
    <IonPage>
      <Widgets.languages/>
      <Widgets.routes/>
      <Widgets.loadSpinner/>

      <IonHeader>
        <IonToolbar>
          <IonTitle>{tools.MSG.APPNAME}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
          <IonItem style={{textAlign:"center",color:"red"}} lines="none">
              <IonLabel>{errorText}</IonLabel>
          </IonItem>
          <IonList style={{marginLeft:MARGIN,marginRight:MARGIN,
                  padding:"4%",border:"1px solid #000"}}>
              <Widgets.textStyle subtitle="Sign in" textColor="blue" title={tools.MSG.APPNAME} LM="31%"/>

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
                  <IonLabel>Remember me</IonLabel>
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
                              setErrorText(tools.MSG.validEmail);
                          }
                      }else{
                        setErrorText(tools.MSG.provideValidCreds);
                      }
                  }}>Login</IonButton>
              </IonItem>
              <IonLabel hidden class="underLine" onClick={()=>{
                  tools.clickById("login");
              }} style={{
                color:"Teal",
                border:"1px solid lightgray",
                padding:"5px"
              }}>Back to home</IonLabel>  
          </IonList>

          <IonItem style={{marginLeft:MARGIN,marginRight:MARGIN}} lines="full">
              <AppInfo.Nav/>
          </IonItem>
          <IonButton onClick={()=>{tools.clickById('home')}}>test</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;