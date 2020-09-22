import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import Widget from '../components/Widgets';
import './AppInfo.css';
import { informationCircleOutline } from 'ionicons/icons';


const AboutUs:React.FC = () =>{
    return(
        <IonPage>
            <Widget.Header backButton={true} title="About us" icon={informationCircleOutline}/>

            <IonContent>
                <div className="main-container">
                    <h1>About your service</h1>
                    <div className="sub-container">
                        <p>Online BillPay is a free and secure web base online bill payment platform service
                            that allows customers to pay their monthly bills and receive notification and up-to-date</p>
                        <p> information on their account from the comfort and safety of their homes.</p>
                    </div>

                    <h1>Location</h1>
                    <div className="sub-container">
                        <p>The Caribbean Coding Academy is a technology and
                        business incubator located on H.A. Blaize Street,
                        St. George’s Grenada.</p>
                    </div>

                    <h1>Service offered</h1>
                    <div className="sub-container">
                        <p>Online bill payment</p>
                        <p>Notifications</p>
                        <p>History of payments</p>
                        <p>and more</p>
                    </div>
                </div>
            </IonContent>

        </IonPage>
    )
}

export default AboutUs;