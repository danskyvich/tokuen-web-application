import { createFileRoute, Link } from '@tanstack/react-router'
import GenHeader from '../../../components/header-tokuen-logo'
import { TextField } from '@mui/material'

export const Route = createFileRoute(
  '/authentication/forgot-password/forgot-password-0',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col w-screen h-screen m-0 p-0'>
      <div className='flex flex-1 flex-col text-center pt-[20dvh] pl-[32.5dvw] pr-[32.5dvw] 
        pb-[20dvh]'>
        {/** Card */}
        <div className='flex flex-col w-full h-full p-6 self-center justify-self-center border-2 border-stone-300 rounded-2xl shadow-xl'>

          {/**Header */}
          <div className='flex flex-1 flex-row w-full h-fit pb-4 pr-[20%] justify-center items-end'>
            <GenHeader
              text={'TOKUEN'}
              textColor={'black'}
              img={'./../../../../public/favicon.png'}
            />
          </div>

          {/**Texts */}
          <div className='flex flex-col flex-0 w-full h-fit'>
            <p className='w-full h-fit text-[2rem] text-(--black) font-semibold'>Forgot your password</p>
            <p className='w-full h-fit text-[1rem] text-(--subheader)'>Please input the email address associated with your account.</p>
          </div>

          {/**Form */}
          <div className='flex flex-1 flex-col pt-4 pb-16'>
            <TextField 
              type='text'
              id="filled-basic" 
              label="Enter your email" 
              variant="outlined" 
              className='w-full'
              aria-invalid='false'
            />
          </div>

          <Link to='/authentication/forgot-password/forgot-password-1' 
            className='bg-(--filled-button) p-4 my-5 rounded-xl text-(--white) font-semibold hover:bg-(--filled-button-dark) cursor-pointer'
            >
              Verify  
            </Link>
        </div>
      </div>
  </div>
}
