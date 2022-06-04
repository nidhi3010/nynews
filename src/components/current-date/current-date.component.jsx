import React from "react";
import moment from "moment";

import './current-date.styles.scss';

export default function CurrentDate() {
  const current = new Date().toISOString()
const date = moment(current).format('dddd, MMMM DD, YYYY')
  return (
    <div className="current-date">
      <span>{date}</span>
    </div>
  );
}


