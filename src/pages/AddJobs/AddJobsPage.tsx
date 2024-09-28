import React, { useState } from "react";
import { JobsState } from "../../types/jobs";
import * as styled from './AddJobsPage.styles'
import { Navbar } from "../../components/Navbar";
import { FixedUserGuideButton } from "../../components/UserGuide/FixedUserGuideButton";
import { UserGuide } from "../../components/UserGuide";
import { JobsTable } from "./JobsTable";

export function AddJobsPage(props: JobsState){
    const {jobs, setJobs} = props;
    const [openUserGuide, setOpenUserGuide] = useState(false);

    return(
        <styled.AddJobsPageWrapper>
            <Navbar />
            <JobsTable jobs={jobs} setJobs={setJobs} />
            <UserGuide page='addjobs' open={openUserGuide} setOpen={setOpenUserGuide} />
            <FixedUserGuideButton setOpenUserGuide={setOpenUserGuide} />
        </styled.AddJobsPageWrapper>
    )
}

export default AddJobsPage;