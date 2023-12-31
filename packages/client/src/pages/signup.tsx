import { useForm } from 'react-hook-form';
import { SideInfo } from '../components/sideInfo';
import { Title } from '../components/title';
import { Layout } from '../layout/layout';
import { Input } from '../components/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '../schemas/signup';
import { SignUpSchemaType } from '@app/schemas';
import { trpc } from '../server/trpc';
import { useState } from 'react';
import { Alert } from '../components/alert';

export function SignUp() {
  const [success, setSuccess] = useState<{
    state: 'pending' | 'success' | 'error';
    message: string;
  }>({
    state: 'pending',
    message: '',
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });

  const mutation = trpc.signUp.useMutation();

  const onSubmit = (data: SignUpSchemaType) => {
    mutation.mutate(
      {
        email: data.email,
        password: data.password,
        details: {
          firstName: data.firstName,
          lastName: data.lastName,
        },
      },
      {
        onSuccess: () => {
          reset();
          setSuccess((prev) => ({
            ...prev,
            state: 'success',
            message: 'Account created successfully',
          }));
        },
        onError: (err) => {
          setSuccess((prev) => ({
            ...prev,
            state: 'error',
            message: err.message,
          }));
        },
      }
    );
  };
  return (
    <Layout>
      <div className='flex flex-row rounded-md shadow-lg w-[80%] shadow-gray-300/2 border'>
        <div className='flex flex-col items-start sm:w-[60%] w-full p-5'>
          <Title variant='primary'>Create new account</Title>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col mt-10 justify-start w-full items-center'
          >
            <div className='flex md:flex-row flex-col w-full md:gap-2'>
              <Input
                className='border border-gray-300 p-2 w-full rounded-md'
                elementHook={register}
                fieldName='firstName'
                placeholder='Firstname'
                error={errors?.firstName?.message}
              />
              <Input
                className='border border-gray-300 p-2 w-full rounded-md'
                elementHook={register}
                fieldName='lastName'
                placeholder='Lastname'
                error={errors?.lastName?.message}
              />
            </div>

            <Input
              className='border border-gray-300 p-2  w-full rounded-md'
              elementHook={register}
              fieldName='email'
              placeholder='Email'
              error={errors?.email?.message}
            />
            <Input
              fieldName='password'
              elementHook={register}
              error={errors?.password?.message}
              className='border border-gray-300 p-2  w-full rounded-md'
              type='password'
              placeholder='Password'
            />
            <Input
              className='border border-gray-300 p-2  w-full rounded-md'
              type='password'
              elementHook={register}
              fieldName='confirmPassword'
              error={errors?.confirmPassword?.message}
              placeholder='Confirm Password'
            />

            <button
              className='border border-gray-300 
              hover:bg-cyan-500
              hover:rounded-lg
              trasition all duration-500 ease-in-out
              p-2 m-2 w-full rounded-md
                bg-cyan-600 text-white'
              type='submit'
            >
              Login
            </button>
            {success.state === 'success' && (
              <Alert variant='success' message={success.message} />
            )}
            {success.state === 'error' && (
              <Alert variant='error' message={success.message} />
            )}
          </form>
        </div>
        <SideInfo
          title='Already have an account?'
          summary={
            <p className='text-gray-100 text-center text-sm'>
              Already have an account? Login to your account to continue
            </p>
          }
          href='/sign-in'
          hrefText='Sign In'
        ></SideInfo>
      </div>
    </Layout>
  );
}
