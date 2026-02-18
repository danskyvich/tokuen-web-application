import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'

export const Route = createFileRoute('/qr-scanner/scan')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='page'>
    <Header
        img='./../../../../favicon.png'
        text='TOKUEN'
        textColor=''
    />

    <section className='flex flex-1 flex-col w-full h-full bg-black items-center justify-center px-[20%] '>
        <div className='flex-2 bg-transparent border-2 border-white w-[70%] mt-[20%] mb-[2%] rounded-xl'/>
        <p className='flex-0 text-white text-xs'>Scan the QR Code</p>
        <span className='flex-1 h-full'/>
    </section>
  </div>
}
