import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login logic
    if (username && password) {
      navigate('/admin');
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden font-display transition-colors duration-300">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center items-center py-5 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col w-full max-w-md">
            {/* Logo/Header */}
            <div className="flex justify-center mb-6">
              <Link to="/" className="text-text-main dark:text-text-main-dark text-2xl font-bold font-serif tracking-wide hover:text-primary transition-colors">K.</Link>
            </div>
            
            <div className="bg-white dark:bg-surface-dark border border-surface-light dark:border-surface-dark rounded-xl shadow-sm p-8 sm:p-10 transition-colors duration-300">
              <div className="layout-content-container flex flex-col flex-1">
                {/* Headline and Body Text */}
                <div className="text-center">
                  <h1 className="text-text-main dark:text-text-main-dark tracking-tight text-[28px] font-bold leading-tight pb-2 font-serif">Admin Access</h1>
                  <p className="text-text-sub dark:text-text-sub-dark text-base font-normal leading-normal pb-8">Sign in to manage your website.</p>
                </div>

                {/* Form Fields */}
                <form onSubmit={handleLogin} className="flex flex-col gap-y-5">
                  <label className="flex flex-col w-full">
                    <p className="text-text-main dark:text-text-main-dark text-sm font-medium leading-normal pb-2">Username</p>
                    <input 
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark px-4 text-base transition-all" 
                      placeholder="Enter your username"
                    />
                  </label>
                  <label className="flex flex-col w-full">
                    <p className="text-text-main dark:text-text-main-dark text-sm font-medium leading-normal pb-2">Password</p>
                    <div className="flex w-full flex-1 items-stretch">
                      <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-text-main-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-surface-light dark:border-surface-dark bg-background-light dark:bg-background-dark h-12 placeholder:text-text-sub dark:placeholder:text-text-sub-dark px-4 text-base transition-all" 
                        placeholder="Enter your password" 
                      />
                    </div>
                  </label>

                  {/* Sign In Button */}
                  <div className="pt-8 pb-4">
                    <button 
                      type="submit" 
                      className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-primary-dark active:scale-[0.98] active:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 dark:focus:ring-offset-surface-dark text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-200"
                    >
                      <span className="truncate">Sign In</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Back to Home Link */}
            <div className="flex justify-center mt-8">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-text-sub dark:text-text-sub-dark hover:text-primary active:text-primary-dark transition-colors duration-200 px-4 py-2 rounded-lg hover:bg-surface-light dark:hover:bg-surface-dark"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;