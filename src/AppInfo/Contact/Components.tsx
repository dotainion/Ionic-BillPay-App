import React, { useState } from 'react';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonModal, IonTextarea, IonTitle, IonToolbar } from "@ionic/react";
import { close } from 'ionicons/icons';
import './Contact.css';
import tools from '../../components/Tools';
import { utils } from './Utils';



export function Emailing(){
    const [show, setShow] = useState(false);
    const [messages, setMessages] = useState(utils.textAreaMessage);
    var styles = `border:1px solid lightgray;border-radius:25px;padding-left:20px;
        padding-right:20px;padding:10px;margin-left:5px;margin-right:5px;`;
    const initialize = () =>{
        for (var msg of utils.emailMessageHolder){
            console.log(msg)
            tools.addElement("p","new",msg,styles);
        }
    }
    var WIDTH = tools.compare(tools.platform(),true,"95%","80%");
    return(
        <>
            <IonModal isOpen={show} onDidDismiss={()=>{setShow(false)}}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Email</IonTitle>
                        <IonIcon class="close-icon close-icon-hover" slot="end" icon={close} onClick={()=>{setShow(false)}}/>
                    </IonToolbar>
                </IonHeader>

                <IonContent>
                    <div id="new" className="messageScroll" style={{width:WIDTH}}></div>

                    <IonTextarea rows={5} class="textArea" style={{width:WIDTH}} value={messages} onIonChange={(e)=>{
                        if (e.detail.value){
                            setMessages(e.detail.value);
                            utils.textAreaMessage = e.detail.value;
                        }
                    }} placeholder="Type your text here"/>

                    <IonItem class="sendButton" lines="full">
                        <IonButton slot="end" onClick={()=>{
                            if (messages){
                                tools.addElement("p","new",messages,styles);
                                setMessages("");
                                utils.emailMessageHolder.push(messages);
                            }
                        }}>Send</IonButton>
                    </IonItem>
                    <IonItem lines="none">
                        <IonButton slot="end" class="done-button" onClick={()=>{
                            setShow(false);
                            utils.emailMessageHolder = [];
                            utils.textAreaMessage = "";
                        }}>Done</IonButton>
                    </IonItem>
                </IonContent>
            </IonModal>

            <IonButton hidden id="emailing" onClick={()=>{
                setShow(true);
                setTimeout(()=>{
                    initialize();
                }, 100)
            }}/>
        </>
    )
}