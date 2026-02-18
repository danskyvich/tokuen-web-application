import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import SimpleWalletContainer from '../../components/simple-wallet-container'
import { TextField } from '@mui/material'
import { PurpleContainer } from '../../components/purple-container'

export const Route = createFileRoute('/bills-payment/payment-main')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
        <Header
            img='./../../../../favicon.png'
            text='TOKUEN'
            textColor=''
        />

        <section className='flex flex-1 flex-col w-full h-full px-[20%] py-5 gap-5'>
            <p className='flex flex-1 text-4xl font-semibold'>Transfer money</p>
            <SimpleWalletContainer
                bgText='MAIN WALLET'
                header='Main Wallet'
                subtext='Current balance'
                amount='₱10,000.00'
            />

            <p className='flex-1 text-2xl font-semibold'>Input amount</p>
            <TextField
                placeholder='Input amount here...'
            />

            <p className='flex flex-1 text-(--subheader) italic'>No fee on interbank transfers</p>

            <div className='flex flex-1 w-full h-fit gap-5'>
                <PurpleContainer>
                    <>
                        <div className='flex flex-1 flex-col w-full h-fit'>
                            <p className='flex-1 text-xs'>Deposit from</p>
                            <p className='flex-1 text-2xl'>Lender wallet</p>
                            <span className='h-23'/>
                            <p>Wallet balance</p>
                            <p className='flex-1 text-4xl font-semibold'>₱10,000.00</p>
                        </div>
                    </>
                </PurpleContainer>
                <PurpleContainer>
                    <>
                        <div className='flex flex-1 flex-col w-full h-fit'>
                            <p className='flex-1 text-xs'>Deposit from</p>
                            <p className='flex-1 text-2xl'>Other banks/e-wallets</p>
                            <span className='h-23'/>
                            <p>Wallet balance</p>
                            <p className='flex-1 text-4xl font-semibold'>₱10,000.00</p>
    
                        </div>
                    </>
                </PurpleContainer>
            </div>

            <span className='flex-auto h-full'/>
        </section>
    </div>
}
