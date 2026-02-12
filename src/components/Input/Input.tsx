import { FC } from "react";
interface Props{
    placeholder:string;
    value:string;
    onChange:(e:any)=>void
}
const Input:FC<Props>=(Props)=>{
    return(
        <input type="text" placeholder={Props.placeholder} 
        className="w-11/12 pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:right-blue-500/20 focus:border-blue-500 transition-all text-sm md:text-base"
        value={Props.value}
        onChange={e=>Props.onChange(e)}>
        </input>
    )
}

export default Input