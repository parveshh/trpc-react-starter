import { Title } from '../components/title';
import { Layout } from '../layout/layout';

export function SignIn() {
  return (
    <Layout>
      <div className='flex flex-row rounded-md shadow-lg w-[80%] shadow-gray-300/2 border'>
        <div className='flex flex-col items-start w-[60%] p-5'>
          <Title variant='primary'>Login to your account</Title>
          <form className='flex flex-col mt-10 justify-start w-full items-center'>
            <input
              className='border border-gray-300 p-2 m-2 w-full rounded-md'
              type='text'
              placeholder='Email'
            />
            <input
              className='border border-gray-300 p-2 m-2 w-full rounded-md'
              type='password'
              placeholder='Password'
            />

            <button
              className='border border-gray-300 p-2 m-2 w-full rounded-md  bg-cyan-600 text-white'
              type='submit'
            >
              Login
            </button>
          </form>
        </div>
        <div className='flex flex-col gap-2 place-content-center w-[40%] bg-cyan-600/10 p-10'>
          <Title variant='secondary'>New here?</Title>
          <p className='text-gray-500 text-center text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            quibusdam.
          </p>
          <a
            href='/signup'
            className='border border-gray-300 p-2 m-2 w-full text-center rounded-md bg-cyan-600 text-white'
          >
            Signup
          </a>
        </div>
      </div>
    </Layout>
  );
}
