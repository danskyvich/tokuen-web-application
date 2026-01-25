import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '../../components/header'
import AvatarIcon from '../../components/user-avatar'
import BlackButton from '../../components/black-button'
import FilledButton from '../../components/filled-button'

{/** Material UI imports */}

export const Route = createFileRoute('/user-profile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
      img={'./../../../public/favicon.png'}
      text={'TOKUEN'}
      textColor={'black'}
    />
    <div className='flex flex-1 flex-row w-full h-[90dvh] pl-[10dvw] pr-[15dvw] pt-[5dvh]'>

      {/**Left side */}
      <div className='flex flex-1 flex-col w-[60dvw] h-full'>

        {/**User name header */}
        <div className='flex flex-[0 1 auto] flex-row h-fit w-[90%] items-center gap-5'>
          <AvatarIcon
            img={''}
            height='5rem'
            width='5rem'
          />
          <p className='flex flex-1 text-5xl font-semibold'>Juan Dela Cruz</p>
        </div>

        {/**User details */}
        <div className='flex flex-[0 1 auto] flex-col w-[90%] h-fit py-3 gap-4 border-b-2 border-b-stone-300'>
          <div className='flex flex-1 flex-row w-full h-fit'>
            <p className='flex flex-1 w-[50%] font-semibold'>First Name:</p>
            <p className='flex flex-1 w-[50%] font-medium'>Juan</p>
          </div>
          <div className='flex flex-1 flex-row w-full h-fit'>
            <p className='flex flex-1 w-[50%] font-semibold'>Last Name:</p>
            <p className='flex flex-1 w-[50%] font-medium'>Dela Cruz</p>
          </div>
          <div className='flex flex-1 flex-row w-full h-fit'>
            <p className='flex flex-1 w-[50%] font-semibold'>Email address:</p>
            <p className='flex flex-1 w-[30%] font-medium'>juandelacruz@gmail.com</p>
          </div>
          <div className='flex flex-1 flex-row w-full h-fit'>
            <p className='flex flex-1 w-[50%] font-semibold'>Phone number:</p>
            <p className='flex flex-1 w-[40%] font-medium'>(+63) 928 378 2089</p>
          </div>
        </div>
      </div>

      {/**Right side */}
      <div className='flex flex-1 flex-col w-[40dvw] h-full pb-[5dvh] gap-12'>

        {/**Account Deletion card */}
        <div className='flex flex-0 flex-col h-fit w-fit p-8 text-black bg-stone-200 rounded-xl shadow-xl'>
          <p className='flex flex-[0 1 auto] w-full h-fit font-semibold text-3xl'>Account Deletion</p><br/>
          <p>Deleting your account erases all of your personal information from our website, including your account credentials.</p>
          <br/>
          <p>To learn more, visit our&nbsp;<span className='font-bold hover:underline cursor-pointer'><Link to='/tokuen-info/privacy-policy'>Privacy Policy</Link></span></p>
          <br/>
          <FilledButton
            url='/delete-account/'
            buttonText='Delete account'
            textSize='text-[1rem]'
            effects='red-button'
          />
        </div>

        <div className='flex flex-0 flex-col h-fit w-full p-8 text-black bg-stone-200 rounded-xl shadow-xl'>
          <p className='flex flex-[0 1 auto] w-full h-fit font-semibold text-3xl'>Verify your identity</p><br/>
          <p>Verify your identity to get access to more TOKUEN benefits!</p>
          <br/>
          <BlackButton
            text='Verify your identity now'
            url=''
          />
        </div>
      </div>
    </div>
    <footer>

    </footer>
  </div>
}
