const stateManagerButton=(state:string)=>{
    switch(state){
       case "A->Z":
            return "Z->A";
        case  "Z->A":
            return "A->Z";
        case "Rating up":
            return "Rating down";
        case "Rating down":
            return "Rating up";
        default:
            return state;
    }

}

export default stateManagerButton;

