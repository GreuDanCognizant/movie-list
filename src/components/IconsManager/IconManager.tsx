import { FC } from "react"
import { EyeIcon, PlayIcon, ClockIcon, QuestionIcon, RemoveIcon, FilterIcon, SortAToZIcon, SortZToAIcon, Sort0To10Icon, Sort10To0Icon } from "../../assets/svgs/svgs"

interface Props {
  value: string
  className?: string
  onClick?: () => void
}

const Icon: FC<Props> = ({ value, className, onClick }) => {
  const icons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    Watched: EyeIcon,
    StartWatching: PlayIcon,
    InProgress: ClockIcon,
    MoreDetails: QuestionIcon,
    Remove: RemoveIcon,
    FilterOpen: FilterIcon,
    AToZ: SortAToZIcon,
    ZToA: SortZToAIcon,
    ZeroToTen: Sort0To10Icon,
    TenToZero: Sort10To0Icon,
  }

  const Component = icons[value]

  if (!Component) return null

  return <Component className={className} onClick={onClick} />
}

export default Icon
