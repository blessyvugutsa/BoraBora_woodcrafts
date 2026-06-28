import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate, className = '', showLabels = true, compact = false }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();

      if (!targetDate || Number.isNaN(target)) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      const difference = target - now;

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const intervalId = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetDate]);

  const formatTime = (value) => value.toString().padStart(2, '0');

  if (timeLeft.isExpired) {
    return <div className={`font-sans text-wood-text/60 ${className}`}>Sale Ended</div>;
  }

  if (compact) {
    return (
      <div className={`font-sans font-mono font-bold text-wood-text ${className}`}>
        {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {timeLeft.days > 0 && (
        <div className="flex flex-col items-center">
          <span className="font-sans font-bold text-wood-text text-lg md:text-xl">
            {formatTime(timeLeft.days)}
          </span>
          {showLabels && (
            <span className="font-sans text-xs text-wood-text/60 uppercase">
              {timeLeft.days === 1 ? 'Day' : 'Days'}
            </span>
          )}
        </div>
      )}
      {timeLeft.days > 0 && <span className="font-sans font-bold text-wood-text/40">:</span>}
      <div className="flex flex-col items-center">
        <span className="font-sans font-bold text-wood-text text-lg md:text-xl">
          {formatTime(timeLeft.hours)}
        </span>
        {showLabels && (
          <span className="font-sans text-xs text-wood-text/60 uppercase">
            {timeLeft.hours === 1 ? 'Hr' : 'Hrs'}
          </span>
        )}
      </div>
      <span className="font-sans font-bold text-wood-text/40">:</span>
      <div className="flex flex-col items-center">
        <span className="font-sans font-bold text-wood-text text-lg md:text-xl">
          {formatTime(timeLeft.minutes)}
        </span>
        {showLabels && (
          <span className="font-sans text-xs text-wood-text/60 uppercase">
            {timeLeft.minutes === 1 ? 'Min' : 'Mins'}
          </span>
        )}
      </div>
      <span className="font-sans font-bold text-wood-text/40">:</span>
      <div className="flex flex-col items-center">
        <span className="font-sans font-bold text-wood-text text-lg md:text-xl">
          {formatTime(timeLeft.seconds)}
        </span>
        {showLabels && (
          <span className="font-sans text-xs text-wood-text/60 uppercase">
            {timeLeft.seconds === 1 ? 'Sec' : 'Secs'}
          </span>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
