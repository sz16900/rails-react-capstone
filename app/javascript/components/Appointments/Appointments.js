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
      <td className="w-1/3 text-left py-3 px-4">
        {coaches[item.attributes.coach_id]?.name}
      </td>
      <td className="w-1/3 text-left py-3 px-4">
        {`$${coaches[item.attributes.coach_id]?.price}`}
      </td>
      <td className="w-1/3 text-left py-3 px-4">
        {new Date(item.attributes.appointment_time).toUTCString()}
      </td>
    </tr>
  ));

  return (
    <div className="text-center w-full" style={{ marginLeft: '20%' }}>
      <h1 className="mt-8 mb-4 text-4xl font-bold">My Appointments</h1>
      <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray">
          <table class="min-w-full bg-white">
            <thead class="bg-gray text-white">
              <tr>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Coach
                </th>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Price
                </th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Date / Time
                </th>
              </tr>
            </thead>
            <tbody>{grid}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Appointments;

/* eslint-enable */
