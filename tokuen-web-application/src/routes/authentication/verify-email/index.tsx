import { createFileRoute } from '@tanstack/react-router'
import GenHeader from '../../../components/header-tokuen-logo'
import OutlinedButton from '../../../components/outlined-button'
import FilledButton from '../../../components/filled-button'

export const Route = createFileRoute('/authentication/verify-email/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page p-[20%] justify-center items-center'>

          {/**Card */}
          <div className='flex flex-1 flex-col w-full h-fit p-6 border-2 border-stone-300 rounded-2xl shadow-xl justify-center text-center'>
  
            {/**Header */}
            <div className='flex flex-0 w-full h-fit pb-4 px-[20%] py-10 justify-center items-center'>
              <GenHeader
                text={'TOKUEN'}
                textColor={'black'}
                img={'./../../../../public/favicon.png'}
                width={'3rem'}
              />
            </div>
  
            {/**Texts */}
            <div className='flex flex-col flex-1 w-full h-fit pb-10'>
              <p className='flex-1 w-full h-fit text-[2rem] text-(--black) font-semibold'>Verify your email</p>
              <p
                className=' flex-1 w-full h-fit text-[1rem] text-(--black)'
              >
                <br/>We have sent you a verification email to [user's email here].
                <br/>Click on a link to complete the verification process. <br/> You might need to check your <span className='font-semibold text-black'>spam folder</span>
              </p>
            </div>

            <div className='flex-auto h-full'/>
  
            {/**Form */}
            <div className='flex flex-1 flex-row gap-5 w-full h-fit justify-center items-center'>
              <FilledButton
                buttonText={'Log in'}
                url={'/authentication/verify-email/email-verified'}
                textSize="text-[1rem]"
                effects='purple-button-filled'
              />
              {/** Return back*/}
              <OutlinedButton
                buttonText='Return to site &#8594;'
                url='/'
                textWeight='font-semibold'
                textSize="text-[1rem]"
                effects='black-button-outlined'
              />
            </div>
          </div>
        </div>
}
