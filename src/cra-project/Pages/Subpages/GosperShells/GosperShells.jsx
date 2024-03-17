import React from 'react';
import SubPage from '../SubPageTemplate';

export default function GosperShells() {
  return (
    <SubPage title="Gosper Shells" description="3D structures with patterns that resemble a Gosper Curve. These models were created during the Undergraduate Apprenticeship Research Program (URAP) under Professor Carlo Sequin and inspired by his own works." cards={gosperShellsCards} />
  );
}

const gosperShellsCards = [
  {
    type: 'model',
    title: 'Gosper Dodecahedron 3',
    description: 'Dodecahedron made using patterned pentagons with side length 3.',
    content: '/3d-models/dodecahedron_3.stl'
  },
  {
    type: 'model',
    title: 'Gosper Icosahedron 5',
    description: 'Icosahedron made using patterned triangles with side length 5.',
    content: '/3d-models/icosahedron_5.stl'
  },
  {
    type: 'model',
    title: 'Gosper Icosahedron 7',
    description: 'Icosahedron made using patterned triangles with side length 7.',
    content: '/3d-models/icosahedron_7.stl'
  },
  {
    type: 'model',
    title: 'Gosper Sphere 5',
    description: 'Sphere made using patterned triangles with side length 5.',
    content: '/3d-models/icosphere_5.stl'
  },
  {
    type: 'model',
    title: 'Gosper Sphere 7',
    description: 'Sphere made using patterned triangles with side length 7.',
    content: '/3d-models/icosphere_7.stl'
  },
]