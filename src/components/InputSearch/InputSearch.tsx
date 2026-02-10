import { FC } from "react";
interface Props{
    placeholder:string;
    value:string;
    setValue:(value:string)=>void
}
const InputSearch:FC<Props>=(Props)=>{
    return(
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow group">
                <input type="text" placeholder={Props.placeholder} 
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:right-blue-500/20 focus:border-blue-500 transition-all text-sm md:text-base"
                value={Props.value}
                onChange={e=>Props.setValue(e.target.value)}>
                
                </input>
                {Props.value && (
                    <button onClick={(e)=>Props.setValue('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-slate-200 rounded-full transition-colors">
                        X
                    </button>
                )}
            </div>
        </div>
    )
}

export default InputSearch