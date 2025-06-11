'use client';

import React, { useState, useEffect } from 'react';

interface TimeElapsedProps extends React.HTMLProps<HTMLDivElement> {
  startDate: Date;
}

interface TimeUnits {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function TimeElapsed({ startDate, className }: TimeElapsedProps) {
  const [elapsedTime, setElapsedTime] = useState<TimeUnits>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeElapsed = (start: Date): TimeUnits => {
    const now = new Date();
    const diff = now.getTime() - start.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));

    const monthsInMilliseconds = diff % (1000 * 60 * 60 * 24 * 365.25);
    const months = Math.floor(monthsInMilliseconds / (1000 * 60 * 60 * 24 * 30.44));

    const daysInMilliseconds = monthsInMilliseconds % (1000 * 60 * 60 * 24 * 30.44);
    const days = Math.floor(daysInMilliseconds / (1000 * 60 * 60 * 24));

    const hoursInMilliseconds = daysInMilliseconds % (1000 * 60 * 60 * 24);
    const hours = Math.floor(hoursInMilliseconds / (1000 * 60 * 60));

    const minutesInMilliseconds = hoursInMilliseconds % (1000 * 60 * 60);
    const minutes = Math.floor(minutesInMilliseconds / (1000 * 60));

    const secondsInMilliseconds = minutesInMilliseconds % (1000 * 60);
    const seconds = Math.floor(secondsInMilliseconds / 1000);

    return { years, months, days, hours, minutes, seconds };
  };

  useEffect(() => {
    const updateElapsedTime = () => {
      setElapsedTime(calculateTimeElapsed(startDate));
    };
    updateElapsedTime();
    const intervalId = setInterval(updateElapsedTime, 1000);
    return () => clearInterval(intervalId);
  }, [startDate]);


  const formatTimeUnit = (value: number, unit: string): string => {
    if (value === 0) return '';
    let unitPlural = `${unit}s`;
    if (unit === "mês") {
      unitPlural = "meses";
    }
    return `${value} ${value !== 1 ? unitPlural : unit}`;
  };

  const formatElapsedTime = (): string => {
    const parts = [
      formatTimeUnit(elapsedTime.years, 'ano'),
      formatTimeUnit(elapsedTime.months, 'mês'),
      formatTimeUnit(elapsedTime.days, 'dia'),
      formatTimeUnit(elapsedTime.hours, 'hora'),
      formatTimeUnit(elapsedTime.minutes, 'minuto'),
      formatTimeUnit(elapsedTime.seconds, 'segundo')
    ].filter(Boolean);

    if (parts.length === 0) return '0 segundos';

    return parts.join(', ');
  };

  return (
    <div className={`time-elapsed ${className || ''}`}>
      {formatElapsedTime()}
    </div>
  );
};