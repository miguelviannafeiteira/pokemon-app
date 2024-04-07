import { BiSearch } from 'react-icons/bi';
import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export function Input({ onChange, value }: Props) {
  return (
    <div className='ml-5 w-[500px] flex items-center outline-none'>
      <TextField
        className='bg-white rounded-md'
        value={value}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <BiSearch color="disabled" width={200} height={200} />
          ),
        }}
      />
    </div>
  );
}