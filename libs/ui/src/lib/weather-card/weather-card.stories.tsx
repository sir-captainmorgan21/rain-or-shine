import type { ComponentStory, Meta } from '@storybook/react';
import { WeatherCard } from './weather-card';

const Story: Meta<typeof WeatherCard> = {
  component: WeatherCard,
  title: 'WeatherCard',
};
export default Story;

const Template: ComponentStory<typeof WeatherCard> = (args) => <div className='w-[300px] h-[200px]'><WeatherCard {...args}/></div>;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  weather: {
    temp: 36,
    feelsLike: 30,
    windSpeed: 10,
    weather: {
      id: 'test',
      icon: '09n',
      description: 'Light Rain',
      main: 'Rain'
    }
  }
}
