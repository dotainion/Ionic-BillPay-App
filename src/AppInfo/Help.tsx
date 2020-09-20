import React from 'react';
import { IonPage, IonBackButton, IonButtons, IonToolbar, IonHeader, IonContent, IonTitle } from '@ionic/react';
import Widget from '../components/Widgets';
import tools from '../components/Tools';
import './AppInfo.css';

const Help:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header id="help-header"/>
            <IonHeader>
                <IonToolbar>
                    <IonButtons onClick={()=>{
                    }} slot="start">
                        <IonBackButton defaultHref=""/>
                    </IonButtons>
                    <IonTitle>Help</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollEvents={true} onIonScroll={(e)=>{
                tools.hideWhenScroll(e.detail.scrollTop,"help-header");
            }}>
                <div className="main-container">
                    <h1>Help Information</h1>
                    <div className="sub-container">
                        <h1>What do you need to create an account&nbsp;</h1>
                        <div className="sub-container">
                            <li>Email address for your login id</li>
                            <li>Create your Password</li>
                            <li>Confirm your password</li>
                        </div>

                        <h1>Using BillPay is Easy </h1>
                        <div className="sub-container">
                            <li>To setup a one- time or recurring payments will BillPay</li>
                            <li>Once you sign up, you can pay bill using your Mobile App or computer</li>
                            <li>It is safe, secure and will be in accordance with the law</li>
                        </div>

                        <h1>How to Pay a Bill</h1>
                        <div className="sub-container">
                            <li>After signing up, select the bill you wish to pay</li>
                            <li>Type your name or a Company name</li>
                            <li>Choose the Utility Bill you are paying</li>
                            <li>Type in your account numbers</li>
                            <li>Choose how much you want to pay</li>
                            <li>Make payment and you are done.</li>
                        </div>

                        <h1>What Does it Cost the Customer?</h1>
                        <div className="sub-container">
                            <li>The service is free to all customers</li>
                            <li>Payment Options for BillPay</li>
                            <li>Electronic Funds transfer</li>
                            <li>Debit Card</li>
                            <li>Paper Check</li>
                            <li>Credit Card</li>
                        </div>

                        <h1>Get Notification on Your Account</h1>
                        <div className="sub-container">
                            <li>Bills notification messages will be sent to customers</li>
                            <li>Reminder notices on due bills</li>
                            <li>Disconnection notification will be sent prior to being disconnected</li>
                        </div>

                        <h1>REPORT OF FAULT IN THE AREA</h1>
                        <div className="sub-container">
                            <li>Interruption of services due to natural disasters or unforeseen events.</li>
                            <li>Scheduled maintenance and repair of broken lines</li>
                            <li>Fallen Poles or Lines</li>
                        </div>

                        <h1>Chat with BillPay</h1>
                        <div className="sub-container">
                            <li>Any questions, suggestions or inquiries regarding BillPay can be</li>
                            <li>send via email chat with our bot for information.</li>
                            <li style={{color:"blue",cursor:"pointer",textDecoration:"underline"}} onClick={()=>{
                                tools.clickById("chat");
                            }}>Chat Now</li>
                        </div>
                    </div>
                </div>
            </IonContent>

        </IonPage>
    )
}

export default Help;