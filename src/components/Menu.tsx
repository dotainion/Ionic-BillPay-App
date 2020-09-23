import {IonContent,IonIcon,IonItem,IonLabel,IonList,IonListHeader,IonMenu,IonMenuToggle,IonItemDivider, IonButton, IonImg, IonCard} from '@ionic/react';
import React, { useState } from 'react';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, trashOutline, trashSharp,  settingsSharp, settingsOutline, logOutSharp, cardSharp, homeSharp } from 'ionicons/icons';
import './Menu.css';
import tools from './Tools';
import { Language } from './Languages';
import defaul_image from './GlobImage/defaultProfile.png';

interface SystemLinks {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

interface UserLinks {
  title: string;
  url: string;
  icon: string;
}

const appPages: SystemLinks[] = [
  {
    title: 'Contact',
    url: 'contactus',
    iosIcon: mailOutline,
    mdIcon: mailSharp
  },
  {
    title: 'Favorites',
    url: 'favorites',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Archived',
    url: 'archeived',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp
  },
  {
    title: 'Trash',
    url: 'trash',
    iosIcon: trashOutline,
    mdIcon: trashSharp
  },
  {
    title: 'Settings',
    url: 'settings',
    iosIcon: settingsOutline,
    mdIcon: settingsSharp
  }
];

const labels:UserLinks[] = [
  {
    title:'Notification',
    url:"notification",
    icon:bookmarkOutline,
  },
  {
    title:'History',
    url:"history",
    icon:bookmarkOutline,
  },
  {
    title:'Fault in the area',
    url:"faults",
    icon:bookmarkOutline,
  },
  {
    title:'Genteral Information',
    url:"generalinfo",
    icon:bookmarkOutline,
  },
  {
    title:'Live chat',
    url:"chat",
    icon:bookmarkOutline,
  },
];

const aboutApp:UserLinks[] = [
  {
    title:'About us',
    url:"aboutus",
    icon:bookmarkOutline,
  },
  {
    title:'Privacy and policies',
    url:"privacy",
    icon:bookmarkOutline,
  },
  {
    title:'Terms and conditions',
    url:"terms",
    icon:bookmarkOutline,
  },
  {
    title:'Help',
    url:"help",
    icon:bookmarkOutline,
  },
]

const oftenLink:UserLinks[] = [
  {
    title:'Home',
    url:"home",
    icon:homeSharp,
  },{
    title:'Payment',
    url:"payment",
    icon:cardSharp,
  },
  {
    title:'Logout',
    url:"logout",
    icon:logOutSharp,
  },
]

const Menu: React.FC = () => {
  const language = new Language();
  const [hideMenu, setHideMenu] = useState(true);
  return (
    <IonMenu hidden={hideMenu} contentId="menu" type="overlay" 
    style={{width:tools.compare(tools.platform(),true,"","0px")}}>
      <IonListHeader style={{fontWeight:"bold",fontSize:"25px"}}>{language.texts().APPNAME}</IonListHeader>
      <IonCard className="profileImage">
        <IonImg alt="" src={defaul_image}/>
      </IonCard>

      <IonContent>
        <IonList>
          {oftenLink.map((often, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink="#" onClick={e=>{
                e.preventDefault();
                tools.clickById(often.url)
              }} lines="none">
                <IonIcon class="icon" slot="start" icon={often.icon} />
                <IonLabel><div className="title">{often.title}</div></IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        <IonList>
          <IonItemDivider/>
          {labels.map((label, index) => (
            <IonMenuToggle key={index} autoHide={false}>
              <IonItem routerLink="#" onClick={e=>{
                e.preventDefault();
                tools.clickById(label.url)
              }} lines="none">
                <IonIcon class="icon" slot="start" icon={label.icon} />
                <IonLabel><div className="title">{label.title}</div></IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>

        <IonList id="inbox-list">
        <IonItemDivider/>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem routerLink="#" onClick={e=>{
                  e.preventDefault();
                  tools.clickById(appPage.url)
                }} lines="none" detail={false}>
                  <IonIcon class="icon"  slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel><div className="title">{appPage.title}</div></IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList>
          <IonItemDivider/>
            {aboutApp.map((about, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem routerLink="#" onClick={e=>{
                    e.preventDefault();
                    tools.clickById(about.url)
                  }} lines="none" detail={false}>
                    <IonIcon class="icon"  slot="start" icon={about.icon}/>
                    <IonLabel><div className="title">{about.title}</div></IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
        </IonList>
      </IonContent>
      <IonButton id="show-menu" hidden onClick={()=>{setHideMenu(false);}}/>
      <IonButton id="hide-menu" hidden onClick={()=>{setHideMenu(false);}}/>
    </IonMenu>
  );
};

export default Menu;
