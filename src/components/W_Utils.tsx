import tools from "./Tools";

export class W_FlipCard{
    flipCardTimerArray = [] as any[];
    flipCardIdArray = [] as any[];

    reset(main:any,front:any,back:any){
        //this will reset card with id parameter
        if (main && front && back){
            main.transition = "transform 1s";
            main.transform = "rotateY( 0deg )";
            setTimeout(() => {
                if (front && back){
                    front.hidden = false;
                    back.hidden = true;
                }
            }, 300);
        }
    }

    flip(main:any,front:any,back:any,back2:any){
        //user element id to flip card
        if (front?.hidden !== true && main && back){
            main.transition = "transform 1s";
            main.transform = "rotateY( 180deg )";
            setTimeout(() => {
                if (main && back2 && front && back){
                    front.hidden = true;
                    back.hidden = false;
                    back2.transform = "rotateY( 180deg )";
                }
            }, 300);
        }    
    }

    setPreviouseToReset(){
        //send previous card to reset to default
        //when user click on a different card
        //this.cancelTimer(main)
        for (var ids of this.flipCardIdArray){
            this.reset(ids.main,ids.id_1,ids.id_2);
            var index = this.flipCardIdArray.indexOf(ids);
            this.flipCardIdArray.splice(index,1)
        }
    }
    
    cancelTimer(main:any){
        for (var timeRef of this.flipCardTimerArray){
            if (timeRef.id === main){
                clearTimeout(timeRef.ref);
                var index = this.flipCardTimerArray.indexOf(timeRef);
                this.flipCardTimerArray.splice(index,1);
            }
        }
    }

    timer(main:any,front:any,back:any){
        //this will reset card to default base on time 
        //card timer will be stored in flipCardTimerArray 
        //so if that card is click and reclick by user 
        // it will then delete the previouse timer set
        // to avoid the card for closing when not needed
        //then store card id's to flipCardIdArray incose
        //user click on a different card that once can be close.
        this.cancelTimer(main);

        var timerOut = setTimeout(()=>{
            this.reset(main,front,back);
        }, 10000);
        var tempTimeOut = timerOut;

        this.flipCardIdArray.push({main:main,id_1:front,id_2:back})
        this.flipCardTimerArray.push({ref:tempTimeOut,id:main});
    }  

    flipCard(cardId:string,firstContainertId:string,secondContainertId:string){
        var backId = document.getElementById(secondContainertId);
        var backId2 = document.getElementById(secondContainertId)?.style;
        var frontId = document.getElementById(firstContainertId);
        var mainId = document.getElementById(cardId)?.style;

        //start flip process
        if (frontId?.hidden !== true){
            this.setPreviouseToReset();
            this.flip(mainId,frontId,backId,backId2);
            this.timer(mainId,frontId,backId);
        }else{
            this.reset(mainId,frontId,backId);
        }
    }

    configureCardRow(value:any,mobileRow:number,desktopRow:number){
        var tempData = []
        var set = 0;
        if (value){
            var rowNum = tools.compare(tools.platform(),true,mobileRow,desktopRow);
            for (var i = 0; i < value.length; i++){
                set ++;
                if (set === rowNum){
                    set = 0;
                }
            }
            for (var item of value){
                tempData.push(item);
            }
            for  (var _ = 0; _ < rowNum - set; _ ++){
                tempData.push({detail:[],empty:true})
            }
        }
        return tempData;
    }
}

class W_Calendar{
    week_1 = 1;
    week_2 = 8;
    week_3 = 15;
    week_4 = 22;
    week_5 = 29;

    daysOfTheWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    stringWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    stringMonths = ["January","February","March","April","May",
        "June","July","August","September","October","November","December"];
    monthAbrive = ["Jan","Feb","Mar","Apr","May",
        "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    
    getSyle(data:string,month:string,year:string){
        var date = this.weekMonthDayYearExtract(new Date().toString())
        var Month = this.getMonthAbrive(date.month)
        if (data === date.day && month === Month.fullText && year === date.year){
            return {backgroundColor: "teal",color:"white"};
        }else{
            return {backgroundColor: "",color:""};
        }
    }
    getWeekAbrive(week:string){
        var index = 0;
        for (var Week of this.daysOfTheWeek){
            index ++;
            if (week.toUpperCase() === Week){
                return {index:index,abbr:week,fullText:this.stringWeek[index-1]};;
            }
        }
        return {index:index,abbr:week,fullText:this.stringWeek[index]};
    }
    getMonthAbrive(month:string){
        var index = 0;
        for (var Month of this.monthAbrive){
            index ++;
            if (month === Month){
                return {index:index,abbr:month,fullText:this.stringMonths[index-1]};;
            }
        }
        return {index:index,abbr:month,fullText:this.stringMonths[index]};
    }
    weekMonthDayYearExtract(data:string){
        var index = 0;var temp = "";var dates = [];
        for (var value of data){
            if (value !== " "){
                temp = temp + value;
            }else{
                index ++;
                dates.push(temp);
                temp = "";
                if (index === 4){break;}
            }
        }
        var fullMonth = w_calendar.stringMonths[w_calendar.monthAbrive.indexOf(dates[1])];
        return {week:dates[0],month:dates[1],day:dates[2],year:dates[3],fullMonth:fullMonth};
    }
    getDaysInMonth = (month:number, year:number) =>{
        var Month = month -1;
        var date = new Date(year, Month,1);
        var days = [];
        while (date.getMonth() === Month) {
            days.push(this.weekMonthDayYearExtract(new Date(date).toString()));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }
    oganaizeDate(limit:number,month:number,year:number){
        var tempRowReturn = [];
        var dateHolder = [];
        var subMax = this.daysOfTheWeek.indexOf(this.getDaysInMonth(month,year)[0].week.toUpperCase());
        for (var i=0;i < subMax; i++){
            dateHolder.push("");
        }
        for (var item of this.getDaysInMonth(month,year)){
            dateHolder.push(item.day)
        }
        for (var p=dateHolder.length;p <= 35; p++){
            dateHolder.push("");
        }
        var index = 0;
        var countBreak = 0;
        for (var items of dateHolder){
            index ++;
            if (index >= limit){
                tempRowReturn.push(items.toString());
                countBreak ++
                if (countBreak === 7){
                    break;
                }
            }
            
        }  
        return tempRowReturn;          
    } 
}

export class TextConfigure{
    config(cmd:string,id_Array:any,color:string="black"){
        for (var id of id_Array){
            var element = document.getElementById(id)?.style;
            if (element){
                if (cmd === "font"){
                    if (element.fontSize === "20px"){
                        element.fontSize = "";
                    }else{
                        element.fontSize = "20px";
                    }
                }else if (cmd === "bold"){
                    if (element.fontWeight === "bold"){
                        element.fontWeight = "";
                    }else{
                        element.fontWeight = "bold";
                    }
                }else if (cmd === "Italic"){
                    if (element.fontStyle === "italic"){
                        element.fontStyle = "";
                    }else{
                        element.fontStyle = "italic";
                    }
                }else if (cmd === "underline"){
                    if (element.textDecoration === "underline"){
                        element.textDecoration = "";
                    }else{
                        element.textDecoration = "underline";
                    }
                }else if (cmd === "color"){
                    element.color = color;
                }else if (cmd === "left"){
                    element.textAlign = cmd;
                }else if (cmd === "center"){
                    element.textAlign = cmd;
                }else if (cmd === "right"){
                    element.textAlign = cmd;
                }else{

                }
            }
        }
    }
}


export var w_calendar = new W_Calendar()
export var utils = new TextConfigure()