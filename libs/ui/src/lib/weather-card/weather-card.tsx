import styles from './weather-card.module.scss';

/* eslint-disable-next-line */
export interface WeatherCardProps {}

export function WeatherCard(props: WeatherCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WeatherCard!</h1>
    </div>
  );
}

export default WeatherCard;
