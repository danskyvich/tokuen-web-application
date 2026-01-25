import Notifications from "./notification-icon"
import AvatarIcon from "./user-avatar"

export default function DashboardHeader() {
    return <header className='flex flex-[0 1 auto] w-full h-[5dvh] py-5 pr-10 m-0 gap-4'>
        <div className='flex flex-2 h-fit items-center'/>
        <div className='flex flex-[0 1 auto] flex-row w-fit h-fit gap-4'>
            <Notifications/>
            <AvatarIcon
                img={''}
                width={'var(--avatar-size-small)'}
                height={'var(--avatar-size-small)'}
            />
        </div>
    </header>
}