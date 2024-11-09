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
import { motion, AnimatePresence } from 'framer-motion';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (messageType === 'email') {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        
        if (!response.ok) throw new Error();
        
        // Clear form after successful submission
        setFormData({ name: '', email: '', phone: '', message: '', subject: '' });
      } catch (error) {
        // Fallback to mailto if API fails
        const mailToUrl = `mailto:sharma.saugat123@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailToUrl;
      }
    } else {
      // For SMS
      const smsUrl = `sms:+1945-209-1185?body=${encodeURIComponent(`Hi, I'm ${formData.name}. ${formData.message}`)}`;
      window.location.href = smsUrl;
    }
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const getCommandText = () => {
    return messageType === 'email' 
      ? 'send-email --to sharma.saugat123@gmail.com'
      : 'send-sms --to +1945-209-1185';
  };

  return (
    <section className="portfolio-section pb-0">
      <div className="container mx-auto px-4 mb-0">
        <div className="terminal-container">
          <div className="terminal-header">
            <div className="terminal-controls">
              <span className="control close"></span>
              <span className="control minimize"></span>
              <span className="control maximize"></span>
            </div>
            <div className="terminal-title">contact:~/connect</div>
          </div>

          <div className="terminal-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="command-line">
                <span className="prompt">$</span> get-contact-info
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Email Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center 
                            shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
                  <p className="text-sm text-gray-600 mb-4">sharma.saugat123@gmail.com</p>
                  <button 
                    onClick={() => setMessageType('email')}
                    className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                  >
                    Send Email
                  </button>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center 
                            shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Phone</h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <p className="text-sm text-gray-600">+1945-209-1185</p>
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
                </motion.div>

                {/* Social Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center 
                            shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-8 h-8 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Social</h3>
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
                </motion.div>
              </div>

              <div className="command-line">
                <span className="prompt">$</span> {getCommandText()}
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {messageType === 'email' ? 'Send Email' : 'Send SMS'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() => setMessageType('email')}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium 
                                 transition-all duration-300 ease-in-out
                                 ${messageType === 'email' 
                                   ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                 }`}
                    >
                      Email
                    </button>
                    <button
                      type="button"
                      onClick={() => setMessageType('sms')}
                      className={`flex-1 py-2 px-4 rounded-lg font-medium 
                                 transition-all duration-300 ease-in-out
                                 ${messageType === 'sms' 
                                   ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg' 
                                   : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 
                                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                                  transition-all duration-300 ease-in-out
                                  hover:border-indigo-300 bg-white/50
                                  backdrop-blur-sm"
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
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 
                                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                                  transition-all duration-300 ease-in-out
                                  hover:border-indigo-300 bg-white/50
                                  backdrop-blur-sm"
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
                        className="w-full px-4 py-2 rounded-lg border border-slate-200 
                                  focus:outline-none focus:ring-2 focus:ring-indigo-500
                                  transition-all duration-300 ease-in-out
                                  hover:border-indigo-300 bg-white/50
                                  backdrop-blur-sm"
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
                      className="w-full px-4 py-2 rounded-lg border border-slate-200 
                                focus:outline-none focus:ring-2 focus:ring-indigo-500
                                transition-all duration-300 ease-in-out
                                hover:border-indigo-300 bg-white/50
                                backdrop-blur-sm resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600
                              hover:from-indigo-700 hover:to-purple-700
                              text-white py-3 px-6 rounded-lg font-medium 
                              transition-all duration-300 ease-in-out
                              shadow-lg hover:shadow-xl
                              flex items-center justify-center gap-2
                              relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {submitted ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex items-center gap-2"
                        >
                          <Check size={20} />
                          <span>Sent Successfully!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="send"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex items-center gap-2"
                        >
                          <Send size={20} />
                          <span>Send {messageType === 'email' ? 'Email' : 'SMS'}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;