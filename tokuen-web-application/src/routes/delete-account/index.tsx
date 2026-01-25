{/**The option of switching between email and number depends if the user has both.
  Email is the default route. */}

import { createFileRoute, Link } from '@tanstack/react-router'
import { TextField, Stack } from '@mui/material'
import GenHeader from '../../components/header-tokuen-logo'
import FilledButton from '../../components/filled-button'


export const Route = createFileRoute('/delete-account/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col w-screen h-screen m-0 p-0'>
      <div className='flex flex-1 flex-col text-center py-[15dvh] px-[30dvw] 
        '>
        {/** Card */}
        <div className='flex flex-0 flex-col w-full h-full px-[10%] pb-6 self-center justify-self-center border-2 border-stone-300 rounded-2xl shadow-xl'>

          {/**Header */}
          <div className='flex flex-0 flex-row w-full h-fit pb-4 py-[20%] justify-center items-center'>
            <GenHeader
              text={'TOKUEN'}
              textColor={'black'}
              img={'./../../../../public/favicon.png'}
              width={'3rem'}
            />
          </div>

          {/**Texts */}
          <div className='flex flex-col flex-0 w-full h-fit'>
            <p className='w-full h-fit text-[2rem] text-(--black) font-semibold'>Do you want to delete your account?</p>
            <p className='w-full h-fit text-[1rem] text-(--subheader)'>If you want to delete your account, verify your authenticity by verifying your email.</p>
          </div>

          {/**Form */}
          <div className='flex flex-0 flex-col pt-4 py-8'>
            <Stack spacing={1}>
              <TextField 
              type='text'
              id="filled-basic" 
              label="Enter the code here..." 
              variant="outlined" 
              className='w-full'
              aria-invalid='false'
            />
            <p><a className='flex-1 font-semibold text-(--subheader)'>Resend email</a>&nbsp;50s</p>{/**Timer of 50s before user is allowed to resend again */}
            </Stack>
          </div>
          <Link to='/delete-account/delete-using-phone' className='flex-0 text-black hover:underline cursor-pointer py-3'>Switch to verifying your number instead?</Link>

          {/**Link to verify email/phone number pages */}
          <FilledButton
            url='/delete-account/account-deleted'
            buttonText='Continue'
            textSize='text-[1rem]'
            effects='purple-button-filled'
          />
        </div>
      </div>
  </div>
}
