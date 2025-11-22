
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  const [view, setView] = useState<'stories' | 'create_story' | 'albums' | 'create_album' | 'resources' | 'create_resource'>('stories');
  const [showNotification, setShowNotification] = useState(false);

  const handlePublish = (targetView: 'stories' | 'albums' | 'resources') => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
    setView(targetView);
  };

  const getNavItemClass = (active: boolean) => 
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active 
        ? 'bg-primary/10 text-primary font-medium' 
        : 'hover:bg-surface-light dark:hover:bg-background-dark text-text-main dark:text-text-main-dark'
    }`;

  return (
    <div className="relative min-h-screen w-full bg-background-light dark:bg-background-dark font-display text-text-main dark:text-text-main-dark transition-colors duration-300">
      {/* Toast Notification */}
      {showNotification && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-lg animate-bounce-in">
          <span className="material-symbols-outlined text-green-500">task_alt</span>
          <p className="text-sm font-medium text-text-main dark:text-text-main-dark">Item published successfully!</p>
          <button onClick={() => setShowNotification(false)} aria-label="Close notification">
            <span className="material-symbols-outlined text-gray-400 text-sm">close</span>
          </button>
        </div>
      )}

      <div className="flex h-full w-full">
        {/* SideNavBar */}
        <aside className="hidden md:flex h-screen min-h-[700px] w-64 flex-col justify-between border-r border-surface-light dark:border-surface-dark bg-white dark:bg-surface-dark p-4 sticky top-0 transition-colors">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-surface-light dark:border-surface-dark" 
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3387&auto=format&fit=crop")' }}
              ></div>
              <div className="flex flex-col">
                <h1 className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal">Admin Panel</h1>
                <p className="text-text-sub dark:text-text-sub-dark text-sm font-normal leading-normal">Content Management</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              <button 
                onClick={() => setView('stories')} 
                className={getNavItemClass(view === 'stories' || view === 'create_story')}
              >
                <span className="material-symbols-outlined">bookmark</span>
                <p className="text-sm leading-normal">Stories</p>
              </button>
              <button 
                onClick={() => setView('albums')} 
                className={getNavItemClass(view === 'albums' || view === 'create_album')}
              >
                <span className="material-symbols-outlined">photo_album</span>
                <p className="text-sm leading-normal">Albums</p>
              </button>
              <button 
                onClick={() => setView('resources')} 
                className={getNavItemClass(view === 'resources' || view === 'create_resource')}
              >
                <span className="material-symbols-outlined">link</span>
                <p className="text-sm leading-normal">Resources</p>
              </button>
            </nav>
          </div>
          <div className="flex flex-col gap-1">
            <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-light dark:hover:bg-background-dark text-text-main dark:text-text-main-dark transition-colors">
              <span className="material-symbols-outlined">home</span>
              <p className="text-sm font-medium leading-normal">Back to Home</p>
            </Link>
            <Link to="/login" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-surface-light dark:hover:bg-background-dark text-text-main dark:text-text-main-dark transition-colors">
              <span className="material-symbols-outlined">logout</span>
              <p className="text-sm font-medium leading-normal">Logout</p>
            </Link>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
          <div className="max-w-5xl mx-auto flex flex-col gap-8">
            
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between mb-4">
                 <div className="flex items-center gap-2 text-text-main dark:text-text-main-dark">
                    <Link to="/" className="material-symbols-outlined">home</Link>
                    <span className="font-bold text-lg">Admin Panel</span>
                 </div>
                 {/* Mobile Nav Dropdown could go here, but sticking to simple layout for now */}
                 <div className="flex gap-2">
                    <button onClick={() => setView('stories')} className={`p-2 rounded-full ${view.includes('stor') ? 'bg-primary text-white' : 'bg-surface-light dark:bg-surface-dark'}`}>
                        <span className="material-symbols-outlined text-sm">bookmark</span>
                    </button>
                     <button onClick={() => setView('albums')} className={`p-2 rounded-full ${view.includes('album') ? 'bg-primary text-white' : 'bg-surface-light dark:bg-surface-dark'}`}>
                        <span className="material-symbols-outlined text-sm">photo_album</span>
                    </button>
                     <button onClick={() => setView('resources')} className={`p-2 rounded-full ${view.includes('resource') ? 'bg-primary text-white' : 'bg-surface-light dark:bg-surface-dark'}`}>
                        <span className="material-symbols-outlined text-sm">link</span>
                    </button>
                 </div>
            </div>

            {/* Content Switches */}
            {view === 'stories' && (
              <section className="animate-fade-in">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <h1 className="text-text-main dark:text-text-main-dark text-3xl md:text-4xl font-heading font-bold leading-tight">Manage Stories</h1>
                  <button 
                    onClick={() => setView('create_story')}
                    className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined mr-2 text-base">add</span>
                    <span className="truncate">Add New Story</span>
                  </button>
                </div>
                
                <div className="overflow-hidden rounded-lg border border-surface-light dark:border-surface-dark bg-white dark:bg-surface-dark shadow-sm transition-colors">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead className="border-b border-surface-light dark:border-gray-700 bg-background-light dark:bg-background-dark">
                        <tr>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[40%] text-xs uppercase font-semibold tracking-wider">Title</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[20%] text-xs uppercase font-semibold tracking-wider">Status</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[25%] text-xs uppercase font-semibold tracking-wider">Date Modified</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[15%] text-xs uppercase font-semibold tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-light dark:divide-gray-700">
                        {[
                          { title: "The Art of Minimalism", status: "Published", date: "June 1, 2024" },
                          { title: "A Journey Through the Alps", status: "Published", date: "May 28, 2024" },
                          { title: "Thoughts on Modern Typography", status: "Draft", date: "May 15, 2024" }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                            <td className="px-4 py-4 text-text-main dark:text-text-main-dark text-sm font-medium">{row.title}</td>
                            <td className="px-4 py-4">
                              <span className={`inline-flex items-center justify-center rounded-full h-6 px-3 text-xs font-medium ${row.status === 'Published' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'}`}>
                                {row.status}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-text-sub dark:text-text-sub-dark text-sm">{row.date}</td>
                            <td className="px-4 py-4 text-sm font-medium">
                              <div className="flex items-center gap-4">
                                <button className="text-primary hover:underline">Edit</button>
                                <button className="text-red-600 dark:text-red-400 hover:underline">Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {view === 'albums' && (
              <section className="animate-fade-in">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <h1 className="text-text-main dark:text-text-main-dark text-3xl md:text-4xl font-heading font-bold leading-tight">Manage Albums</h1>
                  <button 
                    onClick={() => setView('create_album')}
                    className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined mr-2 text-base">add_photo_alternate</span>
                    <span className="truncate">Add New Album</span>
                  </button>
                </div>

                <div className="overflow-hidden rounded-lg border border-surface-light dark:border-surface-dark bg-white dark:bg-surface-dark shadow-sm transition-colors">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead className="border-b border-surface-light dark:border-gray-700 bg-background-light dark:bg-background-dark">
                        <tr>
                           <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[10%] text-xs uppercase font-semibold tracking-wider">Cover</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[40%] text-xs uppercase font-semibold tracking-wider">Album Title</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[15%] text-xs uppercase font-semibold tracking-wider">Photos</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[20%] text-xs uppercase font-semibold tracking-wider">Date Created</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[15%] text-xs uppercase font-semibold tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-light dark:divide-gray-700">
                        {[
                          { title: "Kyoto, Spring 2023", count: 15, date: "April 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUwvaWPjQYZtHK7PesThbxw5wJk1nS5h0btNl5YHHwwaM58aNjAMImvcRa2qbwG7NHoNSgALACIACMz6r8pyQOhDa2ph3_3U_lfRfBacJpe1XgByxnO8_PM2ByIOAuShjiqHfw6wAbthoiikuRCzBNHy2Rkyjy99lwpkLzhhWa551b1vqWLxo9qEO6IFrvbQ8yCtZmzHelq325naJ-wpoSO2orViu4SxfPCvdixAuQWWmowTdtipSfXnmzputCnLmi-YSlyED_OT88" },
                          { title: "Andalusia Roadtrip", count: 24, date: "March 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMK1HJgWQyhCVTLKK1QeKypJNJloQ4VvN4cn-LiISBPO_5EW9N6A_ZAtwIIv_11YH9BlK5yLoIKxj03fDl7I75CwxPKVqO2XjkQAyaI9BkZS99003qAeC4EZA8ekaRC-OFiIuuybff54fxnEsqykz5q9ZG6l7e_w0efC6GSlbiCDKWTcXToBpeIiJ30y3kKty6ln28EQDduXmHISN2mIIVbHhla0Aib-D5weGi7EDG-qono4XfMCB4vxw-FV8CinmL6eeF_5G5lMhG" },
                          { title: "Parisian Moments", count: 18, date: "Jan 2023", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1Sraggau11cviS5AUyqAPR79K2iXOCXIOm3nqPm9AJ5ecx4O80KWInFFShZ1FVgh_tS0P8cKiOcsq4bAfIlJ0ImVNnuQrc8wNX_UDzdfWeHRUWrrxSR0az38c3TvwyjU2UQbfqpHi6wJR_gRWm875gCLkOLI0WPvSsIM62AsG8Kr4ZWi0LM82gn8dms7NLeKp7Ao6T0qICLYuQu-lOms-9gnLmrXh6Aa_RlzuBOvbFHuVHjH6riiiNM3Cu5yzL9AmF3ioB40hbttm" }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                             <td className="px-4 py-4">
                                <div className="w-10 h-10 rounded bg-cover bg-center" style={{backgroundImage: `url('${row.img}')`}}></div>
                             </td>
                            <td className="px-4 py-4 text-text-main dark:text-text-main-dark text-sm font-medium">{row.title}</td>
                            <td className="px-4 py-4 text-text-sub dark:text-text-sub-dark text-sm">{row.count}</td>
                            <td className="px-4 py-4 text-text-sub dark:text-text-sub-dark text-sm">{row.date}</td>
                            <td className="px-4 py-4 text-sm font-medium">
                              <div className="flex items-center gap-4">
                                <button className="text-primary hover:underline">Edit</button>
                                <button className="text-red-600 dark:text-red-400 hover:underline">Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {view === 'resources' && (
              <section className="animate-fade-in">
                <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                  <h1 className="text-text-main dark:text-text-main-dark text-3xl md:text-4xl font-heading font-bold leading-tight">Manage Resources</h1>
                  <button 
                    onClick={() => setView('create_resource')}
                    className="flex min-w-[84px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                  >
                    <span className="material-symbols-outlined mr-2 text-base">add_link</span>
                    <span className="truncate">Add New Resource</span>
                  </button>
                </div>

                <div className="overflow-hidden rounded-lg border border-surface-light dark:border-surface-dark bg-white dark:bg-surface-dark shadow-sm transition-colors">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px]">
                      <thead className="border-b border-surface-light dark:border-gray-700 bg-background-light dark:bg-background-dark">
                        <tr>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[35%] text-xs uppercase font-semibold tracking-wider">Title</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[20%] text-xs uppercase font-semibold tracking-wider">Category</th>
                           <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[30%] text-xs uppercase font-semibold tracking-wider">Description</th>
                          <th className="px-4 py-3 text-left text-text-sub dark:text-text-sub-dark w-[15%] text-xs uppercase font-semibold tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-light dark:divide-gray-700">
                        {[
                          { title: "Sapiens: A Brief History", category: "Book", desc: "An exploration of human history..." },
                          { title: "Figma", category: "Tool", desc: "Interface design tool." },
                          { title: "Folklore by Taylor Swift", category: "Music", desc: "Indie folk album." }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-background-light dark:hover:bg-background-dark transition-colors">
                            <td className="px-4 py-4 text-text-main dark:text-text-main-dark text-sm font-medium">{row.title}</td>
                            <td className="px-4 py-4">
                               <span className="inline-flex items-center justify-center rounded-full h-6 px-3 text-xs font-medium bg-primary/10 text-primary">
                                {row.category}
                              </span>
                            </td>
                            <td className="px-4 py-4 text-text-sub dark:text-text-sub-dark text-sm truncate max-w-[200px]">{row.desc}</td>
                            <td className="px-4 py-4 text-sm font-medium">
                              <div className="flex items-center gap-4">
                                <button className="text-primary hover:underline">Edit</button>
                                <button className="text-red-600 dark:text-red-400 hover:underline">Delete</button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>
            )}

            {view === 'create_story' && (
              <section className="animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setView('stories')} className="p-2 hover:bg-surface-light dark:hover:bg-surface-dark rounded-full transition-colors text-text-main dark:text-text-main-dark">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <h2 className="text-text-main dark:text-text-main-dark text-[22px] font-bold font-heading leading-tight tracking-[-0.015em]">Create New Story</h2>
                </div>
                
                <div className="flex flex-col gap-6 p-6 bg-white dark:bg-surface-dark rounded-lg border border-surface-light dark:border-surface-dark shadow-sm transition-colors">
                  {/* TextField */}
                  <div className="flex flex-col">
                    <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="storyTitle">Title</label>
                    <input 
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark p-3 text-base font-normal" 
                      id="storyTitle" 
                      placeholder="Enter a title for your story" 
                    />
                  </div>
                  
                  {/* Rich Text Editor Toolbar Mock */}
                  <div>
                    <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2 block">Content</label>
                    <div className="rounded-lg border border-surface-light dark:border-surface-dark overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 focus-within:border-primary">
                      <div className="flex items-center flex-wrap gap-1 p-2 border-b border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark">
                         {['format_h1', 'format_h2', 'format_bold', 'format_italic', 'format_underlined', 'format_quote', 'format_list_bulleted', 'format_list_numbered'].map(icon => (
                           <button key={icon} className="p-2 rounded hover:bg-surface-light dark:hover:bg-surface-dark text-text-sub dark:text-text-sub-dark transition-colors">
                             <span className="material-symbols-outlined text-xl">{icon}</span>
                           </button>
                         ))}
                      </div>
                      <textarea 
                        className="w-full min-h-[300px] p-4 border-0 focus:ring-0 bg-white dark:bg-surface-dark text-text-main dark:text-text-main-dark resize-y outline-none placeholder-text-sub dark:placeholder-text-sub-dark" 
                        placeholder="Start writing your story here..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Media Uploader */}
                  <div>
                    <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2 block">Media</label>
                    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-surface-light dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark text-center cursor-pointer hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                      <span className="material-symbols-outlined text-5xl text-text-sub dark:text-text-sub-dark">cloud_upload</span>
                      <p className="mt-2 text-sm text-text-sub dark:text-text-sub-dark">
                        <span className="font-semibold text-primary">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-text-sub dark:text-text-sub-dark mt-1">Photos, Videos, or GIFs</p>
                    </div>
                    
                    {/* Upload Mock Progress */}
                    <div className="mt-4 flex flex-col gap-3">
                      <div className="flex items-center gap-3 p-2 border border-surface-light dark:border-surface-dark rounded-lg bg-white dark:bg-surface-dark">
                        <img className="w-12 h-12 object-cover rounded" alt="uploaded thumbnail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq08BmypR3oq_jzg7RA2aUNsSj744FUS2NZermi8Vh_iS3fQlAn9fX55bZzhgM1N7z_4ejqL3adc3NkVnAQGpH0C-YVo80C12Z9Y_znH2ihDQBSLrt8UAmi9alCz0eHCVCrtEtMvCYdY3x9knsDzTziHjizOnR8tnLzDPuvdViRcSk5iZSWk6154qETpZDG2IStraPfqUrNQrXAJjcsgbEEE2L_kjOjcyIKK2_rKB9eJB8WDzjuujoVyC-16nMarFuQrsU1nMHJDJ6" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-text-main dark:text-text-main-dark">journey-alps-01.jpg</p>
                          <div className="w-full bg-surface-light dark:bg-gray-700 rounded-full h-1.5 mt-1">
                            <div className="bg-primary h-1.5 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                        </div>
                        <button className="text-text-sub dark:text-text-sub-dark hover:text-text-main dark:hover:text-text-main-dark"><span className="material-symbols-outlined">close</span></button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4 border-t border-surface-light dark:border-surface-dark">
                    <button 
                      onClick={() => setView('stories')}
                      className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-background-dark border border-surface-light dark:border-gray-600 text-text-main dark:text-text-main-dark text-sm font-bold leading-normal hover:bg-surface-light dark:hover:bg-surface-dark active:scale-[0.98] transition-all"
                    >
                      Cancel
                    </button>
                    <button className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-background-light dark:bg-background-dark text-text-main dark:text-text-main-dark text-sm font-bold leading-normal hover:bg-surface-light dark:hover:bg-surface-dark active:scale-[0.98] transition-all">
                      Save as Draft
                    </button>
                    <button 
                      onClick={() => handlePublish('stories')}
                      className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                    >
                      Publish
                    </button>
                  </div>
                </div>
              </section>
            )}

            {view === 'create_album' && (
              <section className="animate-fade-in">
                <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setView('albums')} className="p-2 hover:bg-surface-light dark:hover:bg-surface-dark rounded-full transition-colors text-text-main dark:text-text-main-dark">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <h2 className="text-text-main dark:text-text-main-dark text-[22px] font-bold font-heading leading-tight tracking-[-0.015em]">Create New Album</h2>
                </div>

                <div className="flex flex-col gap-6 p-6 bg-white dark:bg-surface-dark rounded-lg border border-surface-light dark:border-surface-dark shadow-sm transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="flex flex-col">
                      <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="albumTitle">Album Title</label>
                      <input 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark p-3 text-base font-normal" 
                        id="albumTitle" 
                        placeholder="E.g. Kyoto Spring 2024" 
                      />
                    </div>
                    {/* Date */}
                     <div className="flex flex-col">
                      <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="albumDate">Date</label>
                      <input 
                        type="month"
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark p-3 text-base font-normal" 
                        id="albumDate" 
                      />
                    </div>
                  </div>

                  {/* Cover Image */}
                  <div>
                    <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2 block">Cover Image</label>
                    <div className="flex items-center justify-center p-6 border-2 border-dashed border-surface-light dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark text-center cursor-pointer hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-colors h-32">
                      <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-3xl text-text-sub dark:text-text-sub-dark">image</span>
                        <p className="mt-1 text-sm text-text-sub dark:text-text-sub-dark">Upload Cover</p>
                      </div>
                    </div>
                  </div>

                   {/* Photos */}
                  <div>
                    <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2 block">Album Photos</label>
                    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-surface-light dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark text-center cursor-pointer hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-colors">
                      <span className="material-symbols-outlined text-5xl text-text-sub dark:text-text-sub-dark">add_a_photo</span>
                      <p className="mt-2 text-sm text-text-sub dark:text-text-sub-dark">
                        <span className="font-semibold text-primary">Click to upload</span> multiple photos
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4 border-t border-surface-light dark:border-surface-dark">
                    <button 
                      onClick={() => setView('albums')}
                      className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-background-dark border border-surface-light dark:border-gray-600 text-text-main dark:text-text-main-dark text-sm font-bold leading-normal hover:bg-surface-light dark:hover:bg-surface-dark active:scale-[0.98] transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => handlePublish('albums')}
                      className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                    >
                      Publish Album
                    </button>
                  </div>
                </div>
              </section>
            )}

            {view === 'create_resource' && (
              <section className="animate-fade-in">
                 <div className="flex items-center gap-4 mb-6">
                  <button onClick={() => setView('resources')} className="p-2 hover:bg-surface-light dark:hover:bg-surface-dark rounded-full transition-colors text-text-main dark:text-text-main-dark">
                    <span className="material-symbols-outlined">arrow_back</span>
                  </button>
                  <h2 className="text-text-main dark:text-text-main-dark text-[22px] font-bold font-heading leading-tight tracking-[-0.015em]">Add New Resource</h2>
                </div>

                <div className="flex flex-col gap-6 p-6 bg-white dark:bg-surface-dark rounded-lg border border-surface-light dark:border-surface-dark shadow-sm transition-colors">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <div className="flex flex-col">
                      <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="resTitle">Title</label>
                      <input 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark p-3 text-base font-normal" 
                        id="resTitle" 
                        placeholder="E.g. Refactoring UI" 
                      />
                    </div>
                     {/* Category */}
                     <div className="flex flex-col">
                      <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="resCategory">Category</label>
                      <select 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 px-3 text-base font-normal" 
                        id="resCategory" 
                      >
                        <option>Book</option>
                        <option>Music</option>
                        <option>Tool</option>
                        <option>Merchandise</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  
                  {/* Description */}
                   <div className="flex flex-col">
                      <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="resDesc">Description</label>
                      <textarea 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark min-h-[100px] placeholder:text-text-sub dark:placeholder:text-text-sub-dark p-3 text-base font-normal" 
                        id="resDesc" 
                        placeholder="Short description of the resource..."
                      />
                    </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Link */}
                    <div className="flex flex-col">
                      <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="resLink">Link URL</label>
                      <input 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark p-3 text-base font-normal" 
                        id="resLink" 
                        placeholder="https://..." 
                      />
                    </div>
                    {/* CTA Text */}
                     <div className="flex flex-col">
                      <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2" htmlFor="resCTA">CTA Text</label>
                      <input 
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark p-3 text-base font-normal" 
                        id="resCTA" 
                        placeholder="e.g. Buy Here" 
                      />
                    </div>
                  </div>

                  {/* Image */}
                  <div>
                    <label className="text-text-main dark:text-text-main-dark text-base font-medium leading-normal pb-2 block">Resource Image</label>
                    <div className="flex items-center justify-center p-6 border-2 border-dashed border-surface-light dark:border-gray-600 rounded-lg bg-background-light dark:bg-background-dark text-center cursor-pointer hover:border-primary hover:bg-surface-light dark:hover:bg-surface-dark transition-colors h-32">
                      <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-3xl text-text-sub dark:text-text-sub-dark">image</span>
                        <p className="mt-1 text-sm text-text-sub dark:text-text-sub-dark">Upload Image</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end items-center gap-3 pt-4 border-t border-surface-light dark:border-surface-dark">
                    <button 
                      onClick={() => setView('resources')}
                      className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-background-dark border border-surface-light dark:border-gray-600 text-text-main dark:text-text-main-dark text-sm font-bold leading-normal hover:bg-surface-light dark:hover:bg-surface-dark active:scale-[0.98] transition-all"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => handlePublish('resources')}
                      className="flex w-full sm:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:opacity-90 active:scale-[0.98] transition-all shadow-sm"
                    >
                      Add Resource
                    </button>
                  </div>
                </div>
              </section>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
