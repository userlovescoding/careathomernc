import React, { useState } from 'react';
import './blog/Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Nursing', 'Elderly Care', 'Equipment', 'Medical Advice'];

  return (
    <div className="blog-page">
      <section className="section-padding">
        <div className="container">
          <h1 className="heading-hero">Health Resources & Care Guides</h1>
          <div className="blog-categories" style={{ display: 'flex', gap: '10px', marginBlock: '20px' }}>
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={activeCategory === cat ? "blog-category-btn active" : "blog-category-btn"}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="blog-grid">
            <p className="text-body">Select a category to view helpful care articles for your family.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
