import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'

export const Route = createFileRoute('/help-center/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
        img='./../../../../favicon.png'
        text='TOKUEN'
        textColor=''
    />

    <section className='flex flex-1 flex-col w-full h-full px-[20%]'>
    </section>
    </div>
}
