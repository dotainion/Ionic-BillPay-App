


export class W_Utils{
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
}