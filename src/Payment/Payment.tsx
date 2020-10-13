import React, { useState } from "react";
import { IonPage, IonContent, IonSelect, IonSelectOption, IonLabel, IonItem, IonCard, IonList, IonText, IonImg, IonThumbnail, IonIcon, IonInput, IonButton } from "@ionic/react";
import tools from '../components/Tools';
import Widgets from '../components/Widgets';
import utils from '../Payment/Utils';
import Info from './Info';
import './Payment.css';
import { cardOutline, pencil } from "ionicons/icons";
import { pay } from "../components/CheckOut";



const Payment: React.FC = () =>{
    const DIALOGSCROLL_POSITION = 160;
    const [paymentDisabled, setPaymentDisabled] = useState(true);
    const [selectName, setSelectName] = useState();
    const [getData, setData] = useState(utils.dummyData);
    const [dialogScroll, setDialogScroll] = useState(DIALOGSCROLL_POSITION);
    const [emailInputDisabled, setEmailInputDisabled] = useState(true);
    const [email, setEmail] = useState(tools.getCreds().username);
    const RIGHTSIDEWIDTH = tools.compare(tools.platform(),true,"","39%");
    const LEFTSIDEWIDTH = tools.compare(tools.platform(),true,"","59%");
    const FLOATLEFT = tools.compare(tools.platform(),true,"","left");
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

            <IonContent scrollEvents={true} onIonScroll={(e)=>{setDialogScroll(e.detail.scrollTop+DIALOGSCROLL_POSITION)}}>
                <IonList style={{width:RIGHTSIDEWIDTH,height:"100%",float:FLOATLEFT,userSelect:"none"}}>
                    <IonCard style={{marginTop:tools.compare(tools.platform(),true,"3%","10%"),border:"1px solid lightgray"}}>
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
                    <IonContent style={{textAlign:"center",height:"50%"}}>
                        <IonCard hidden={false} style={{marginTop:"5%",border:"1px solid lightgray",
                                height:tools.compare(tools.platform(),true,"250px","300px")}}>
                            <IonContent>
                                <IonThumbnail style={{width:"100%",height:"auto"}}>
                                    <IonImg style={{
                                        width:"100px",height:"auto",marginLeft:"50%",transform:"translate(-50%)"
                                    }} src={getData.image}/>
                                </IonThumbnail>
                                <IonItem style={{textAlign:"center"}} lines="full">
                                    <IonLabel>{getData.name}</IonLabel>
                                </IonItem>
                                <IonItem style={{textAlign:"center"}} lines="full">
                                    <IonLabel>${getData.price}</IonLabel>
                                </IonItem>
                                <IonItem lines="full">
                                    <IonText>{getData.description}</IonText>
                                </IonItem>
                            </IonContent>    
                        </IonCard> 
                                                
                    </IonContent> 
                    <IonItem lines="none">
                        <IonItem style={{border:"1px solid gray",borderRadius:"5px",width:"100%",height:"55px"}} lines="none">
                            <IonInput style={{marginTop:"7px"}} onIonChange={(e)=>{
                                if (e.detail.value) setEmail(e.detail.value)
                            }} value={email} hidden={emailInputDisabled}/>
                            <IonLabel color="primary" hidden={!emailInputDisabled}>{email}</IonLabel>
                            <IonIcon style={{fontSize:"18px",padding:"5px",color:"black",backgroundColor:"SeaShell",border:"1px solid gray",borderRadius:"50%"}} slot="end" icon={pencil} hidden={!emailInputDisabled} onClick={()=>{
                                setEmailInputDisabled(false);
                            }}/>
                        </IonItem>
                    </IonItem>
                    
                    <IonItem style={{textAlign:"center"}} lines="none">
                        <IonLabel style={{marginLeft:"50%",transform:"translate(-50%)",right:0}}>${getData.price}</IonLabel>
                        <IonButton hidden={emailInputDisabled} style={{height:"20px",right:0}} color="light" onClick={()=>{
                            setEmailInputDisabled(true);
                        }}>Done</IonButton>
                    </IonItem>

                    <pay.checkOut
                        price={getData.price}
                        title={getData.name}
                        subTitle="checkout"
                        disable={paymentDisabled}
                        onOpen={()=>{if(getData.price <= 0)tools.clickById("payment-dialog-box")}}
                    />

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
