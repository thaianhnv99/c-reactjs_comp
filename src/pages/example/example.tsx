import './example.scss';
import {Divider} from "@mui/material";
import {AppInput} from "../../component/Base";

export function Example() {
    return <>
        {/*<div className={'exampleContainer'}>*/}
        {/*    <h1>Example</h1>*/}
        {/*    <Divider>*/}
        {/*        Typography*/}
        {/*    </Divider>*/}
        {/*    <Row justify='center'>*/}
        {/*        <Col span={4}>*/}
        {/*            <Title level={1}>H1. Antd</Title>*/}
        {/*            <Title level={2}>H2. Antd</Title>*/}
        {/*            <Title level={3}>H3. Antd</Title>*/}
        {/*            <Title level={4}>H4. Antd</Title>*/}
        {/*            <Title level={5}>H5. Antd</Title>*/}
        {/*        </Col>*/}
        {/*        <Col span={4}>*/}
        {/*            <Title level={1} type="secondary">H1. (secondary)</Title>*/}
        {/*            <Title level={2} type="success">H2. (success)</Title>*/}
        {/*            <Title level={3} type="warning">H3. (warning)</Title>*/}
        {/*            <Title level={4} type="danger">H4. (danger)</Title>*/}
        {/*            <Title level={5} disabled>H5. (disabled)</Title>*/}
        {/*        </Col>*/}
        {/*        /!*<Col span={4}>*!/*/}
        {/*        /!*    <Text code>Ant. (code)</Text><br/>*!/*/}
        {/*        /!*    <Text strong>Ant. (strong)</Text><br/>*!/*/}
        {/*        /!*    <Text editable>Ant. (editable)</Text><br/>*!/*/}
        {/*        /!*    <Text mark>Ant. (mark)</Text><br/>*!/*/}
        {/*        /!*    <Link href="https://github.com/" target="_blank">Ant. (link)</Link><br/>*!/*/}
        {/*        /!*</Col>*!/*/}
        {/*    </Row>*/}

        {/*    /!*Grid*!/*/}
        {/*    <Divider orientation="center" plain>*/}
        {/*        Grid*/}
        {/*    </Divider>*/}
        {/*    <Row>*/}
        {/*        <Col span={6} offset={6}>*/}
        {/*            col-6 col-offset-6*/}
        {/*        </Col>*/}
        {/*        <Col span={6} offset={6}>*/}
        {/*            col-6 col-offset-6*/}
        {/*        </Col>*/}
        {/*    </Row>*/}

        {/*    /!*Skeleton*!/*/}
        {/*    <Divider orientation="center" plain>*/}
        {/*        Skeleton*/}
        {/*    </Divider>*/}
        {/*    <Skeleton avatar paragraph={{rows: 4}} active/>*/}
        {/*</div>*/}

        <Divider>
            Input
        </Divider>
        <AppInput/>
    </>
}
