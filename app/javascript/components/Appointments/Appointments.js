/* eslint-disable */

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [coaches, setCoaches] = useState([]);
  useEffect(() => {
    const coachArr = {};
    axios
      .get('/api/v1/appointments.json')
      .then((resp) => {
        setAppointments(resp.data.data);
        resp.data.included.map((item) => {
          coachArr[item.id] = {
            name: item.attributes.name,
            price: item.attributes.price,
          };
        });
        setCoaches(coachArr);
      })
      .catch((err) => console.log(err));
  }, []);

  const grid = appointments.map((item) => (
    <tr>
      <td className="border px-4 py-2">
        {coaches[item.attributes.coach_id]?.name}
      </td>
      <td className="border px-4 py-2">
        {`$${coaches[item.attributes.coach_id]?.price}`}
      </td>
      <td className="border px-4 py-2">
        {new Date(item.attributes.appointment_time).toUTCString()}
      </td>
    </tr>
  ));

  return (
    <div className="text-center w-full" style={{ marginLeft: '20%' }}>
      <h1 className="mt-8 mb-4 text-4xl font-bold">My Appointments</h1>
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">Coach</th>
            <th className="w-1/4 px-4 py-2">Price</th>
            <th className="w-1/4 px-4 py-2">Date / Time</th>
          </tr>
        </thead>
        <tbody>{grid}</tbody>
      </table>
    </div>
  );
};

export default Appointments;

/* eslint-enable */
