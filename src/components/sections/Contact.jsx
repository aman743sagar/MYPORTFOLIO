import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdEmail, MdOutlineSend } from 'react-icons/md';
import { emailJsConfig } from '../../config/emailjs';
import GlassPanel from '../ui/GlassPanel';
import SectionHeading from '../ui/SectionHeading';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const socialIconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: MdEmail,
};

function Contact({ data }) {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [submitMessage, setSubmitMessage] = useState(
    ' Send your message.',
  );

  useEffect(() => {
    emailjs.init({
      publicKey: emailJsConfig.publicKey,
    });
  }, []);

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      nextErrors.subject = 'Please add a subject.';
    }

    if (!formData.message.trim()) {
      nextErrors.message = 'Please include a short message.';
    } else if (formData.message.trim().length < 20) {
      nextErrors.message = 'Message should be at least 20 characters.';
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));

    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }

    setSubmitMessage('Messages are delivered');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitStatus('idle');
      setSubmitMessage('Please fix the highlighted fields and try again.');
      return;
    }

    setErrors({});
    setSubmitStatus('submitting');
    setSubmitMessage('Sending your message...');

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          to_name: data.owner.name,
          from_name: formData.name.trim(),
          from_email: formData.email.trim(),
          subject: formData.subject.trim(),
          from_message: formData.message.trim(),
        },
        {
          publicKey: emailJsConfig.publicKey,
        },
      );

      setFormData(initialForm);
      setSubmitStatus('success');
      setSubmitMessage('Your message was sent successfully through EmailJS.');
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        error?.text || 'Something went wrong while sending. Please check EmailJS dashboard settings.',
      );
      console.error('EmailJS send failed:', error);
    }
  };

  return (
    <section className="section-gap">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title={data.contact.heading}
          description={data.contact.description}
        />

        <div className="mt-14 grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6"
          >
            {data.contact.cards.map((card) => (
              <GlassPanel key={card.title} className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-teal-600 dark:text-cyan-300">
                  {card.title}
                </p>
                <p className="mt-3 text-lg font-medium text-slate-900 dark:text-white">
                  {card.value}
                </p>
                {card.href !== '#' ? (
                  <a
                    href={card.href}
                    className="mt-4 inline-flex text-sm font-medium text-[var(--brand)] transition hover:text-[var(--brand-accent)]"
                  >
                    Reach out
                  </a>
                ) : null}
              </GlassPanel>
            ))}

            <GlassPanel className="p-6">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">
                Social Links
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {data.socialLinks.map((social) => {
                  const Icon = socialIconMap[social.label];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/60 px-5 py-3 text-sm font-medium text-slate-800 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white dark:bg-slate-900/50 dark:text-slate-100 dark:hover:bg-slate-900"
                    >
                      <Icon className="text-lg" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </GlassPanel>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <GlassPanel className="p-6 sm:p-8">
              <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      disabled={submitStatus === 'submitting'}
                      className="w-full rounded-2xl border border-white/15 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-900/55 dark:text-slate-100"
                    />
                    {errors.name ? (
                      <p className="mt-2 text-sm text-rose-500">{errors.name}</p>
                    ) : null}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      disabled={submitStatus === 'submitting'}
                      className="w-full rounded-2xl border border-white/15 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-900/55 dark:text-slate-100"
                    />
                    {errors.email ? (
                      <p className="mt-2 text-sm text-rose-500">{errors.email}</p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, job opportunity, freelance work..."
                    disabled={submitStatus === 'submitting'}
                    className="w-full rounded-2xl border border-white/15 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-900/55 dark:text-slate-100"
                  />
                  {errors.subject ? (
                    <p className="mt-2 text-sm text-rose-500">{errors.subject}</p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me a bit about your idea, role, or project requirements..."
                    disabled={submitStatus === 'submitting'}
                    className="w-full rounded-2xl border border-white/15 bg-white/70 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-slate-900/55 dark:text-slate-100"
                  />
                  {errors.message ? (
                    <p className="mt-2 text-sm text-rose-500">{errors.message}</p>
                  ) : null}
                </div>

                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                  >
                    <MdOutlineSend className="text-lg" />
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' ? (
                    <p className="text-sm text-emerald-600 dark:text-emerald-400">
                      {submitMessage}
                    </p>
                  ) : submitStatus === 'error' ? (
                    <p className="text-sm text-rose-500">
                      {submitMessage}
                    </p>
                  ) : (
                    <p className="text-sm text-[var(--text-soft)]">
                      {submitMessage}
                    </p>
                  )}
                </div>
              </form>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
