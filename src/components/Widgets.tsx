import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonFooter, IonIcon, IonButtons, IonItem, IonMenuButton, IonButton, IonLabel, IonLoading, IonPopover, IonList, IonToast, IonGrid, IonRow, IonCol, IonCard, IonImg, IonBackButton } from '@ionic/react';
import tools from './Tools';
import './Widgets.css';
import { arrowUpCircleSharp, arrowDownCircleSharp } from 'ionicons/icons';
import serverVer from '../components/ServerVar';
import { Language } from './Languages';
import { W_Utils } from './W_Utils';


class Widgets{
    Header(data:any){
        var appName;
        var icon;
        var backButton;
        var imgState = false;
        var iconState = true;
        if (data.title){appName = data.title;}else{appName = language.texts().APPNAME;}
        if (data.icon){icon = data.icon;}else{icon = arrowUpCircleSharp;}
        if (data.backButton){backButton = data.backButton;}else{backButton = false;}
        if (data.image === "img"){imgState = true;iconState = false;}else{imgState = false;iconState = true;}
        return(
            <>
                <IonHeader id={data.id} style={{borderBottom:"1px solid blue"}}>
                    <IonToolbar>
                        <IonButtons hidden={tools.compare(tools.platform(),true,false,true)} slot="start">
                            <IonMenuButton autoHide={false}/>
                        </IonButtons>
                        <IonButtons hidden={!backButton} slot={tools.compare(tools.platform(),true,"end","start")}>
                            <IonBackButton defaultHref="home"/>
                        </IonButtons>

                        <IonIcon hidden={!iconState} class="pageHeaderIcon" icon={icon} slot="start"/>
                        <IonCard hidden={!imgState} class="pageHeaderImg" slot="start">
                            <IonImg src={icon}/>
                        </IonCard>
                        <IonTitle class="headerPageName">{appName}</IonTitle>

                        <IonItem hidden={tools.compare(tools.platform(),true,true,false)} slot="end" lines="none">
                            <div className="onHover topBarButtonNav" onClick={()=>{
                                tools.clickById("aboutus");
                            }}>ABOUT US</div>
                            <div className="onHover topBarButtonNav" onClick={()=>{
                                tools.clickById("contactus");
                            }}>CONTACT</div>
                            <div className="onHover topBarButtonNav" onClick={()=>{
                                tools.clickById("help");
                            }}>HELP</div>
                        </IonItem>

                    </IonToolbar>
                </IonHeader>
            </>
        )
    };

    Footer(){
        return(
            <>
                {/*mobile nav bar*/}
                <IonFooter hidden={tools.compare(tools.platform(),true,false,true)}>
                    <IonToolbar>
                        <IonTitle>{language.texts().APPNAME}</IonTitle>
                    </IonToolbar>
                </IonFooter>
            </>
        )
    }

    loadSpinner(){
        const [ showLoading, setShowLoading ] = useState(false);
        return(
            <>
                <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Please wait...'}
                    //duration={5000}
                    />
                
                <IonButton hidden id="start-loader" onClick={()=>{
                    setShowLoading(true);
                }}/>
                <IonButton hidden id="stop-loader" onClick={()=>{
                    setShowLoading(false);
                }}/>
            </>
        )
    }

    languages(){
        const [ showLanguage, setShowLanguage ] = useState(false);
        const [ error, setError ] = useState("");
        return(
            <>
                <IonPopover isOpen={showLanguage} cssClass='my-custom-class' onDidDismiss={()=>{
                    setShowLanguage(false);
                    setError("")
                }}>
                    <div hidden={tools.compare(error,"",true,false)} className="languageError">{error}</div>
                    <IonList class="languageLists">
                        {
                            language.LANGUAGES().map((language, i)=>{return(
                                <IonItem key={i}>
                                    <IonLabel class="languageHover language" onClick={()=>{
                                        setError(language.toUpperCase()+": Not in operation");
                                    }}>{language}</IonLabel>
                                </IonItem>
                            )})
                        }
                    </IonList>
                    <IonItem style={{marginLeft:"60%"}}>
                        <IonButton color="light" onClick={()=>{
                            setShowLanguage(false);
                        }}>close</IonButton>
                    </IonItem>
                </IonPopover>

                <IonButton hidden id="show-language" onClick={()=>{
                    setShowLanguage(true);
                }}/>
            </>
        )
    }

    textStyle(data:any){
        return(
            <>
                <div style={{textAlign:"center"}}>   
                    <IonItem style={{marginLeft:data.LM,textAlign:"center"}} lines="none">
                        {
                            data.title.split("").map((alph:any, i:any)=>{
                                return(
                                <h3 key={i} style={{
                                    color:tools.color[tools.getIndex(tools.color.length)],
                                    marginRight:tools.compare(alph," ","8px",""),
                                }}>{alph}</h3>
                            )})
                        }
                    </IonItem>
                    <div style={{marginBottom:"20px",color:data.textColor}}>
                        <IonLabel>{data.subtitle}</IonLabel>
                    </div>
                </div>  
            </>
        )
    }

    routes(){
        return(
            <>
                <IonButton hidden id="generalinfo" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/generalinfo"/>
                <IonButton hidden id="chat" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/chat"/>
                <IonButton hidden id="history" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/history"/>
                <IonButton hidden id="faults" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/faults"/>
                <IonButton hidden id="notification" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/notification"/>

                <IonButton hidden id="trash" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/trash"/>
                <IonButton hidden id="settings" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/settings"/>
                <IonButton hidden id="favorites" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/favorites"/>
                <IonButton hidden id="archeived" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/archeived"/>

                <IonButton hidden id="template" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/template"/>

                <IonButton hidden id="home" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/home"/>
                <IonButton hidden id="login" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/login"/>
                <IonButton hidden id="aboutus" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/aboutus"/>
                <IonButton hidden id="payment" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/payment"/>
                <IonButton hidden id="contactus" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/contactus"/>
                <IonButton hidden id="help" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/help"/>
                <IonButton hidden id="privacy" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/privacy"/>
                <IonButton hidden id="terms" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/terms"/>
                <IonButton hidden id="register" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/register"/>
                <IonButton hidden id="recover" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/recover"/>
                <IonButton hidden id="logout" onClick={()=>{
                    serverVer.clearCreds();
                    tools.logout();
                }}/>
            </>
        )
    }

    passwordProgressBar(data:any){
        var results:any = tools.passwordStrength(data.creds);
        var percentageValue = ((100 / data.max) * parseFloat(results.value)).toString();
        return(
            <>
                <div style={{width:"100%",height:"9px",marginTop:data.mTop,
                        borderRadius:"25px",border:"1px solid gray"}}>
                    <div style={{backgroundColor:results.color,width:percentageValue+"%",
                            height:"7px",borderRadius:"25px",marginTop:"0px"}}></div>
                </div>
                <div style={{color:results.color,fontSize:"12px",margin:"5px"}}>{results.text}</div>
            </>
        )
    }

    pageArrow(data:any){
        const [showText,setShowText] = useState(false);
        const [hoverColor,setHoverColor] = useState("lightblue");

        const arrow:any = {
            up:arrowUpCircleSharp,
            down:arrowDownCircleSharp
        }
        var style:any = {
            up:{
                position: "fixed",
                marginTop: tools.compare(tools.platform(),true,"20%","7%"),
                marginRight: tools.compare(tools.platform(),true,"0px","20px"),
                right: "0",
                zIndex: "999",
                fontSize: "40px",
                color: hoverColor,
            },
            down:{
                position: "fixed",
                marginRight: tools.compare(tools.platform(),true,"0px","20px"),
                marginBottom: tools.compare(tools.platform(),true,"20%","7%"),
                right: "0",
                bottom:"0",
                zIndex: "999",
                fontSize: "40px",
                color: hoverColor,
            },
            text:{
                fontSize:"12px",
                textAlign:"center",
            }
        }
        return(
            <>
                <div hidden={!data.show} style={style[data.face]}>
                    <div hidden={!showText} style={style.text}>{data.face}</div>
                    <IonIcon icon={arrow[data.face]} onClick={()=>{
                        if (data.onClick){
                            data.onClick();
                        }
                    }} onMouseEnter={()=>{
                        setShowText(true);
                        setHoverColor("teal");
                    }} onMouseLeave={()=>{
                        setShowText(false);
                        setHoverColor("lightblue");
                    }}/> 
                </div>                 
            </>
        )
    }

    openMenu(){
        const textColor = "teal";
        const borderColor = "teal";
        const iconColor = "teal";
        const mainStyle:any = {
            position:"fixed",
            zIndex: 999,
            top:"15%",
            fontSize:"11px",
            cursor:"pointer",
            width:"27px",
            height:"180px",
        }
        const subStyle1:any = {
            width:"31px",
            color:textColor,
            marginLeft:"2px",
        }
        const subStyle2:any = {
            textAlign:"center",
            borderRight:"1px solid "+borderColor,
            borderTopRightRadius:"30px",
            borderBottomRightRadius:"30px",
            marginLeft:"-12px",
            width:"60px",
            color:iconColor,
        }
        const subStyle3:any = {
            fontSize:"20px",
            marginLeft:"-60px",
            transform:"rotate(-90deg)",
            borderBottom:"1px solid "+borderColor,
            borderLeft:"1px solid "+borderColor,
            marginTop:"60px",
            width:"150px",
            textAlign:"center",
            color:textColor,
        }
        const verticalText = "More options";
        return(
            <>
                <div hidden={tools.compare(tools.platform(),true,true,false)} onClick={()=>{
                    tools.clickById("side-menu-button")
                }} style={mainStyle}>
                    <div style={subStyle1}>
                        <IonLabel>Menu</IonLabel>
                    </div>
                    <div style={subStyle2}>
                        <IonButtons>
                            <IonMenuButton autoHide={false}/>
                        </IonButtons>
                    </div>
                    
                    <div style={subStyle3}>
                        <IonLabel>{verticalText}</IonLabel>
                    </div>
                </div>
                
            </>
        )
    }

    toastMsg(show=false,time=2000,position:any="top",msg="Pop up message"){
        const [showToast,setShowToast] = useState(false);
        if (show){
            setShowToast(true);
        }else if (show === false){
            setShowToast(false);
        }else{
            console.log("show: only accept boolean value");
        }
        return(
            <>
                <IonToast
                    isOpen={showToast}
                    position={position}
                    onDidDismiss={() => setShowToast(false)}
                    message={msg}
                    duration={time}/>
            </>
        )
    }

    dialogBox(data:any){
        const [hide, setHIde] = useState(true);

        var arrow;
        if (!data.arrow){arrow = "top";}else{arrow = data.arrow;}
       
        const hideDialogBox = () =>{
            setTimeout(() => {
                setHIde(true);
            }, 5000);
        }

        const box:any = {
            maxWidth: data.maxWidth,
            marginLeft: data.left,
            bottom: data.bottom,
        }
        return(
            <>
                <div hidden={tools.compare(arrow,"top",hide,true)} style={box} className="box arrow-top">
                    {data.text}
                </div>

                <div hidden={tools.compare(arrow,"left",hide,true)} style={box} className="box arrow-left">
                    {data.text}
                </div>

                <div hidden={tools.compare(arrow,"right",hide,true)} style={box} className="box arrow-right">
                    {data.text}
                </div>

                <div hidden={tools.compare(arrow,"bottom",hide,true)} style={box} className="box arrow-bottom">
                    {data.text}
                </div>

                <IonButton hidden id={data.id} onClick={()=>{
                    setHIde(false);
                    hideDialogBox();
                }}/>
            </>
        )
    }

    createCards(data:any){
        var utils = new W_Utils();
        return(
            <IonGrid>
                <IonRow>
                {
                    data.items.map((files:any, index:number)=>{return(
                    <IonCol key={index}>
                        <IonCard id={files.id} style={{width:tools.compare(tools.platform(),true,"105px","210px"),
                            height:tools.compare(tools.platform(),true,"150px","")}} class="card card-hover" onClick={()=>{
                                utils.flipCard(files.id,files.id+"content",files.id+"new");
                            }}>
                            <div className="frontOfCard-container-hover" id={files.id+"content"}>
                                <div style={{fontSize:tools.compare(tools.platform(),true,"90px","120px")}}>
                                    <IonImg class="card-icon" src={files.icon}/>
                                </div>
                                <div className="card-name">
                                    <IonLabel>{files.name}</IonLabel>
                                </div>
                            </div>
                            <div className="backOfCard-container" hidden={true} id={files.id+"new"}>
                                <div className="backOfCard-title">
                                    <IonLabel style={{fontSize:tools.compare(tools.platform(),true,"80%","120%")}}>{files.title}</IonLabel>
                                </div>
                                {
                                files.detail.map((centant:any,index:number)=>{return(
                                    <div className="backOfCard-content" key={index}>
                                        <IonLabel style={{fontSize:tools.compare(tools.platform(),true,"80%","120%")}}>{centant}</IonLabel>
                                    </div>
                                )})
                                }
                                <div className="openLink openLink-press" onClick={()=>{
                                    if (files.group){
                                        if (data.onClick){data.onClick();}
                                        tools.saveCmdData(files);
                                    }else{
                                        tools.clickById(files.cmd);
                                    }
                                }}>Open</div>
                            </div>
                        </IonCard>
                    </IonCol>
                    )})
                }
                </IonRow>
            </IonGrid>
        )
    }
}

const language = new Language();
var widgets = new Widgets()
export default widgets;