import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDQdSVTeVQEk4i3VPfyc8jckSgPzK8Qf5A",
    authDomain: "billpay-4204e.firebaseapp.com",
    databaseURL: "https://billpay-4204e.firebaseio.com",
    projectId: "billpay-4204e",
    storageBucket: "billpay-4204e.appspot.com",
    messagingSenderId: "556255543987",
    appId: "1:556255543987:web:7c9cb57eab3828a7e866c6",
}

firebase.initializeApp(config);

export async function loginUser(email:string, password:string){
    try{
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(response);
        return {state:true,message:""};
    }catch(error){
        console.log(error)
        if (error.code === "auth/user-not-found"){
            return {state:null,message:"User dose not exist or may have been deactivated"};
        }else if (error.code === "auth/network-request-failed"){
            return {state:"no-connection",message:"Unable to connect to server, try again later"};
        }else{
            return {state:false,message:"Email or password is incorrect"};
        }
    }
}

export async function registerUser(email:string, password:string){
    try{
        console.log("firebase starting");
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        console.log(response);
        return {state:true,message:""};
    }catch(error){
        return {state:false,message:error.message};
    }
}