import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react"; // Supondo que você use a biblioteca ECharts para o gráfico
import { Job } from "../../../types/jobs";

interface ResultsChartProps {
    jobs: Job[];
}

export function ResultsChart({ jobs }: ResultsChartProps) {
    const [chartData, setChartData] = useState<any>({ series: [], xAxis: [] });

    useEffect(() => {
        const { timeline, executedJobs } = scheduleJobs(jobs);
        const formattedChartData = formatChartData(timeline, executedJobs);
        setChartData(formattedChartData);
    }, [jobs]);

    function scheduleJobs(jobs: Job[]) {
        const timeline: number[] = [];
        const executedJobs: { [key: string]: number[] } = {};
        let currentTime = 0;
        const jobQueue: Job[] = [];
        const waitingJobs: Job[] = [...jobs];

        waitingJobs.sort((a, b) => a.arrivalTime - b.arrivalTime);

        while (waitingJobs.length > 0 || jobQueue.length > 0) {
            while (waitingJobs.length > 0 && waitingJobs[0].arrivalTime <= currentTime) {
                jobQueue.push(waitingJobs.shift()!);
            }

            jobQueue.sort((a, b) => a.priority - b.priority);

            const currentJob = jobQueue.shift();
            if (currentJob) {
                currentJob.burstTime--;
                timeline.push(currentTime);

                if (!executedJobs[currentJob.name]) {
                    executedJobs[currentJob.name] = [];
                }
                executedJobs[currentJob.name].push(1);

                if (currentJob.burstTime > 0) {
                    jobQueue.push(currentJob);
                }
            }

            if (currentTime % 3 === 0) {
                jobQueue.forEach(job => {
                    job.priority += 1;
                });
            }

            currentTime++;
        }

        return { timeline, executedJobs };
    }

    function formatChartData(timeline: number[], executedJobs: { [key: string]: number[] }) {
        const seriesData = Object.keys(executedJobs).map(jobName => ({
            name: jobName,
            type: "bar",
            stack: "total",
            label: {
                show: true
            },
            emphasis: {
                focus: "series"
            },
            data: executedJobs[jobName]
        }));

        return {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "shadow"
                }
            },
            legend: {},
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: {
                type: "value",
                data: timeline
            },
            yAxis: {
                type: "category",
                data: ["Execution"]
            },
            series: seriesData
        };
    }

    return <ReactECharts style={{padding: '20px'}} option={chartData} />;
}

export default ResultsChart;