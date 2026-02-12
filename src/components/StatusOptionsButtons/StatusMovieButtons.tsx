import { FC } from "react";
import Icon from "../IconsManager/IconManager";
import { STATUS_OPTIONS } from "../../constants/status-options";

interface Props{
    movieId:number,
    updateStatus:(a:number,b:string)=>void
}

 const StatusMovieButtons:FC<Props>=({ movieId,updateStatus})=> {

  return (
    <div className="flex flex-row gap-2 w-full mt-4">
      {STATUS_OPTIONS.map(option => (
        <button
          key={option.status}
          onClick={() => updateStatus(movieId, option.status)}
          className={`flex-1 text-white py-2 w-auto rounded-md flex justify-center items-center ${option.color}`}
        >
          <Icon value={option.icon} />
        </button>
      ))}
    </div>
  );
}

export default StatusMovieButtons
