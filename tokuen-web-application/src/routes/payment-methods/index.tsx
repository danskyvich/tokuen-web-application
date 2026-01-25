import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import Header from '../../components/header'
import PaymentMethodItem from '../../components/payment-method-item'

{/**Material UI imports */}
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const Route = createFileRoute('/payment-methods/')({
  component: RouteComponent,
})

function RouteComponent() {

    const router = useRouter();
    const handleGoBack = () => {
        router.history.back()
    }
  return <div className='page'>
        <Header
            img='./../../../favicon.png'
            text='TOKUEN'
            textColor='black'
        />
        <div className='flex flex-[0 1 auto] gap-5 h-fit w-full px-[20%] pb-4 items-center'>
            <IconButton
                onClick={handleGoBack}
            >
                <KeyboardArrowLeftIcon sx={{ fontSize: '3rem'}}/>
            </IconButton>
            <p className='text-4xl font-semibold'>Payment Methods</p>
        </div>
        <div className='flex flex-1 flex-row w-full h-full px-[20%] pb-5 gap-[5%]'>
            {/**These cards were placeholders. Dynamic content is needed */}
            <div className='flex flex-1 flex-col w-[50%] h-full gap-5'>
                <PaymentMethodItem
                    text='BPI Debit Mastercard'
                    alt='Mastercard-logo'
                    img='resources/mastercard.png'
                    number='5363 0000 0000 0000'
                />
                <PaymentMethodItem
                    text='Gcash XChange'
                    alt='Mastercard-logo'
                    img='resources/gcash.png'
                    number='5363 0000 0000 0000'
                />
                <PaymentMethodItem
                    text='Bank Visacard'
                    alt='Mastercard-logo'
                    img='resources/mastercard.png'
                    number='5363 0000 0000 0000'
                />
            </div>
    
            <div className='flex flex-1 flex-col w-[50%] h-full '>
                {/** Container */}
                <div className='w-full h-full border-2 border-black rounded-4xl'>
                    <h3 className='py-5 px-[5%]'>Add a payment method</h3>
                    <hr className='border-none bg-black w-full h-0.5'/>
                    <Link to='/payment-methods/add-card' className='flex flex-0 w-full h-fit items-center gap-5 p-3 cursor-pointer hover:bg-stone-200'>
                        <AddIcon sx={{ fontSize: '3rem'}}/>
                        <p className='text-xl font-medium'>Add a debit or credit card</p>
                        <div className='flex flex-2'/>
                        <img src='./../../../resources/mastercard.png' alt='' className='w-12 h-auto'/>
                        <img src='./../../../resources/visa.png' alt='' className='w-12 h-auto'/>
                    </Link>
                    <Link to='/' className='flex flex-0 w-full h-fit items-center gap-5 p-3 cursor-pointer hover:bg-stone-200'>
                        <AddIcon sx={{ fontSize: '3rem'}}/>
                        <p className='text-xl font-medium'>Add an e-wallet or digital bank</p>
                        <div className='flex flex-2'/>
                        <img src='./../../../resources/gcash.png' alt='' className='w-12 h-auto'/>
                        <img src='./../../../resources/gpay.png' alt='' className='w-12 h-auto'/>
                        <img src='./../../../resources/maya.svg' alt='' className='w-12 h-auto'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
}
