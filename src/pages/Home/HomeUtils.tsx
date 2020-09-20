import { bookmarkOutline } from 'ionicons/icons';
import billPayIcon from './Images/billPay.jpg';
import billHistoryIcon from './Images/billHistory.png';
import settingsIcon from './Images/settings.png';
import offersIcon from './Images/offers.jpg';
import rewardIcon from './Images/reward.png';
import bankingIcon from './Images/banking.png';
import earningsIcon from './Images/earnings.png';
import faultsIcon from './Images/faults.jpg';
import contactIcon from './Images/contact.png';
import chatIcon from './Images/liveChat.jpg';


export function cardItems(){
    const templates = [
        {
            name:"Payment",
            icon:billPayIcon,
            id:"BillPayment",
            cmd:"payment",
            title:"Payment methods",
            detail:[
                "Cash",
                "Debit Card",
                "Credit Card",
            ],
        },{
            name:"Bill History",
            icon:billHistoryIcon,
            id:"BillHistory",
            cmd:"history",
            title:"Payment methods",
            detail:[
                "Pass bills",
            ],
        },{
            name:"Settings",
            icon:settingsIcon,
            id:"Settings",
            cmd:"settings",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Offers",
            icon:offersIcon,
            id:"Offers",
            cmd:"",
            title:"Test",
            detail:[
                "Promotional Offers",
            ]
        },{
            name:"Rewards",
            icon:rewardIcon,
            id:"Rewards",
            cmd:"",
            detail:[
                "this is a test",
            ]
        },{
            name:"Banking",
            icon:bankingIcon,
            id:"Banking",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Earning",
            icon:earningsIcon,
            id:"Earning",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Faults",
            icon:faultsIcon,
            id:"Faults",
            cmd:"faults",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Contact",
            icon:contactIcon,
            id:"Contact",
            cmd:"contactus",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Live Chat",
            icon:chatIcon,
            id:"Live Chat",
            cmd:"chat",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Income",
            icon:bookmarkOutline,
            id:"test",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Budget",
            icon:bookmarkOutline,
            id:"test",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Reports",
            icon:bookmarkOutline,
            id:"test",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
        },{
            name:"Expenses",
            icon:bookmarkOutline,
            id:"test",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
          },{
            name:"Accounts",
            icon:bookmarkOutline,
            id:"test",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
          },{
            name:"test",
            icon:bookmarkOutline,
            id:"test",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
          },{
            name:"test",
            icon:bookmarkOutline,
            id:"test",
            cmd:"",
            title:"Test",
            detail:[
                "this is a test",
            ]
          },
      ]
    return templates;
}