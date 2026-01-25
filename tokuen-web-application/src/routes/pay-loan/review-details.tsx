import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import FilledButton from '../../components/filled-button'

export const Route = createFileRoute('/pay-loan/review-details')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
        <Header
            img='./../../../../favicon.png'
            text='TOKUEN'
            textColor='black'
        />

        {/**Page */}
        <section className='flex flex-1 flex-col w-full h-full px-[20%] py-[2%]'>
            <p className='flex-1 text-4xl w-full h-fit font-semibold py-5'>Review transaction details</p>

            {/**Card */}
            <div className='flex flex-auto flex-col border-2 border-black rounded-xl shadow-2xl'>

                {/**Header */}
                <div className='flex flex-1 border-b-2 border-black p-5 items-center text-xl font-semibold'>
                    <p>User and transaction info</p>
                </div>

                {/**Content */}
                <section className='flex flex-1 flex-col w-full h-full px-5 py-5 gap-5'>

                    {/**Upper half */}
                    <div className='flex flex-1 w-full h-fit py-5 border-b-2 border-stone-300'>

                        {/**Left label  */}
                        <div className='flex flex-1 flex-col w-[50%] h-full gap-3'>
                            <p>Amount to be paid</p>
                            <p>Late payment fee</p>
                            <p>Transaction ID</p>
                            <p>Date and time of transaction</p>
                        </div>
    
                        {/**Right values */}
                        <div className='flex flex-1 flex-col w-[50%] h-full gap-3'>
                            <p>₱7,899.00</p>
                            <p>₱0.00</p>
                            <p>TR123456789VS</p>
                            <p>Nov 11, 2025 | 13:34:15</p>
                        </div>
                    </div>

                    {/**Lower half content */}
                    <div className='flex flex-1 w-full h-fit pb-5'>

                        {/**Left label  */}
                        <div className='flex flex-1 flex-col w-[50%] h-full gap-3'>
                            <p>Name</p>
                            <p>Phone number</p>
                            <p>Email</p>
                        </div>
    
                        {/**Right label  */}
                        <div className='flex flex-1 flex-col w-[50%] h-full gap-3'>
                            <p>Juan Dela Cruz</p>
                            <p>(+63) 912 345 6789</p>
                            <p>juandelacruz@gmail.com</p>
                        </div>
                    </div>
                </section>

                <span className='flex flex-1 h-full'/>

                <p className='italic flex-1 p-5 text-xs'>Review user and transaction details and check if the information is correct before proceeding to payment</p>
            </div>

            <span className='flex-auto h-full'/>

            <FilledButton
                url='/pay-loan/loan-paid'
                textSize=''
                buttonText='Finalize transaction'
                effects='black-button-outlined'
            />
        </section>
    </div>
}
