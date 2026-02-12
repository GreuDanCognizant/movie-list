import { FC } from "react";
import Input from "../Input/Input";
interface Props{
    placeholder:string;
    value:string;
    setValue:(value:string)=>void
}
const InputSearch:FC<Props>=(Props)=>{
    return(
            <div className="relative flex-grow group">
                <Input placeholder={Props.placeholder} value={Props.value} onChange={(e)=>Props.setValue(e.target.value)}/>
                {Props.value && (
                    <button onClick={(e) => Props.setValue('')}
                        className="absolute mr-10 right-3 top-1/2 w-8 -translate-y-1/2 hover:bg-slate-200 transition-colors bg-blue-600 rounded-lg">
                        X
                    </button>
                )}   
            </div>
    )
}

export default InputSearch