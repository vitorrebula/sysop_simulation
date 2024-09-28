import React, { useState } from "react";
import { DataType, useJobsTable } from "./JobsTable.hook";
import { Button, Table } from "antd";
import * as styled from './JobsTable.styles';
import { AddJob } from "./AddJob";
import { JobsState } from "../../../types/jobs";
import { DeleteModal } from "../../../components/DeleteModal";

export function JobsTable(props: JobsState) {
    const [showAddJob, setShowAddJob] = useState<boolean>(false);
    const { jobs, setJobs } = props;

    const { jobToDelete, openDeleteModal, setOpenDeleteModal, columns, handleDelete, onCancelDelete } = useJobsTable(props);

    return (
        <styled.TableWrapper>
            <Button onClick={() => setShowAddJob(true)} data-testid="add-job-button" >Add Job</Button>
            <Table<DataType> data-testid="jobs-table" columns={columns} dataSource={jobs} bordered pagination={false}/>
            {showAddJob && <AddJob openAddJob={showAddJob} setOpenAddJob={setShowAddJob} jobs={jobs} setJobs={setJobs} />}
            {jobToDelete && openDeleteModal && <DeleteModal openModal={openDeleteModal} setOpenModal={setOpenDeleteModal} nameDeleting={jobToDelete.name} onConfirm={handleDelete} onCancel={onCancelDelete} />}
        </styled.TableWrapper>
    );
}

export default JobsTable;
