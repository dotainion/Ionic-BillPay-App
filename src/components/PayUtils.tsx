import axios from 'axios';


class PayUtils{
    key = "pk_test_51HMQLOBZvIBjqI0ERBmRc4Feu7qu6fXdnc8IZ9whUpTWAMIEZyYRSUsFCc2LQlXIPJJqBYgzcIbQJY5WODNXdiuf00TucXVjmM"

    tokenHandle(url:any, customerToken:any, data:any, onClick:any=false){
        axios.post(url,{token:customerToken,product: data})
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
        })
    }
}


export var pay = new PayUtils();


