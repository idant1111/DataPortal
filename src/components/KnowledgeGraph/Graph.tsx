// Graph.tsx
import React from 'react';
import { ForceGraph2D } from 'react-force-graph';
import { mockGraphData } from './MockData';
import person2 from '../../assets/Person2.svg';
import cubes2 from '../../assets/cubes2.svg';
import './Graph.css';
const Graph: React.FC = () => {
  return (
    <>
    
      <ForceGraph2D
        graphData={mockGraphData}
        nodeLabel="name"
        nodeAutoColorBy="group"
        linkDirectionalParticles="value"
        height={550}
        linkDirectionalParticleWidth={(link) => Math.sqrt(link.value)}
      />
    <div className='person2'>
      <img src={person2} alt="person" />
    </div>
    <div className='cubes2'>
      <img src={cubes2} alt="cubes" />
    </div>
    </>
  );
};

export default Graph;
