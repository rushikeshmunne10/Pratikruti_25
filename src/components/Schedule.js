import React from 'react';

const Schedule = () => {
  const scheduleItems = [
    { date: 'February 15, 2025', event: 'Last Date of Synopsis Submission' },
    { date: 'February 20, 2025', event: 'Notification of Acceptance' },
    { date: 'February 25, 2025', event: 'Date of Competition' }
  ];

  return (
    <div id="schedule" className="bg-gray-100 py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Important Dates</h2>
      <div className="max-w-4xl mx-auto ">
        <ul className="space-y-6">
          {scheduleItems.map((item, index) => (
            <li
              key={index}
              className="bg-white shadow-md p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center sm:items-center "
            >
              <div className="text-xl font-medium text-gray-700 mb-2 sm:mb-0">{item.event}</div>
              <div className="text-lg text-gray-600">{item.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Schedule;