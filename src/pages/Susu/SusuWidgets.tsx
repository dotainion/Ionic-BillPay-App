import { IonCard, IonIcon, IonInput, IonItem, IonLabel, IonList, IonSelect, IonSelectOption } from '@ionic/react';
import { close, search } from 'ionicons/icons';
import React, { useState } from 'react';
import tools from '../../components/Tools';


export function SearchBar(){
    return(
        <div>
            <IonCard style={{borderRadius:"15px"}}>
                <IonItem lines="none">
                    <IonInput placeholder="Search" value={""} />
                    <IonIcon icon={close} />

                    <IonSelect interface="popover" placeholder="Location" value={""}>
                        <IonSelectOption>{"Locations"}</IonSelectOption>
                    </IonSelect>

                    <IonIcon color="primary" icon={search}/>
                </IonItem>
            </IonCard>
        </div>
    )
}

export function LoginAndJoinSusu(){
    const [switchLoginWith, setSwitchLoginWith] = useState({
        code:false,nameAndPassword:true,login:true,join:false,create:false
    });
    const susuAccounts = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9];
    return(
        <div className="mainContainer" style={{width:tools.compare(tools.platform(),true,"90%","")}}>
            <div hidden={!switchLoginWith.login}>
                <LoginWithCode isOpen={switchLoginWith.code}/>
                <LoginWithUserNameAndPassword isOpen={switchLoginWith.nameAndPassword}/>

                <IonItem hidden={switchLoginWith.code} lines="none" onClick={()=>{
                    setSwitchLoginWith({code:true,nameAndPassword:false,login:true,join:false,create:false});}}>
                    <span className="clickableLable clickableLableHover">Login with Susu-Code</span>
                </IonItem>
                <IonItem hidden={switchLoginWith.nameAndPassword} lines="none" onClick={()=>{
                    setSwitchLoginWith({code:false,nameAndPassword:true,login:true,join:false,create:false});}}>
                    <span className="clickableLable clickableLableHover">{"Login with username & password"}</span>
                </IonItem>
            </div>

            <ListOfSusuAccounts isOpen={switchLoginWith.join} items={susuAccounts}/>
            <CreateSusuAccount isOpen={switchLoginWith.create}/>

            <div hidden={!switchLoginWith.login}>
                <IonItem lines="full" onClick={()=>{setSwitchLoginWith({code:false,nameAndPassword:false,login:false,join:false,create:true})}}>
                    <span className="clickableLable clickableLableHover">Create Account</span>
                </IonItem>
                <IonItem lines="full" onClick={()=>{setSwitchLoginWith({code:false,nameAndPassword:true,login:false,join:true,create:false})}}>
                    <span className="clickableLable clickableLableHover">Join a Susu</span>
                </IonItem>
            </div>
            <IonItem hidden={switchLoginWith.login} lines="full" onClick={()=>{setSwitchLoginWith({code:false,nameAndPassword:true,login:true,join:false,create:false})}}>
                <span className="clickableLable clickableLableHover">Back</span>
            </IonItem>
        </div>
    )
}

export function SusuFirstTimeInfo(){
    return(
        <IonList class="SusuFirstTimeInfoMainContainer">
            <IonLabel>this is a test</IonLabel>
        </IonList>
    )
}

export function LoginWithCode(data:any){
    return(
        <div hidden={!data.isOpen} className="loginCodeWidthMainContainers">
            <IonItem class="itemInputsContainer">
                <IonLabel position="floating">Susu-Code</IonLabel>
                <IonInput type="text" onIonChange={e=>{}} value={""}></IonInput>
            </IonItem>
        </div>
    )
}

export function CreateSusuAccount(data:any){
    return(
        <div hidden={!data.isOpen} className="loginCodeWidthMainContainers">
            <IonItem class="itemInputsContainer">
                <IonLabel position="floating">Username/Email</IonLabel>
                <IonInput type="text" onIonChange={e=>{}} value={""}></IonInput>
            </IonItem>
            <IonItem class="itemInputsContainer">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" onIonChange={e=>{}} value={""}></IonInput>
            </IonItem>
        </div>
    )
}

export function LoginWithUserNameAndPassword(data:any){
    return(
        <div hidden={!data.isOpen} className="loginCodeWidthMainContainers">
            <IonItem class="itemInputsContainer">
                <IonLabel position="floating">Username</IonLabel>
                <IonInput type="text" onIonChange={e=>{}} value={""}></IonInput>
            </IonItem>
            <IonItem class="itemInputsContainer">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" onIonChange={e=>{}} value={""}></IonInput>
            </IonItem>
        </div>
    )
}

export function ListOfSusuAccounts(data:any){
    var ITEMS; if (data.items){ITEMS = data.items}else{ITEMS = []}
    console.log(ITEMS)
    return(
        <div hidden={!data.isOpen}>
            <SearchBar/>
            <div className="listOfSusuAccountMaincontainer">
                {
                    data.items.map((item:any, key:number)=>{return(
                        <IonItem key={key}>
                            <IonLabel>{item}</IonLabel>
                        </IonItem>
                    )})
                }
            </div>
        </div>
    )
}





