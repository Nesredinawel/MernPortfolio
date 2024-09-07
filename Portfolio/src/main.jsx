import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Document from './component/documents/Document.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/documents" element={<Document />} />
         
        </Routes>

    </Router>
   
  </React.StrictMode>,
)
