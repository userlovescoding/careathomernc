import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './blog/Blog.css';

// Placeholder Structure Data
const blogCategories = [
  'All Topics',
  'Home Nursing Tips',
  'Elderly Care Guidance',
  'Recovery After Surgery',
  'ICU at Home Support',
  'Medical Equipment Guidance',
  'Patient Care Advice'
];

const dummyArticles = [
  {
    id: 1,
    slug: 'post-surgery-care-at-home',
    title: 'Essential Guidelines for Post-Surgery Care at Home',
    excerpt: 'Learn how to create a safe recovery environment, manage pain, and prevent infections after a major surgery.',
    category: 'Recovery After Surgery',
    date: 'May 2, 2026',
    readTime: '5 min read'
  },
  {
    id: 2,
    slug: 'choosing-oxygen-concentrator',
    title: 'How to Choose the Right Oxygen Concentrator for Home Use',
    excerpt: 'A comprehensive guide to understanding oxygen flow rates, capacities, and what to look for when renting respiratory equipment.',
    category: 'Medical Equipment Guidance',
    date: 'April 28, 2026',
    readTime: '7 min read'
  },
  {
    id: 3,
    slug: 'preventing-bedsores-elderly',
    title: 'Preventing Bedsores in Bedridden Elderly Patients',
    excerpt: 'Practical advice for caregivers on repositioning, hygiene, and using specialized hospital beds to protect sensitive skin.',
    category: 'Elderly Care Guidance',
    date: 'April 15, 2026',
    readTime: '6 min read'
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All Topics');
  const [searchQuery, setSearchQuery] = useState('');

  // Basic structure filter logic
  const filteredArticles = dummyArticles.filter(article => {
    const matchesCategory = activeCategory === 'All Topics' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="blog-page">
      
      {/* Hero / Header */}
      <section className="blog-hero section-padding">
        <div className="container blog-hero-container stack-md">
          <h1 className="heading-hero">Knowledge Center</h1>
          <p className="text-body-large">
            Trusted healthcare guidance, recovery tips, and professional medical advice to help you care for your loved ones at home.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container">
          
          {/* Controls: Search and Categories */}
          <div className="blog-controls">
            <div className="blog-search-wrapper">
              <input 
                type="text" 
                className="blog-search-input" 
                placeholder="Search articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="blog-categories">
              {blogCategories.map((category, index) => (
                <button 
                  key={index}
                  className={log-category-btn }
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Article Listing Grid */}
          <div className="blog-grid">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <Link to={/blog/} key={article.id} className="article-card">
                  <div className="article-image-placeholder">
                    [Article Image: {article.category}]
                  </div>
                  <div className="article-content">
                    <div className="article-meta">
                      <span className="article-category">{article.category}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-excerpt">{article.excerpt}</p>
                    <span className="article-read-more">Read Article ?</span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center" style={{ gridColumn: '1 / -1', padding: 'var(--space-8)' }}>
                <p className="text-body-large">No articles found matching your criteria.</p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Blog;
