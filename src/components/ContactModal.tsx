import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'message' | 'calendar'>('message');
  const [selectedDate, setSelectedDate] = useState('Tomorrow, 3:00 PM IST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Design System / FinTech UI',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-[#141313] border border-[#27272A] rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl text-[#e5e2e1]">
        {/* Header */}
        <div className="p-6 border-b border-[#27272A] bg-[#1A1A1C] flex justify-between items-center">
          <div>
            <span className="font-label-caps text-[10px] text-emerald-400 uppercase tracking-widest">Connect with Balaram</span>
            <h3 className="font-display text-2xl font-bold text-white">Let's Build Exceptional Systems</h3>
          </div>
          <button onClick={onClose} className="text-[#c5c6ca] hover:text-white">
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Tab Switcher */}
          <div className="flex border-b border-[#27272A] gap-6 font-label-caps text-xs uppercase tracking-widest">
            <button
              onClick={() => setActiveTab('message')}
              className={`pb-2 ${activeTab === 'message' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              01 / Send Message
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`pb-2 ${activeTab === 'calendar' ? 'text-white border-b-2 border-emerald-400 font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              02 / Schedule 30-Min Call
            </button>
          </div>

          {formSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-3xl">mark_email_read</span>
              </div>
              <h4 className="font-display text-2xl font-bold text-white">Message Transmitted!</h4>
              <p className="text-sm text-[#c5c6ca] max-w-sm mx-auto">
                Thank you for reaching out. Balaram has received your inquiry and will respond within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-white text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all"
              >
                Close
              </button>
            </div>
          ) : activeTab === 'message' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label-caps text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Alex Morgan"
                    className="w-full px-3.5 py-2.5 bg-[#1A1A1C] border border-[#27272A] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label-caps text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@fintech.com"
                    className="w-full px-3.5 py-2.5 bg-[#1A1A1C] border border-[#27272A] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-label-caps text-gray-400 mb-1">Scope / Topic</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#1A1A1C] border border-[#27272A] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400"
                >
                  <option>Design System / Token Architecture</option>
                  <option>Enterprise FinTech Application UX</option>
                  <option>Full-Time / Lead Designer Role</option>
                  <option>Design Audit / Advisory</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-label-caps text-gray-400 mb-1">Message Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell Balaram about your project goals or team needs..."
                  className="w-full px-3.5 py-2.5 bg-[#1A1A1C] border border-[#27272A] rounded-xl text-xs text-white focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-500 text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                Send Direct Message
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-xs font-label-caps text-gray-400 uppercase">Select Available Slot (30 Mins)</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Tomorrow, 3:00 PM IST',
                  'Tomorrow, 5:30 PM IST',
                  'Thursday, 2:00 PM IST',
                  'Friday, 4:00 PM IST'
                ].map((slot, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDate(slot)}
                    className={`p-3 rounded-xl border text-left font-label-caps text-xs transition-all ${
                      selectedDate === slot
                        ? 'bg-emerald-500/10 border-emerald-400 text-emerald-400 font-bold'
                        : 'bg-[#1A1A1C] border-[#27272A] text-[#c5c6ca] hover:border-white/30'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setFormSubmitted(true)}
                  className="w-full py-3 bg-emerald-500 text-black font-label-caps text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-sm">event_available</span>
                  Confirm Meeting Slot ({selectedDate})
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
