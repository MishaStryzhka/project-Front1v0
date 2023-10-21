import { useState } from 'react';
import Input from '../Input/Input';
import PlacesAutocomplete from 'react-places-autocomplete'; //   getLatLng, //   geocodeByAddress,
import { AddressList, AddressListItem } from './InputAddress.styled';
import { Placeholder } from '../Input/Input.styled';

const InputAddress = ({
  error,
  type,
  value,
  name,
  onChange,
  onBlur,
  required,
  placeholder,
  width,
}) => {
  const [address, setAddress] = useState('');
  // console.log('address', address);

  const handleChange = address => {
    setAddress(address);
    onChange(address);
  };

  const handleSelect = address => {
    setAddress(address);
    onChange(address);

    // geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => {
    //     console.log('Success', latLng);
    //     // Тут ви можете обробити координати або зробити інші дії
    //   })
    //   .catch(error => console.error('Error', error));
  };
  return (
    <PlacesAutocomplete
      value={address || value}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => {
        // console.log('suggestions', suggestions);
        // console.log('value', value);

        return (
          <div style={{ position: 'relative' }}>
            <Input
              error={error}
              type={type}
              value={value}
              name={name}
              onChange={onChange}
              onBlur={onBlur}
              required={required}
              placeholder={placeholder}
              width={width}
              {...getInputProps({
                className: 'form-control',
              })}
            />
            <Placeholder required={required}>{placeholder}</Placeholder>
            {suggestions.length !== 0 && (
              <AddressList width={width}>
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  return (
                    <AddressListItem
                      key={suggestion.placeId}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </AddressListItem>
                  );
                })}
              </AddressList>
            )}
          </div>
        );
      }}
    </PlacesAutocomplete>
  );
};

export default InputAddress;
