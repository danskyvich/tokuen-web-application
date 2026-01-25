import { createFileRoute } from '@tanstack/react-router'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import GenHeader from '../../../components/header-tokuen-logo'
import FilledButton from '../../../components/filled-button'

export const Route = createFileRoute(
  '/authentication/registration/account-created',
)({
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
                <p className='w-full h-fit px-12 text-[2rem] text-(--black) font-semibold text-center'>Your account has been created.</p>
            </div>

            {/**Verified Icon */}
            <div className='flex flex-1 flex-col w-full h-fit py-12 justify-center items-center'>
                <VerifiedUserIcon sx={{ fontSize: '16rem'}}/>
            </div>

            <div className='flex-auto h-full'/>

            <FilledButton
              url='/dashboard/'
              textSize='text-[1rem]'
              effects='purple-button-filled'
              buttonText='Continue'
            />
          </div>
      </div>
  </div>
}
