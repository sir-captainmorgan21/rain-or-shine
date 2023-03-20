import axios from 'axios';

describe('GET /places?search=:query', () => {
  it('should return a message', async () => {
    const res = await axios.get(`/places?search=Virginia Beach`);

    expect(res.status).toBe(200);
    expect(res.data).toContainAllKeys(['total', 'list']);
    expect(res.data.total).toBeNumber();
    expect(res.data.list).toBeArray();
    expect(res.data.list[0]).toContainAllKeys(['description', 'id']);
    expect(res.data.list[0].id).toBeString();
    expect(res.data.list[0].description).toBeString();

    const placeId = res.data.list[0].id;

    const weatherRes = await axios.get(`/weather?placeId=${placeId}`);

    expect(weatherRes.data).toContainAllKeys(['temp', 'feelsLike', 'windSpeed', 'weather']);
    expect(weatherRes.data.temp).toBeNumber();
    expect(weatherRes.data.feelsLike).toBeNumber();
    expect(weatherRes.data.windSpeed).toBeNumber();
    expect(weatherRes.data.weather).toBeObject();
    expect(weatherRes.data.weather).toContainAllKeys(['id', 'main', 'description', 'icon']);
    expect(weatherRes.data.weather.id).toBeNumber();
    expect(weatherRes.data.weather.main).toBeString();
    expect(weatherRes.data.weather.description).toBeString();
    expect(weatherRes.data.weather.icon).toBeString();
  });
});
