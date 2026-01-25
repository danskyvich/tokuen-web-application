import { Link } from '@tanstack/react-router'

interface Props {
    text: string,
    url: string,
    icon: React.ReactNode,
    textSize : string,
}

const DashboardButton = ({text, url, icon, textSize} : Props) => {
    return<>
        <div className='flex flex-0 flex-row border-2 border-black rounded-3xl w-full h-fit
            py-3 pl-10 gap-4 cursor-pointer hover:bg-stone-300
            active:border-black active:text-white font-semibold active:bg-black'
            style={{fontSize: textSize}}
            >
            {icon}
            <Link to={url}
                className='flex flex-1 flex-row items-center w-full h-full'
            ><p>{text}</p></Link>
        </div>
    </>
}

export default DashboardButton;