



export class Language{
    LANGUAGES(){
        return [
            "English",
            "Spanish",
            "French",
            "Dutch"
        ]
    }
    texts(){
        return {
            APPNAME: "G-Suit",//"Bill-Pay",
            fieldsRequired:"Feilds are required",
            passwordMatch:"Passwords dose not match",
            provideValidCreds:"Please provide valid credentials",
            recoverinfo:"A verification email will be sent to your email address. Please check your email account for your confirmation id after submiting this form.",
            recoververificationinfo:"Please enter the 5 digit code that was sent to your email address.",
            validEmail:"Email is invalid. Please double check email",
            resendverificationcode:{
                1:"To resend verification code click ",
                2:"here",
            },
            cartMsg:"Shipping cost will be calculated based on your shipping address.",
            userExist:"User already exist, try to login",
            passwordStrength:"Password must be above 50%.",
        }
    }
}