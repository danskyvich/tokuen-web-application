import { createFileRoute, useRouter } from '@tanstack/react-router'
import Header from '../../components/header'
import { Divider, IconButton } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import OutlinedButtonBlack from '../../components/dashboard-button'

export const Route = createFileRoute('/loan-application/loan-details')({
  component: RouteComponent,
})

function RouteComponent() {
    const router = useRouter();
    const handleGoBack = () => {
        return router.history.back();
    }
  return <div className='page'>
        <Header
            img='./../../../favicon.png'
            text='TOKUEN'
            textColor='black'
        />  

        <div className='flex flex-1 flex-col w-full h-full bg-linear-180 from-indigo-700 to-fuchsia-700 overflow-hidden items-center justify-center'>
            <p className='text-[40rem] pl-[10%] text-white opacity-20 self-start pt-[20%] leading-[0.8] font-semibold'>TOKUEN</p>

            {/**Card */}
            <div className='fixed flex flex-1 flex-row bg-white w-[50%] h-auto rounded-xl p-10'>

                <div className='items-start justify-start pl-0 pr-2'><IconButton onClick={handleGoBack}><KeyboardArrowLeftIcon sx={{fontSize:'3rem'}}/></IconButton></div>
                <div className='flex flex-1 flex-col w-auto h-full gap-10'>
                    <p className='flex flex-1 text-4xl font-semibold '>Review loan details</p>
    
                    {/** Dynamic content, second div must change according to current user and prior input */}
                    <section className='flex flex-1 flex-row w-full h-full'>
                        <div className='flex flex-1 flex-col w-[50%] h-full gap-4 text-xl font-semibold'>
                            <p>Borrower name</p>
                            <p>Account number</p>
                            <p>Request sent</p>
                            <Divider/>
                            <p>Principal amount</p>
                            <p>Interest rate</p>
                            <p>EMI plan</p>
                            <p>Loan start date</p>
                            <p>Loan end date</p>
                            <Divider/>
                        </div>
                        <div className='flex flex-1 flex-col w-[50%] h-full gap-4 text-xl'>
                            <p>Juan dela Cruz</p>
                            <p>0123 456 7890</p>
                            <p>Nov 11, 2025 | 13:45:00</p>
                            <Divider/>
                            <p>P7000.00</p>
                            <p>5%</p>
                            <p>12-months</p>
                            <p>Nov 13, 2025</p>
                            <p>Nov 13, 2026</p>
                            <Divider/>
                        </div>
                    </section>
                    <OutlinedButtonBlack
                            text='Finalize loan request'
                            url=''
                            icon=''
                            alignment='center'
                            fontWeight='bold'
                        />
                </div>
            </div>
        </div>
    </div>
}
