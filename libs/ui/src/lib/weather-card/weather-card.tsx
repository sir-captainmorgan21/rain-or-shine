import { CurrentWeather } from '@rain-or-shine/types';
import Card from '../card/card';

export interface WeatherCardProps {
  weather: CurrentWeather,
  loading: boolean
}

export function WeatherCard(props: WeatherCardProps) {

  const { weather } = props;

  return (
    <Card classes='flex'>
      <div className='flex-1'>
        <div className='text-4xl'>{Math.floor(weather.temp)}&deg;</div>
        <div className='text-md mb-4'>
          <div className='capitalize'>{weather.weather.description}</div>
          <div>Feels Like {Math.floor(weather.feelsLike)}&deg;</div>
        </div>
        <div className='text-sm text-slate-500'>Wind at {Math.floor(weather.windSpeed)} mph</div>
      </div>
      <div className='text-right'>
        <img className='w-[100px] h-[100px]' src={`https://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`} alt=''></img>
      </div>
    </Card>
  );
}

export default WeatherCard;
