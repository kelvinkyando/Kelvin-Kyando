import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-center gap-8 text-center mb-12 animate-fade-in">
          <div className="flex flex-col items-center gap-5">
            <img 
              className="aspect-square rounded-full w-32 h-32 object-cover shadow-lg border-4 border-surface-light dark:border-surface-dark" 
              alt="Kelvin Kyando" 
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3387&auto=format&fit=crop" 
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold leading-tight text-text-main dark:text-text-main-dark">Hi, I'm Kelvin.</h1>
              <p className="max-w-xl text-base text-text-sub dark:text-text-sub-dark">
                I write, design, and build things for the web.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-sm">
          <div className="prose prose-lg text-text-main dark:text-text-main-dark space-y-6 font-display leading-relaxed text-center sm:text-left">
            <p>
              I’m someone who likes to learn, build, and understand life in my own way. I use this space to share my thoughts, small stories, and things I’m working on.
            </p>
            <p>
              I write about my experiences, what I’m learning, and the moments that shape me. Sometimes it’s personal, sometimes it’s just something I found interesting. I also share photos, ideas, and things I’m exploring.
            </p>
            <p>
               This blog is my blog, my journal, a quiet place where I can keep memories, reflect, and create freely. If any of it connects with you, you’re welcome to follow along.
            </p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: 'group', label: 'LinkedIn' },
              { icon: 'chat_bubble', label: 'Twitter' },
              { icon: 'code', label: 'GitHub' }
            ].map((item) => (
              <a key={item.label} href="#" className="flex flex-col items-center gap-2 text-center min-w-[80px] p-3 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-all duration-200 group">
                <div className="flex items-center justify-center rounded-full bg-surface-light dark:bg-surface-dark p-4 group-hover:bg-background-light dark:group-hover:bg-background-dark group-hover:shadow-md transition-all">
                  <span className="material-symbols-outlined text-text-main dark:text-text-main-dark">{item.icon}</span>
                </div>
                <p className="text-sm font-medium text-text-sub dark:text-text-sub-dark group-hover:text-primary">{item.label}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;