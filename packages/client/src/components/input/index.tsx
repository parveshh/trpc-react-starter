import React, { useEffect, useState } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

interface InputProps<T extends FieldValues> {
  elementHook: UseFormRegister<T>;
  fieldName: Path<T>;
  error?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  placeholder?: string;
  className?: string;
}
export function Input<T extends FieldValues>({
  elementHook,
  fieldName,
  placeholder,
  error,
  className,
  type = 'text',
}: InputProps<T>) {
  return (
    <>
      <div className='flex w-full flex-col mb-2'>
        <input
          type={type}
          placeholder={placeholder}
          {...elementHook(fieldName)}
          className={className}
        />
        {error && <p className='text-red-500 text-sm'>{error}</p>}
      </div>
    </>
  );
}
