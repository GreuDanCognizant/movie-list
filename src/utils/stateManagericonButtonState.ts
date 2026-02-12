const IconButtonState=(state:string)=>{
    switch(state){
        case "ZToA":
            return "AToZ";
        case  "AToZ":
            return "ZToA";
        case "ZeroToTen":
            return "TenToZero";
        case "TenToZero":
            return "ZeroToTen";
        default:
            return '';
        }
}

export default IconButtonState