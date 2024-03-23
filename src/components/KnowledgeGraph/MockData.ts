// MockData.ts
export const mockGraphData = {
    nodes: [
      { id: '1', name: 'משאבי אנוש', title: 'HR', val: 10 },
      { id: '2', name: 'תשלומים', val: 1 },
      { id: '3', name: 'שכר', val: 1 },
      { id: '4', name: 'לוגיסטיקה', title: 'Logistics', val: 10 },
      { id: '5', name: 'מלאי', val: 2 },
      { id: '6', name: 'דשבורד 1', title: 'Logistics', val: 1 },
      { id: '7', name: 'דשבורד 2', val: 1 },
      { id: '8', name: 'דשבורד 31', title: 'Logistics', val: 1 },
      { id: '9', name: 'דשבורד 32', val: 1 },
      { id: '10', name: 'דשבורד 41', title: 'Logistics', val: 1 },
      { id: '11', name: 'דשבורד 22', val: 1 },
    ],
    links: [
      { source: '1', target: '2' },
      { source: '2', target: '3' },
      { source: '4', target: '5' },
      { source: '6', target: '5' },
      { source: '7', target: '5' },
      { source: '8', target: '3' },
      { source: '9', target: '3' },
      { source: '10', target: '3' },
      { source: '11', target: '2' },
    ],
  };
  