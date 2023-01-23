import React from 'react';
import SubPage from '../SubPageTemplate';
import stlFile from './icosphere.stl'

export default function Models() {
  return (
    <SubPage title="3D Models" description="3D models that I created during the Undergraduate Apprenticeship Research Program (URAP) under Professor Carlo Sequin" cards={modelsCards}/>
  );
}

const modelsCards = [
  {
    type: 'model',
    title: 'Gosper Sphere',
    description: 'Sphere patterned with a Gosper-like curve derived by area equalizing points on icosahedron',
    content: stlFile
  }
]