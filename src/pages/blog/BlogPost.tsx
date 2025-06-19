import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import { BlogCategory } from '../../types/blog';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

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

  // Get related posts from any of the same categories
  const relatedPosts = blogPosts
    .filter(p => 
      p.id !== post.id && 
      p.categories.some(category => post.categories.includes(category))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Category Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <div 
                  key={index}
                  className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}
                >
                  {category}
                </div>
              ))}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {post.date}
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                {post.author}
              </div>
              <div className="text-sm">
                {post.readTime}
              </div>
              <button className="flex items-center text-emerald-600 hover:text-emerald-700 transition-colors duration-300">
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12">
              <img 
                src={post.image.replace('w=800', 'w=1200')}
                alt={post.imageAlt}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-700 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Article Footer */}
            <div className="border-t border-gray-200 pt-8 mt-12">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                <div className="flex items-start gap-4 flex-1">
                  {/* Author Headshot - Using new cropped image */}
                  <div className="flex-shrink-0">
                    <img 
                      src="/images/seattle_headshot_cropped.jpg"
                      alt="Joe Perez - Founder of Seattle Content Studio"
                      className="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                  </div>
                  
                  {/* Author Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      About {post.author}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Seattle Content Studio specializes in AI-driven content creation, 
                      technical documentation, and automation solutions for tech-savvy businesses. 
                      Founded by Joe, who brings deep expertise in tech writing, AI consulting, 
                      and app development to help Pacific Northwest businesses amplify their digital presence.
                    </p>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 whitespace-nowrap">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-all duration-300 group"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {relatedPost.categories.map((category, index) => (
                        <div 
                          key={index}
                          className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {relatedPost.date} • {relatedPost.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;