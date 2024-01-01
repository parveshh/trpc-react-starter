import { Title } from '../title';

export function SignIn() {
  return (
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
  );
}