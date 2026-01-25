import { createFileRoute } from '@tanstack/react-router'
import GenHeader from '../../components/header-tokuen-logo'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FilledButton from '../../components/filled-button';

export const Route = createFileRoute('/delete-account/account-deleted')({
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
            <p className='w-full h-fit px-12 text-[2rem] text-(--black) font-semibold text-center'>Your account has been deleted.</p>
            <p className='w-full h-fit px-12 text-[1rem] text-(--subheader) font-medium text-center'>You will be redirected back into the authentication page.</p>
          </div>

          {/**Verified Icon */}
          <div className='flex flex-1 flex-col w-full h-fit py-12 justify-center items-center'>
            <DeleteForeverIcon sx={{ fontSize: '16rem', color: 'red'}}/>
          </div>


          <FilledButton
            url='/'
            buttonText='Continue'
            textSize='text-[1rem]'
            effects='purple-button-filled'
          />
        </div>
      </div>
  </div>
}
