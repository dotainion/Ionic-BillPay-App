import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonFooter, IonIcon, IonButtons, IonItem, IonMenuButton, IonButton, IonLabel, IonLoading, IonPopover, IonList, IonToast, IonGrid, IonRow, IonCol, IonCard, IonImg, IonBackButton, IonInput, IonDatetime, IonContent, IonModal } from '@ionic/react';
import tools from './Tools';
import './Widgets.css';
import { arrowUpCircleSharp, arrowDownCircleSharp, calendarSharp, arrowBack, arrowForward, close, caretDown, happyOutline, ellipsisVerticalOutline } from 'ionicons/icons';
import serverVer from '../components/ServerVar';
import { Language } from './Languages';
import { w_calendar, W_FlipCard ,utils } from './W_Utils';
import EmojiPicker from 'emoji-picker-react';



class Widgets{
    Header(data:any){
        const [dotMenuState, setDotMenuState] = useState(true);

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
                <IonHeader id={data.id} style={{borderBottom:"1px solid blue",userSelect:"none"}}>
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

                        <IonIcon class="threeDotMenu" slot="end" onClick={()=>{
                            if (dotMenuState){
                                tools.clickById("three-dot-menu-drop-down");
                                setDotMenuState(false);
                            }else{
                                tools.clickById("three-dot-menu-drop-down-set");
                                setDotMenuState(true);
                            }
                        }} icon={ellipsisVerticalOutline}/>

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
                        <IonItem lines="none">
                            <IonLabel style={{color:"teal",fontWeight:"bold"}}>{language.texts().APPNAME+" Financial App"}</IonLabel>
                            {/*<span className="navIconSpan"><IonIcon icon={cardSharp}/></span>
                            <span className="navIconSpan"><IonIcon icon={cardSharp}/></span>
                            <span className="navIconSpan"><IonIcon icon={cardSharp}/></span>
                            <span className="navIconSpan"><IonIcon icon={cardSharp}/></span>
                            <span className="navIconSpan"><IonIcon icon={cardSharp}/></span>*/}
                        </IonItem>
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
        const STYLE_MAIN:any = {textAlign:"center"}
        const STYLE_TITLE:any = {marginLeft:"50%",transform:"translate(-50%)",fontSize:"20px"}
        const STYLE_SUB_TITLE:any = {marginBottom:"20px",color:data.textColor}
        return(
            <>
                <div style={STYLE_MAIN}>   
                    <IonItem lines="none">
                        <div style={STYLE_TITLE}>
                            {
                                data.title.split("").map((alph:any, i:any)=>{
                                    return(
                                    <span key={i} style={{
                                        color:tools.color[tools.getIndex(tools.color.length)],
                                    }}>{alph}</span>
                                )})
                            }
                        </div>
                    </IonItem>
                    <div style={STYLE_SUB_TITLE}>
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
                <IonButton hidden id="susu" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/susu"/>

                <IonButton hidden id="moneytransfer" onClick={e=>{
                    tools.saveHistry(e.currentTarget.id)
                }} routerLink="/moneytransfer"/>
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
        var utils = new W_FlipCard();
        return(

            <IonGrid>
                <IonRow>
                {
                    utils.configureCardRow(data.items,3,8).map((files:any, index:number)=>{return(
                    <IonCol key={index}>
                        <IonCard hidden={tools.compare(files.empty,true,true,false)} id={files.id} style={{width:tools.compare(tools.platform(),true,"100px","110px"),
                            height:tools.compare(tools.platform(),true,"150px","")}} className="card card-hover" onClick={()=>{
                                utils.flipCard(files.id,files.id+"content",files.id+"new");
                            }}>
                            <div className="frontOfCard-container-hover" id={files.id+"content"}>
                                <div style={{fontSize:tools.compare(tools.platform(),true,"90px","120px")}}>
                                    <IonImg class="card-icon" src={files.icon}/>
                                </div>
                                <div className="card-name">
                                    <p>{files.name}</p>
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

    calenderPicker(data:any){
        const [openCalendar, setOpenCalendar] = useState(false);
        const [calendarInputValue, setCalendarInputValue] = useState("");

        var date = w_calendar.weekMonthDayYearExtract(new Date().toString());
        var month = w_calendar.getMonthAbrive(date.month);
        var week = w_calendar.getWeekAbrive(date.week);
        var year = parseInt(date.year);

        const [DATE_WEEK_1, SET_DATE_WEEK_1] = useState(w_calendar.oganaizeDate(w_calendar.week_1, month.index, year));
        const [DATE_WEEK_2, SET_DATE_WEEK_2] = useState(w_calendar.oganaizeDate(w_calendar.week_2, month.index, year));
        const [DATE_WEEK_3, SET_DATE_WEEK_3] = useState(w_calendar.oganaizeDate(w_calendar.week_3, month.index, year));
        const [DATE_WEEK_4, SET_DATE_WEEK_4] = useState(w_calendar.oganaizeDate(w_calendar.week_4, month.index, year));
        const [DATE_WEEK_5, SET_DATE_WEEK_5] = useState(w_calendar.oganaizeDate(w_calendar.week_5, month.index, year));

        var WEEK_NAME = ("Today: " + week.abbr + "/" + month.abbr + "/" + year.toString());
        const [MONTH_NAME, SET_MONTH_NAME] = useState(month.fullText);
        const [YEAR_NAME, SET_YEAR_NAME] = useState(year.toString());
        
        const [MONTH_MOTION, SET_MONTH_MOTION] = useState(w_calendar.getMonthAbrive(date.month).index);
        const [YEAR_MOTION, SET_YEAR_MOTION] = useState(year);

        const getCalendarData = (month:number, year:number) =>{
            SET_MONTH_MOTION(month);
            SET_YEAR_MOTION(year);

            var fullMonth = w_calendar.stringMonths[month-1];
            SET_MONTH_NAME(fullMonth);
            SET_YEAR_NAME(year.toString());

            SET_DATE_WEEK_1(w_calendar.oganaizeDate(w_calendar.week_1, month, year));
            SET_DATE_WEEK_2(w_calendar.oganaizeDate(w_calendar.week_2, month, year));
            SET_DATE_WEEK_3(w_calendar.oganaizeDate(w_calendar.week_3, month, year));
            SET_DATE_WEEK_4(w_calendar.oganaizeDate(w_calendar.week_4, month, year));
            SET_DATE_WEEK_5(w_calendar.oganaizeDate(w_calendar.week_5, month, year));
        }
        const getDateOnClick = (date:string) =>{
            var value = MONTH_NAME+"/"+date+"/"+YEAR_NAME;
            var dic_value = {day:date,month:MONTH_NAME,year:YEAR_NAME,data:value};
            if (data.onClick && date){
                data.onClick(dic_value);
            }
            setCalendarInputValue(value);
            setOpenCalendar(false);
        }
        return(
            <div>
                <IonModal isOpen={openCalendar} onDidDismiss={()=>{setOpenCalendar(false)}}>
                    <IonItem lines="none">
                        <div className="dateTitle">Calendar</div>
                        <IonIcon class="dateTitleClose dateTitleCloseHover" icon={close} onClick={()=>{setOpenCalendar(false)}}/>
                    </IonItem>
                    <IonItem lines="full">
                        <IonLabel><span className="dateHeaderNowDateText">{WEEK_NAME}</span></IonLabel>
                    </IonItem>
                    <IonItem class="dateHeader" style={{fontSize:"15px"}} lines="full">
                        <IonIcon class="dateHeaderIcon dataHeaderIconHover" onClick={async ()=>{
                            var num = MONTH_MOTION - 1;
                            if (num === 0){num = 12;}
                            getCalendarData(num, YEAR_MOTION);
                        }} icon={arrowBack}/>
                        <IonLabel class="dateHeaderText"><span className="dateHeaderText">{MONTH_NAME}</span></IonLabel>
                        <IonIcon class="dateHeaderIcon dataHeaderIconHover" style={{marginRight:"5%"}} onClick={()=>{
                            var num = MONTH_MOTION + 1;
                            if (num === 13){num = 1;}
                            getCalendarData(num, YEAR_MOTION);
                        }} icon={arrowForward}/>
                            
                        <IonIcon class="dateHeaderIcon dataHeaderIconHover" onClick={async ()=>{
                            var num = YEAR_MOTION - 1;
                            getCalendarData(MONTH_MOTION, num);
                        }} icon={arrowBack}/>
                        <span className="dateHeaderText" style={{width:"25%"}}>{YEAR_NAME}</span>
                        <IonIcon class="dateHeaderIcon dataHeaderIconHover" onClick={async ()=>{
                            var num = YEAR_MOTION + 1;
                            getCalendarData(MONTH_MOTION, num);;
                        }} icon={arrowForward}/>
                    </IonItem>
                    <IonContent>
                        <IonItem class="dateSubHeader" lines="full">
                            {w_calendar.daysOfTheWeek.map((WEEK, key) =>{return(
                                <IonLabel key={key}>{WEEK}</IonLabel>
                            )})}
                        </IonItem>

                        <IonItem lines="none">
                            {DATE_WEEK_1.map((DATE, KEY)=>{return(
                                <div className="dateContainer" key={KEY}>
                                    <span className="dateSpan dateHover" onClick={()=>{
                                        getDateOnClick(DATE);
                                    }} style={w_calendar.getSyle(DATE, MONTH_NAME, YEAR_NAME)}>{DATE}</span>
                                </div>
                            )})}
                        </IonItem>
                        <IonItem lines="none">
                            {DATE_WEEK_2.map((DATE, KEY)=>{return(
                                <div className="dateContainer" key={KEY}>
                                    <span className="dateSpan dateHover" onClick={()=>{
                                        getDateOnClick(DATE);
                                    }} style={w_calendar.getSyle(DATE, MONTH_NAME, YEAR_NAME)}>{DATE}</span>
                                </div>
                            )})}
                        </IonItem>
                        <IonItem lines="none">
                            {DATE_WEEK_3.map((DATE, KEY)=>{return(
                                <div className="dateContainer" key={KEY}>
                                    <span className="dateSpan dateHover" onClick={()=>{
                                        getDateOnClick(DATE);
                                    }} style={w_calendar.getSyle(DATE, MONTH_NAME, YEAR_NAME)}>{DATE}</span>
                                </div>
                            )})}
                        </IonItem>
                        <IonItem lines="none">
                            {DATE_WEEK_4.map((DATE,KEY)=>{return(
                                <div className="dateContainer" key={KEY}>
                                    <span className="dateSpan dateHover" onClick={()=>{
                                        getDateOnClick(DATE);
                                    }} style={w_calendar.getSyle(DATE, MONTH_NAME, YEAR_NAME)}>{DATE}</span>
                                </div>
                            )})}
                        </IonItem>
                        <IonItem lines="none">
                            {DATE_WEEK_5.map((DATE, KEY)=>{return(
                                <div className="dateContainer" key={KEY}>
                                    <span className="dateSpan dateHover" onClick={()=>{
                                        getDateOnClick(DATE);
                                    }} style={w_calendar.getSyle(DATE, MONTH_NAME, YEAR_NAME)}>{DATE}</span>
                                </div>
                            )})}
                        </IonItem>
                    </IonContent>
                </IonModal>

                <IonItem lines={data.lines}>
                    <IonIcon icon={calendarSharp}/>
                    <IonInput class={data.class} value={calendarInputValue} onClick={()=>{
                        setOpenCalendar(true);
                    }} style={data.style} placeholder="Calender date"></IonInput>
                </IonItem>
            </div>
        )
    }

    dataPicker(data:any){
        var date = new Date();
        const [selectedDate, setSelectedDate] = useState(date.toISOString());
        return(
            <IonItem lines={data.lines}>
                <IonIcon icon={calendarSharp}/>
                <IonDatetime class={data.class} displayFormat="MM/DD/YYYY" value={selectedDate} onIonChange={e =>{
                    if (e.detail.value){
                        setSelectedDate(e.detail.value);
                    }
                }} style={data.style}></IonDatetime>
            </IonItem>
        )
    }
    textConfigureWidgets(data:any){
        const [emoji_open, set_emoji_open] = useState(false);
        var x;
        if(data.imojiX==="left"){x="0%"}else if(data.imojiX==="right"){x="100%"}else{x="50%"}
        var y;
        if(data.imojiY==="top"){y=""}else if(data.imojiY==="bottom"){y=0}else{y=""}
        return(
            <>
            <widgets.emoji isOpen={emoji_open} imoji={(e:any)=>{
                if (data.imoji){data.imoji(e)}
            }} onClose={(e:boolean)=>{set_emoji_open(e)}} x={x} y={y}/>
            <IonCard class={data.class}>
                
                <IonItem>
                    <span onClick={()=>{utils.config("font",data.IDS)}} className="textAsIcon textAsIconHover"><span style={{fontSize:"11px"}}>T</span>T</span>
                    <span onClick={()=>{utils.config("bold",data.IDS)}} className="textAsIcon textAsIconHover">B</span>
                    <span onClick={()=>{utils.config("Italic",data.IDS)}} style={{fontStyle:"italic"}} className="textAsIcon textAsIconHover">I</span>
                    <span onClick={()=>{utils.config("underline",data.IDS)}} className="textAsIcon textAsIconHover underline">U</span>
                    <span onClick={()=>{utils.config("color",data.IDS)}} className="textAsIcon textAsIconHover underline">A<IonIcon style={{fontSize:"10px"}} icon={caretDown}/></span>
                    
                    <div onClick={()=>{utils.config("left",data.IDS)}} className="justify-container justify-hover">
                        <div className="justify-line"></div>
                        <div className="justify-line justify-left-inline"></div>
                        <div className="justify-line"></div>
                        <div className="justify-line justify-left-inline"></div>
                        <div className="justify-line"></div>
                    </div>

                    <div onClick={()=>{utils.config("center",data.IDS)}} className="justify-container justify-hover">
                        <div className="justify-line"></div>
                        <div className="justify-line justify-center-inline"></div>
                        <div className="justify-line"></div>
                        <div className="justify-line justify-center-inline"></div>
                        <div className="justify-line"></div>
                    </div>

                    <div onClick={()=>{utils.config("right",data.IDS)}} className="justify-container justify-hover">
                        <div className="justify-line"></div>
                        <div className="justify-line justify-right-inline"></div>
                        <div className="justify-line"></div>
                        <div className="justify-line justify-right-inline"></div>
                        <div className="justify-line"></div>
                    </div>

                    <IonIcon class="emojiIcon textAsIconHover" onClick={()=>{
                        set_emoji_open(true);
                        if (data.onOpen){
                            data.onOpen(true);
                        }
                    }} icon={happyOutline}/>
                </IonItem>
            </IonCard>
            </>
        )
    }

    emoji(data:any){
        var isOpen;
        if(data.isOpen===true){isOpen=data.isOpen}else{isOpen=false}
        var left;
        if(data.x==="left"){left="0%"}else if(data.x==="right"){left="100%"}else{left="50%"}
        var bottom;
        if(data.y==="top"){bottom=""}else if(data.y==="bottom"){bottom=0}else{bottom=""}
        var style = {
            bottom: bottom,
            marginLeft: left,
            marginBottom: "10px",
            transform:"translate(-"+left+")",
        }
        return(
            <div className="emojiContainer" style={style} hidden={!isOpen}>
               <IonItem>
                  <IonButton slot="end" onClick={()=>{
                      if (data.onClose){
                          data.onClose(()=>{return false});
                      }
                  }}>Close</IonButton>
              </IonItem> 
              <EmojiPicker onEmojiClick={(event,IMOJI)=>{
                  if (data.imoji){data.imoji(IMOJI)};
                  if (data.event){data.event(event)};
              }}/>
            </div>
        )
    }

    dropDownMenu(data:any){
        var STYLE:any = {
            width: tools.compare(tools.platform(),true,"35%","20%"),
            position: "fixed",
            zIndex: 999999,
            right: 0,
            marginTop: "45px",
        }

        window.addEventListener("mouseup",(e)=>{
            if (!document.getElementById("drop-down-menu-card")?.hidden){
                if (data.dismiss){data.dismiss()}
            }
        })
        return(
            <IonCard id="drop-down-menu-card" style={STYLE} hidden={!data.isOpen}>
                {
                    data.options ?
                    data.options.map((item:any, KEY:number) => 
                        <IonItem key={KEY}>
                            <IonIcon class="dropDownMenuIcon" icon={item.icon}/>
                            <IonLabel class="dropDownMenuItems" onMouseDown={()=>{
                                tools.clickById(item.cmd)
                                if (data.dismiss){data.dismiss()}
                            }}><span className="dropDownMenuItemsSpan dropDownMenuItemsHover">{item.title}</span></IonLabel>
                        </IonItem>
                    ):
                    null
                }
            </IonCard>
        )
    }
}

const language = new Language();
var widgets = new Widgets()
export default widgets;