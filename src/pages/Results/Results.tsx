import React, { useState } from "react";
import { JobsState } from "../../types/jobs";
import * as styled from './Results.styles';
import { ResultsChart } from "./ResultsChart/ResultsChart";
import { Navbar } from "../../components/Navbar";
import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";
import { FixedUserGuideButton } from "../../components/UserGuide/FixedUserGuideButton";
import { UserGuide } from "../../components/UserGuide";

export function Results(props: JobsState){
    const {jobs} = props;
    const [openUserGuide, setOpenUserGuide] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <styled.ResultsPageWrapper>
            <Navbar />
            {jobs.length > 0 ? (
                <div style={{padding: '50px'}}>
                    <ResultsChart jobs={jobs} />
                </div>
            ):(
                <Empty
                style={{marginTop: '10vh'}}
                imageStyle={{ height: 80 }}
                description={
                    <p>Add jobs to see the scheduling results</p>
                }
              >
                <Button type="primary" onClick={() => navigate('/addjobs')}>Add Jobs!</Button>
              </Empty>
            )}
            <FixedUserGuideButton setOpenUserGuide={setOpenUserGuide}/>
            <UserGuide open={openUserGuide} setOpen={setOpenUserGuide} page="results"/>
        </styled.ResultsPageWrapper>
    )
}

export default Results;