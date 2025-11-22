import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 md:gap-24 px-4 md:px-10 lg:px-20 xl:px-40 py-5 max-w-[1400px] mx-auto">
      {/* Hero Section */}
      <div className="py-16 md:py-24 text-center">
        <div className="flex flex-col gap-4 animate-fade-in">
          <h1 className="text-text-main dark:text-text-main-dark text-4xl md:text-6xl font-serif font-bold leading-tight">
            A Space for Curiosity & Creativity
          </h1>
          <h2 className="text-text-sub dark:text-text-sub-dark text-base md:text-lg font-display font-normal leading-relaxed max-w-2xl mx-auto">
            Welcome to my digital garden. A personal space for exploring ideas, sharing stories, and documenting my creative journey.
          </h2>
        </div>
      </div>

      {/* Latest Musings */}
      <section>
        <div className="flex justify-between items-baseline px-4 pb-6">
           <h2 className="text-text-main dark:text-text-main-dark text-2xl md:text-3xl font-serif font-bold leading-tight tracking-[-0.015em]">
            Latest Musings
          </h2>
           <Link to="/journal" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <span>View All Stories</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
       
        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <div className="px-4">
            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 rounded-lg group cursor-pointer p-6 bg-surface-light dark:bg-surface-dark hover:shadow-md transition-all duration-300">
              <div className="flex flex-[2_2_0px] flex-col gap-4 justify-center">
                <div className="flex flex-col gap-2">
                  <p className="text-text-sub dark:text-text-sub-dark text-sm font-normal leading-normal">October 26, 2023</p>
                  <p className="text-text-main dark:text-text-main-dark text-lg font-bold leading-tight group-hover:text-primary transition-colors">The Art of Doing Nothing</p>
                  <p className="text-text-sub dark:text-text-sub-dark text-sm font-normal leading-relaxed">In a world obsessed with productivity, I'm rediscovering the profound importance of intentional rest and unstructured time. A reflection on slowing down.</p>
                </div>
                <span className="flex items-center gap-2 text-sm font-medium leading-normal text-primary hover:underline w-fit">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
              <div 
                className="w-full sm:w-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 min-h-[200px] transform group-hover:scale-[1.02] transition-transform duration-300" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAb7he16B6pUywz-ynnTcwLkOrqPNvM-0tlQ5AtKccPQkSaDtcmXN9T4CZpzY0UCDoDEzHZ1Th33G7lecofMMSyykOdMAFGeo7hR206pDjoi71D3hULk92sQsCzSd5BA7wdvoCB8veYT_37jMgjtiTpZ2riWVqO2nzPXlUcyvn9iMg45xYj9-RayEIHOeAd21E62yHhcGjhMuF1zXQ7rYhqa9UVJErMgWJqpk32tDGVOvUmxawCQBQObY1-ldTNp8HSvKPqWnDmlYj")' }}
              ></div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="px-4">
            <div className="flex flex-col sm:flex-row items-stretch justify-between gap-6 rounded-lg group cursor-pointer p-6 bg-surface-light dark:bg-surface-dark hover:shadow-md transition-all duration-300">
              <div className="flex flex-[2_2_0px] flex-col gap-4 justify-center">
                <div className="flex flex-col gap-2">
                  <p className="text-text-sub dark:text-text-sub-dark text-sm font-normal leading-normal">October 15, 2023</p>
                  <p className="text-text-main dark:text-text-main-dark text-lg font-bold leading-tight group-hover:text-primary transition-colors">Designing for Serenity</p>
                  <p className="text-text-sub dark:text-text-sub-dark text-sm font-normal leading-relaxed">How can we create digital experiences that feel calm and respectful? A deep dive into the principles of minimalist UI and mindful interaction design.</p>
                </div>
                <span className="flex items-center gap-2 text-sm font-medium leading-normal text-primary hover:underline w-fit">
                  <span>Read More</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </span>
              </div>
              <div 
                className="w-full sm:w-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 min-h-[200px] transform group-hover:scale-[1.02] transition-transform duration-300" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDkFXONedldbtZX66sYTK7XLqK8oqG5-HWKGMYiut0hbyOun7BGCaT8FPiCargcJ8y7q7Vf2vNaAs5bMTgkEPVl1riX7csIIQoko5XU7p7HO4pwl2PUYN0XbTA7hnmM-JzsrnmjJmlMhSDCTbOQpYqCj8Cuu9YLkLiad-33Ru52LDuF2EUr8AnxxrbMiShr6OQvAs0EPYmRZUEhnUKVeHxoyX9of7PUh19XsjA5sYx9rDCY5W8qxp0_hBp0STwuDH8PrPoGqUskDMX2")' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Captures */}
      <section>
        <div className="flex justify-between items-baseline px-4 pb-6">
          <h2 className="text-text-main dark:text-text-main-dark text-2xl md:text-3xl font-serif font-bold leading-tight tracking-[-0.015em]">Recent Captures</h2>
          <Link to="/photography" className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            <span>View All Photos</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
          {[
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBKrRMVJh9lS7tpdAXqvuXpFlEM1OBFmXIoZxQmbiVxnqYCbm3vcfLPT5GFdJPWg5Wx3eVKHO7jabygrvIEV2fc69dznyE8HymDJKPRevdParrMERJO8-5rtG8ezuF_4M07pscgIXhh42DvzvcFovEbltbG-6EvcN3jwJauH7K8aL0-4fHQLNua5-_g_eer-UwSwE-drAeuiHYmuhhgZEQPX9q_7Q6-Ah9L-6PuWp5iHOvGmLtlXmuuPLymX-IoamxXHom3iM3LtxSV',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCohh1k157fcVcqbq3EVCyF1I_pQXH02LDcW6vvzxN72YGW9MsnsBkXdv6w3QSSiWCNqvHev0lvcvh_BRis-wsZ-CSUmEgUIJDsaBgYZew2xqGN8jUhFCoE0lL_vPNa5b9oCWoGiND_bM8BobEekKJPuULaZV3gfrESkkK9lD6b3HoSaAv9VkFmK27DV1u450P7XY9ypJKZiAgVIGbaL98kI3iY6e07vJoho_OOmyqgKioot58ug23XvzsqXWlB7TT7HIPVc6KkEro0',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAmCk-JqUi8f5jhsYUq-W_MV5wHm2NMux1aJno9-VfWU-XMy1b_epEjZGol232vWbdhIF5DEIN1XL6Y568OKTgxWKomcOvx9-NfZiBBdzpwPtZczzX650gzmZydz_R1zdLUhyqU4ZFUe9klYshWPgOlMgIbo_yEbZ51YU0q-ddqsBt7q9wLCx2vlZaehHZEztwAZzCEIuE-hcmbeWsGZ7OEJRKqA0_uHXwHcKVombMvrRrVcm9LwcIeGzIuSIRRrJDrBVsnyW7F8Kkx',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuATMMlvRXKabA1POPjKd2zVZAO1wyTFz5EgzYGBt0-tk0NmGclJ-QX3twDxigXbOFZrfIEXEt8cRwVHF-o41xf_PksMCcf9xjYd9w5wtT0gG-z9nCBX22xATYvYclQyAOQTHkhqiwPZIkjOKgUm-FtX7qImK8KR5Tjh2bG9IbPW9XX9Ci0Vav6p__fU5nnhuy3XaNSWuMxD5-DAAKLtdQsL_BCV_tuIL9RyQOvQj_b6mLkiHU7NnfZdjn3e4e_HdVCDWwT31_Bfjd0A',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDcM7MTlE-OXeHxdGeXrYXo4k0AMw7Nbsjf7Ghu7UvbH8AYR1fNho_RRxxhnPzGS_TOlMAdBE1uBdyj7yQyNQCCejGykcdWmeg7zMwdh5H95m1D_YcIzAByW-48MW2sCBr0KWVRLpXiNfi3jAarG-RmJGVobt0lrXLkC0IFMsnkQct04QVajjfwVA3mXBJNQrZVDQYITA9Cb8Bpx2fVldXzpdAox3W21P-h6m_mmjHBDrTs2NgLG1ZgIkdPbfQG5weMeEkcWWZqjS_6',
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDxZ80O4PY1Bg-9k2lXZEQcShpfHPfDL4X0PvAGf0JgoX_VM8A1dYlEGw4-u6DnHrHfCiBp3THp3R8lssjwdgBeJNHNenNOCC1fZjVfQwDjMq_xrA1PRkXbaLTPCH4HnYWzoqEvzHc-rVSppZcEPY7ws5OGoTKHn5Y9ytz7ssx4KvpwTzZwDFQGJ77TmHc829fzQn98cCHsP_o1lcpIHxWHe3JvuiAPQb3mG91pcQdH8wfy42gppYxwrhYxHMn3ebNp-zN715jiW6Bi'
          ].map((url, i) => (
            <div 
              key={i}
              className="aspect-square bg-cover bg-center rounded-lg hover:opacity-90 transition-opacity cursor-pointer border border-surface-light dark:border-surface-dark" 
              style={{ backgroundImage: `url('${url}')` }}
            ></div>
          ))}
        </div>
      </section>

      {/* Featured Resources */}
      <section>
        <h2 className="text-text-main dark:text-text-main-dark text-2xl md:text-3xl font-serif font-bold leading-tight tracking-[-0.015em] px-4 pb-6">Featured Resources</h2>
        <div className="px-4 flex flex-col divide-y divide-surface-light dark:divide-surface-dark">
          <div className="py-4">
            <Link to="/resources" className="group block p-4 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <h3 className="font-bold text-text-main dark:text-text-main-dark text-lg group-hover:text-primary transition-colors">Refactoring UI</h3>
              <p className="text-sm text-text-sub dark:text-text-sub-dark mt-1">A book on design principles for developers.</p>
            </Link>
          </div>
          <div className="py-4">
            <Link to="/resources" className="group block p-4 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <h3 className="font-bold text-text-main dark:text-text-main-dark text-lg group-hover:text-primary transition-colors">The Laws of Simplicity</h3>
              <p className="text-sm text-text-sub dark:text-text-sub-dark mt-1">John Maeda's classic guide on simplicity in design, technology, and life.</p>
            </Link>
          </div>
          <div className="py-4">
             <Link to="/resources" className="group block p-4 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
              <h3 className="font-bold text-text-main dark:text-text-main-dark text-lg group-hover:text-primary transition-colors">Figma</h3>
              <p className="text-sm text-text-sub dark:text-text-sub-dark mt-1">My go-to tool for all things interface design and prototyping.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;