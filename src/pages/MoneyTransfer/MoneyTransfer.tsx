import React from "react";
import { IonPage, IonContent, IonLabel } from '@ionic/react';
import Widget from '../../components/Widgets';
import { leafOutline } from 'ionicons/icons';
import StripeCheckout from 'react-stripe-checkout';
import { pay } from '../../components/CheckOut';



export const moneyTransfer:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="Money Transfer" icon={leafOutline}/>

            <IonContent>
                <div style={{marginTop:"40%",marginBottom:"40%",textAlign:"center"}}>
                    <IonLabel>Comming soon</IonLabel>
                </div>

                <StripeCheckout
                    stripeKey={pay.STRIPE_KEY}
                    token={(token)=>{}}
                    amount={0}
                    name={"NAME"}
                    billingAddress
                    shippingAddress>
                </StripeCheckout>
            </IonContent>

        </IonPage>
    )
}

export default moneyTransfer;



