import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Rss, ExternalLink } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { BlogCategory } from '../types/blog';

const BlogPreview: React.FC = () => {
  // Get the 3 most recent posts (first 3 in the array since they're ordered by date)
  const recentPosts = blogPosts.slice(0, 3);

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

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rss className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Latest from Our Content Creator
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with expert insights on AI-driven content creation, blog writing strategies, 
            app development trends, and AI consulting tips from Seattle's leading content creator.
          </p>
          <div className="flex justify-center mt-6">
            <a 
              href="/rss.xml" 
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300"
            >
              <Rss className="h-5 w-5 mr-2" />
              Subscribe to RSS Feed
            </a>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

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

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div>
            <Link 
              to="/blog"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center group"
            >
              View All Content Creator Posts
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://seattleainews.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300 inline-flex items-center group"
            >
              Read Our Seattle AI News Blog
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a 
              href="https://seattleaiconsultant.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors duration-300 inline-flex items-center group"
            >
              Read Our Seattle AI Consultant Resource
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;