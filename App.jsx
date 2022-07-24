// App.jsx

// 🔽 Link を追加
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";

import * as React from 'react';
import Button from '@mui/material/Button';

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      {/* 🔽 追加 */}
      <ul>
        <li>
        <Button variant="outlined"><Link to="/omikuji">おみくじ</Link></Button>
        </li>
        <br />
        <br />
        <li>
        <Button variant="outlined"><Link to="/janken">じゃんけん</Link></Button>
        <br />
        <br />
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

