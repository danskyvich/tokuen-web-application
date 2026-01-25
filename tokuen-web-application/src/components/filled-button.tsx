import { Link } from "@tanstack/react-router";
import classnames from 'classnames'

interface ButtonProps {
    buttonText : string;
    url: string;
    textSize: string,
    effects: string
}

const FilledButton = ({buttonText, url, textSize, effects} : ButtonProps) => {

    const classStr = classnames(textSize, effects)
    return <>
        <Link className={classStr}
            to={url}
        >
            <p>{buttonText}</p>
        </Link>
    </>
}

export default FilledButton;
