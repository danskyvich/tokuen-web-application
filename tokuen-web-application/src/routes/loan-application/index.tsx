import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import OutlinedButtonBlack from '../../components/dashboard-button'

export const Route = createFileRoute('/loan-application/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    {/** bg gradient and text */}
    <Header
        img='./../../../favicon.png'
        text='TOKUEN'
        textColor='black'
    />
    <div className='flex flex-1 flex-col w-full h-full bg-linear-180 from-indigo-600 to-fuchsia-700 overflow-hidden justify-center items-center'>
        <p className='text-[40rem] pl-[10%] text-white opacity-20 self-start pt-[20%] leading-[0.8] font-semibold'>TOKUEN</p>

        {/** Card */}
        <div className='fixed flex-1 flex-col bg-white p-10 rounded-xl'>
            <p className='flex flex-1 font-semibold text-4xl'>Hi, Juan Dela Cruz</p>
            <p className='flex flex-1 text-2xl'>How much do you want to loan?</p>

            <div className='flex flex-3 flex-row'>

            </div>
            <p className='text-x text-(--subheader) py-3'>In order to increase your credit limit, pay your loans on or before the due date and verify your account’s authenticity and your personal identity.</p>
            <OutlinedButtonBlack
                icon=''
                text='Continue'
                url='/loan-application/choose-emi'
                alignment='center'
                fontWeight='700'
                textSize='1rem'
            />
        </div>
    </div>
  </div>
}
