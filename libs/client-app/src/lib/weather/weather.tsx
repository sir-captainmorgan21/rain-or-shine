import { CurrentWeather, SearchPlace } from "@rain-or-shine/types";
import { Card, Modal, SearchIcon, WeatherCard } from "@rain-or-shine/ui";
import _ from 'lodash';
import { FormEvent, useEffect, useMemo, useState } from "react";

export function Weather() {

  const [showSearchModal, setShowSearchModal] = useState(false);
  const [placeSearchResults, setPlaceSearchResults] = useState<SearchPlace[]>([]);
  const [selectedPlace, setSelectedPlace] = useState<SearchPlace | null>(null);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);

  const toggleSearchModal = () => {
    setPlaceSearchResults([]);
    setShowSearchModal(!showSearchModal);
  };

  const inputHandler = (event: FormEvent<HTMLInputElement>) => {
    fetch(`/api/places?search=${(event.target as HTMLInputElement).value}`, {
      method: 'GET'
    }).then(async (res) => {
      const json = await res.json();
      setPlaceSearchResults(json.list);
    })
  }

  const debouncedInputHandler = useMemo(() => {
    return _.debounce(inputHandler, 300)
  }, []);

  const placeClickHandler = (place: SearchPlace) => {
    setSelectedPlace(place);
    toggleSearchModal();
  }

  useEffect(() => () => debouncedInputHandler.cancel(), [debouncedInputHandler]);

  useEffect(() => {
    if (selectedPlace) {
      fetch(`/api/weather?placeId=${selectedPlace.id}`, {
        method: 'GET'
      }).then(async (res) => {
        const json = await res.json();
        setCurrentWeather(json);
      })
    }
  }, [selectedPlace]);

  return (
    <>
      <Card classes="mb-4">
        <div className='flex items-center'>
          <div className='mr-2'>{selectedPlace?.description || 'Select a Location'}</div>
          <button className='bg-green-500 rounded-md p-2 hover:bg-green-700' onClick={toggleSearchModal}><SearchIcon size={20}/></button>
        </div>
      </Card>
      {currentWeather && <WeatherCard weather={currentWeather} loading={true}></WeatherCard>}

      <Modal open={showSearchModal} onClose={toggleSearchModal} heading='Choose Location'>
        <div className='rounded-md border border-gray-300 focus-within:border-green-500 flex flex-col p-2'>
          <label htmlFor='search' className='text-xs'>Add City or Zip Code</label>
          <input onInput={debouncedInputHandler} name='search' className='focus-visible:outline-none'></input>
        </div>
        <hr className='my-3' />
        {
          placeSearchResults?.length > 0 &&
          <ul>
            {
              placeSearchResults.map((place) => {
                return (
                  <li className='focus-within:bg-green-100 hover:bg-green-100 rounded-sm' key={place.id}>
                    <button className='focus-visible:outline-none w-full p-3' onClick={() => placeClickHandler(place)}>{place.description}</button>
                  </li>
                )
              })
            }
          </ul>
        }
      </Modal>
    </>
  );
}
