import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Ongoing from './Component/Ongoing'
import Successful from './Component/Successful'
import Possible from './Component/Possible'
import Demo from './Component/Demo'

function App() {
  // return <Demo />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Demo />} />
        <Route path="/ongoing" element={<Ongoing />} />
        <Route path="/successful" element={<Successful />} />
        <Route path="/possible" element={<Possible />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
