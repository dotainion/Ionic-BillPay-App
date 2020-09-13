import tools from './Tools';

class Variables{
    REGISTER = {
        SERVERUSERNAME:tools.SERVERUSERNAME,
        SERVERPASSWORD:tools.SERVERPASSWORD,
        firstname:"",
        lastname:"",
        email:"",
        contact:"",
        city:"",
        stateaddress:"",
        address:"",
        password:"",
        confirmpassword:"",
        shippingaddress:"",
    };
    LOGIN = {
        SERVERUSERNAME:tools.SERVERUSERNAME,
        SERVERPASSWORD:tools.SERVERPASSWORD,
        username:"",
        password:"",
    };

    clearCreds = () =>{
        this.LOGIN.username = "";
        this.LOGIN.password = "";
    }
}

var variables = new Variables()
export default variables;