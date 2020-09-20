import React from 'react';
import { IonPage, IonBackButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle, IonLabel, IonTextarea, IonItem, IonButton } from '@ionic/react';
import Widget from '../../components/Widgets';
import './LiveChat.css';
import tools from '../../components/Tools';

export class Chat extends React.Component{
    styles = `border:1px solid lightgray;border-radius:25px;padding-left:20px;
        padding-right:20px;padding:10px;margin-left:30%;margin-right:5px;`;
    styles2 = `border:1px solid lightgray;border-radius:25px;padding-left:20px;
        padding-right:20px;padding:10px;margin-left:5px;margin-right:30%;color:teal;`;
    message = "";
    
    componentDidMount(){
        tools.addElement("p","live-chat-container","Hi am kai, your friendly chat bot",this.styles2);
    }

    render(){
        return(
            <IonPage>
                <Widget.Header/>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons onClick={()=>{
                        }} slot="start">
                            <IonBackButton defaultHref=""/>
                        </IonButtons>
                        <IonTitle>Chat</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div id="live-chat-container" className="messageScroll"></div>

                    <IonTextarea rows={5} class="textArea" value={this.message} onIonChange={(e)=>{
                        if (e.detail.value){
                            this.message = e.detail.value;
                        }
                    }} placeholder="Type your text here"/>

                    <IonItem class="sendButton" lines="full">
                        <IonButton slot="end" onClick={()=>{
                            if (this.message){
                                tools.addElement("p","live-chat-container",this.message,this.styles);
                                setTimeout(()=>{
                                    tools.addElement("p","live-chat-container","Sorry, am not operational as yet",this.styles2);
                                },2000);
                                this.message = "";
                                this.setState({message:""});
                            }
                        }}>Send</IonButton>
                    </IonItem>
                </IonContent>
            </IonPage>
        )
    }
}

export default Chat;