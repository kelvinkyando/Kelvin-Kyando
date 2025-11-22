import React from 'react';

const Photography: React.FC = () => {
  const albums = [
    {
      title: "Kyoto, Spring 2023",
      count: "15 Photos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUwvaWPjQYZtHK7PesThbxw5wJk1nS5h0btNl5YHHwwaM58aNjAMImvcRa2qbwG7NHoNSgALACIACMz6r8pyQOhDa2ph3_3U_lfRfBacJpe1XgByxnO8_PM2ByIOAuShjiqHfw6wAbthoiikuRCzBNHy2Rkyjy99lwpkLzhhWa551b1vqWLxo9qEO6IFrvbQ8yCtZmzHelq325naJ-wpoSO2orViu4SxfPCvdixAuQWWmowTdtipSfXnmzputCnLmi-YSlyED_OT88"
    },
    {
      title: "Andalusia Roadtrip",
      count: "24 Photos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMK1HJgWQyhCVTLKK1QeKypJNJloQ4VvN4cn-LiISBPO_5EW9N6A_ZAtwIIv_11YH9BlK5yLoIKxj03fDl7I75CwxPKVqO2XjkQAyaI9BkZS99003qAeC4EZA8ekaRC-OFiIuuybff54fxnEsqykz5q9ZG6l7e_w0efC6GSlbiCDKWTcXToBpeIiJ30y3kKty6ln28EQDduXmHISN2mIIVbHhla0Aib-D5weGi7EDG-qono4XfMCB4vxw-FV8CinmL6eeF_5G5lMhG"
    },
    {
      title: "Parisian Moments",
      count: "18 Photos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1Sraggau11cviS5AUyqAPR79K2iXOCXIOm3nqPm9AJ5ecx4O80KWInFFShZ1FVgh_tS0P8cKiOcsq4bAfIlJ0ImVNnuQrc8wNX_UDzdfWeHRUWrrxSR0az38c3TvwyjU2UQbfqpHi6wJR_gRWm875gCLkOLI0WPvSsIM62AsG8Kr4ZWi0LM82gn8dms7NLeKp7Ao6T0qICLYuQu-lOms-9gnLmrXh6Aa_RlzuBOvbFHuVHjH6riiiNM3Cu5yzL9AmF3ioB40hbttm"
    },
    {
      title: "New York in Autumn",
      count: "21 Photos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSafferXMmwh9hoEygwMXZw1F48t8PoMeI51tZDMd1iYZDk88Us-0Q2Wmi8yJqd_r8M4DTgcb-uUjQQkctNW9qF0m1YwWtbzwtofvE1nZTmO8k6NYezpl5S98bnZokVXgZTpsABrbiVz6lqtJIUd4YzvLiiKvUoIM79z4bW7OpxPbq0Z-6m03epRL4_jA_bmW3LqVQah824h2bgRfOhWxOmAYPqBVeuG4jMmOxxaPNcfWmZPATQpeR4XGz4FFiIr778GyX_2voMhvB"
    },
    {
      title: "A Week in Rome",
      count: "30 Photos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD76FAMtAyZLh7b0dXMi_MA29RY41JUknhpjIkrt52eT8KSmm6wMZQhdqVkDDXL8c2FKM6OGPhIzBoEqibSbDDzlcMc0Fb_pfx1cSjYD65U6Rj9oGnnjbVzwZUQrXyDia2osTYRsZaXsqL5kdBbmAsAQRBomCUCviMFTsunURA92Vs8oR-HchhXWyv5_5qrdAkP9bj1rVArTgabZHznDFKG9GbSp8S15J7zc_tzuRBIWis4hbqtNaHr3TpM1OJ8ez9hrDxjKGI02Uj8"
    },
    {
      title: "Scottish Highlands",
      count: "12 Photos",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0onlJYJiGXQYTrD90MzQkkJ371pLDwhWGhjEbfuzMNDloH-xxT27t11E3c29of0_XVKqQUPTuP8-yaOffxKQFBEnN45JkCcf3P2FD-GO3n_Z29WCf6Va6uuFnSOUKsjvLXbcFS85cPXyoLPo9yOBZwPvGXjw0PdFJyiI0kIfN9H2OF37cWgaPPN7JHKnhIWBRUKtYjoJ-RVJ7yQzCvGfDFSiY4XotekDbuJllpq9_4_trbQij5BqU_SrbLH3IYDxVyO7qt1Rfmqr1"
    }
  ];

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-10">
          <h1 className="text-text-main dark:text-text-main-dark text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Photography</h1>
          <p className="text-text-sub dark:text-text-sub-dark mt-4 text-lg">Visual stories from my travels and daily life.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {albums.map((album, index) => (
            <a key={index} href="#" className="group block overflow-hidden rounded-xl relative cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-surface-light dark:border-surface-dark">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${album.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6 transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-xl font-bold leading-tight">{album.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{album.count}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photography;