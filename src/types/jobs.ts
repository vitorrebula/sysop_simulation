import { Dispatch, SetStateAction } from "react";

export interface Job {
    key: React.Key;
    name: string;
    arrivalTime: number;
    burstTime: number;
}

export interface JobsState {
    jobs: Job[];
    setJobs: Dispatch<SetStateAction<Job[]>>;
}