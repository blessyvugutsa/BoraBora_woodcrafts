import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^(\+254|0)?[7]\d{8}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid Kenyan phone number';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In production, this would send the form data to a backend API
      // Example API call:
      /*
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      */

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-wood-green text-wood-bg py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Contact Us</h1>
          <p className="font-sans text-wood-bg/90">
            Get in touch with our team
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-wood-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-wood-text mb-1">
                        Showroom Address
                      </h3>
                      <p className="font-sans text-sm text-wood-text/70">
                        123 Woodcraft Lane<br />
                        Industrial Area, Mombasa<br />
                        Kenya, 80100
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-wood-text mb-1">
                        Phone Numbers
                      </h3>
                      <p className="font-sans text-sm text-wood-text/70">
                        Customer Care: +254 700 123 456<br />
                        Sales: +254 720 987 654<br />
                        Workshop: +254 730 456 789
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-wood-text mb-1">
                        Email Addresses
                      </h3>
                      <p className="font-sans text-sm text-wood-text/70">
                        General: info@boraborawoodcrafts.co.ke<br />
                        Sales: sales@boraborawoodcrafts.co.ke<br />
                        Support: support@boraborawoodcrafts.co.ke
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-wood-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-wood-text mb-1">
                        Business Hours
                      </h3>
                      <p className="font-sans text-sm text-wood-text/70">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-serif text-lg font-bold text-wood-text mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center text-wood-clay hover:bg-wood-clay hover:text-wood-bg transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center text-wood-clay hover:bg-wood-clay hover:text-wood-bg transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.16,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center text-wood-clay hover:bg-wood-clay hover:text-wood-bg transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.95,4.57a10,10,0,0,1-2.82.77,4.96,4.96,0,0,0,2.16-2.72,9.9,9.9,0,0,1-3.12,1.19,4.92,4.92,0,0,0-8.39,4.49A14,14,0,0,1,1.64,3.16,4.92,4.92,0,0,0,3.16,9.72,4.86,4.86,0,0,1,.96,9.11v.06a4.93,4.93,0,0,0,3.95,4.83,4.86,4.86,0,0,1-2.22.08,4.93,4.93,0,0,0,4.6,3.42A9.87,9.87,0,0,1,0,19.54a13.94,13.94,0,0,0,7.55,2.21A13.9,13.9,0,0,0,21.55,7.68c0-.21,0-.42,0-.63A10,10,0,0,0,24,4.59Z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-wood-clay/20 rounded-full flex items-center justify-center text-wood-clay hover:bg-wood-clay hover:text-wood-bg transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.5,6.2a3,3,0,0,0-2.1-2.1C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.4.6A3,3,0,0,0,.5,6.2,31.6,31.6,0,0,0,0,12a31.6,31.6,0,0,0,.5,5.8,3,3,0,0,0,2.1,2.1c1.9.6,9.4.6,9.4.6s7.5,0,9.4-.6a3,3,0,0,0,2.1-2.1A31.6,31.6,0,0,0,24,12,31.6,31.6,0,0,0,23.5,6.2ZM9.5,15.5V8.5l6.3,3.5Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="font-serif text-xl font-bold text-wood-text mb-6">
                  Send Us a Message
                </h2>

                {submitSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-wood-text mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-sans text-wood-text/70 mb-6">
                      Thank you for reaching out. Our team will get back to you within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2 bg-wood-green text-wood-bg font-sans text-sm font-medium rounded hover:bg-wood-green-dark transition-colors duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                            errors.name ? 'border-red-500' : 'border-wood-text/20'
                          }`}
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="font-sans text-xs text-red-500 mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                            errors.email ? 'border-red-500' : 'border-wood-text/20'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-wood-text/20'
                          }`}
                          placeholder="+254 7XX XXX XXX"
                        />
                        {errors.phone && (
                          <p className="font-sans text-xs text-red-500 mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                          Subject *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors ${
                            errors.subject ? 'border-red-500' : 'border-wood-text/20'
                          }`}
                          placeholder="What is this about?"
                        />
                        {errors.subject && (
                          <p className="font-sans text-xs text-red-500 mt-1">{errors.subject}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-sm font-medium text-wood-text mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className={`w-full px-4 py-3 border rounded font-sans text-sm focus:outline-none focus:ring-2 focus:ring-wood-green transition-colors resize-none ${
                          errors.message ? 'border-red-500' : 'border-wood-text/20'
                        }`}
                        placeholder="Tell us more about your inquiry..."
                      />
                      {errors.message && (
                        <p className="font-sans text-xs text-red-500 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-wood-green text-wood-bg font-sans font-semibold rounded hover:bg-wood-green-dark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-wood-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-wood-text/10 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-wood-text/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="font-sans text-wood-text/60">
                    Interactive Map
                  </p>
                  <p className="font-sans text-sm text-wood-text/40 mt-1">
                    In production, integrate Google Maps or similar mapping service here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
