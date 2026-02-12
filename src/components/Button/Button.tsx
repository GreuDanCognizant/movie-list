import { FC, useState } from "react"
import stateManagerButton from "../../utils/stateManagerButton";

interface Props{
    value:string,
    className?:string,
    onClick:(e:any)=>void,
    icon?:string
}

const Button: FC<Props> = (Props) => {
  const [buttonState, setButtonState] = useState(Props.value);

  return (
    <button
      value={buttonState}
      className={Props.className ?? ""}
      onClick={(e) => {
        setButtonState(stateManagerButton(buttonState))

        Props.onClick(e);
      }}
    >
      {buttonState}
    </button>
  );
};


export default Button