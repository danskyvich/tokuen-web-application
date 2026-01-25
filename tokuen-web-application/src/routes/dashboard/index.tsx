import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

{/*Material Icons components*/}
import GenHeader from '../../components/header-tokuen-logo'
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'; 
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QrCodeIcon from '@mui/icons-material/QrCode';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CalculateIcon from '@mui/icons-material/Calculate';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

{/** text header with date + time */}
import SunnyIcon from '@mui/icons-material/Sunny';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

{/** Black container components */}
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

{/**Local components */}
import DashboardHeader from '../../components/dashboard-header';
import GeneralContainerBlack from '../../components/black-container';
import Footer from '../../components/footer';
import TransactionList from '../../components/transaction-list';
import DashboardButton from '../../components/dashboard-button';

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  {/**Live Clock */}
  const[currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const tick = () => {
      setCurrentTime(new Date())
    };

    const timerId = setInterval(tick, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  {/** Dynamic text here */}
  const lastLoginDate='';
  const lastLoginTime='';
  const lastFailedLoginDate='';
  const lastFailedLoginTime='';
  const timeZone='';

  {/**Get current date * time w/ format */}
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();


  return <div className='page flex-row'>
    
    {/** Left sidebar */}
    <section className='flex flex-[1 1 auto] flex-col w-[17.5dvw] h-full border-r-2 border-black'>

      {/**Logo header */}
      <div className='w-full h-[15dvh] px-[3dvw] pt-[5dvh]'>
        <GenHeader
          img={'./../../../favicon.png'}
          text='TOKUEN'
          textColor='black'
          width='3rem'
        />
      </div>

      {/**Sidebar buttons */}
      <div className='flex flex-1 flex-col w-full h-fit px-5 items-center justify-start gap-5'>
        <DashboardButton
          text='Dashboard'
          url=''
          icon={<HomeFilledIcon sx={{fontSize: 'var(--icon-size-normal)'}}/>}
          textSize='1rem'
        />
        <DashboardButton
          text='Borrow'
          url=''
          icon={<AccountBalanceWalletIcon sx={{fontSize: 'var(--icon-size-normal)'}}/>}
          textSize='1rem'
        />
        <DashboardButton
          text='Lend'
          url=''
          icon={<AttachMoneyIcon sx={{fontSize: 'var(--icon-size-normal)'}}/>}
          textSize='1rem'
        />
        <DashboardButton
          text='Scan'
          url=''
          icon={<QrCodeIcon sx={{fontSize: 'var(--icon-size-normal)'}}/>}
          textSize='1rem'
        />
      </div>

      <div className='flex flex-2 w-full h-fit'/>

      {/**Bottom buttons */}
      <div className='flex flex-1 flex-col w-full h-fit justify-center text-xl'>
        <BottomButtons
        text='Refer and Earn'
        url='/refer-and-earn/'
        icon={<CardGiftcardIcon sx={{ fontSize: 'var(--icon-size-normal)'}}/>}
        />
        <BottomButtons
        text='Loan Calculator'
        url=''
        icon={<CalculateIcon sx={{ fontSize: 'var(--icon-size-normal)'}}/>}
        />
        <BottomButtons
        text='Settings'
        url=''
        icon={<SettingsIcon sx={{ fontSize: 'var(--icon-size-normal)'}}/>}
        />
        <BottomButtons
        text='Help Calculator'
        url=''
        icon={<HelpIcon sx={{ fontSize: 'var(--icon-size-normal)'}}/>}
        />
      </div>

      {/**Bottom text */}
      <div className='flex flex-1 flex-col w-full h-fit px-5 py-5'>
        <p className='text-stone-600'>
          You last login was at: <span className='text-stone-600 font-semibold'>{lastLoginDate}</span> at <span className='text-stone-600 font-semibold'>{lastLoginTime}</span> {timeZone}
        </p>
        <p className='text-stone-600'>
          Your last failed login was at: <span className='text-stone-600 font-semibold'>{lastFailedLoginDate}</span> at <span className='text-stone-600 font-semibold'>{lastFailedLoginTime}</span> {timeZone}
        </p>
      </div>
    </section>

    {/** right sidebar */}
    <section className='flex flex-[1 1 auto] flex-col w-[82.5dvw] h-full overflow-y-auto'>
      <DashboardHeader/>
      <div className='flex flex-1 flex-col w-full h-[90dvh]'>

        <div className='flex flex-[0 1 auto] w-full h-fit px-4 pt-12 gap-5'>
          {/**Icon (depends on time of day) */}
          <SunnyIcon sx={{ fontSize: '4rem'}}/>
          
          <div className='flex flex-1 flex-col w-[90%] h-fit'>
            <p className='text-black text-4xl font-semibold'>Good morning, Juan!</p>
            <div className='flex flex-1 flex-row w-full h-fit'>
              <p className='text-(--subheader) text-xl'>Today is {formattedDate.toString()}&nbsp;|&nbsp;{currentTime.toLocaleTimeString()}</p>
            </div>
          </div>
        </div>

        <hr className='flex flex-[0 1 auto] my-5 w-full border-none bg-stone-200 h-[2px]'/>

        {/** Black containers row - change values if needed*/}
        <div className='flex flex-[0 1 auto] flex-row justify-around h-fit w-full px-5 py-0 gap-[10%]'>
          <GeneralContainerBlack
            url={''}
            text='Total approved'
            boxIcon={<CheckCircleIcon sx={{ fontSize: '5rem'}}/>}
            redirectIcon={<KeyboardArrowRightIcon sx={{ fontSize: '3rem', color: 'white'}}/>}
            result={'01'}
          />
          <GeneralContainerBlack
            url={''}
            text='Loans under review'
            boxIcon={<RateReviewIcon sx={{ fontSize: '5rem'}}/>}
            redirectIcon={''}
            result={'02'}
          />
          <GeneralContainerBlack
            url={''}
            text='Loans in progress'
            boxIcon={<MonetizationOnIcon sx={{ fontSize: '5rem'}}/>}
            redirectIcon={''}
            result={'01'}
          />
        </div>
      </div>

      {/** Transactions and wallet */}
      <TransactionList/>
      <Footer
        icon={'./../../../favicon.png'}
      />
    </section>
  </div>
}

interface Props {
  text : string,
  url : string,
  icon : React.ReactNode
}

const BottomButtons = ({text, icon, url} : Props) => {
  return <div className='cursor-pointer flex flex-0 w-full h-fit px-5 
    py-3 hover:bg-stone-200 gap-4 active:bg-stone-300 text-[1.1rem] items-center'>
    {icon}
    <Link to={url}
      className=''
    >{text}</Link>
  </div>
}
