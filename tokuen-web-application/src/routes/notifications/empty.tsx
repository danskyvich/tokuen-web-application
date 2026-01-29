import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import CancelIcon from '@mui/icons-material/Cancel';

export const Route = createFileRoute('/notifications/empty')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
        img='./../../../favicon.png'
        text='TOKUEN'
        textColor='black'
        />

        <section className='flex flex-1 flex-col w-full h-full items-center justify-center px-[20%] py-5'>
          <div className='flex flex-1 flex-col w-full h-full'>
            <p className='flex flex-1 font-semibold text-4xl'>Notifications</p>
            <hr className='w-full h-0.5 my-2 border-none bg-stone-300'/>
          </div>

          <div className='flex flex-1 flex-col w-full h-full items-center justify-center'>
            <CancelIcon sx={{fontSize: '5rem'}}/>
            <p className='flex flex-1 font-semibold text-xl'>You have no notifications</p>
          </div>

          <span className='flex-auto h-full'/>
      </section>
    </div>
}
