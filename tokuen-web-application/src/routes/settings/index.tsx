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
        <p className='flex-1 text-4xl font-semibold'>Settings</p>
      </section>
    </div>
}
