import React from 'react';
import './DashboardList.css';
import Cards from '../Cards/Cards';

const DashboardList: React.FC = () => {
  const data = [
    { id: 1, title: 'Card 1', route: '/Dashboards' },
    { id: 2, title: 'Card 2', route: '/Profile' },
    { id: 3, title: 'Card 3', route: '/explore' },
    // Add more card objects as needed
  ];

  return (
    <>
      <div className="grid">
        {data.map((item, index) => (
          <div className="grid-item" key={index}>
            <a href={item.route}><Cards/></a>
          </div>
          // comment for commit
        ))}
      </div>
    </>
  );
}

export default DashboardList;
