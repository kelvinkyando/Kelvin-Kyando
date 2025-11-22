import React from 'react';

const Resources: React.FC = () => {
  const items = [
    {
      category: "Book",
      title: "Sapiens: A Brief History of Humankind",
      description: "An exploration of human history and our impact.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPGM2hBp_bJO1d6lV9ynxVj5UeI06nVFQ329dDYWuyeeZw-CHKluY_O4z_qL4oAVCo85aP-WtDjItxM1wuneApBhYbjh6nG1S0QSwyd7gzdCz5rvq0_v7QTNinlwayetlF9xJTBayzIXvTPk2OrRYxJAg7cw4Tz9Igb4-dvs4P1_KxzHvK5GYx3xtO9Cg9aBYqwQt3cDGVzCk2AJczxYVrwZCLKLt3DO-edYGE-mJnrpHi4xEl6j-aYJOBRVl0hUwz2eHfI8GyJ7TV",
      cta: "Buy Here"
    },
    {
      category: "Music",
      title: "Folklore by Taylor Swift",
      description: "An indie folk and alternative rock album.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhRMxeZnTMCuZFtm8xgHAZBZ-WCHuTYEVfuHCmx9onCt8vAOyMxaplFtEzkjfVNLHZEVAXeCA4IAfwoMhVUX-Qgq_SXAUSDC0GbVQXjN2K6Zmx4r38vxllJeqt4vL-xc_RhYxrwcMAOjm9SgnX6rqATyWPaACnL0ZKiFfVps3bz-5_Ugau7AIp0wd15Nq1_OSxulhTG2fUtg4kRdNxbX88vEdkpUIrxndkzvltM1OdNxrnBb11TcGzjNxs3xxcD5xBg71NEZ-maccd",
      cta: "Listen Now"
    },
    {
      category: "Tool",
      title: "Figma",
      description: "My go-to interface design tool for all projects.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpPft-SWp_cWzdWI0AxG-WY_SikJT7tmdnoqnS6oNZzLwF9YDCPMJvMIvZZ-JfQWakLQd-Wbh4XCYqDWyMCRtRoWWD0gHSvdz1cOUboaIFHKshdWt6oe66Mu1HrqecbqeAmqVUE8vkRSbbr1q_4UPZ0XbdMZFvj9_HtClTNhfdAQ1iQLMmBDqtY9BYwz6kG-1LtH6sl9HYNN1SqrpxNuLskPPSlC73a6TnbmI-Sv9AcW73eHPMW_s_JBErLmckjU8zaz4KvxQzSn3U",
      cta: "View Details"
    },
    {
      category: "Book",
      title: "The Laws of Simplicity",
      description: "Ten laws of simplicity for business, technology, and design.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAec9eZd3y_CY3hMOZr-TWyWSbRYCybD_U5wcXcXjheB8h5oFqmYfC7Q_0AkjfBP-4zeFpyrzlgNJ7dQxsLgLqBGUBDqejpeG0QVwzWQ8ah3l26lPcDvuHhmgRouitVLK3IktyQaNxO1pEetpwkbqOn_G6u3wrCsEtFpoRmiIrxchoz8aqt3kuuzEOci3C6dUlw9xOVKOrKZvDztx7V3GrR9GD-YAIA-uB7FkoRKzBiTil_j7Gfcb9jUMGoDRclDxrUMOwwosMTbeps",
      cta: "Buy Here"
    },
    {
      category: "Tool",
      title: "Notion",
      description: "The all-in-one workspace for notes, tasks, and wikis.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkbQAM8xvK6Nx2R2XCf4TR9Geok344r42WmE5VEtA8BW5oSIVNwbGz8kRABWgp2ZrB8TU0JIoP1fSMnt5mz5YyCpVDlUyfkbMcHOvB4eUAnpGN5y0xtv3u6Y0pl4fmWegLPKptY-IjU1mel4jCyuae1gFMNpmVm85j8NuvB3LeKRpEnJOtVhc_ecp18pykSQEI9Ydg1cSlqBZgBkHWAsuLv59XWjjpRXG1YNF8rbht_JGXQ_PENtqdrUhqE8U8pVd9Fommtj-w9yMV",
      cta: "View Details"
    },
    {
      category: "Merchandise",
      title: "Aesthetic Desk Mat",
      description: "A minimal and stylish addition to any workspace.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOS1l-ja3Le9YqDuQXwmHqkpwojQo5dyLcJtchtGHvlZlq5hNOfvWFQ1vRwyqxsbLeIgEDlD7gvdBVhX-oYRg0AgBCHnguZAIBmJgf5A7j31YOn2no8Z2c4U5oLwyMQaq910xvSr35_Vxap1bjbH-WCA6XjRyiyN1LKe5cVuH_esWcsK_Xx0D1cfregZ5hRHJVfX-z09NZhFfud4mLuGmR3zwZLAQTowllw4gTpeo_id23VOKlL6NQ13c5N50R6pa9vGfB9cVqColn",
      cta: "Shop Now"
    }
  ];

  return (
    <div className="mt-16 max-w-[1200px] mx-auto px-4">
      <div className="text-center flex flex-col items-center gap-4 mb-12 animate-fade-in">
        <h1 className="font-serif text-5xl md:text-6xl font-bold leading-tight tracking-tight text-text-main dark:text-text-main-dark">Things I Love</h1>
        <p className="max-w-xl text-base font-normal leading-relaxed text-text-sub dark:text-text-sub-dark">
          A curated collection of books, tools, and music that inspire my work and life.
        </p>
      </div>

      <div className="flex justify-center gap-2 p-3 flex-wrap mb-12">
        {['All', 'Books', 'Music', 'Tools', 'Merchandise'].map((filter, idx) => (
          <button 
            key={filter}
            className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 text-sm font-medium transition-colors ${idx === 0 ? 'bg-primary/20 text-primary' : 'bg-surface-light dark:bg-surface-dark text-text-main dark:text-text-main-dark hover:bg-primary/10'}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
        {items.map((item, index) => (
          <div key={index} className="group flex flex-col gap-4 bg-surface-light dark:bg-surface-dark p-4 rounded-xl transition-colors">
            <div className="w-full aspect-[3/4] rounded-lg overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-105" 
                style={{ backgroundImage: `url('${item.image}')` }}
              ></div>
            </div>
            <div className="flex flex-col gap-1.5">
              <p className="text-xs font-medium uppercase tracking-widest text-primary">{item.category}</p>
              <p className="text-lg font-bold leading-tight text-text-main dark:text-text-main-dark">{item.title}</p>
              <p className="text-sm font-normal leading-normal text-text-sub dark:text-text-sub-dark">{item.description}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary mt-1 hover:underline cursor-pointer">
                {item.cta} <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;