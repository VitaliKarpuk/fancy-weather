import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const DateNow = ({
  tz, city, timeZone, language,
}) => {
  const [currentDate, setCurrentDate] = useState();
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if ((timeZone || tz) && city && language) {
      const id = setInterval(() => {
        const timeNow = new Date();
        const formatter = new Intl.DateTimeFormat(`${language}`, {
          timeZone: `${timeZone}`,
          weekday: 'short',
          year: '2-digit',
          month: '2-digit',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        const timeNowGoodFormat = formatter.format(timeNow);
        setCurrentDate(timeNowGoodFormat);
      }, 1000);
      return () => clearInterval(id);
    }
  }, [tz, city, timeZone, language]);

  return (
    <div>{currentDate}</div>
  );
};
const mapStateToProps = ({
  tz, city, timeZone, language,
}) => ({
  city,
  tz,
  timeZone,
  language,
});

export default connect(mapStateToProps)(DateNow);
