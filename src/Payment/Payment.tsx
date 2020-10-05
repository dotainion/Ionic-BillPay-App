import React, { Component, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { IonPage, IonContent, IonSelect, IonSelectOption, IonLabel, IonItem, IonCard, IonList, IonText, IonImg, IonThumbnail } from "@ionic/react";
import tools from '../components/Tools';
import Widgets from '../components/Widgets';
import utils from '../Payment/Utils';
import Info from './Info';
import './Payment.css';
import { cardOutline } from "ionicons/icons";
import { pay } from "../components/PayUtils";



const Payment: React.FC = () =>{
    const handleToken = (customer:any) =>{
        pay.tokenHandle(tools.URL.CHECKOUT,customer,utils.getData(),(response:any)=>{
            console.log(response);
        });
    }

    const [paymentDisabled, setPaymentDisabled] = useState(true);
    const [selectName, setSelectName] = useState();
    const [getData, setData] = useState(utils.dummyData);
    const [dialogScroll, setDialogScroll] = useState(100);
    const RIGHTSIDEWIDTH = tools.compare(tools.platform(),true,"","400PX");
    const LEFTSIDEWIDTH = tools.compare(tools.platform(),true,"","600PX");
    const FLOATlEFT = tools.compare(tools.platform(),true,"","left");
    const FLOATRIGHT = tools.compare(tools.platform(),true,"","right");
    return (
        <IonPage style={{border:"1px solid gray"}}>
            <Widgets.Header backButton={true} title="Payments" icon={cardOutline}/>
            
            <Widgets.dialogBox
                id="payment-dialog-box"
                left={tools.compare(tools.platform(),true,"20%","5%")}
                bottom={tools.compare(tools.platform(),true,dialogScroll,300)}
                maxWidth={tools.compare(tools.platform(),true,"70%","40%")}
                arrow="bottom"
                text="Please choose the service you are paying first and then click pay with card"/>

            <IonContent scrollEvents={true} onIonScroll={(e)=>{setDialogScroll(e.detail.scrollTop+100)}}>
                <IonList style={{width:RIGHTSIDEWIDTH,height:"100%",float:FLOATlEFT}}>
                    <IonCard style={{marginTop:"10%",border:"1px solid lightgray"}}>
                        <IonItem style={{marginRight:"20px",marginLeft:"20px"}}>
                            <IonLabel style={{color:"teal"}}>Bill paying too:</IonLabel>
                            <IonSelect value={selectName} interface="popover" placeholder="choose" onIonChange={e =>{
                                setData(utils.dummyData);
                                setSelectName(e.detail.value);
                                setData(e.detail.value);
                                console.log(e.detail.value)
                                utils.storeData(e.detail.value);
                                setPaymentDisabled(false);
                            }}>
                                {
                                    utils.utility.map((util:any,i:number) =>{
                                        return(
                                            <IonSelectOption key={i} value={util} >{util.name}</IonSelectOption>
                                        )
                                    })
                                }
                            </IonSelect>
                        </IonItem>
                    </IonCard>

                    {/*this is the info card and display company selected data*/}
                    <IonContent style={{textAlign:"center",height:tools.compare(tools.platform(),true,"65%","50%")}}>
                        <IonCard hidden={false} style={{marginTop:"10%",border:"1px solid lightgray"}}>
                            <IonList>
                                <IonThumbnail style={{width:"230px",height:"130px",
                                        marginLeft:tools.compare(tools.platform(),true,"16%","20%"),size:"50px"}}>
                                    <IonImg src={getData.image}/>
                                </IonThumbnail>
                                <IonItem style={{textAlign:"center"}} lines="full">
                                    <IonLabel>{getData.name}</IonLabel>
                                </IonItem>
                                <IonItem style={{textAlign:"center"}} lines="full">
                                    <IonLabel>{getData.price}</IonLabel>
                                </IonItem>
                                <IonItem lines="full">
                                    <IonText>{getData.description}</IonText>
                                </IonItem>
                            </IonList>    
                        </IonCard> 
                                
                                                
                    </IonContent> 
                    <IonItem style={{textAlign:"center"}} lines="none">
                        <IonLabel>{getData.price}</IonLabel>
                    </IonItem>
                    <div style={{textAlign:"center",width:"100%",marginTop:"-50"}}>
                        <StripeCheckout
                            stripeKey={pay.key}
                            token={token=>{handleToken(token)}}
                            amount={parseFloat(getData.price.replace("$","")) * 100}
                            name={getData.name}
                            billingAddress
                            shippingAddress>
                            <button id="stripeCheckout" disabled={paymentDisabled}/>
                        </StripeCheckout>
                        <button className="checkOutButton checkOutButtonClick" onClick={()=>{
                            if (!paymentDisabled){
                                tools.clickById("stripeCheckout");
                            }else{
                                tools.clickById("payment-dialog-box");
                            }
                        }}>Pay With Card</button>
                    </div>
                </IonList>

                {/*this section is the side of the payment string for information*/}
                <IonList style={{width:LEFTSIDEWIDTH,height:"100%",float:FLOATRIGHT}}>
                    <Info/>
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Payment
