import { FloatButton } from "antd";
import { FileTextOutlined } from '@ant-design/icons';
import React, { Dispatch, SetStateAction } from "react";

interface FixedUserGuideButtonProps{
    setOpenUserGuide: Dispatch<SetStateAction<boolean>>;
}

export function FixedUserGuideButton(props: FixedUserGuideButtonProps) {
    const {setOpenUserGuide} = props

    return (
        <FloatButton
            badge={{dot: true}}
            icon={<FileTextOutlined />}
            tooltip={<div>Understand how to use Jobs Simulation</div>}
            onClick={() => setOpenUserGuide(true)}
        />
    )
}

export default FixedUserGuideButton;