import { createFileRoute } from '@tanstack/react-router'
import { Stack, TextField } from '@mui/material'
import GenHeader from '../../../components/header-tokuen-logo'
import FilledButton from '../../../components/filled-button'

export const Route = createFileRoute(
  '/authentication/registration/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
      <div className='flex flex-0 flex-col text-center py-[5%]'>
        {/** Card */}
        <div className='flex flex-col w-[40%] h-full p-6 self-center justify-self-center border-2 border-stone-300 rounded-2xl shadow-xl'>

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
          <div className='flex flex-col flex-0 h-fit'>
            <p className='h-fit text-[2rem] text-(--black) font-semibold'>Create an account</p>
            <p className='h-fit text-[1rem] mb-4 text-(--subheader)'>Input necessary fields marked in <span className='text-red-700'>*</span></p>
          </div>

          {/**Form */}
          <div className='flex flex-1 flex-col pt-4 pb-16'>
            <Stack spacing={2}>
              <p className='flex-1 self-start'>Full name&nbsp;<span className='text-red-700 font-semibold'>*</span></p>
                <TextField 
                  type='text'
                  id="filled-basic" 
                  label="Enter your given name" 
                  variant="outlined" 
                  className='w-full'
                  aria-invalid='false'
                />
                <TextField 
                  type='text'
                  id="filled-basic" 
                  label="Enter your surname" 
                  variant="outlined" 
                  className='w-full'
                  aria-invalid='false'
                />
                <p className='flex-1 self-start'>Email&nbsp;<span className='text-red-700 font-semibold'>*</span></p>
                <TextField 
                  type='text'
                  id="filled-basic" 
                  label="Enter your email" 
                  variant="outlined" 
                  className='w-full'
                  aria-invalid='false'
                />
            </Stack>
          </div>

          <div className='flex flex-auto h-full'/>


          <FilledButton
            url='/authentication/registration/create-password'
            buttonText='Verify'
            textSize='text-[1rem]'
            effects='purple-button-filled'
            />
        </div>
      </div>
  </div>
}
