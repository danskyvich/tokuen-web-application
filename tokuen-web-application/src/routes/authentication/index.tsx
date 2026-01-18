import GenHeader from "../../components/header-tokuen-logo.tsx"
import FilledButton from "../../components/filled-button.tsx"
import Stack from '@mui/material/Stack'
import OutlinedButton from "../../components/outlined-button.tsx"

import { TextField }  from '@mui/material'
import './auth-entry.css'
import { Link } from "@tanstack/react-router"

export default function AuthEntry() {
    return <>
        <div className='flex w-screen h-screen m-0 p-0 justify-center items-center'>

            {/** Card */}
            <div className='flex flex-1 m-[20%] h-4/5 border-2 border-stone-300 rounded-2xl shadow-xl'>

                {/** Left - image */}
                <div className='flex flex-1 w-1/2 h-auto'>
                    <img src='resources/auth-slide-1.png' alt='front-slide-1' className='object-cover rounded-l-lg'/>
                </div>

                {/** Right - form */}
                <div className='flex flex-1 flex-col pr-18 pl-16 w-1/2 h-full'>
                    
                    {/**TOKUEN + logo*/}
                    <div className='flex flex-1 w-full h-fit justify-start items-end mb-4 mt-8'>
                        <GenHeader
                            img={'./favicon.png'}
                            text={'TOKUEN'}
                            textColor={'black'}
                        />
                    </div>

                    {/**Header and Subheader */}
                    <div className='flex flex-0 flex-col w-full h-fit justify-end'>
                        <p className='flex-0 text-[2rem] font-semibold'>Log in to your account.</p>
                        <p className='flex-0 text-[1rem] font-light text-(--subheader) h-fit '>Enter your email and password.</p>
                    </div>

                    {/* Input fields */}
                    <div className='flex flex-1 flex-col w-full h-fit pt-8'>
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
                            <a href="/authentication/forgot-password/forgot-password-0" className='flex-1 font-semibold text-x self-end cursor-pointer hover:underline'>Forgot Password?</a>
                        </Stack>
                    </div>

                    <div className='flex flex-1 flex-col h-fit mt-4 mb-2'>
                        <FilledButton
                            buttonText={'Log in'}
                        />
                        <p className='relative flex-1 self-center text-(--subheader) m-2'>or</p>
                        <OutlinedButton
                            buttonText={'Register'}
                        />
                    </div>

                    <div className='flex-1 flex-row w-full h-fit text-xs'>
                        <p className='justify-self-center'>
                            <Link to="/tokuen-info/privacy-policy" className='cursor-pointer hover:underline'>
                                Privacy Policy
                            </Link>
                            • 
                             <Link to="/tokuen-info/terms-and-conditions" className='cursor-pointer hover:underline'>
                                Terms and Conditions
                             </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
}