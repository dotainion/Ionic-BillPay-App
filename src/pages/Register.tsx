import React, { useState } from 'react';
import { IonPage, IonItem, IonLabel, IonInput, IonContent, IonToolbar, IonTitle, IonButton, IonHeader, IonList, IonCheckbox } from '@ionic/react';
import Widgets from '../components/Widgets';
import tools from '../components/Tools';
import axios from 'axios';
import AppInfo from '../components/AppInfo';
import serverVar from '../components/ServerVar';
import './Home.css';

const Register: React.FC = () =>{
    var MARGIN = tools.compare(tools.platform(),true,"2%","35%")

    const [firstPage, setFirstPage] = useState(true);
    const [secondPage, setSecondPage] = useState(false);
    const [thirdPage, setThirdPage] = useState(false);
    
    const [rememberChecked, setRememberChecked] = useState(false);

    const [errorText, setErrorText] = useState("");
    const [passwordMatchErrorText, setPasswordMatchErrorText] = useState("");

    const [progressCreds, setProgressCreds] = useState("");

    const server = () =>{
        setErrorText("");
        tools.clickById("start-loader");
        axios.post(tools.URL.REGISTER,serverVar.REGISTER)
        .then(response =>{
            if (response.data === true){
                if (rememberChecked){
                    tools.saveCreds(serverVar.REGISTER.email,serverVar.REGISTER.password);
                }
                tools.clickById("home")
            }else if (response.data === false){
                setErrorText(tools.MSG.userExist);
            }else if (response.data === null){
                setErrorText(tools.MSG.somethingWrong);
            }else{
                setErrorText(tools.MSG.somethingWrong);
            }
        })
        .catch(error=>{
            setErrorText(tools.MSG.serverDown);
        })
        .finally(()=>{
            tools.clickById("stop-loader");
        })
    }

    const matchWhileTyping = (value:any, reference:any) =>{
        if (value !== reference){
            tools.inputValidationSet("register-confirmpassword","orange")
            setPasswordMatchErrorText(tools.MSG.passwordMatch);
        }else{
            setPasswordMatchErrorText("");
            tools.inputValidationReset("register-confirmpassword");
        };
        tools.inputValidationReset("register-password");
    }    

    document.addEventListener("keypress",function(e){
        if (e.keyCode === 13){
            if (firstPage){
                console.log("fisrt")
                tools.clickById("firstPage-go");
            }else if (secondPage){
                console.log("fisrt2")
                tools.clickById("secondPage-go");
            }else if (thirdPage){
                console.log("fisrt3")
                tools.clickById("thirdPage-go");
            }
        }
    });

    return(
        <IonPage>
            <Widgets.routes/>
            <Widgets.loadSpinner/>
            <Widgets.languages/>

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
                    <Widgets.textStyle subtitle="Register" textColor="blue" title={tools.MSG.APPNAME} LM="30%"/>

                    {/*this is the first page*/}
                    <div hidden={!firstPage} id="register-firstpage">
                        <IonItem id="register-firstname" class="registerItemStyle">
                            <IonLabel position="floating">First name</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.firstname = e.detail.value;
                                    tools.inputValidationReset("register-firstname"); 
                                }
                            }} type="text" value={serverVar.REGISTER.firstname}/>
                        </IonItem>
                        <IonItem id="register-lastname" class="registerItemStyle">
                            <IonLabel position="floating">Last name</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.lastname = e.detail.value;
                                    tools.inputValidationReset("register-lastname");
                                }
                            }} type="text" value={serverVar.REGISTER.lastname}/>
                        </IonItem>

                        <IonItem id="register-email" class="registerItemStyle">
                            <IonLabel position="floating">Email Address</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.email = e.detail.value;
                                    tools.inputValidationReset("register-email");
                                }
                            }} type="email" value={serverVar.REGISTER.email}/>
                        </IonItem>
                        <IonItem id="register-contact" class="registerItemStyle">
                            <IonLabel position="floating">Phone Number</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.contact = e.detail.value;
                                    tools.inputValidationReset("register-contact");
                                }
                            }} type="number" value={serverVar.REGISTER.contact}/>
                        </IonItem>
                        <IonItem style={{color:"navy"}} lines="none">
                            <IonLabel class="underLine" onClick={()=>{
                                tools.clickById("login");
                            }}>Sign in instead</IonLabel>
                            <IonButton id="firstPage-go" style={{cursor:"pointer"}} onClick={()=>{
                                var validate = [
                                    [serverVar.REGISTER.firstname,"register-firstname"],
                                    [serverVar.REGISTER.lastname,"register-lastname"],
                                    [serverVar.REGISTER.email,"register-email"],
                                    [serverVar.REGISTER.contact,"register-contact"],
                                ]
                                if (tools.inputValidation(validate)){
                                    if (tools.emailValidate(serverVar.REGISTER.email)){
                                        setFirstPage(false);
                                        setSecondPage(true);
                                        setThirdPage(false);
                                        setErrorText("");
                                    }else{
                                        tools.inputValidation([["","register-email"]]);
                                        setErrorText(tools.MSG.validEmail);
                                    }
                                }
                            }}>Next</IonButton>
                        </IonItem>
                    </div>

                    {/*this is the second page*/}
                    <div hidden={!secondPage}>
                        <IonItem id="register-city" class="registerItemStyle">
                            <IonLabel position="floating">City</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.city = e.detail.value;
                                    tools.inputValidationReset("register-city");
                                }
                            }} type="text" value={serverVar.REGISTER.city}/>
                        </IonItem>
                        <IonItem id="register-stateaddress" class="registerItemStyle">
                            <IonLabel position="floating">State</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.stateaddress = e.detail.value;
                                    tools.inputValidationReset("register-stateaddress");
                                }
                            }} type="text" value={serverVar.REGISTER.stateaddress}/>
                        </IonItem>

                        <IonItem id="register-address" class="registerItemStyle">
                            <IonLabel position="floating">Home address</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.address = e.detail.value;
                                    tools.inputValidationReset("register-address");
                                }
                            }} type="text" value={serverVar.REGISTER.address}/>
                        </IonItem>
                        <IonItem id="register-shippingaddress" class="registerItemStyle">
                            <IonLabel position="floating">Shipping address 
                                <span style={{fontSize:"11px",marginLeft:"5px",color:"teal"}}>
                                    Optional</span></IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.shippingaddress = e.detail.value;
                                    tools.inputValidationReset("register-shippingaddress");
                                }
                            }} type="text" value={serverVar.REGISTER.shippingaddress}/>
                        </IonItem>
                        <IonItem style={{color:"blue"}} lines="none">
                            <IonLabel class="underLine" onClick={()=>{
                                setFirstPage(true);
                                setSecondPage(false);
                                setThirdPage(false);
                            }}>Back</IonLabel>
                            <IonButton id="secondPage-go" style={{cursor:"pointer"}} onClick={()=>{
                                var validate = [
                                    [serverVar.REGISTER.city,"register-city"],
                                    [serverVar.REGISTER.stateaddress,"register-stateaddress"],
                                    [serverVar.REGISTER.address,"register-address"],
                                    //[this.registration.shippingaddress,"register-shippingaddress"],
                                ]
                                if (tools.inputValidation(validate)){
                                    setFirstPage(false);
                                    setSecondPage(false);
                                    setThirdPage(true);
                                    setErrorText("");
                                };
                            }}>Next</IonButton>
                        </IonItem>
                    </div>

                    {/*this is the third page*/}
                    <div hidden={!thirdPage}>
                        <Widgets.passwordProgressBar max={4} creds={progressCreds} mTop="22.3%"/>
                        <IonItem id="register-password" class="registerItemStyle">
                            <IonLabel position="floating">Password</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.password = e.detail.value;
                                    tools.inputValidationReset("register-password");
                                    matchWhileTyping(serverVar.REGISTER.password, serverVar.REGISTER.confirmpassword);
                                    setProgressCreds(e.detail.value);
                                }
                            }} type="password" value={serverVar.REGISTER.password}/>
                        </IonItem>
                        <div style={{color:"red",fontSize:"12px"}}>
                            <IonLabel>{passwordMatchErrorText}</IonLabel>
                        </div>
                        <IonItem id="register-confirmpassword" class="registerItemStyle">
                            <IonLabel position="floating">Confirm password</IonLabel>
                            <IonInput onIonChange={e=>{
                                if (e.detail.value){
                                    serverVar.REGISTER.confirmpassword = e.detail.value;
                                    matchWhileTyping(serverVar.REGISTER.password,serverVar.REGISTER.confirmpassword);
                                }
                            }} type="password" value={serverVar.REGISTER.confirmpassword}/>
                        </IonItem>
                        <div style={{marginTop:"20px",color:"navy",marginBottom:"19%"}}>
                            <IonCheckbox checked={rememberChecked} onIonChange={e =>{
                                setRememberChecked(e.detail.checked);
                            }}></IonCheckbox>
                            <IonLabel>Remember me</IonLabel>
                        </div>
                        <IonItem style={{color:"blue"}} lines="none">
                            <IonLabel class="underLine" onClick={()=>{
                                setFirstPage(false);
                                setSecondPage(true);
                                setThirdPage(false);
                            }}>Back</IonLabel>
                            <IonButton id="thirdPage-go" style={{cursor:"pointer"}} onClick={()=>{
                                var validate = [
                                    [serverVar.REGISTER.password,"register-password"],
                                    [serverVar.REGISTER.confirmpassword,"register-confirmpassword"]
                                ]
                                if (tools.inputValidation(validate)){
                                    if (tools.credsConfirmValidation(validate)){
                                        if (tools.passwordStrength(serverVar.REGISTER.password).value >= 3){
                                            server();
                                        }else{
                                            tools.inputValidation([
                                                ["","register-password"],
                                                ["","register-confirmpassword"]
                                            ])
                                            setErrorText(tools.MSG.passwordStrength);
                                        }
                                    }else{
                                        setErrorText(tools.MSG.passwordMatch);
                                    };
                                }else{
                                    setErrorText(tools.MSG.fieldsRequired);
                                };
                            }}>Finish</IonButton>
                        </IonItem>
                    </div>
                    <IonLabel hidden class="underLine" onClick={()=>{
                        tools.clickById("home")
                    }} style={{
                        color:"Teal",
                        border:"1px solid lightgray",
                        padding:"5px"
                    }}>Back to home</IonLabel>
                </IonList>
                <IonItem style={{marginLeft:MARGIN,marginRight:MARGIN,textAlign:"center",
                        fontWeight:"bold",color:"Black"}} lines="full">
                    <AppInfo.Nav/>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}


export default Register;
