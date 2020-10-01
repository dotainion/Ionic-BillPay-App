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
import incomeIcon from './Images/income.jpg';
import budgetIcon from './Images/budget.jpg';
import reportIcon from './Images/report.png';
import expensIcon from './Images/expenses.png';
import accountsIcon from './Images/accounts.jpg';
import notePadIcon from './Images/notePad.jpg';
import shareIcon from './Images/share.jpg';


export function cardItems(){
    const templates = [
        {
            name:"Payment",
            icon:billPayIcon,
            id:"BillPayment",
            cmd:"payment",
            group:false,
            title:"Payment Methods",
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
            group:false,
            title:"Payment History",
            detail:[
                "Pass bills",
            ],
        },{
            name:"Settings",
            icon:settingsIcon,
            id:"Settings",
            cmd:"settings",
            group:false,
            title:"Settings",
            detail:[
                "this is a test",
            ]
        },{
            name:"Offers",
            icon:offersIcon,
            id:"Offers",
            cmd:"offer",
            group:true,
            title:"My Offers",
            detail:[
                "Promotional Offers",
            ]
        },{
            name:"Rewards",
            icon:rewardIcon,
            id:"Rewards",
            cmd:"reward",
            group:true,
            title:"My Rewards",
            detail:[
                "this is a test",
            ]
        },{
            name:"Banking",
            icon:bankingIcon,
            id:"Banking",
            cmd:"banking",
            group:true,
            title:"Banking",
            detail:[
                "this is a test",
            ]
        },{
            name:"Earning",
            icon:earningsIcon,
            id:"Earning",
            cmd:"earning",
            group:true,
            title:"My Earnings",
            detail:[
                "this is a test",
            ]
        },{
            name:"Faults",
            icon:faultsIcon,
            id:"Faults",
            cmd:"faults",
            group:false,
            title:"Faults that affects me",
            detail:[
                "this is a test",
            ]
        },{
            name:"Contact",
            icon:contactIcon,
            id:"Contact",
            cmd:"contactus",
            group:false,
            title:"Contact Companies",
            detail:[
                "this is a test",
            ]
        },{
            name:"Live Chat",
            icon:chatIcon,
            id:"Live Chat",
            cmd:"chat",
            group:false,
            title:"Chat Live",
            detail:[
                "this is a test",
            ]
        },{
            name:"Income",
            icon:incomeIcon,
            id:"Income",
            cmd:"income",
            group:true,
            title:"My Incomes",
            detail:[
                "this is a test",
            ]
        },{
            name:"Budget",
            icon:budgetIcon,
            id:"Rudget",
            cmd:"budget",
            group:true,
            title:"My Budgets",
            detail:[
                "this is a test",
            ]
        },{
            name:"Reports",
            icon:reportIcon,
            id:"Reports",
            cmd:"report",
            group:true,
            title:"Reports",
            detail:[
                "this is a test",
            ]
        },{
            name:"Expenses",
            icon:expensIcon,
            id:"Expenses",
            cmd:"expense",
            group:true,
            title:"My Expenses",
            detail:[
                "this is a test",
            ]
          },{
            name:"Accounts",
            icon:accountsIcon,
            id:"Accounts",
            cmd:"account",
            group:true,
            title:"My Accounts",
            detail:[
                "this is a test",
            ]
          },{
            name:"Note",
            icon:notePadIcon,
            id:"my note",
            cmd:"note",
            group:true,
            title:"My notes",
            detail:[
                "this is a test",
            ]
          },{
            name:"Share",
            icon:shareIcon,
            id:"Share",
            cmd:"",
            group:true,
            title:"Share this app",
            detail:[
                "this is a test",
            ]
          },
      ]
    return templates;
}