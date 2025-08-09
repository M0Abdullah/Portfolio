"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { 
  IconMail, 
  IconPhone, 
  IconMapPin, 
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
  IconCheck,
  IconX,
  IconUser,
  IconBuilding
} from "@tabler/icons-react";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  company: Yup.string()
    .min(2, "Company name must be at least 2 characters"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      
      try {
        // Simulate form submission delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const url =
          "https://wa.me/923004844897?text=" +
          "Name: " +
          encodeURIComponent(values.name) +
          "%0a" +
          "Phone: " +
          encodeURIComponent(values.phone) +
          "%0a" +
          "Email: " +
          encodeURIComponent(values.email) +
          "%0a" +
          (values.company ? "Company: " + encodeURIComponent(values.company) + "%0a" : "") +
          "Message: " +
          encodeURIComponent(values.message);

        window.open(url, "_blank");
        
        setSubmitStatus('success');
        resetForm();
        
        // Reset status after 3 seconds
        setTimeout(() => setSubmitStatus('idle'), 3000);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  const contactInfo = [
    {
      icon: IconMail,
      label: "Email",
      value: "muhammadabdullah484401@gmail.com",
      href: "mailto:muhammadabdullah484401@gmail.com"
    },
    {
      icon: IconPhone,
      label: "Phone",
      value: "+92 300 484 4897",
      href: "tel:+923004844897"
    },
    {
      icon: IconMapPin,
      label: "Location",
      value: "Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: IconBrandWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/923004844897",
      color: "text-green-400"
    },
    {
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-abdullah-5b8aa7288/",
      color: "text-blue-400"
    },
    {
      icon: IconBrandGithub,
      label: "GitHub",
      href: "https://github.com/M0Abdullah",
      color: "text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Let&apos;s Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? I&apos;d love to hear from you. Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I&apos;m always open to discussing new opportunities, creative projects, or potential collaborations. 
                Whether you have a question or just want to say hello, I&apos;ll do my best to get back to you!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect p-6 rounded-2xl flex items-center gap-4 hover:bg-blue-500/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {info.label}
                    </h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className={`w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send me a message</h3>
            
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <IconUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full pl-12 pr-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      formik.touched.name && formik.errors.name 
                        ? 'ring-2 ring-red-500' 
                        : ''
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <IconX className="w-4 h-4" />
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <IconMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full pl-12 pr-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      formik.touched.email && formik.errors.email 
                        ? 'ring-2 ring-red-500' 
                        : ''
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <IconX className="w-4 h-4" />
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Phone and Company Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <IconPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className={`w-full pl-12 pr-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                        formik.touched.phone && formik.errors.phone 
                          ? 'ring-2 ring-red-500' 
                          : ''
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <IconX className="w-4 h-4" />
                      {formik.errors.phone}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company (Optional)
                  </label>
                  <div className="relative">
                    <IconBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="w-full pl-12 pr-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                  {formik.touched.company && formik.errors.company && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <IconX className="w-4 h-4" />
                      {formik.errors.company}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`w-full px-4 py-3 glass-effect rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                    formik.touched.message && formik.errors.message 
                      ? 'ring-2 ring-red-500' 
                      : ''
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <IconX className="w-4 h-4" />
                    {formik.errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !formik.isValid}
                whileHover={{ scale: formik.isValid ? 1.02 : 1 }}
                whileTap={{ scale: formik.isValid ? 0.98 : 1 }}
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                  submitStatus === 'success'
                    ? 'bg-green-600 text-white'
                    : submitStatus === 'error'
                    ? 'bg-red-600 text-white'
                    : formik.isValid && !isSubmitting
                    ? 'bg-blue-600 hover:bg-blue-700 text-white glow-effect'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <IconCheck className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <IconX className="w-5 h-5" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    <IconSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
