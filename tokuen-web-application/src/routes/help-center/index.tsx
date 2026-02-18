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
      <p className='text-4xl font-semibold mb-10'>Help</p>
      <p
        className="text-3xl mb-5 cursor-pointer hover:font-semibold transition-all duration-150"
        onClick={() => window.location.href = "/tokuen-info/privacy-policy"}
      >
        Privacy Policy
      </p>
      <p
        className="text-3xl mb-20 cursor-pointer hover:font-semibold transition-all duration-150"
        onClick={() => window.location.href = "/tokuen-info/terms-and-conditions"}
      >
        Terms and Conditions
      </p>
      <p className='text-2xl font-semibold mb-5'>About</p>
        <p className='text-2xl ml-5 mb-2.5'>Version: 0.0.1</p>
        <p className='text-2xl ml-5 mb-2.5'>@ TOKN</p>
    </section>
    </div>
}