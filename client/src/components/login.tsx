import { Button } from './ui/button';

function Login() {
  return (
    <div className="flex w-full h-screen">
      <div className="w-[60%] h-screen bg-[#F1F5F9] relative lg:block hidden">
        <img
          src="/assets/illustrations/work.svg"
          alt=""
          className="absolute left-0 h-full opacity-75"
        />
      </div>
      <div className="lg:w-[40%] w-full h-screen bg-white flex items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-md p-4">
          <div className="flex flex-col space-y-2 text-center">
            {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl font-montserrat text-sky-900">
              blackBoard.ai
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Sign up to get started
            </p>
          </div>
          <Button variant="outline" className="space-x-2">
            <img src="/assets/google.svg" alt="" className="size-4" />
            <span>Continue with Google</span>
          </Button>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <a
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
