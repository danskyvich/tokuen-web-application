import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'

export const Route = createFileRoute('/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
      <Header
        img='./../../../../favicon.png'
        text='TOKUEN'
        textColor=''
      />

      <section className='flex flex-col flex-1 w-full h-full px-[20%]'>
        <p className='text-4xl font-semibold mb-15'>Settings</p>
        <p className='text-4xl font-semibold mb-5'>Preferences</p>
        <p className='text-3xl ml-5 mb-5 cursor-pointer hover:font-semibold transition-all duration-150'>Theme: Light</p>
        <p className='text-3xl ml-5 mb-5 cursor-pointer hover:font-semibold transition-all duration-150'>Language: English</p>
        <p className='text-3xl ml-5 mb-15 cursor-pointer hover:font-semibold transition-all duration-150'>Notifications: Enabled</p>
        <p className='text-4xl font-semibold mb-5'>Privacy</p>
        <p className='text-3xl ml-5 mb-5 cursor-pointer hover:font-semibold transition-all duration-150'>Location Access: Off</p>
        <p className='text-3xl ml-5 mb-5 cursor-pointer hover:font-semibold transition-all duration-150'>Data Sharing: Disabled</p>
      </section>

    </div>
}
