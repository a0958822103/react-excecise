import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchComponent from './useSearchParams/SearchComponent';
import Comment from './prop/CommentBoard';
import Page from './home/HomePage';

export default function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/search" element={<SearchComponent />} />
        <Route path="/comment" element={<Comment />} />
        <Route path="/comment/:id" element={<Comment />} />
        <Route path="*" element={<h1>404 Not Found</h1>} /> {/*Catch-all route for undefined paths*/}
      </Routes>
    </BrowserRouter>
    </>
  );
}


