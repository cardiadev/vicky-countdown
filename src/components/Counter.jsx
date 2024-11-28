import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Timers from './Timers';
import Over from './Over';
import { PuffLoader } from 'react-spinners';

const Counter = ({ date }) => {
    const [countdown, setCountdown] = useState(null);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isFinished, setIsFinished] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Set initial countdown value
        const targetTime = new Date(date).getTime();
        setCountdown(targetTime);
    }, [date]);

    useEffect(() => {
        if (countdown === null) return;

        // Simulate a delay before loading the timer
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        const startCountdown = () => {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = countdown - now;

                if (distance <= 0) {
                    clearInterval(interval);
                    setIsFinished(true);
                } else {
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor(
                        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    );
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    setDays(days);
                    setHours(hours);
                    setMinutes(minutes);
                    setSeconds(seconds);
                }
            }, 1000);

            return () => clearInterval(interval);
        };

        startCountdown();

        return () => clearTimeout(loadingTimeout);
    }, [countdown]);

    useEffect(() => {
        if (isFinished) {
            const launchConfetti = () => {
                confetti({
                    particleCount: 200,
                    spread: 360,
                    startVelocity: 30,
                    ticks: 60,
                    shapes: ["square", "circle"],
                    origin: {
                        x: Math.random(),
                        y: Math.random(),
                    },
                });
                const intervalTime = Math.floor(Math.random() * 2200) + 300;
                setTimeout(launchConfetti, intervalTime);
            };
            launchConfetti();
        }
    }, [isFinished]);

    return (
        <div>
            {isLoading ? (
                <div className='flex items-center justify-center h-screen'>
                    <PuffLoader color={'#808080'} loading={isLoading} size={100} />
                </div>
            ) : isFinished ? (
                <div className='fade-in'><Over /></div>
            ) : (
                <div className='fade-in'><Timers days={days} hours={hours} minutes={minutes} seconds={seconds} /></div>
            )}
        </div>
    );
}

export default Counter;
