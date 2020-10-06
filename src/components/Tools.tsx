import { isPlatform } from '@ionic/react';

class Tools{
    index = 0;
    hideWhenScrollValue = 0;

    SERVERUSERNAME = "user";
    SERVERPASSWORD = "users"

    link = "http://127.0.0.1:80"
    URL = {
        CHECKOUT:this.link+"/checkout",
        LOGIN:this.link+"/login",
        REGISTER:this.link+"/register",
        RECOVER:this.link+"/recover"
    }

    color = [
        "blue",
        "red",
        "teal",
        "black",
        "orange",
        "green",
        "brown",
        "pink",
        "gray",
        "navy",
        "purple",
        "blue",
        "red",
        "teal",
        "black",
        "orange",
        "green",
        "brown",
        "pink",
        "gray",
        "navy",
        "purple",
    ];

    clickById(id:string){
        try{
            document.getElementById(id)?.click();
        }catch{
            console.log("this 'id:",id,"' is not known")
        }
    }

    saveCmdData(data:string){
        window.localStorage.setItem("click-data",JSON.stringify(data));
    }

    getCmdData(){
        var cmd_id = window.localStorage.getItem("click-data");
        if (cmd_id){
            return JSON.parse(cmd_id);
        }else{console.log("this 'id:",cmd_id,"' is not known")}
    }

    getSaveCartItems(){
        var item = window.localStorage.getItem("cart");
        if (item){
            return JSON.parse(item);
        }
        
    }

    toast(msg:string,duration:number=3000){
        const toast = document.createElement('ion-toast');
        toast.message = msg;
        toast.position = "top";
        toast.duration = duration;
      
        document.body.appendChild(toast);
        return toast.present();
    }

    toastWithOkCancel(msg:string,onClick:any=false,okayText:string="Yes",cancelText:string="No"){
        const toast = document.createElement("ion-toast");
        toast.header = 'Warning!!';
        toast.message = msg;
        toast.position = 'middle';
        //toast.color = 'light';
        toast.buttons = [
            {
                //side: 'start',
                icon: 'star',
                text: okayText,
                handler: () => {
                    if (onClick){
                        onClick(true);
                    }
                }
            }, {
                role: 'cancel',
                text: cancelText,
                handler: () => {
                    if (onClick){
                        onClick(false);
                    }
                }
            }
        ];

        document.body.appendChild(toast);
        return toast.present();
    }
      
    platform(){
        if (!isPlatform("desktop")){
            if (isPlatform("mobile") || isPlatform("tablet") || isPlatform("ios")){
                return true;
            }else{
                return false;
            }
        }else{
            if (window.innerWidth < 500){
                return true;
            }else{
                return false;
            }
        }
        
    }

    saveCreds(username:string, password:string){
        window.localStorage.setItem("username",username);
        window.localStorage.setItem("password",password);
    }

    getCreds(){
        var creds = {
            username:window.localStorage.getItem("username"),
            password:window.localStorage.getItem("password"),
        }
        return creds;
    }

    clearCreds(){
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("password");
    }

    clearStorage(){
        window.localStorage.clear();
    }

    logout(){
        console.log("tsting this")
        this.clearCreds();
        this.clickById("hide-menu");
        this.clickById("login");
    }

    compare(value:any,ref:any,returnIfTrue:any,returnIfFalse:any){
        if (value === ref){
            return returnIfTrue;
        }else{
            return returnIfFalse;
        }
    }

    inputValidation(itemsArray:any){
        var valid = true;
        for (var inputs of itemsArray){
            if (inputs[0] === ""){
                document.getElementById(inputs[1])!.style.border = "1px solid red";
                valid = false;
            }else{
                document.getElementById(inputs[1])!.style.border = "";
            }
        }
        return valid
    }

    inputValidationSet(reset:string,color="lightgray"){
        document.getElementById(reset)!.style.border = "1px solid "+color;
    }

    inputValidationReset(reset:string){
        document.getElementById(reset)!.style.border = "1px solid lightgray";
    }

    credsConfirmValidation(validate:any){
        if (validate[0][0] === validate[1][0]){
            return true;
        }else{
            document.getElementById(validate[0][1])!.style.border = "1px solid orange";
            document.getElementById(validate[1][1])!.style.border = "1px solid orange";
        }
        return false;
    }

    passwordStrength(password:any){
        var result = 0;
        //check to see if password has 8 or more characters
        if (password.split("").length >= 8){
            result ++;
        }
        //check for Capital letters
        if (/[A-Z]/.test(password)){
            result ++;
        }
        //check for a Numeric value
        if (/\d/.test(password)){
            result ++;
        }
        //check if password has a Symbol character
        if (password.match(/[|\\/~^:,;?!&%$@#*+()]/)){
            result ++;
        }
            
        switch (result) {
            case 0:
                return {value:0.02,text:'Weak',color:"red"};
            case 1:
                return {value:1,text:'Weak',color:"red"};
            case 2:
                return {value:2,text:'Fair',color:"orange"};
            case 3:
                return {value:3,text:'Good',color:"blue"};
            case 4:
                return {value:4,text:'Strong',color:"green"};
            default:
                return {value:0,text:'Weak',color:"red"};
        }
    }

    emailValidate(email:any){
        //check if email in valid format
        var validate = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (validate.test(email)){
            return true;
        }else{
            return false;
        }
    }

    getIndex(limit:any){
        if (this.index === limit){
            return this.index = 0;
        }else{
            return this.index ++;
        }
    };

    title(text:any){
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    sleep(ms:any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    saveHistry(page:string){
        var history = window.localStorage.getItem("page");
        if (history){
            window.localStorage.setItem("previous-page",history);
        }
        window.localStorage.setItem("page",page);
    }

    getPreviousHistory(){
        var previousHistory = window.localStorage.getItem("previous-page");
        if (previousHistory){
            return previousHistory;
        }
        return "";
    }

    getCurrentHistory(){
        var history = window.localStorage.getItem("page");
        if (history){
            return history;
        }
        return "";
    }

    isLogin(state:any=""){
        if (state === true || state === false){
            window.localStorage.setItem("login-state",JSON.stringify(state));
        }else{
            var loginState = window.localStorage.getItem("login-state");
            if (loginState){
                return JSON.parse(loginState);
            }
        }
    }

    tempCheckCreds(username:any, password:any){
        if (username === "example@gmail.com" && password === "password"){
            return true;
        }else{
            return false;
        }
    }

    hideWhenScroll(value:number,id:string){
        var element = document.getElementById(id);
        if (this.hideWhenScrollValue < value){
            if (element){
                element.hidden = true;
            }
            this.hideWhenScrollValue = value - 5;
          }else{
            if (element){
                element.hidden = false;
            }
            this.hideWhenScrollValue = value;
          }
    }

    addElement(elementType:string,addToId:string,msg:string,styles:any=""){
        var tag = document.createElement(elementType);
        var text = document.createTextNode(msg);
        tag.appendChild(text);
        var addTo = document.getElementById(addToId);
        addTo?.appendChild(tag);
        if (tag){
            tag.style.cssText = styles;
        }
    }
}

var tools = new Tools();

export default tools;
