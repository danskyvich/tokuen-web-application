{/**Material UI components */}
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { IconButton } from "@mui/material";




interface Props {
    icon : string;
}

const Footer = ({icon} : Props) => {
    return <div className='flex flex-[0 1 auto] flex-col w-[40%] h-fit self-center items-center justify-end gap-5 py-3'>
        <img src={icon} alt='TOKUEN-logo' className='w-13.5 h-auto'/>
        <p className='text-(--subheader) text-center'>TOKUEN and Artiphix is regulated by the Bangko Sentral ng Pilipinas -- <a href='https://www.bsp.gov.ph/SitePages/Default.aspx' target='_blank' rel='noopener noreferrer' className='text-black cursor-pointer hover:underline'>bsp.gov.ph</a>.
            &nbsp;For any concerns, check out our <a href='' className='text-black hover:underline'>Help Center</a> or our social media pages for any service advisories. 
        </p>
        <div className='flex flex-[0 1 auto] flex-row w-full h-fit items-center justify-center gap-3 m-0 p-0'>
            <IconButton
                children={<FacebookIcon sx={{fontSize:'2rem'}}/>}
                href='https://facebook.com'
            />
            <IconButton
                children={<XIcon sx={{fontSize:'2rem'}}/>}
                href='https://x.com'
            />
            <IconButton
                children={<InstagramIcon sx={{fontSize:'2rem'}}/>}
                href='https://instagram.com'
            />
        </div>
    </div>
}

export default Footer;