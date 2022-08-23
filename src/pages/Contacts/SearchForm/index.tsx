import { Input } from 'antd';
import React, { FC } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { IContact } from '../../../models/IUser';

type Prop = {
  setInputSearch: (value: IContact[] | null) => void;
};

const SearchForm: FC<Prop> = ({ setInputSearch }) => {
  const { contact } = useTypedSelector((state) => state.contact);

  console.log(contact);

  const handlerSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toUpperCase();
    if (searchValue) {
      const filterResult = contact.filter((itemcontact) => {
        return (
          itemcontact.name.toUpperCase().includes(searchValue) ||
          itemcontact.number.toUpperCase().includes(searchValue)
        );
      });
      setInputSearch(filterResult);
    } else {
      setInputSearch(null);
    }
  };

  return (
    <div className="mrgt-15">
      <Input placeholder="Input search" onChange={handlerSearch} />
    </div>
  );
};

export default SearchForm;
