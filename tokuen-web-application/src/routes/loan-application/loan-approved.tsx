import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import OutlinedButtonBlack from '../../components/dashboard-button'
import VerifiedIcon from '@mui/icons-material/Verified';

export const Route = createFileRoute('/loan-application/loan-approved')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
        <Header
            img='./../../../favicon.png'
            text='TOKUEN'
            textColor='black'
        />

        <div className='flex flex-1 flex-col bg-linear-180 from-indigo-700 to-fuchsia-900 items-center justify-center overflow-hidden'>
            <p className='text-[40rem] pl-[10%] text-white opacity-20 self-start pt-[20%] leading-[0.8] font-semibold'>TOKUEN</p>

            {/**Card */}
            <div className='fixed flex flex-1 flex-col w-[50%] h-auto p-10 rounded-xl bg-white'>
                <p className='text-3xl font-semibold w-full h-fit justify-self-center'>Loan request submitted!</p>
                <p className=''>View your request details on the 'borrow' page.</p>
                <VerifiedIcon sx={{fontSize: '15rem'}} className='self-center my-10'/>
                <OutlinedButtonBlack 
                    icon=''
                    text='Continue'
                    url=''
                    alignment='center'
                    fontWeight='bold'
                    textSize='1rem'
                />
            </div>
        </div>
    </div>
}
