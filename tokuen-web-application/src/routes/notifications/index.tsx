import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'
import NotificationItem from '../../components/notification-item'

export const Route = createFileRoute('/notifications/')({
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

        {/**Content */}
        <div className='flex flex-1 flex-col w-full h-full'>
          <p className='flex flex-1 font-semibold text-4xl'>Notifications</p>
          <hr className='w-full h-0.5 my-2 border-none bg-stone-300'/>

          {/**Urgent, url */}
          <div className='flex flex-1 flex-col mt-5 w-full h-fit'>
            <p className='flex flex-1 text-2xl font-semibold mt-10s mb-5'>Urgent</p>
            <NotificationItem
              dateTime='Nov 12, 2025 at 11:14:00 AM'
              content='Your next loan payment of ₱7,100.00 is due this Friday, Dec 15. Either pay early or within the due day to enjoy TOKUEN benefits.'
              url='/notifications/'
            />
          </div>

          <div className='flex flex-1 flex-col my-15 w-full h-fit'>
            <p className='flex flex-1 text-2xl font-semibold mt-10s mb-5'>This week</p>
            <NotificationItem
              dateTime='Nov 12, 2025 at 11:14:00 AM'
              content='Enter the content here'
              url='/notifications/'
            />
          </div>
  
          <span className='flex-auto h-full'/>
        </div>
      </section>
    </div>
}
