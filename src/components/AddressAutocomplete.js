import { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const AddressAutocomplete = e => {
  const [address, setAddress] = useState('');

  const handleChange = address => {
    setAddress(address);
  };

  const handleSelect = address => {
    console.log('address', address);

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);
        // Тут ви можете обробити координати або зробити інші дії
      })
      .catch(error => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
        console.log('suggestions', suggestions);

        return (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Пошук адреси...',
                className: 'form-control',
              })}
            />
            <div>
              {loading && <div>Завантаження...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }}
    </PlacesAutocomplete>
  );
};

export default AddressAutocomplete;
