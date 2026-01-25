{/**Material UI components */}
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import { blue } from "@mui/material/colors";

interface Props {
    img : string,
    height : string,
    width : string,
}

const AvatarIcon = ({img, height, width} : Props) => {
    return <>
        <IconButton
        href='/user-profile/'
            children={<Avatar sx={{backgroundColor: blue[800], width: width, height: height}} src={img}>DF</Avatar>}
        />
    </>
}
export default AvatarIcon;