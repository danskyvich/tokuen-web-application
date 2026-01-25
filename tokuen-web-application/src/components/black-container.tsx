{/** Black container component*/}

import { IconButton } from "@mui/material";
import type React from "react";

interface Props {
    text: string,
    url : string,
    boxIcon : React.ReactNode,
    redirectIcon : React.ReactNode,
    result: string,
}


const GeneralContainerBlack = ({text, url, boxIcon, redirectIcon, result} : Props) => {
    return <div className='flex flex-1 bg-black border-2 border-black w-fit h-[22.5dvh]
         text-white rounded-2xl'>
        <div className='flex flex-1 flex-col w-fit'>
            <div className='flex flex-1 w-full h-fit gap-3 px-5 py-5 text-start'>
                <p className='text-xl self-center'>{text}</p>
                <IconButton
                    children={redirectIcon}
                    href={url}
                />
            </div>
            <div className='flex flex-2 h-[10dvh] w-full'/>
            <p className='flex flex-1 text-5xl px-5 py-5 font-semibold'>{result}</p>
        </div>
        <div className='px-5 py-3'>
            {boxIcon}
        </div>
    </div>
}

export default GeneralContainerBlack;