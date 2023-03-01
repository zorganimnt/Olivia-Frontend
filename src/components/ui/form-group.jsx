/* eslint-disable react/prop-types */
import { Label, TextInput } from 'flowbite-react';
import React from 'react';
import { AiOutlineWarning } from 'react-icons/ai';

const WarningIcon = () => <AiOutlineWarning color='red' />;

const FormGroup = ({
  icon,
  label,
  name,
  errors,
  register,
  value = '',
  type = 'text',
  placeholder,
}) => {
  return (
    <div className='my-2'>
      <div className='mb-2 block '>
        <Label htmlFor={name} value={label} />
      </div>
      <TextInput
        id={name}
        type={type}
        placeholder={placeholder}
        icon={icon}
        {...register(name, { value })}
        rightIcon={errors && WarningIcon}
        color={errors ? 'failure' : 'gray'}
        helperText={
          errors && <React.Fragment>{errors?.message}</React.Fragment>
        }
      />
    </div>
  );
};

export default FormGroup;
