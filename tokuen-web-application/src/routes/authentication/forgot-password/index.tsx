import { createFileRoute } from '@tanstack/react-router'
import GenHeader from '../../../components/header-tokuen-logo'
import { TextField } from '@mui/material'
import FilledButton from '../../../components/filled-button'

export const Route = createFileRoute(
  '/authentication/forgot-password/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
      <div className='flex flex-1 flex-col text-center pt-[20dvh] pl-[32.5dvw] pr-[32.5dvw] 
        pb-[20dvh]'>
        {/** Card */}
        <div className='flex flex-col w-full h-full p-6 self-center justify-self-center border-2 border-stone-300 rounded-2xl shadow-xl'>

          {/**Header */}
          <div className='flex flex-1 flex-row w-full h-fit pb-4 px-[20%] justify-center items-end'>
            <GenHeader
              text={'TOKUEN'}
              textColor={'black'}
              img={'./../../../../public/favicon.png'}
              width={'3rem'}
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

          <div className='flex flex-auto h-full'/>

          <FilledButton
            url='/authentication/forgot-password/forgot-password-1'
            buttonText='Verify'
            effects='purple-button-filled'
            textSize='text-[1rem]'
          />
        </div>
      </div>
  </div>
}
