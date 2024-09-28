import { Modal } from "antd";
import React, { Dispatch, SetStateAction } from "react";

interface DeleteModalProps{
    nameDeleting: string;
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    onConfirm: () => void;
    onCancel: () => void;
}

export function DeleteModal(props: DeleteModalProps){
    const {nameDeleting, openModal, setOpenModal, onConfirm, onCancel} = props;

    return (
        <Modal 
            destroyOnClose
            open={openModal} 
            onCancel={() => {
                setOpenModal(false);
                onCancel();
            }}
            onClose={() => {
                setOpenModal(false);
                onCancel();
            }}
            title={`Delete ${nameDeleting}?`} 
            onOk={() => {
                onConfirm();
                setOpenModal(false);
            }} 
        />
    )
}

export default DeleteModal;