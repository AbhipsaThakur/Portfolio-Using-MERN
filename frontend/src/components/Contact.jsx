import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, MessageCircle, Send } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (response.ok) {
      toast({
        title: "Message Sent!",
        description: data.message || "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      toast({
        title: "Error",
        description: data.message || 'Something went wrong. Please try again.',
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      description: "Server error. Please try again later.",
    });
    console.error(error);
  }
};


  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gray-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full" />
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 group"
                >
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <Mail className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-white font-medium">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 group"
                >
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <Phone className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-white font-medium">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                  <div className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                    <MapPin className="text-gray-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-white font-medium">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 group"
                >
                  <Linkedin className="text-gray-400 group-hover:text-white transition-colors" size={28} />
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 group"
                >
                  <Github className="text-gray-400 group-hover:text-white transition-colors" size={28} />
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 group"
                >
                  <Instagram className="text-gray-400 group-hover:text-white transition-colors" size={28} />
                </a>
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 border border-gray-800 group"
                >
                  <MessageCircle className="text-gray-400 group-hover:text-white transition-colors" size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-gray-600 text-white transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-3 bg-white hover:bg-gray-100 text-black font-medium rounded transition-all duration-300"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
