import NotificationsIcon from '@mui/icons-material/Notifications'
import { IconButton } from '@mui/material'

export default function Notifications() {
    return <>
        <IconButton
            href='/notifications/'
            children={<NotificationsIcon sx={{ fontSize: '2rem'}}/>}
        />
    </>
}