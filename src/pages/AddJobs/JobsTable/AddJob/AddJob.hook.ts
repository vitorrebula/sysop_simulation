import { message } from "antd";
import { Job } from "../../../../types/jobs";
import { AddJobProps } from "./AddJob";

interface UseAddJobProps extends Omit<AddJobProps, 'openAddJob'> {
  job: Omit<Job, 'key'>;
}

export function useAddJob(props: UseAddJobProps) {
  const { jobs, setJobs, setOpenAddJob, job } = props;

  const handleAddJob = (job: Job) => {
    const jobExists = jobs?.some(existingJob => existingJob.name === job.name);
  
    if (!jobExists) {
      setJobs(prev => (prev ? [...prev, job] : [job]));
    } else {
      message.error('A job with this name already exists!');
    }
  };

  const handleOk = () => {
    const newJob: Job = {
      ...job,
      key: jobs ? jobs.length + 1 : 1, 
    };

    handleAddJob(newJob); 
    setOpenAddJob(false); 
  };

  const handleCancel = () => {
    setOpenAddJob(false); 
  };

  return {
    handleCancel,
    handleAddJob,
    handleOk,
  };
}

export default useAddJob;