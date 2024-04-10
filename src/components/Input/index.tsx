import { ChangeEvent } from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {
  value: string
  placeholder: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function Input({ onChange, value, onSubmit, placeholder }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      data-testid="form"
      className='ml-5 rounded-md flex items-center outline-none bg-white'
    >
      <input
        className='outline-none pl-2'
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />

      <button className='hover:bg-[#C7C7C7] p-3' data-testid="form-button">
        <BiSearch />
      </button>

    </form>
  );
}