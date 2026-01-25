import { createFileRoute } from '@tanstack/react-router'
import GenHeader from '../../components/header-tokuen-logo'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import FilledButton from '../../components/filled-button'

export const Route = createFileRoute('/add-phone-number/phone-number-added')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
      <div className='flex flex-1 flex-col text-center py-[10dvh] px-[32.5dvw] 
        items-center justify-center'>
        {/** Card */}
        <div className='flex flex-col w-full h-auto p-6 self-center justify-self-center border-2 border-stone-300 rounded-2xl shadow-xl'>

          {/**Header */}
          <div className='flex flex-1 flex-row w-full h-fit pb-4 py-6 justify-center items-center'>
            <GenHeader
              text={'TOKUEN'}
              textColor={'black'}
              img={'./../../../../public/favicon.png'}
              width={'3rem'}
            />
          </div>

          {/**Texts */}
          <div className='flex flex-col flex-0 w-full h-fit'>
            <p className='w-full h-fit px-12 text-[2rem] text-(--black) font-semibold text-center'>Your phone number has been verified!</p>
            <p className='w-full h-fit px-12 text-[1rem] text-(--subheader) text-center'>Your phone number has been added in your account.</p>
          </div>

          {/**Verified Icon */}
          <div className='flex flex-1 flex-col w-full h-fit py-12 justify-center items-center'>
            <VerifiedUserIcon sx={{ fontSize: '16rem'}}/>
          </div>

          <FilledButton
            url=''
            buttonText='Continue'
            effects='purple-button-filled'
            textSize='text-[1rem]'
          />
        </div>
      </div>
  </div>
}
