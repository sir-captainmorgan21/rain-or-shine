import type { Meta } from '@storybook/react';
import { WeatherCard } from './weather-card';

const Story: Meta<typeof WeatherCard> = {
  component: WeatherCard,
  title: 'WeatherCard',
};
export default Story;

export const Primary = {
  args: {},
};
