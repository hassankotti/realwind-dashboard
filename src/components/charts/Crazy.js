import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const rand = () => Math.floor(Math.random() * 255);

const genData = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            data: [rand(), rand(), rand(), rand(), rand(), rand()],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        },
    ],
});

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Crazy = () => {
    const [data, setData] = useState(genData());

    useEffect(() => {
        const interval = setInterval(() => setData(genData()), 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="m-2">
            <Bar data={data} options={options} height={100} width={100} style={{ display: 'block', boxSizing: 'border-box', height: '300px', width: '334px' }} />
        </div>
    );
};

export default Crazy;