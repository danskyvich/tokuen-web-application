import { createFileRoute } from '@tanstack/react-router'
import Header from '../../components/header'

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
    </div>
}
