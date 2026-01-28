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
          preferred_date: formData.date || null, // Ensures valid date format for Postgres
          preferred_time: formData.time || null
        }]);

      if (error) throw error;
      setStatus('success');
    } catch (err) {
      console.error('Supabase insertion error:', err);
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <SEO 
        title="Get a Quote | Gold Leaf Ghostwriting" 
        description="Start your literary journey with Gold Leaf Ghostwriting. Fill out our consultation form to receive a bespoke proposal for your book project."
      />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="sticky top-40">
          <h1 className="text-5xl font-serif font-bold mb-6">Start Your <span className="gold-text-gradient">Legacy</span></h1>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            Fill out the form to receive a personalized quote from Gold Leaf Ghostwriting. We treat every project with the highest level of confidentiality and professional rigor.
          </p>
          <div className="p-6 bg-[#F9F6EE] rounded-2xl border-l-4 border-[#D4AF37]">
            <h4 className="font-bold text-neutral-800 mb-2">Our Privacy Promise</h4>
            <p className="text-sm text-neutral-600">All submissions are protected by our strict non-disclosure policy. Your ideas remain yours throughout the entire Gold Leaf Ghostwriting process.</p>
          </div>
        </div>

        <div className="glass-card p-10 rounded-3xl shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 gold-gradient rounded-full mx-auto flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold mb-4">Project Inquiry Received</h2>
              <p className="text-neutral-600">A senior consultant from Gold Leaf Ghostwriting will contact you shortly.</p>
              <button 
                onClick={() => setStatus('idle')} 
                className="mt-8 text-[#D4AF37] font-bold uppercase tracking-widest hover:underline"
              >
                Submit New Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-700 border border-red-100 rounded-xl text-sm">
                  Something went wrong. Please check your connection and try again.
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400">Full Name</label>
                  <input 
                    required 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange} 
                    placeholder="John Doe"
                    className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400">Phone</label>
                  <input 
                    required 
                    type="tel" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-400">Email Address</label>
                <input 
                  required 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder="email@example.com"
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none" 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400">Preferred Consultation Date</label>
                  <input 
                    type="date" 
                    name="date" 
                    value={formData.date} 
                    onChange={handleChange} 
                    className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none" 
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-neutral-400">Preferred Time</label>
                  <input 
                    type="time" 
                    name="time" 
                    value={formData.time} 
                    onChange={handleChange} 
                    className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none" 
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-400">Service Category</label>
                <select 
                  required
                  name="serviceType" 
                  value={formData.serviceType} 
                  onChange={handleChange} 
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none"
                >
                  <option value="">Select Service</option>
                  <option value="ghostwriting">General Ghostwriting</option>
                  <option value="book">Book Ghostwriting</option>
                  <option value="amazon">Amazon KDP Services</option>
                  <option value="memoir">Biography</option>
                  <option value="memoir">Author Website</option>
               
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-neutral-400">Project Details (Confidential)</label>
                <textarea 
                  rows={4} 
                  name="projectDetails" 
                  value={formData.projectDetails} 
                  onChange={handleChange} 
                  className="w-full bg-neutral-50 border-b border-neutral-200 py-2 focus:border-[#D4AF37] outline-none resize-none" 
                  placeholder="Tell us about your book idea..."
                ></textarea>
              </div>

              <button 
                disabled={status === 'loading'} 
                type="submit" 
                className={`w-full py-4 text-white rounded-full font-bold uppercase tracking-widest text-sm shadow-xl transition-all ${
                  status === 'loading' ? 'bg-neutral-400 cursor-not-allowed' : 'gold-gradient hover:scale-105'
                }`}
              >
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