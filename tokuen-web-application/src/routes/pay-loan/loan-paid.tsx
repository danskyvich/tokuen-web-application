import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import FilledButton from '../../components/filled-button'
import VerifiedIcon from '@mui/icons-material/Verified'

export const Route = createFileRoute('/pay-loan/loan-paid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
        img='./../../../../favicon.png'
        text='TOKUEN'
        textColor=''
    />

    <section className='flex flex-1 flex-col w-full h-full items-center justify-center px-[20%] py-[2.5%] gap-3'>

        {/**Header */}
        <div className='flex flex-1 w-full h-fit gap-5 items-center'>
            <VerifiedIcon sx={{fontSize: '10rem'}}/>

            <div className='flex flex-1 flex-col w-full h-fit'>
                <p className='text-4xl font-semibold'>Loan paid!</p>
                <div className='flex flex-1 flex-col py-3 text-xl text-(--subheader)'>
                    <p>TR8934423A5VS</p>
                    <p>Nov 11, 2025  |  13:34:15</p>
                </div>
            </div>
        </div>

        {/** */}
        <div className='flex flex-1 flex-col border-2 w-full h-fit p-5 border-black rounded-xl shadow-2xl'>

            {/**Upper half */}
            <div className='flex flex-1 w-full pb-3 gap-3 border-b-2 border-stone-300'>
                <div className='flex flex-1 flex-col w-[50%] h-fit gap-2'>
                    <p>Paid amount</p>
                    <p>Late payment fee</p>
                    <p className='pl-5'>Interest fee</p>
                </div>
                <div className='flex flex-1 flex-col w-[50%] h-fit gap-2'>
                    <p>₱7,899.00</p>
                    <p>₱0.00</p>
                    <p>₱0.00</p>
                </div>
            </div>

            {/**Lower half */}
            <div className='flex flex-1 w-full pb-3 gap-3 border-b-2 border-stone-300 pt-3'>
                <div className='flex flex-1 flex-col w-[50%] h-fit gap-2'>
                    <p>Name</p>
                    <p>Phone number</p>
                    <p>Email</p>
                </div>
                <div className='flex flex-1 flex-col w-[50%] h-fit gap-2'>
                    <p>Juan dela Cruz</p>
                    <p>juandelacruz@gmail.com</p>
                    <p>(+63) 912 345 6789</p>
                </div>
            </div>

            <div className='flex flex-1 w-full h-fit'>
                <p className='flex flex-1 w-[50%] h-fit pt-3 font-semibold text-xl'>Next monthly due:</p>
                <p className='flex flex-1 w-[50%] h-fit pt-3 font-semibold text-xl'>₱8,192.00</p>
            </div>

            <p>Next due date is <span className='font-semibold'>Dec. 12, 2025.</span></p>
        </div>

        <span className='flex-auto h-full'/>

        <FilledButton
            buttonText='Continue'
            effects='black-button-outlined'
            textSize=''
            url=''
        />
    </section>
  </div>
}
