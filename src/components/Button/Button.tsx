import { FC, useState } from "react"

interface Props{
    value:string,
    className?:string,
    onClick:(e:any)=>void
}

const Button: FC<Props> = (Props) => {
  const [buttonState, setButtonState] = useState(Props.value);

  return (
    <button
      value={buttonState}
      className={Props.className ?? ""}
      onClick={(e) => {
        if (buttonState === "A->Z") {
          setButtonState("Z->A");
        } else if (buttonState === "Z->A") {
          setButtonState("A->Z");
        } else if(buttonState==="Rating up") setButtonState("Rating down")
        else if(buttonState==="Rating down") setButtonState("Rating up")

        Props.onClick(e);
      }}
    >
      {buttonState}
    </button>
  );
};


export default Button