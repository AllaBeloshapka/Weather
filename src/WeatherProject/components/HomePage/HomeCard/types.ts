import { WeatherData } from "../../../WeatherProject/types"

export type Props = {
  weather: WeatherData
  showSave?: boolean
  showDelete?: boolean
  onDelete?: (id: string) => void
}
