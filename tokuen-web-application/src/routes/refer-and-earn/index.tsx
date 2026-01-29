import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'

{/**Material UI components */}
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Diversity3Icon from '@mui/icons-material/Diversity3';

export const Route = createFileRoute('/refer-and-earn/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
      text='TOKUEN'
      img={'./../../../favicon.png'}
      textColor='black'
    />

    {/**Content */}
    <section className='flex flex-1 flex-col w-full h-full px-[20%] py-5 items-center justify-center'>

      {/**Card */}
      <div className='flex flex-1 flex-col px-10 py-5 w-[80%] h-fit items-center justify-center text-center rounded-xl bg-stone-200 gap-5'>
        <div className='flex flex-2 items-center justify-center'>
          <Diversity3Icon sx={{fontSize: '15rem'}}/></div>
        <p className='flex flex-1 text-3xl font-semibold'>Refer to your friend and get a cash prize of ₱50</p>
        <p className='flex flex-1 text-xl w-[70%] h-fit'>Share this code with a friend and after they install, both of you will receive a ₱50 cash reward! Cash rewards will be credited directly into your account.</p>

        {/** Code */}
        <div className='flex flex-1 w-full h-fit rounded-3xl gap-5 bg-linear-90 from-indigo-800 to-fuchsia-900 text-white items-center justify-center p-5'>
          <p className='text-6xl font-semibold'>BANFF</p>
          <IconButton><ContentCopyIcon sx={{fontSize: '4rem', color: 'white'}}/></IconButton>
        </div>

        {/**Instructions */}
        <div className='flex flex-1 p-5 w-full h-fit bg-linear-90 from-fuchsia-700 to-fuchsia-900 rounded-xl text-white'>
          <div className='flex flex-1 flex-col items-center justify-center'>
            <ContentCopyIcon sx={{fontSize: '2rem'}}/>
            <p>Copy link</p>
          </div>
          <div className='flex flex-1 flex-col items-center justify-center'>
            <CheckCircleOutlineIcon sx={{fontSize: '2rem'}}/>
            <p>Friend registered successfully</p>
          </div>
          <div className='flex flex-1 flex-col items-center justify-center'>
            <AttachMoneyIcon sx={{fontSize: '2rem'}}/>
            <p>Earn cash reward</p>
          </div>
        </div>

        <span className='flex-auto h-full'/>
      </div>

      <span className='flex-auto h-full'/>
    </section>
  </div>
}
