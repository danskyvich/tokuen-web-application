import classnames from 'classnames'
import { Link } from '@tanstack/react-router'

interface Props {
    url : string,
    buttonText: string,
    textWeight: string,
    textSize: string,
    effects: string,
}

const OutlinedButton = ({url, buttonText, textWeight, textSize, effects} : Props) => {

    const classStr = classnames(
        textWeight, textSize, effects
    )
    return <>
        <Link
            to={url}
            className={classStr}
        >{buttonText}</Link>
    </>
}

export default OutlinedButton;