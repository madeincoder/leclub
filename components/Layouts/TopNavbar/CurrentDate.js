import React, { useState, useEffect } from 'react';
import styles from "@/components/Layouts/TopNavbar/CurrentDate.module.css";

function CurrentDate() {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    const formatter = new Intl.DateTimeFormat('en-US', options);
    const date = new Date();
    setCurrentDate(formatter.format(date));
  }, []);

  return (
    <>
      <div className={styles.currentDate}>
        <i className="ri-calendar-2-line"></i>
        {currentDate}
      </div>
    </>
  );
}

export default CurrentDate;
