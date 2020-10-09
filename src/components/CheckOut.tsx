import React, { createRef } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import ccaImage from './GlobImage/cca_icon.png'
import tools from './Tools';
import widgets from './Widgets';
import { IonButton } from '@ionic/react';


class Checkout{
    STRIPE_KEY = "pk_test_51HMQLOBZvIBjqI0ERBmRc4Feu7qu6fXdnc8IZ9whUpTWAMIEZyYRSUsFCc2LQlXIPJJqBYgzcIbQJY5WODNXdiuf00TucXVjmM"
    SERVER_URL = "http://127.0.0.1:4242/checkout";

    tokenHandle(url:any, customerToken:any, data:any, onClick:any=false){
        /*axios.get(url,{token:customerToken,product: data})
        .then(response =>{
            const { status } = response.data;
            var returnData:any;
            if (status === "success") {returnData = {state:true, msg:"Success! Check email for details"}} 
            else {returnData = {state:false, msg:"Something went wrong"}} 
            if (onClick){onClick(returnData)}  
            else {return returnData}         
        })
        .catch(error=>{
            return {state:null, msg: error};
        })*/
    }

    onToken(TOKEN:any){
        const PRODUCST = {price:254,name:"hello world"}
        axios.post(pay.SERVER_URL,{token:TOKEN,product:PRODUCST})
        .then(response =>{
            const { status } = response.data;
            if (status === "success"){
                const msg = "Payment was preccess successful, a total of $"+PRODUCST.price+" was charge towards your account";
                tools.toastWithOkCancel(msg,false,"Okay","","Payment update!!","success","top")
            }        
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
            return {state:null, msg: error};
        })
    }

    checkOut(data:any){
        const btnSubmitRef = createRef<HTMLIonButtonElement>();
        const TITLE = "CCA";
        const SUB_TITLE = "Testing";
        const CURRENCY = "USD";
        const SUBMITE_BUTTON = "PAY";
        const BUTTON_TEXT = data.buttonText || "Pay With Card";
        const PRICE = data.price || 1;
        const EMAIL = data.email || tools.getCreds().username
        const SHIPPING_ADDRESS = data.shippingAddress || false;
        const BILLING_ADDRESS = data.billingAddress || false ;
        return(
            <div>
                <StripeCheckout
                    name={TITLE}
                    description={SUB_TITLE}
                    image={ccaImage}
                    panelLabel={SUBMITE_BUTTON}
                    amount={PRICE}
                    currency={CURRENCY}
                    stripeKey={pay.STRIPE_KEY}
                    email={EMAIL}
                    shippingAddress={SHIPPING_ADDRESS}
                    billingAddress={BILLING_ADDRESS}
                    zipCode={false}
                    allowRememberMe={true} // "Remember Me" option (default true)
                    token={pay.onToken}>
                    <IonButton ref={btnSubmitRef} hidden>Pay With Card</IonButton>
                </StripeCheckout>
                <IonButton onClick={()=>{
                    if (PRICE > 0) btnSubmitRef.current?.click()
                    }}>{BUTTON_TEXT}</IonButton>
            </div>
        )
    }
}


export var pay = new Checkout();


