import {Divider} from "antd";
import {Typography} from 'antd';

export function Example() {
    console.log(Typography);
    const {Title} = Typography;
    return <>
        <div className={'exampleContainer'}>
            <h1>Example</h1>
            <Divider orientation="left" plain>
                Typography
            </Divider>
            <Title level={5}>H1. Antd</Title>
        </div>
    </>
}
