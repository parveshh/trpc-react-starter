import { useForm } from 'react-hook-form';
import { trpc } from '../../server/trpc';
import { Title } from '../title';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema, SignInSchemaType } from '../../schemas/signIn';
import { Input } from '../input';

export function SignIn() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignInSchema),
  });

  const mutation = trpc.signIn.useMutation();

  const onSubmit = (formdata: SignInSchemaType) => {
    mutation.mutate(formdata, {
      onSuccess: (response) => {
        console.log(response);
        reset();
      },
    });
  };

  return (
    <div className='flex flex-col items-start sm:w-[60%] w-full p-5'>
      <Title variant='primary'>Login to your account</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col mt-10 justify-start w-full items-center'
      >
        <Input
          elementHook={register}
          fieldName='email'
          error={errors.email?.message}
          className='border border-gray-300 p-2 m-2 w-full rounded-md'
          type='text'
          placeholder='Email'
        />
        <Input
          elementHook={register}
          fieldName='password'
          error={errors.password?.message}
          className='border border-gray-300 p-2 m-2 w-full rounded-md'
          type='password'
          placeholder='Password'
        />

        <div className='flex flex-row items-center gap-2 self-start mt-2 mb-2'>
          <input id='remember' type='checkbox' />
          <label htmlFor='remember'>remember me</label>
        </div>

        <button
          className='border border-gray-300 p-2 m-2 w-full rounded-md hover:bg-cyan-500
           bg-cyan-600 text-white'
          type='submit'
        >
          Login
        </button>
        <div className='flex flex-row justify-between mt-3 w-full'>
          <a className='text-gray-600 text-sm' href='/'>
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
