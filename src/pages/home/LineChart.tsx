import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'SMS 2.0 Line Chart',
        },
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Days',
                position: 'end'
            }
        },
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'SAH'
            }
        }
    }
};

const labels = ['1', '2', '3', '4', '5', '6', '7', '8'];

const data = {
    labels,
    datasets: [
        {
            label: 'Target',
            data: labels.map(() => faker.number.int({ min: 100, max: 100 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Actual',
            data: labels.map(() => faker.number.int({ min: 50, max: 100 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const LineChart = () => <Line options={options} data={data} />

export default LineChart;
