interface Props {
    img: string,
    text: string,
    textColor: string,
}

const GenHeader = ({img, text, textColor} : Props) => {
    return <div className='flex flex-[0 1 auto] flex-row w-fit h-fit items-center'>
        <img src={img} alt='icon' className='flex-[0 1 auto] w-16 h-auto'/>
        <p className='flex-[0 1 auto] w-4 h-auto p-2 font-extrabold text-3xl' style={{ color: textColor}}>{text}</p>
    </div>
}

export default GenHeader;