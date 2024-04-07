import { ChangeEvent } from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function Input({ onChange, value, onSubmit }: Props) {
  return (
    <form className='ml-5 rounded-md flex items-center outline-none bg-white' onSubmit={onSubmit}>
      <input
        className='outline-none pl-2'
        value={value}
        onChange={onChange}
      />

      <button className='hover:bg-[#C7C7C7] p-3'>
        <BiSearch />
      </button>

    </form>
  );
}