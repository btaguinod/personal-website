import React from 'react';
import SubPage from '../SubPageTemplate';
import dodecahedron3 from './dodecahedron_3.stl';
import icosahedron5 from './icosahedron_5.stl';
import icosahedron7 from './icosahedron_7.stl';
import icosphere5 from './icosphere_5.stl';
import icosphere7 from './icosphere_7.stl';

export default function GosperShells() {
  return (
    <SubPage title="Gosper Shells" description="3D structures with patterns that resemble a Gosper Curve. These models were created during the Undergraduate Apprenticeship Research Program (URAP) under Professor Carlo Sequin and inspired by his own works." cards={gosperShellsCards}/>
  );
}

const gosperShellsCards = [
  {
    type: 'model',
    title: 'Gosper Dodecahedron 3',
    description: 'Dodecahedron made using patterned pentagons with side length 3.',
    content: dodecahedron3
  },
  {
    type: 'model',
    title: 'Gosper Icosahedron 5',
    description: 'Icosahedron made using patterned triangles with side length 5.',
    content: icosahedron5
  },
  {
    type: 'model',
    title: 'Gosper Icosahedron 7',
    description: 'Icosahedron made using patterned triangles with side length 7.',
    content: icosahedron7
  },
  {
    type: 'model',
    title: 'Gosper Sphere 5',
    description: 'Sphere made using patterned triangles with side length 5.',
    content: icosphere5
  },
  {
    type: 'model',
    title: 'Gosper Sphere 7',
    description: 'Sphere made using patterned triangles with side length 7.',
    content: icosphere7
  },
]