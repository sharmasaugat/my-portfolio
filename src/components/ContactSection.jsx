import React, { useState } from 'react';
import { 
  Phone,
  Mail,
  Send,
  MessageCircle,
  Copy,
  Check,
  Linkedin,
  Github
} from 'lucide-react';

const ContactSection = () => {
  const [messageType, setMessageType] = useState('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: ''
  });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+1945-209-1185');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageType === 'email') {
      const mailToUrl = `mailto:sharma.saugat123@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailToUrl;
    } else {
      // For SMS
      const smsUrl = `sms:+1945-209-1185?body=${encodeURIComponent(`Hi, I'm ${formData.name}. ${formData.message}`)}`;
      window.location.href = smsUrl;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Let's Connect</h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Have a project in mind? Looking to hire a senior developer? Or just want to chat about technology? 
            Choose your preferred way to reach out!
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <div className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-sm text-slate-600 mb-4">sharma.saugat123@gmail.com</p>
              <button 
                onClick={() => setMessageType('email')}
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                Send Email
              </button>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <p className="text-sm text-slate-600">+1945-209-1185</p>
                <button 
                  onClick={handleCopyPhone}
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
              <button 
                onClick={() => setMessageType('sms')}
                className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
              >
                Send SMS
              </button>
            </div>

            {/* Social Card */}
            <div className="bg-slate-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <MessageCircle className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://www.linkedin.com/in/saugat-sharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/sharmasaugat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700"
                >
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
            <h2 className="text-2xl font-bold mb-6">
              {messageType === 'email' ? 'Send Email' : 'Send SMS'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setMessageType('email')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    messageType === 'email' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  Email
                </button>
                <button
                  type="button"
                  onClick={() => setMessageType('sms')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    messageType === 'sms' 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  SMS
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {messageType === 'email' ? 'Email' : 'Phone'}
                  </label>
                  <input
                    type={messageType === 'email' ? 'email' : 'tel'}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={messageType === 'email' ? formData.email : formData.phone}
                    onChange={(e) => setFormData({
                      ...formData, 
                      [messageType === 'email' ? 'email' : 'phone']: e.target.value
                    })}
                  />
                </div>
              </div>

              {messageType === 'email' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <Check size={20} />
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send {messageType === 'email' ? 'Email' : 'SMS'}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;