import {Typography} from "antd";
import {TitleProps} from "antd/lib/typography/Title";

interface ITitleProps extends TitleProps {
    children?: any,
}

export function AppTitle({children, level}: ITitleProps) {

    const {Title} = Typography
    return (
        <Title level={level}></Title>
    )
}
