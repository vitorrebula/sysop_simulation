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
                            Welcome to the Job Scheduling Simulator! In this simulator, you'll be able to add jobs and observe how they are scheduled using the preemptive priority scheduling algorithm.
                        </p>
                        <p>
                            To start, use the <strong>Add Job</strong> button to input the details of your jobs. Each job requires you to provide:
                            <ul>
                                <li><strong>Priority:</strong> The priority level of the job (lower number indicates higher priority).</li>
                                <li><strong>Arrival Time:</strong> When the job enters the system.</li>
                                <li><strong>Burst Time:</strong> The total time the job needs to complete.</li>
                            </ul>
                        </p>
                        <p>
                            Once you have added all the jobs, you can proceed to the <strong>Results</strong> page. Here, you will see how the processes are executed based on their priority, with higher priority jobs interrupting lower priority ones.
                        </p>
                        <p>
                            The algorithm works as follows:
                            <ul>
                                <li>Jobs with higher priority (lower priority number) preempt lower priority jobs.</li>
                                <li>If two jobs have the same priority, they will be scheduled in the order they arrive.</li>
                                <li>The scheduling continues until all jobs are completed.</li>
                            </ul>
                        </p>
                        <p>
                            Enjoy exploring how the preemptive priority scheduling algorithm manages job execution!
                        </p>
                    </>
                ) : (
                    <div></div>
                )}
            </styled.StyledDrawer>
        </>
    );
}

export default UserGuide;
