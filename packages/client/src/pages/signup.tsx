import { useForm } from 'react-hook-form';
import { SideInfo } from '../components/sideInfo';
import { Title } from '../components/title';
import { Layout } from '../layout/layout';
import { Input } from '../components/input';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignUpSchema } from '../schemas/signup';

export function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(SignUpSchema) });
  const onSubmit = (data: any) => console.log(data);
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
          </form>
        </div>
        <SideInfo
          title='Already have an account?'
          summary={
            <p className='text-gray-500 text-center text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quibusdam.
            </p>
          }
          href='/sign-in'
          hrefText='Sign In'
        ></SideInfo>
      </div>
    </Layout>
  );
}
