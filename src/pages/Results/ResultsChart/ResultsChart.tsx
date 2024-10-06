import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { Job } from "../../../types/jobs";

interface ResultsChartProps {
    jobs: Job[];
}

interface JobQueue {
    startTime: number;
    endTime: number;
    job: Job;
    waitingTime: number;
}

export function ResultsChart({ jobs }: ResultsChartProps) {
    const [chartData, setChartData] = useState<any>({});
    
    const [jobQueue, setJobQueue] = useState<JobQueue[]>(
        jobs.map(job => ({
            startTime: 0,
            endTime: 0,
            waitingTime: 0,
            job
        }))
    );

    useEffect(() => {
        let totalTime = 0;
        let currentTime = 0;
        
        const sortedJobs = [...jobQueue].sort((a, b) => a.job.arrivalTime - b.job.arrivalTime);
        
        const updatedQueue = sortedJobs.map(jobQ => {
            if (jobQ.job.arrivalTime > currentTime) {
                totalTime += jobQ.job.arrivalTime - currentTime; 
                currentTime = jobQ.job.arrivalTime;
            }

            const startTime = currentTime;
            const endTime = currentTime + jobQ.job.burstTime;
            const waitingTime = startTime - jobQ.job.arrivalTime;

            totalTime += jobQ.job.burstTime;
            currentTime += jobQ.job.burstTime;

            return { ...jobQ, startTime, endTime, waitingTime };
        });

        setJobQueue(updatedQueue);

    }, [jobs]);

    useEffect(() => {
        const placeholderData = jobQueue.map(jobQ => jobQ.startTime);
        const actualData = jobQueue.map(jobQ => jobQ.endTime - jobQ.startTime); 

        setChartData({
            title: {
                text: 'FIFO Job Scheduling Results'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params: { name: string; seriesName: string; value: number | string; dataIndex: number }[]) {
                    const job = jobQueue[params[0].dataIndex]; 
                
                    if (!job || job.startTime === null || job.endTime === null) {
                        return ''; 
                    }
                
                    const startTime = job.startTime;
                    const endTime = job.endTime;
                    const waitingTime = job.waitingTime;
                    const burstTime = job.job.burstTime;
                
                    return (
                        `${job.job.name}<br/>` +
                        `Start Time: ${startTime}<br/>` +
                        `End Time: ${endTime}<br/>` +
                        `Burst Time: ${burstTime}<br/>` + 
                        `Waiting Time: ${waitingTime}`
                    );
                }
            },
            legend: {
                data: ['Job Execution']
            },
            grid: {
                left: '5%',
                right: '8%', 
                bottom: '6%', 
                containLabel: true
            },
            xAxis: {
                type: 'value',
                name: 'Time'
            },
            yAxis: {
                name: 'Jobs',
                type: 'category',
                data: jobQueue.map(jobQ => jobQ.job.name)
            },
            series: [
                {
                    name: 'Placeholder',
                    type: 'bar',
                    stack: 'Total',
                    silent: true,
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    },
                    emphasis: {
                        itemStyle: {
                            borderColor: 'transparent',
                            color: 'transparent'
                        }
                    },
                    data: placeholderData 
                },
                {
                    name: 'Job Execution',
                    type: 'bar',
                    stack: 'Total',
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    data: actualData 
                }
            ]
        });
    }, [jobQueue]);


    return <ReactECharts style={{ width: '100%'}} option={chartData} />;
}

export default ResultsChart;