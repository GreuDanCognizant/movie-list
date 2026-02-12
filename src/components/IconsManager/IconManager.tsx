import { BsFillEyeFill,BsPlayFill,BsClockFill  } from "react-icons/bs"
import { TbSortAscendingLetters, TbSortDescendingLetters, TbSortDescendingNumbers } from "react-icons/tb";
import { TbSortAscendingNumbers } from "react-icons/tb";
import { IconType } from "react-icons"
import { FC } from "react"
import { FaFilter, FaRegQuestionCircle } from "react-icons/fa"
import { IoIosRemoveCircle } from "react-icons/io";

interface Props {
  value: string
  className?: string
  onClick?:()=>void
}

const Icon: FC<Props> = ({ value, className, onClick}) => {
  const icons: Record<string, IconType> = {
    Watched: BsFillEyeFill,
    StartWatching:BsPlayFill,
    InProgress: BsClockFill ,
    MoreDetails:FaRegQuestionCircle,
    Remove:IoIosRemoveCircle,
    FilterOpen:FaFilter,
    AToZ:TbSortAscendingLetters,
    ZToA:TbSortDescendingLetters,
    ZeroToTen:TbSortAscendingNumbers,
    TenToZero:TbSortDescendingNumbers,

  }

  const Component = icons[value] ?? null

  if (!Component) return null

  return <Component className={className} onClick={onClick}/>
}

export default Icon

