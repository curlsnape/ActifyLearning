// import React from 'react'

// const HRPortalInfographic= () => {
//   const navyBlue = '#0A2647'
//   const red = '#FF0000'

//   const functions = [
//     { title: 'Employee Database', description: 'Create, View and Maintain Employee records', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', x: 75, y: 160 },
//     { title: 'Project Management', description: 'Define Project Parameters Oversee its Progress', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', x: 75, y: 340 },
//     { title: 'Leave Management', description: 'Create a Roster of holidays and Oversee leave requests', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', x: 160, y: 460 },
//     { title: 'Expense Management', description: 'Control, Track and Optimize Expenses incurred', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', x: 340, y: 520 },
//     { title: 'Talent Acquisition', description: 'Sourcing Talent for Organization Success', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z', x: 525, y: 460 },
//     { title: 'Payroll', description: 'Outlines the Components Associated with Employee Compensation', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', x: 625, y: 340 },
//     { title: 'Time Sheets', description: 'Oversee Employee Man-Hours and Tasks Completed', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', x: 625, y: 160 },
//     { title: 'Work from home', description: 'Handle Remote Work Requests and Approvals Efficiently', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', x: 525, y: 40 },
//   ]

//   return (
//     <div className="w-screen flex items-center justify-center bg-white p-4">
//       <svg viewBox="0 0 700 600" className="w-full h-full max-w-4xl">
//         {/* Central HR Portal circle */}
//         <circle cx="350" cy="300" r="80" fill="white" stroke={red} strokeWidth="4" />
//         <text x="350" y="290" textAnchor="middle" fontSize="32" fontWeight="bold" fill={navyBlue}>HR</text>
//         <text x="350" y="320" textAnchor="middle" fontSize="24" fill={navyBlue}>Portal</text>

//         {/* HR functions */}
//         {functions.map((func, index) => (
//           <g key={index}>
//             {/* Connecting line */}
//             <line x1="350" y1="300" x2={func.x} y2={func.y} stroke={red} strokeWidth="2" />
            
//             {/* Function circle */}
//             <circle cx={func.x} cy={func.y} r="40" fill={navyBlue} />
            
//             {/* Icon */}
//             <path d={func.icon} transform={`translate(${func.x - 12}, ${func.y - 12})`} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            
//             {/* Title and description */}
//             <text x={func.x < 350 ? func.x - 50 : func.x + 50} y={func.y - 30} textAnchor={func.x < 350 ? "end" : "start"} fontSize="14" fontWeight="bold" fill={navyBlue}>{func.title}</text>
//             <text x={func.x < 350 ? func.x - 50 : func.x + 50} y={func.y - 10} textAnchor={func.x < 350 ? "end" : "start"} fontSize="12" fill={navyBlue} width="150">
//               <tspan x={func.x < 350 ? func.x - 50 : func.x + 50} dy="1.2em">{func.description.split(' ').slice(0, 4).join(' ')}</tspan>
//               <tspan x={func.x < 350 ? func.x - 50 : func.x + 50} dy="1.2em">{func.description.split(' ').slice(4).join(' ')}</tspan>
//             </text>
//           </g>
//         ))}
//       </svg>
//     </div>
//   )
// }

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <HRPortalInfographic />
//     </div>
//   )
// }


import 'beautiful-react-diagrams/styles.css';

import Diagram, { useSchema, createSchema } from 'beautiful-react-diagrams';

const initialSchema = createSchema({
  nodes: [
    { id: 'node-1', content: 'Node 1', coordinates: [250, 60], },
    { id: 'node-2', content: 'Node 2', coordinates: [100, 200], },
    { id: 'node-3', content: 'Node 3', coordinates: [250, 220], },
    { id: 'node-4', content: 'Node 4', coordinates: [400, 200], },
    { id: 'node-5', content: 'Node 4', coordinates: [800, 0], },
  ],
  links: [
    { input: 'node-1',  output: 'node-2', label: 'Link 1', readonly: true },
    { input: 'node-1',  output: 'node-3', label: 'Link 2', readonly: true },
    { input: 'node-1',  output: 'node-5', label: 'Link 2', readonly: true },
    { input: 'node-1',  output: 'node-4', label: 'Link 3', readonly: true, className: 'my-custom-link-class' },
  ]
});

const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

    return (
      <div className='w-screen '>
            
    <div style={{ height: '22.5rem', }}  >
      <Diagram schema={schema} onChange={onChange} />
    </div>
      </div>
  );
};

export default UncontrolledDiagram
