import { Modal } from "antd";
import React from "react";

interface DeleteModalProps{
    nameDeleting: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export function DeleteModal(props: DeleteModalProps){
    const {nameDeleting, onConfirm, onCancel} = props;

    return (
        <Modal 
            destroyOnClose
            open
            onCancel={() => {
                onCancel();
            }}
            onClose={() => {
                onCancel();
            }}
            title={`Delete ${nameDeleting}?`} 
            onOk={() => {
                onConfirm();
            }} 
        />
    )
}

export default DeleteModal;