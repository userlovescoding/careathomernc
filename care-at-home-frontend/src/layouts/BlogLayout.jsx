import React from 'react';
import { Outlet } from 'react-router-dom';

const BlogLayout = () => {
  return (
    <div className="layout-blog">
      <header className="layout-header">
        <nav>[Navbar Placeholder]</nav>
      </header>

      <main className="layout-content blog-content">
        {/* Blog-specific top structural elements like Global Search/Categories go here */}
        <div className="blog-navigation-placeholder"></div>
        
        <Outlet />
      </main>

      <footer className="layout-footer">
        [Footer Placeholder]
      </footer>
    </div>
  );
};

export default BlogLayout;
