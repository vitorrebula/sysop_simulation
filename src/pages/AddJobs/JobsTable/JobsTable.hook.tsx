import { TableColumnsType } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Job, JobsState } from "../../../types/jobs";

export interface DataType extends Job {
    key: React.Key;
}

export function useJobsTable(props: JobsState) {
    const { jobs, setJobs } = props;
    const [jobToDelete, setJobToDelete] = useState<Job | null>(null);
    const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

    const handleDelete = () => {
        if(jobToDelete){
            const newJobs = jobs.filter(job => job.key !== jobToDelete.key);
            setJobs(newJobs);
        }
    };

    const onCancelDelete = () => {
        setJobToDelete(null);
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
            },
        },
        {
            title: 'Arrival Time',
            dataIndex: 'arrivalTime',
            sorter: {
                compare: (a, b) => a.arrivalTime - b.arrivalTime,
            },
        },
        {
            title: 'Burst Time',
            dataIndex: 'burstTime',
            sorter: {
                compare: (a, b) => a.burstTime - b.burstTime,
            },
        },
        {
            title: 'Delete',
            key: 'delete',
            width: 80,
            render: (_, record) => (
                <DeleteOutlined 
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => {
                        setJobToDelete(record);
                        setOpenDeleteModal(true);
                    }}
                />
            ),
        },
    ];
    

    return {
        columns,
        jobToDelete,
        handleDelete,
        onCancelDelete,
        setOpenDeleteModal,
        openDeleteModal,
    };
}