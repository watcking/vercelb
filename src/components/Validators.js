import React from 'react';

const mainnetProjects = [
  {
    name: 'Dymension',
    description: 'Dymension Network',
    reward: '3.59%',
    logo: '/logos/dymension.png',
  },
];

const testnetProjects = [
  {
    name: 'Pell',
    description: 'Pell Test Network',
    reward: 'N/A',
    logo: '/logos/pell.png',
  },
];

export default function Validators() {
  return (
    <div style={{ padding: '20px', color: '#fff' }}>
      <h2>Mainnet</h2>
      <div>
        {mainnetProjects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={project.logo} alt={project.name} style={{ width: '50px' }} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p style={{ color: 'limegreen' }}>{project.reward}</p>
          </div>
        ))}
      </div>

      <h2>Testnet</h2>
      <div>
        {testnetProjects.map((project, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <img src={project.logo} alt={project.name} style={{ width: '50px' }} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p style={{ color: 'limegreen' }}>{project.reward}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
