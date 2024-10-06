import React, { useState, Dispatch, SetStateAction } from "react";
import { Modal, Input, Form } from "antd";
import useAddJob from "./AddJob.hook";
import { JobsState } from "../../../../types/jobs";

export interface AddJobProps extends JobsState {
    openAddJob: boolean;
    setOpenAddJob: Dispatch<SetStateAction<boolean>>;
}

export function AddJob(props: AddJobProps) {
    const { openAddJob, setOpenAddJob, jobs, setJobs } = props;

    const [name, setName] = useState<string>('');
    const [arrivalTime, setArrivalTime] = useState<number>(0);
    const [burstTime, setBurstTime] = useState<number>(0);

    const { handleOk, handleCancel } = useAddJob({
        jobs,
        setJobs,
        setOpenAddJob,
        job: { name, arrivalTime, burstTime }
    });

    return (
        <Modal
            destroyOnClose
            title="Add New Job"
            open={openAddJob}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form layout="vertical">
                <Form.Item label="Job Name">
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter job name"
                    />
                </Form.Item>
                <Form.Item label="Arrival Time">
                    <Input
                        type="number"
                        value={arrivalTime}
                        onChange={(e) => setArrivalTime(Number(e.target.value))}
                        placeholder="Enter arrival time"
                    />
                </Form.Item>
                <Form.Item label="Burst Time">
                    <Input
                        type="number"
                        value={burstTime}
                        onChange={(e) => setBurstTime(Number(e.target.value))}
                        placeholder="Enter burst time"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddJob;