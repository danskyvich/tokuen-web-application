import { Link } from '@tanstack/react-router'

interface Props {
    dateTime : string,
    content : string,
    url : string
}

const NotificationItem = ({dateTime, content, url} : Props) => {
    return <Link to={url} className='flex flex-1 flex-col w-full h-fit p-5 rounded-2xl bg-stone-200 gap-4 hover:shadow-xl'>
        <p className='flex flex-1 text-(--subheader) text-xs'>{dateTime}</p>
        <p className='flex flex-1 px-5'>{content}</p>
    </Link>
}

export default NotificationItem;