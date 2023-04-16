import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti';
import Timers from './Timers';
import Over from './Over';

const Counter = ({ date }) => {

    const [countdown, setCountdown] = useState(new Date(date).getTime());
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
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
    }, []);

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
            {isFinished ? (
                <Over />
            ) : (
                <Timers days={days} hours={hours} minutes={minutes} seconds={seconds} />

            )}
        </div>
    )
}

export default Counter