import { createFileRoute } from '@tanstack/react-router'
import { TextField, FormControl} from '@mui/material'
import GenHeader from '../../../components/header-tokuen-logo'
import FilledButton from '../../../components/filled-button'

export const Route = createFileRoute(
  '/authentication/registration/create-password',
)({
  component: RegisterProfilePassword,
})

function RegisterProfilePassword() {


  return <div className='page'>
      <div className='flex flex-0 flex-col text-center pt-[15dvh] pl-[30dvw] pr-[30dvw] 
        pb-[15dvh]'>
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
            <p className='w-full h-fit text-[2rem] text-(--black) p-5 font-semibold'>Create a new password</p>
            <p className='w-full h-fit text-[1rem] text-(--subheader) mt-4 text-start'>Your password must:</p>
            <ul className='list-disc ml-6'>
              <li style={{ margin: 0, justifySelf: 'start'}}>contain alphanumeric characters (Aa-Zz, 0-9)</li>
              <li style={{ margin: 0, justifySelf: 'start'}} >contain atleast one (1) special character such as *, etc.</li>
            </ul>
          </div>

          {/**Form */}
          <div className='flex flex-1 flex-col pt-4 pb-16'>
            <FormControl sx={{ m: 1, gap: 3}} variant='outlined'>
                <TextField 
                  type='password'
                  label='Enter your new password'
                  className='w-full'
                  aria-invalid='false'
                />
                <TextField 
                  type='password'
                  label='Retype your new password'
                  className='w-full'
                  aria-invalid='false'
                />
            </FormControl>
          </div>

          <div className='flex-auto h-full'/>

          <FilledButton
            url='/authentication/registration/account-created'
            buttonText='Continue'
            textSize='text-[1rem]'
            effects='purple-button-filled'
          />
        </div>
      </div>
  </div>
}
