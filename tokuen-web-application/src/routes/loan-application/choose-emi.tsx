import { createFileRoute, useRouter } from '@tanstack/react-router'
import Header from '../../components/header'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton } from '@mui/material';
import OutlinedButtonBlack from '../../components/dashboard-button';

export const Route = createFileRoute('/loan-application/choose-emi')({
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

    <div className='flex flex-1 flex-col w-full h-full bg-linear-180 from-indigo-600 to-fuchsia-700 overflow-hidden justify-center items-center'>
        <p className='text-[40rem] pl-[10%] text-white opacity-20 self-start pt-[20%] leading-[0.8] font-semibold'>TOKUEN</p>

        {/**Card */}
        <div className='fixed flex flex-1 w-[50%] bg-white rounded-xl p-10'>
            <div className='flex flex-0 flex-col w-fit h-full'>
                <IconButton onClick={handleGoBack}><KeyboardArrowLeftIcon sx={{fontSize: '3rem'}}/></IconButton>
            </div>

            <div className='flex flex-1 flex-col gap-2'>
                <p className='text-4xl font-semibold'>Choose your EMI</p>
                <p>Select your installment plan per year</p>

                <p className='flex flex-1 text-xl p-4 my-3 border-2 border-black rounded-xl'>Amount to be borrowed <span className='flex flex-2'/><span className='font-bold'>P7,000</span></p>

                <div className='flex flex-1 flex-col w-full h-full py-3'>
                    <button 
                        className='flex flex-1 text-xl border-2 border-black 
                        p-4 rounded-t-xl cursor-pointer hover:bg-stone-200 active:bg-black active:text-white' 
                        type='button'
                        >
                            <p>1-months installment</p>
                        </button>
                    <button 
                        className='flex flex-1 text-xl border-b-2 border-x-2 
                        border-black p-4 cursor-pointer hover:bg-stone-200 active:bg-black active:text-white' 
                        type='button'
                        >
                            <p>6-months installment</p>
                        </button>
                    <button 
                        className='flex flex-1 text-xl border-b-2 border-x-2 
                        border-black p-4 rounded-b-xl cursor-pointer hover:bg-stone-200 active:bg-black active:text-white' 
                        type='button'>
                            <p className='flex flex-2 w-fit'>12-months installment</p>
                            <p className='flex-1 border-2 border-black rounded-xl bg-black text-white text-[0.8rem] self-center p-1 font-semibold'>Recommended</p>
                            <p className='flex-1 text-end font-bold'>P583.33</p>
                    </button>
                    <p className='flex flex-1 text-(--subheader) pt-2'>Due date falls on the 15th day of each month</p>
                </div>

                <OutlinedButtonBlack
                    icon=''
                    text='Continue'
                    url='/loan-application/loan-details'
                    alignment='center'
                    fontWeight='bold'
                />
            </div>
        </div>
    </div>
  </div>
}
