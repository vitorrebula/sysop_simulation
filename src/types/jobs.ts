import { Dispatch, SetStateAction } from "react";

export interface Job {
    key: React.Key;
    name: string;
    arrivalTime: number;
    priority: number;
    burstTime: number;
    age: number;
}

export interface JobsState {
    jobs: Job[];
    setJobs: Dispatch<SetStateAction<Job[]>>;
}