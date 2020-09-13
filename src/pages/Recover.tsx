import React, { useState } from 'react';
import { IonPage, IonItem, IonLabel, IonInput, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonButton } from '@ionic/react';
import Widgets from '../components/Widgets';
import tools from '../components/Tools';
import axios from 'axios';
import AppInfo from '../components/AppInfo';
import './Home.css';

const Recover: React.FC = () => {
    const vfcode = tools.MSG.resendverificationcode;

    const [ errorText, setErrorText ] = useState("");
    const [ recallServer, setRecallServer ] = useState(false);
    const [ firstPage, setFirstPage ] = useState(true);
    const [ secondPage, setSecondPage ] = useState(false);
    const [ email, setEmail ] = useState("");
    const [ verification, setVerification ] = useState("");

    var MARGIN = tools.compare(tools.platform(),true,"2%","35%");

    var credentials = {
        SERVERUSERNAME:tools.SERVERUSERNAME,
        SERVERPASSWORD:tools.SERVERPASSWORD,
        email:email,
        verification:verification,
    }

    const server = () =>{
        tools.clickById("start-loader");
        setErrorText("");
        axios.post(tools.URL.RECOVER,credentials)
        .then(response =>{
            if (response.data === true){
                console.log("pass")
            }else if (response.data === false){
                console.log("false")
            }else if (response.data === null){
                console.log("none")
            }else{

            }
        })
        .catch(()=>{

        })
        .finally(()=>{
            tools.clickById("stop-loader");
            setRecallServer(false);
        })
    }

    return(
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
                    <Widgets.textStyle subtitle="Recovery" textColor="blue" title={tools.MSG.APPNAME} LM="30%"/>

                    <div hidden={!firstPage}>
                        <IonItem lines="none">
                            <p>{tools.MSG.recoverinfo}</p>
                        </IonItem>
                        
                        <IonItem id="recover-email" class="loginItemStyle" style={{marginTop:"5px"}}>
                            <IonLabel position="floating">Email address</IonLabel>
                            <IonInput type="email" onIonChange={e=>{
                                if (e.detail.value){
                                    setEmail(e.detail.value);
                                    tools.inputValidationReset("recover-email");
                                }
                            }} value={email}></IonInput>
                        </IonItem>
                        
                        <IonItem style={{marginTop:"50px",color:"navy"}} lines="none">
                            <IonButton slot="end" style={{cursor:"pointer"}} onClick={()=>{
                                setRecallServer(true);
                                var validate = [
                                    [email,"recover-email"],
                                ]
                                if (tools.inputValidation(validate)){
                                    if (tools.emailValidate(email)){
                                        setSecondPage(true);
                                        setFirstPage(false);
                                        setErrorText("");
                                    }else{
                                        tools.inputValidation([["","recover-email"]]);
                                        setErrorText(tools.MSG.validEmail);
                                    }
                                }else{
                                    setErrorText(tools.MSG.fieldsRequired);
                                }
                            }}>Next</IonButton>
                        </IonItem>
                    </div>

                    <div hidden={!secondPage}>
                        <IonItem lines="none">
                            <p>{tools.MSG.recoververificationinfo}</p>
                        </IonItem>

                        <IonItem id="recover-verification" class="loginItemStyle" style={{marginTop:"5px"}}>
                            <IonLabel position="floating">Validation</IonLabel>
                            <IonInput type="email" onIonChange={e=>{
                                if (e.detail.value){
                                    setVerification(e.detail.value);
                                    tools.inputValidationReset("recover-verification");
                                }
                            }} value={verification}></IonInput>
                        </IonItem>

                            <p hidden={recallServer} style={{fontSize:"12px",color:"black"}}>
                                <span>{vfcode[1]}</span>
                                <span style={{color:"navy"}} className="recoverResendCode textHover" onClick={()=>{
                                    server();
                                }}>{vfcode[2]}</span>
                            </p>

                        <IonItem style={{marginTop:"50px",color:"navy"}} lines="none">
                            <IonLabel class="underLine" onClick={()=>{
                                setFirstPage(true);
                                setSecondPage(false);
                            }}>Back</IonLabel>
                            <IonButton slot="end" onClick={()=>{
                                var validate = [
                                    [verification,"recover-verification"],
                                ]
                                if (tools.inputValidation(validate)){
                                    server();
                                }else{
                                    setErrorText(tools.MSG.fieldsRequired);
                                };
                            }}>Submit</IonButton>
                        </IonItem>
                    </div>

                    <IonLabel color="light" class="underLine" onClick={()=>{
                            tools.clickById("login")
                    }} style={{color:"Teal"}}>Try to login</IonLabel> 
                </IonList>

                <IonItem style={{marginLeft:MARGIN,marginRight:MARGIN,textAlign:"center",
                        fontWeight:"bold",color:"Black"}} lines="full">
                    <AppInfo.Nav/>
                </IonItem>
            </IonContent>
        </IonPage>
    );
}


export default Recover;
