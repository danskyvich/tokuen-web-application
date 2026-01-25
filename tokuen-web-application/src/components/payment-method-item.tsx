interface Props {
    img: string,
    alt : string,
    text : string,
    number : string
}
const PaymentMethodItem = ({img, alt, text, number} : Props) => {
    return <div className='flex flex-[0 1 auto] w-full h-fit border-2 border-black px-7 py-4 rounded-3xl shadow-xl gap-10'>
        <img src={img} alt={alt} className='w-25 h-auto object-contain'/>
        <div className='flex flex-1 flex-col w-full h-full'>
            <p className='text-xl font-semibold'>{text}</p>
            <p className='text-x'>{number}</p>
        </div>
    </div>
}

export default PaymentMethodItem;