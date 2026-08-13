import React, { useState } from 'react';
import { SHOP_ITEMS } from '../data/portfolioData';
import { ShopItem } from '../types';

export const ShopSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<ShopItem | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleCheckout = (item: ShopItem) => {
    setSelectedItem(item);
    setDownloadSuccess(false);
  };

  const confirmDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      // Simulate file download trigger
      const element = document.createElement('a');
      const file = new Blob([`// ${selectedItem?.title}\n// License: Commercial\n// Thank you for downloading Architect UI Resources!`], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${selectedItem?.id || 'resource'}-package.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12 space-y-12 animate-fadeIn text-[#e5e2e1]">
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#27272A] pb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-emerald-400 text-sm">shopping_bag</span>
            <span className="font-label-caps text-xs uppercase tracking-widest text-emerald-400">
              Systems Store
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Design Templates & Token Kits
          </h2>
          <p className="font-body-md text-base text-[#c5c6ca] max-w-2xl mt-2">
            Battle-tested Figma variables, enterprise UI kits, and automated token repositories crafted by Balaram.
          </p>
        </div>
      </div>

      {/* Grid of Shop Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SHOP_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-[#1A1A1C] border border-[#27272A] rounded-2xl overflow-hidden hover:border-white/30 transition-all flex flex-col justify-between group"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-black/70 backdrop-blur-md rounded-full font-label-caps text-xs text-emerald-400 border border-white/10">
                  {item.category}
                </span>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-white text-black font-label-caps text-xs font-bold rounded-full">
                  {item.price}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs font-label-caps text-[#c5c6ca] mb-2">
                  <span className="flex items-center gap-1 text-yellow-400">
                    <span className="material-symbols-outlined text-sm fill-current">star</span>
                    {item.rating}
                  </span>
                  <span>•</span>
                  <span>{item.downloads} downloads</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#c5c6ca] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#27272A] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 bg-[#0D0D0E] rounded text-[10px] font-label-caps text-[#c5c6ca]">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleCheckout(item)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-1.5 shadow"
                >
                  <span>Get License</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Item Modal / Checkout Preview */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#1A1A1C] border border-[#27272A] rounded-2xl max-w-lg w-full p-8 space-y-6 relative text-white">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <span className="material-symbols-outlined text-xl">close</span>
            </button>

            <div className="flex items-center gap-4">
              <img src={selectedItem.image} alt={selectedItem.title} className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <span className="font-label-caps text-[10px] text-emerald-400 uppercase">{selectedItem.category}</span>
                <h3 className="font-display text-xl font-bold">{selectedItem.title}</h3>
                <div className="font-display text-2xl font-bold text-emerald-400 mt-1">{selectedItem.price}</div>
              </div>
            </div>

            <p className="text-sm text-[#c5c6ca]">{selectedItem.description}</p>

            {downloadSuccess ? (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center space-y-2">
                <span className="material-symbols-outlined text-3xl text-emerald-400">check_circle</span>
                <div className="font-display font-bold text-emerald-400">Download Triggered!</div>
                <div className="text-xs text-[#c5c6ca]">Your resource package is downloading. Check your browser downloads folder.</div>
              </div>
            ) : (
              <button
                onClick={confirmDownload}
                className="w-full py-3 bg-emerald-500 text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-base">download</span>
                Download Resource File
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
