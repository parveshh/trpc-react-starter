import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  elementHook: UseFormRegister<FieldValues>;
  fieldName: string;
  errors: FieldErrors<FieldValues>;
}
export function Input({ elementHook, fieldName, errors }: InputProps) {
  return (
    <>
      <input
        {...elementHook(fieldName)}
        className='border-2 border-gray-200 rounded-lg p-2'
      />
      {errors[fieldName] && (
        <p className='text-red-500 text-sm'>
          {errors[fieldName] && errors[fieldName]?.message?.toString()}
        </p>
      )}
    </>
  );
}
