import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BLOG_CATEGORIES, BlogCategory } from '../types/blog';

const Blog: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
  const [postsToShow, setPostsToShow] = useState(6);

  // Check for category parameter in URL on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && BLOG_CATEGORIES.includes(categoryParam as BlogCategory)) {
      setSelectedCategory(categoryParam as BlogCategory);
    }
  }, [searchParams]);

  const categories: (BlogCategory | 'All')[] = ['All', ...BLOG_CATEGORIES];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts
    : blogPosts.filter(post => post.categories.includes(selectedCategory));

  const displayedPosts = filteredPosts.slice(0, postsToShow);
  const hasMorePosts = postsToShow < filteredPosts.length;

  const getCategoryColor = (category: BlogCategory): string => {
    const colors: Record<BlogCategory, string> = {
      'AI-Driven Content': 'bg-emerald-100 text-emerald-700',
      'Technical Documentation': 'bg-blue-100 text-blue-700',
      'Whitepapers & Case Studies': 'bg-purple-100 text-purple-700',
      'Tech Event Coverage': 'bg-orange-100 text-orange-700',
      'AI Automation Services': 'bg-indigo-100 text-indigo-700',
      'App-Based Content & Sites': 'bg-teal-100 text-teal-700',
      'Case Studies & Best Practices': 'bg-pink-100 text-pink-700',
      'Career Marketing': 'bg-yellow-100 text-yellow-700'
    };
    return colors[category];
  };

  const handleCategoryChange = (category: BlogCategory | 'All') => {
    setSelectedCategory(category);
    setPostsToShow(6); // Reset to show 6 posts when changing category
    
    // Update URL parameter
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  const loadMorePosts = () => {
    setPostsToShow(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-700 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Content Creator Blog & AI Insights
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed">
              Professional blog writing, AI consulting insights, and app development trends 
              from Seattle's leading content creator and technology consultant.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {displayedPosts.length} of {filteredPosts.length} posts from our content creator
              {selectedCategory !== 'All' && (
                <span className="ml-1">in "{selectedCategory}"</span>
              )}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {displayedPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group block"
              >
                {/* Post Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  {/* Category Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category, index) => (
                      <div 
                        key={index}
                        className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>

                  {/* Post Title */}
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Post Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center text-emerald-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {hasMorePosts && (
            <div className="text-center mt-12">
              <button 
                onClick={loadMorePosts}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center group"
              >
                Load More Posts
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          )}

          {/* No More Posts Message */}
          {!hasMorePosts && filteredPosts.length > 6 && (
            <div className="text-center mt-12">
              <p className="text-gray-600 text-lg">
                You've reached the end! 
                {selectedCategory !== 'All' && (
                  <span className="ml-1">
                    <button 
                      onClick={() => handleCategoryChange('All')}
                      className="text-emerald-600 hover:text-emerald-700 font-semibold underline ml-1"
                    >
                      View all posts
                    </button>
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get Content Creator Insights
            </h3>
            <p className="text-gray-600 mb-8">
              Subscribe to receive expert blog writing tips, AI consulting insights, 
              and app development trends from our professional content creator.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;