import React, { Dispatch, SetStateAction } from "react";
import * as styled from './UserGuide.styles'

type PageType = 'addjobs' | 'results';

interface UserGuideProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    page: PageType;
}

export function UserGuide(props: UserGuideProps) {
    const { open, setOpen, page } = props;

    const onClose = () => {
        setOpen(false);
    };

    return (
        <>
            <styled.StyledDrawer title="User Guide" onClose={onClose} placement="left" open={open}>
                {page === 'addjobs' ? (
                    <>
                        <p>
                            Welcome to the Job Scheduling Simulator! In this simulator, you'll be able to add jobs and observe how they are scheduled using the FIFO (First In, First Out) scheduling algorithm.
                        </p>
                        <p>
                            To start, use the <strong>Add Job</strong> button to input the details of your jobs. Each job requires you to provide:
                            <ul>
                                <li><strong>Arrival Time:</strong> When the job enters the system.</li>
                                <li><strong>Burst Time:</strong> The total time the job needs to complete.</li>
                            </ul>
                        </p>
                        <p>
                            Once you have added all the jobs, you can proceed to the <strong>Results</strong> page. Here, you will see how the processes are executed in the order they arrive, with the first job entering the system being completed before the next one begins.
                        </p>
                        <p>
                            The algorithm works as follows:
                            <ul>
                                <li>Jobs are executed in the order they arrive in the system.</li>
                                <li>The first job to arrive will be completed before the next job starts.</li>
                                <li>The scheduling continues until all jobs are completed, without interruptions or preemptions.</li>
                            </ul>
                        </p>
                        <p>
                            Enjoy exploring how the FIFO scheduling algorithm manages job execution!
                        </p>
                    </>
                ) : (
                    <>
                        <p>
                            Welcome to the <strong>Results</strong> page! Here, you will see a visual representation of how your jobs were scheduled using the FIFO (First In, First Out) algorithm.
                        </p>
                        <p>
                            The results are displayed in a Gantt chart, where each job is shown in the order it was processed. The chart visually represents the execution of jobs over time, with the start and end times for each job clearly marked.
                        </p>
                        <p>
                            The FIFO algorithm processes jobs in the order they arrive in the system, meaning:
                            <ul>
                                <li>The first job to arrive is executed first, and it runs until completion.</li>
                                <li>Subsequent jobs wait in line and are executed one by one, in the order of their arrival.</li>
                                <li>There is no preemption, so once a job starts running, it will continue until it finishes before the next job can begin.</li>
                            </ul>
                        </p>
                        <p>
                            Below the Gantt chart, you can find details such as:
                            <ul>
                                <li><strong>Start Time:</strong> The time each job started.</li>
                                <li><strong>End Time:</strong> The time each job finished.</li>
                                <li><strong>Waiting Time:</strong> The amount of time a job spent waiting in line before execution.</li>
                            </ul>
                        </p>
                        <p>
                            Use this information to analyze how efficiently the FIFO algorithm scheduled your jobs and how waiting times were affected by the order of arrival.
                        </p>
                    </>

                )}
            </styled.StyledDrawer>
        </>
    );
}

export default UserGuide;
