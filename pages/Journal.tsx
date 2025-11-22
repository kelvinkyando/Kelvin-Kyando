import React from 'react';

const Journal: React.FC = () => {
  const posts = [
    {
      date: "October 26, 2023",
      title: "Reflections on a Decade of Design",
      description: "A brief, two-sentence summary of the post's core idea and what the reader can expect to learn or experience through this reflective journey into the past decade of design evolution.",
      tags: ["Design", "Career"]
    },
    {
      date: "September 15, 2023",
      title: "The Art of Side Projects",
      description: "Exploring how personal projects can fuel creativity and professional development outside the confines of a 9-to-5, turning passion into tangible skills and opportunities.",
      tags: ["Technology", "Personal Growth"]
    },
    {
      date: "August 02, 2023",
      title: "Navigating the Unfamiliar: A Traveler's Notes",
      description: "Chronicles from a journey through Southeast Asia, focusing on how stepping out of one's comfort zone broadens perspectives and fosters resilience and personal growth.",
      tags: ["Travel", "Personal Growth"]
    }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        
        {/* Sidebar */}
        <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
          <div className="sticky top-28 space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold font-serif text-text-main dark:text-text-main-dark">Topics</h3>
              <ul className="space-y-2">
                <li><a className="block text-primary font-medium hover:underline cursor-pointer">All</a></li>
                <li><a className="block text-text-sub dark:text-text-sub-dark hover:text-primary hover:underline cursor-pointer">Design</a></li>
                <li><a className="block text-text-sub dark:text-text-sub-dark hover:text-primary hover:underline cursor-pointer">Technology</a></li>
                <li><a className="block text-text-sub dark:text-text-sub-dark hover:text-primary hover:underline cursor-pointer">Personal Growth</a></li>
                <li><a className="block text-text-sub dark:text-text-sub-dark hover:text-primary hover:underline cursor-pointer">Travel</a></li>
              </ul>
            </div>
            <div className="relative">
              <input 
                className="w-full h-10 pl-10 pr-4 rounded-lg border border-surface-light dark:border-surface-dark bg-white dark:bg-surface-dark focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none text-sm text-text-main dark:text-text-main-dark placeholder-text-sub dark:placeholder-text-sub-dark" 
                placeholder="Search articles..." 
                type="text"
              />
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-sub dark:text-text-sub-dark text-lg">search</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="mb-12">
            <h1 className="text-text-main dark:text-text-main-dark text-5xl md:text-6xl font-black font-serif tracking-tight">The Journal</h1>
            <p className="text-text-sub dark:text-text-sub-dark text-lg mt-4 max-w-2xl">
              A collection of thoughts on design, technology, and personal growth, penned with curiosity.
            </p>
          </div>

          <div className="space-y-16">
            {posts.map((post, index) => (
              <article key={index} className="group p-6 -mx-6 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                <div className="flex flex-col gap-4">
                  <p className="text-text-sub dark:text-text-sub-dark text-sm font-normal">{post.date}</p>
                  <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-main dark:text-text-main-dark group-hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-text-sub dark:text-text-sub-dark text-base font-normal leading-relaxed max-w-3xl">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs font-medium text-text-sub dark:text-text-sub-dark bg-background-light dark:bg-background-dark border border-surface-light dark:border-surface-dark rounded-full px-3 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-primary font-bold text-sm cursor-pointer hover:underline">
                      <span>Read More</span>
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 text-sm">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;