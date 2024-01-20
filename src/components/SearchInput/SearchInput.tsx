/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import './SearchInput.scss';
import { useDebounce } from '../../hooks/useDebounce';

interface Props {
  onChange?: (c: string) => void
  value?: string
  className?: string
  classNameInput?: string
  classNameIcon?: string
  placeholder?: string
}

export const SearchInput: React.FC<Props> = ({
  onChange = () => {},
  value = '',
  className = '',
  classNameInput = '',
  classNameIcon = '',
  placeholder = '',
}) => {
  const [searchValue, setSearchValue] = useState(value);
  const debounceValue = useDebounce<string>(searchValue, 500);

  useEffect(() => onChange(debounceValue), [debounceValue, onChange]);

  return (
    <search className={`search-item ${className}`}>

      <input
        type="text"
        id="search-item-input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={`search-item__input ${classNameInput}`}
        placeholder={placeholder}
      />

      {
        searchValue.length
          ? (
            <i
              className={`search-item__icon search-item__icon--close icon icon--close ${classNameIcon}`}
              onClick={() => setSearchValue('')}
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="search-item-input">
              <i
                className={`search-item__icon search-item__icon--search icon icon--search ${classNameIcon}`}
              />
            </label>
          )
      }
    </search>
  );
};
