/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from 'react';
import './SearchInput.scss';
import { useDebounce } from 'usehooks-ts';

interface ClassName {
  block: string,
  input: string,
  icon: string,
}

const defaultClassName = {
  block: '',
  input: '',
  icon: '',
};

interface Props {
  onChange?: (c: string) => void
  value?: string
  className?: ClassName
  placeholder?: string
}

export const SearchInput: React.FC<Props> = ({
  onChange = () => {},
  value = '',
  className = defaultClassName,
  placeholder = '',
}) => {
  const [searchValue, setSearchValue] = useState(value);
  const debounceValue = useDebounce<string>(searchValue, 500);

  useEffect(() => onChange(debounceValue), [debounceValue, onChange]);

  return (
    <search className={`search-item ${className.block}`}>

      <input
        type="text"
        id="search-item-input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        className={`search-item__input ${className.input}`}
        placeholder={placeholder}
      />

      {
        searchValue.length
          ? (
            <i
              className={`search-item__icon search-item__icon--close icon icon--close ${className.icon}`}
              onClick={() => setSearchValue('')}
            />
          ) : (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label htmlFor="search-item-input">
              <i
                className={`search-item__icon search-item__icon--search icon icon--search ${className.icon}`}
              />
            </label>
          )
      }
    </search>
  );
};
