import chatIcon from '../../pages/Home/Images/liveChat.jpg';
import websiteIcon from './images/website.png';
import emailIcon from './images/email.png';
import phoneIcon from './images/phone.jpg';



export function cardItems(){
    const templates = [
        {
            name:"Website",
            icon:websiteIcon,
            id:"webSite",
            cmd:"",
            title:"Website",
            detail:[

            ]
        },{
            name:"Email",
            icon:emailIcon,
            id:"email",
            cmd:"emailing",
            title:"Email",
            detail:[

            ]
        },{
            name:"Call",
            icon:phoneIcon,
            id:"call",
            cmd:"",
            title:"Phone Number",
            detail:[

            ]
        },{
            name:"Live Chat",
            icon:chatIcon,
            id:"liveChat",
            cmd:"chat",
            title:"Live Chat",
            detail:[

            ]
        }
    ]

    return templates;
}

class Utils{
    emailMessageHolder = [] as any[]; 
    textAreaMessage = "";
}
export var utils = new Utils();