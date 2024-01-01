import { SideInfo } from '../components/sideInfo';
import { SignIn } from '../components/signin';
import { Layout } from '../layout/layout';

export function SignInPage() {
  return (
    <Layout>
      <div className='flex flex-row rounded-md shadow-lg w-[80%] shadow-gray-300/2 border'>
        <SignIn />
        <SideInfo
          summary={
            <p className='text-gray-500 text-center text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quibusdam.
            </p>
          }
          href='/signup'
          hrefText='Signup'
          title='New here?'
        />
      </div>
    </Layout>
  );
}
