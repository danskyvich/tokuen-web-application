import { createFileRoute, useRouter } from '@tanstack/react-router'
import Header from '../../components/header'
import { IconButton, TextField } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import FilledButton from '../../components/filled-button'


export const Route = createFileRoute('/payment-methods/add-card')({
  component: RouteComponent,
})

function RouteComponent() {

    const router = useRouter();
    const handleGoBack = () => {
        router.history.back();
    }
  return <div className='page'>
    <Header
        img='./../../../favicon.png'
        text='TOKUEN'
        textColor='black'
    />
    <div className='flex flex-[0 1 auto] gap-5 h-fit w-full pl-[10%] pb-4 items-center'>
            <IconButton
                onClick={handleGoBack}
            >
                <KeyboardArrowLeftIcon sx={{ fontSize: '3rem'}}/>
            </IconButton>
            <p className='text-4xl font-semibold'>Add a debit/credit card</p>
        </div>

    <div className='flex flex-1 w-full h-full px-[10%] py-5 gap-[5%]'>

        <section className='flex flex-1 flex-col w-[40%] h-full'>
            
            {/** Card visuals */}
            <div className='flex flex-1 flex-col h-[90&] w-[90%] p-10 text-white bg-blue-800 rounded-3xl self-end'>
                <div className='flex flex-0 w-full h-fit'>
                    <img src='./../../../resources/mastercard.png' alt='mastercard-logo' className='flex 1 w-12 h-auto'/>
                    <span className='flex flex-5'/>
                    <p className='flex flex-1 text-xl'>01/21</p>
                </div>

                <div className='flex flex-1 pt-7 pb-3'>
                    <p className='text-2xl'>●●●●&nbsp;&nbsp;&nbsp;●●●●&nbsp;&nbsp;&nbsp;●●●●&nbsp;&nbsp;&nbsp;3701</p>
                </div>

                <p>ACCOUNT HOLDER NAME</p>

                <span className='flex flex-2 h-[5%]'/>
                <p className='flex flex-1 w-full h-fit justify-self-end-safe'>___ Card</p>
            </div>
            <p className='text-center py-3 text-(--subheader) italic'>Sample Card</p>
            <span className='flex flex-1'/>
        </section>

        {/**Forms */}
        <section className='flex flex-1 flex-col w-[40%] h-full gap-10'>
            <form className='w-full h-full'>
                <div className='flex flex-1 flex-col w-full h-fit'>
                    <p className='text-xl mb-2 font-semibold'>Cardholder name&nbsp;<span className='text-red-600'>*</span></p>
                    <TextField
                        variant='outlined'
                        className='w-full'
                        type='text'
                    />
                </div>

                <div className='flex flex-1 w-full h-fit gap-5 my-5'>
                    <div className='flex flex-1 flex-col w-[30%]'>
                        <p className='text-xl mb-2 font-semibold'>Security code&nbsp;<span className='text-red-600'>*</span></p>
                        <TextField
                            variant='outlined'
                            className='w-full'
                            type='text'
                            placeholder='MM/YY'
                        />
                    </div>
                    <div className='flex flex-1 flex-col w-[70%]'>
                        <p className='text-xl mb-2 font-semibold'>Card number&nbsp;<span className='text-red-600'>*</span></p>
                        <TextField
                            variant='outlined'
                            className='w-full'
                            type='text'
                        />
                    </div>
                </div>

                <div className='flex flex-1 flex-col my-5'>
                    <p className='text-xl mb-2 font-semibold'>Full address&nbsp;<span className='text-red-600'>*</span></p>
                        <TextField
                            variant='outlined'
                            className='w-full'
                            type='text'
                        />
                </div>

                <div className='flex flex-1 flex-col w-full h-fit my-10'>
                    <FilledButton
                        buttonText='Submit information'
                        url='/payment-methods/card-added'
                        effects='purple-button-filled'
                        textSize='text-[1rem]'
                    />
                </div>
            </form>
        </section>
    </div>
</div>
}
