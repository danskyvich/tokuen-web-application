import { createFileRoute } from '@tanstack/react-router'
import {TextField, Stack} from '@mui/material'
import GenHeader from '../../components/header-tokuen-logo'
import FilledButton from '../../components/filled-button'

export const Route = createFileRoute('/update-phone/verify-phone')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
      <div className='flex flex-1 flex-col text-center pt-[15dvh] pl-[32.5dvw] pr-[32.5dvw] 
        pb-[20dvh]'>
        {/** Card */}
        <div className='flex flex-col w-full h-full p-6 self-center justify-self-center border-2 border-stone-300 rounded-2xl shadow-xl'>

          {/**Header */}
          <div className='flex flex-1 flex-row w-full h-fit pb-4 py-[20%] justify-center items-center'>
            <GenHeader
              text={'TOKUEN'}
              textColor={'black'}
              img={'./../../../../public/favicon.png'}
              width={'3rem'}
            />
          </div>

          {/**Texts */}
          <div className='flex flex-col flex-0 w-full h-fit'>
            <p className='w-full h-fit text-[2rem] text-(--black) font-semibold'>Verify your phone number</p>
            <p className='w-full h-fit text-[1rem] text-(--subheader)'>We have sent you an SMS containing a one-time PIN code. <br/>Enter it on the textfield below.</p>
          </div>

          {/**Form */}
          <div className='flex flex-1 flex-col pt-6 pb-16'>
            <Stack spacing={2}>
              <TextField 
              type='text'
              id="filled-basic" 
              label="Enter your new phone number here..." 
              variant="outlined" 
              className='w-full'
              aria-invalid='false'
            />
            </Stack>
          </div>

          <div className='flex-auto h-full'/>

          <FilledButton
            url='/update-phone/number-verified'
            buttonText='Continue'
            textSize=''
            effects='purple-button-filled'
          />
        </div>
      </div>
  </div>
}
