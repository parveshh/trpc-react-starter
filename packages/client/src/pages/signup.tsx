import { SideInfo } from '../components/sideInfo';
import { Title } from '../components/title';
import { Layout } from '../layout/layout';

export function SignUp() {
  return (
    <Layout>
      <div className='flex flex-row rounded-md shadow-lg w-[80%] shadow-gray-300/2 border'>
        <div className='flex flex-col items-start w-[60%] p-5'>
          <Title variant='primary'>Create new account</Title>
          <form className='flex flex-col mt-10 justify-start w-full items-center'>
            <div className='flex flex-row  gap-3 mb-2'>
              <input
                className='border border-gray-300 p-2  w-full rounded-md'
                type='text'
                placeholder='First Name'
              />
              <input
                className='border border-gray-300 p-2 w-full rounded-md'
                type='text'
                placeholder='Last Name'
              />
            </div>
            <input
              className='border border-gray-300 p-2 m-2 w-full rounded-md'
              type='text'
              placeholder='Email'
            />
            <input
              className='border border-gray-300 p-2 m-2 w-full rounded-md'
              type='password'
              placeholder='Confirm Email'
            />
            <input
              className='border border-gray-300 p-2 m-2 w-full rounded-md'
              type='password'
              placeholder='Confirm Password'
            />

            <button
              className='border border-gray-300 p-2 m-2 w-full rounded-md  bg-cyan-600 text-white'
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
          href='/signin'
          hrefText='Sign In'
        ></SideInfo>
      </div>
    </Layout>
  );
}
