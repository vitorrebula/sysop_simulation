import React from "react";
import { JobsState } from "../../types/jobs";
import * as styled from './Results.styles';
import { ResultsChart } from "./ResultsChart/ResultsChart";
import { Navbar } from "../../components/Navbar";
import { Button, Empty } from "antd";
import { useNavigate } from "react-router-dom";

export function Results(props: JobsState){
    const {jobs, setJobs} = props;

    const navigate = useNavigate();

    return (
        <styled.ResultsPageWrapper>
            <Navbar />
            {jobs.length > 0 ? (
                <ResultsChart jobs={jobs} />
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
        </styled.ResultsPageWrapper>
    )
}

export default Results;