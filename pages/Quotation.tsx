
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { QuoteForm } from '../types';
// import SEO from '../components/SEO';
// import { supabase } from '../lib/supabase';

// const Quotation: React.FC = () => {
//   const location = useLocation();
//   const initialService = (location.state as any)?.service || '';

//   const [formData, setFormData] = useState<QuoteForm>({
//     fullName: '',
//     phoneNumber: '',
//     email: '',
//     date: '',
//     time: '',
//     serviceType: initialService,
//     projectDetails: '',
//   });

//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('loading');
    
//     try {
//       const { error } = await supabase
//         .from('leads')
//         .insert([{
//           name: formData.fullName,
//           email: formData.email,
//           phone: formData.phoneNumber,
//           service: formData.serviceType,
//           details: formData.projectDetails,
//           preferred_date: formData.date || null,
//           preferred_time: formData.time || null
//         }]);

//       if (error) throw error;
//       setStatus('success');
//     } catch (err) {
//       console.error('Supabase insertion error:', err);
//       setStatus('error');
//     }
//   };

//   return (
//     <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-white">
//       <SEO 
//         title="Gold Leaf Ghostwriting | Services"
//         description="Explore our professional ghostwriting services, Amazon book publishing, and author website creation. We deliver excellence in every word."
//         url="https://goldleaf-ghostwriting-one.vercel.app/services"
//         image="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
//       />
      
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//         {/* Left Side: Consultation Details */}
//         <div className="lg:sticky lg:top-40 space-y-8">
//           <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
//             Schedule a <span className="gold-text-gradient">Consultation</span>
//           </h1>
//           <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
//             Begin your literary journey with a private consultation. We respect your time and privacy. 
//             All discussions are strictly confidential.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
//             <div>
//               <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">Direct Hotline</h4>
//               <p className="text-2xl md:text-3xl font-serif font-bold text-neutral-800">+1 (800) GOLD-LEAF</p>
//             </div>

//             <div className="p-6 md:p-8 bg-[#F9F6EE] rounded-2xl border-l-4 border-[#D4AF37]">
//               <h4 className="font-bold text-neutral-800 mb-4 uppercase tracking-wider text-xs md:text-sm">Hours of Service</h4>
//               <div className="space-y-2 text-neutral-600 text-sm md:text-base">
//                 <div className="flex justify-between border-b border-neutral-200 pb-2">
//                   <span>Mon - Fri</span>
//                   <span className="font-semibold text-neutral-800 text-right">9:00 AM - 9:00 PM EST</span>
//                 </div>
//                 <div className="flex justify-between pt-2">
//                   <span>Weekends</span>
//                   <span className="italic">By Appointment Only</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Form */}
//         <div className="glass-card p-6 md:p-10 rounded-3xl shadow-2xl">
//           {status === 'success' ? (
//             <div className="text-center py-10">
//               <div className="w-16 h-16 md:w-20 md:h-20 gold-gradient rounded-full mx-auto flex items-center justify-center mb-6">
//                 <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//               <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">Project Inquiry Received</h2>
//               <p className="text-neutral-600 text-sm md:text-base">A senior consultant from Gold Leaf Ghostwriting will contact you shortly.</p>
//               <button 
//                 onClick={() => setStatus('idle')} 
//                 className="mt-8 text-[#D4AF37] font-bold uppercase tracking-widest text-xs md:text-sm hover:underline"
//               >
//                 Submit New Inquiry
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
//               {status === 'error' && (
//                 <div className="p-4 bg-red-50 text-red-700 border border-red-100 rounded-xl text-xs md:text-sm">
//                   Something went wrong. Please try again or call us directly.
//                 </div>
//               )}

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase text-neutral-400">Full Name</label>
//                   <input required name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none text-sm" />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase text-neutral-400">Phone</label>
//                   <input required type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none text-sm" />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold uppercase text-neutral-400">Email Address</label>
//                 <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none text-sm" />
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase text-neutral-400">Consultation Date</label>
//                   <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none text-sm" />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="text-[10px] font-bold uppercase text-neutral-400">Preferred Time</label>
//                   <input type="time" name="time" value={formData.time} onChange={handleChange} className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none text-sm" />
//                 </div>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold uppercase text-neutral-400">Service Category</label>
//                 <select required name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none text-sm">
//                   <option value="">Select Service</option>
//                   <option value="ghostwriting">General Ghostwriting</option>
//                   <option value="book">Book Ghostwriting</option>
//                   <option value="amazon">Amazon KDP Services</option>
//                   <option value="biography">Biography/Memoir</option>
//                   <option value="website">Author Website</option>
//                 </select>
//               </div>

//               <div className="space-y-1">
//                 <label className="text-[10px] font-bold uppercase text-neutral-400">Project Details</label>
//                 <textarea rows={4} name="projectDetails" value={formData.projectDetails} onChange={handleChange} className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none resize-none text-sm" placeholder="Tell us about your book..."></textarea>
//               </div>

//               <button disabled={status === 'loading'} type="submit" className={`w-full py-4 text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl transition-all ${status === 'loading' ? 'bg-neutral-400' : 'gold-gradient'}`}>
//                 {status === 'loading' ? 'Processing...' : 'Request Proposal'}
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Quotation;



import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { QuoteForm } from '../types';
import SEO from '../components/SEO';
import { supabase } from '../lib/supabase';

const Quotation: React.FC = () => {
  const location = useLocation();
  const initialService = (location.state as any)?.service || '';

  const [formData, setFormData] = useState<QuoteForm>({
    fullName: '',
    phoneNumber: '',
    email: '',
    date: '',
    time: '',
    serviceType: initialService,
    projectDetails: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const { error } = await supabase
        .from('leads')
        .insert([{
          name: formData.fullName,
          email: formData.email,
          phone: formData.phoneNumber,
          service: formData.serviceType,
          details: formData.projectDetails,
          preferred_date: formData.date || null,
          preferred_time: formData.time || null
        }]);

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      console.error('Supabase insertion error:', err);
      setStatus('error');
    }
  };

  /**
   * BASE STYLES:
   * 1. Dynamic background for dark mode compatibility.
   * 2. Focus shadow for a golden aura effect.
   * 3. Custom filter for native date/time icons to appear gold.
   */
  const inputBaseStyles = `
    w-full bg-neutral-50 dark:bg-black/40 
    border-b border-neutral-200 dark:border-[#D4AF37]/30 
    py-2 outline-none text-sm transition-all duration-300
    dark:text-white placeholder-neutral-400
    focus:border-[#D4AF37] focus:shadow-[0_1px_0_0_#D4AF37] 
    dark:focus:shadow-[0_10px_20px_-10px_rgba(212,175,55,0.3)]
    [&::-webkit-calendar-picker-indicator]:invert-[45%] 
    [&::-webkit-calendar-picker-indicator]:sepia-[85%] 
    [&::-webkit-calendar-picker-indicator]:saturate-[550%] 
    [&::-webkit-calendar-picker-indicator]:hue-rotate-[10deg] 
    [&::-webkit-calendar-picker-indicator]:cursor-pointer
    dark:[color-scheme:dark]
  `;

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 min-h-screen bg-white dark:bg-black transition-colors duration-500">
      <SEO 
        title="Gold Leaf Ghostwriting | Consultation"
        description="Book your private literary consultation with Gold Leaf Ghostwriting."
      />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side: Consultation Details */}
        <div className="lg:sticky lg:top-40 space-y-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 dark:text-white">
            Schedule a <span className="gold-text-gradient">Consultation</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
            Begin your literary journey with a private consultation. All discussions are strictly confidential.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">Direct Hotline</h4>
              <p className="text-2xl md:text-3xl font-serif font-bold text-neutral-800 dark:text-white">+1 (800) GOLD-LEAF</p>
            </div>

            <div className="p-6 md:p-8 bg-[#F9F6EE] dark:bg-neutral-900/50 rounded-2xl border-l-4 border-[#D4AF37]">
              <h4 className="font-bold text-neutral-800 dark:text-white mb-4 uppercase tracking-wider text-xs md:text-sm">Hours of Service</h4>
              <div className="space-y-2 text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                <div className="flex justify-between border-b border-neutral-200 dark:border-neutral-800 pb-2">
                  <span>Mon - Fri</span>
                  <span className="font-semibold text-neutral-800 dark:text-[#D4AF37]">9:00 AM - 9:00 PM EST</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span>Weekends</span>
                  <span className="italic">By Appointment Only</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="glass-card p-6 md:p-10 rounded-3xl shadow-2xl dark:bg-[#050505] dark:border dark:border-[#D4AF37]/20">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 md:w-20 md:h-20 gold-gradient rounded-full mx-auto flex items-center justify-center mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4 dark:text-white">Project Inquiry Received</h2>
              <button onClick={() => setStatus('idle')} className="mt-8 text-[#D4AF37] font-bold uppercase tracking-widest text-xs md:text-sm hover:underline">
                Submit New Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest">Full Name</label>
                  <input required name="fullName" value={formData.fullName} onChange={handleChange} className={inputBaseStyles} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest">Phone</label>
                  <input required type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={inputBaseStyles} />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest">Email Address</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} className={inputBaseStyles} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest">Consultation Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className={inputBaseStyles} />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest">Preferred Time</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} className={inputBaseStyles} />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest">Service Category</label>
                <select required name="serviceType" value={formData.serviceType} onChange={handleChange} className={`${inputBaseStyles} cursor-pointer`}>
                  <option value="" className="dark:bg-black">Select Service</option>
                  <option value="ghostwriting" className="dark:bg-black">General Ghostwriting</option>
                  <option value="book" className="dark:bg-black">Book Ghostwriting</option>
                  <option value="amazon" className="dark:bg-black">Amazon KDP Services</option>
                  <option value="biography" className="dark:bg-black">Biography/Memoir</option>
                  <option value="website" className="dark:bg-black">Author Website</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest">Project Details</label>
                <textarea rows={4} name="projectDetails" value={formData.projectDetails} onChange={handleChange} className={`${inputBaseStyles} resize-none`} placeholder="Tell us about your book..."></textarea>
              </div>

              <button disabled={status === 'loading'} type="submit" className={`w-full py-4 text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-xl transition-all ${status === 'loading' ? 'bg-neutral-400' : 'gold-gradient active:scale-[0.98] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'}`}>
                {status === 'loading' ? 'Processing...' : 'Request Proposal'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quotation;