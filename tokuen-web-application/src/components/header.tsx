
{/** Local components */}
import { IconButton } from '@mui/material'
import GenHeader from './header-tokuen-logo'
import Notifications from './notification-icon'
import AvatarIcon from './user-avatar'

interface Props {
    img: string,
    text: string,
    textColor: string
}

const Header = ({img, text, textColor}: Props) => {
    return <div className='flex flex-[0 1 auto] w-full h-[10dvh] flex-row 
        py-5 px-16 m-0 items-center justify-center'>
        <GenHeader
            img={img}
            text={text}
            textColor={textColor}
            width={'3rem'}
        />
        <span className='flex flex-10'></span>
        <div className='flex flex-1 gap-5'>
            <IconButton href='/notifications/'>
                <Notifications/>
            </IconButton>
           
            <AvatarIcon
                img={''}
                width={'var(--avatar-size-small)'}
                height={'var(--avatar-size-small)'}
            />
        </div>
    </div>
}
export default Header;