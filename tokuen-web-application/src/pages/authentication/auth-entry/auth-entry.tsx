import GenHeader from "../../../components/header-tokuen-logo.tsx"
import FilledButton from "../../../components/filled-button.tsx"

import { TextField }  from '@mui/material'
import Stack from '@mui/material/Stack'
import './auth-entry.css'
import OutlinedButton from "../../../components/outlined-button.tsx"

export default function AuthEntry() {
    return <>
        <div className='flex w-screen h-screen m-0 p-0 justify-center items-center'>

            {/** Card */}
            <div className='flex flex-1 m-[20%] h-4/5 border-2 border-stone-300 rounded-2xl shadow-xl'>

                <div className='flex flex-1 w-1/2 h-auto'>
                    <img src='resources/auth-slide-1.png' alt='front-slide-1' className='object-cover rounded-l-lg'/>
                </div>

                <div className='flex flex-1 flex-col p-10 w-1/2 h-full'>
                    
                    {/**TOKUEN + logo*/}
                    <div className='flex flex-[0 1 auto] w-full h-fit pt-20 pb-6.5 justify-start items-end'>
                        <GenHeader/>
                    </div>

                    {/**Header and Subheader */}
                    <div className='flex flex-0 flex-col w-full h-fit justify-center'>
                        <h1 className='flex-1 text-[2rem] font-semibold'>Log in to your account.</h1>
                        <p className='flex-1 text-[1rem] font-light text-(--subheader) '>Enter your email and password.</p>
                    </div>

                    {/* Input fields */}
                    <div className='flex flex-0 flex-col w-full h-fit pt-8'>
                        <Stack spacing={2}>
                            <TextField 
                                type='text'
                                id="filled-basic" 
                                label="Enter your email" 
                                variant="outlined" 
                                className='w-full'
                                aria-invalid='false'
                            />
                
                            <TextField 
                                type='password'
                                id="filled-basic" 
                                label="Enter your password" 
                                variant="outlined" 
                                className='w-full ml-4'
                                aria-invalid='false'
                            />
                            <a href="#" className=' font-semibold text-x self-end cursor-pointer hover:underline'>Forgot Password?</a>
                        </Stack>
                    </div>

                    <div className='flex flex-0 flex-col h-fit mt-4 mb-2'>
                        <FilledButton
                            buttonText={'Log in'}
                        />
                        <hr className='flex-0 w-full h-0.5 border-0 relative z-1 bg-(--subheader)'/>
                        <p className='flex-0 self-center text-(--subheader) m-2'>or</p>
                        <OutlinedButton
                            buttonText={'Register'}
                        />
                    </div>

                    <div className='flex-[0 1 auto] flex-row w-full h-fit text-xs'>
                        <p className='justify-self-center'><a href="#" className='cursor-pointer hover:underline'>Privacy Policy</a> • <a href="#" className='cursor-pointer hover:underline'>Terms and Conditions</a></p>
                    </div>
                </div>
            </div>
        </div>
    </>

}