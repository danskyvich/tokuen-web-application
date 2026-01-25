import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '../../components/header'
import FilledButton from '../../components/filled-button'
import AddIcon from '@mui/icons-material/Add';

export const Route = createFileRoute('/pay-loan/pay-through')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
    img='./../../../../favicon.png'
    text='TOKUEN'
    textColor='black'
    />  

    <div className='flex flex-1 flex-col w-full h-full px-[20%] py-10 gap-5'>

        {/**Header */}
        <p className='flex flex-1 text-4xl font-semibold w-full h-fit'>Pay through</p>

        {/**Radiobuttons */}
        <div className='flex flex-1 flex-col w-full h-fit gap-5'>
          <RadioButtonCard
            text='BPI Debit Mastercard'
            group='payment-methods'
            icon='./../../../resources/mastercard.png'
            labelLink='first'
            alt='mastercard-logo'
            num='5363  ••••  ••••  ••••'
          />
          <RadioButtonCard
            text='Gcash XChange'
            group='payment-methods'
            icon='./../../../resources/gcash.png'
            labelLink='first'
            alt='mastercard-logo'
            num='(+63)912 345 6789'
          />
          <RadioButtonCard
            text='Maribank Debitcard'
            group='payment-methods'
            icon='./../../../resources/visa.png'
            labelLink='first'
            alt='mastercard-logo'
            num='5363  ••••  ••••  ••••'
          />
        </div>

        {/**Manage saved payment methods */}
        <Link to='/payment-methods' 
            className='flex flex-1 w-full h-fit p-3 border-2 rounded-xl text-xl items-center 
            justify-center gap-5 hover:bg-stone-300 active:bg-black active:text-white'>
          <AddIcon sx={{fontSize: '3rem'}}/>
          <p>Manage your saved payment methods</p>
        </Link>

        <span className='flex-auto h-full'/>

        <FilledButton
            buttonText='Continue'
            effects='black-button-outlined'
            textSize=''
            url='/pay-loan/review-details'
        />
    </div>
  </div>
}

interface Props {
  text : string,
  icon : string,
  group : string,
  labelLink : string,
  alt : string,
  num : string
}

const RadioButtonCard = ({text, icon, group, labelLink, alt, num} : Props) => {
  return <div className='flex flex-1 w-full h-fit text-xl items-center border-2 rounded-xl p-6 gap-4'>
    <input className='w-5 h-5 cursor-pointer' type='radio' name={group} id={labelLink}/>
    <img className='w-15 h-auto' src={icon} alt={alt}/>
    <label htmlFor={labelLink}>{text}</label>
    <span className='flex-auto h-full'/>
    <p>{num}</p>
  </div>
}