import { CurrentWeather } from '@rain-or-shine/types';
import Card from '../card/card';

export interface WeatherCardProps {
  weather: CurrentWeather
}

export function WeatherCard(props: WeatherCardProps) {

  const { weather } = props;

  return (
    <Card className='fit-content'>
      <div className='lg'>{weather.temp}</div>
    </Card>
  );
}

export default WeatherCard;
