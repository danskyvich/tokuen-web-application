import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import FilledButton from '../../components/filled-button'

export const Route = createFileRoute('/pay-loan/')({
  component: RouteComponent,
})

function RouteComponent() {
    return <div className='page'>
        <Header
            img='./../../../../favicon.png'
            text='TOKUEN'
            textColor='black'
        />

        <section className='flex flex-1 flex-col w-full h-full pb-[5%] pt-[2%] px-[20%]'>
            {/**Pay your bill */}
            <p className='inline font-semibold text-4xl mb-5'>Pay your bill</p>

            {/**Card */}
            <div className='flex flex-1 flex-col w-full h-full mb-10 border-2 border-black rounded-xl'>

                {/**Header text */}
                <div className='flex flex-1 flex-col w-full h-fit p-4 border-b-2'>
                    <p className='text-xl pl-5 font-semibold'>Bill statement</p>
                </div>

                {/**Bill statement */}
                <div className='flex flex-auto w-full h-full px-[3%] py-[2%]'>

                    {/**Labels - left */}
                    <div className='flex flex-1 flex-col w-[50%] h-full gap-2'>
                        <p className='text-xl'>Total amount (Principal + interest)</p>
                        <p className='text-xl'>Platform fee</p>
                        <p className='text-xl'>Adjustments</p>
                        <div className='flex flex-1 flex-col pl-[5%] gap-3 border-t-2 border-stone-300 py-2'>
                            <p>Late payment fee</p>
                            <p>Adjusted interest</p>
                            <p>Others</p>
                        </div>
                    </div>

                    {/**Numbers - right */}
                    <div className='flex flex-1 flex-col w-[50%] h-full text-xl gap-2'>
                        <p>₱30,000.00</p>
                        <p>₱295.00</p>
                        <p>₱100.00</p>
                        <div className='flex flex-1 flex-col h-full gap-3 text-[1rem] border-t-2 border-stone-300 py-2'>
                            <p>₱0.00</p>
                            <p>₱200.00</p>
                            <p>₱0.00</p>
                        </div>
                    </div>
                    
                </div>

                <span className='flex flex-auto h-full'/>

                <p className='py-3 px-5'>Due date falls on the 15th day of each month.</p>

                {/**Bottom statement final */}
                <div className='flex flex-1 px-[3%] py-[2%] text-xl bg-black text-white font-semibold'>
                    <p className='flex flex-1 w-[50%]'>Monthly due</p>
                    <p className='flex flex-1 w-[50%]'>Monthly due</p>
                </div>
            </div>

            <span className='flex flex-auto h-full'/>

            <FilledButton
                url='/pay-loan/pay-through'
                buttonText='Proceed'
                textSize='text-[1rem]'
                effects='black-button-outlined'
            />
        </section>
    </div>
}
