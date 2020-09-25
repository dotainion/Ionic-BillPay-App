import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import './Home.css';
import Widgets from '../../components/Widgets';
import { cardItems } from './HomeUtils';
import { home } from 'ionicons/icons';
import tools from '../../components/Tools';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Widgets.Header title="Home" icon={home}/>
      <Widgets.routes/>

      <IonContent>
        <Widgets.createCards items={cardItems()} onClick={()=>{tools.clickById("template")}}/>
      </IonContent>
      <Widgets.Footer/>
    </IonPage>
  );
};

export default Home;
