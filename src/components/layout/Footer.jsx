import { FaArrowUpLong, FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import { MdAlternateEmail } from 'react-icons/md';
import { Link, animateScroll as scroll } from 'react-scroll';

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedinIn,
  Email: MdAlternateEmail,
};

function Footer({ data }) {
  return (
    <footer className="relative border-t border-white/15 bg-slate-950/80 py-10 text-slate-100">
      <div className="section-shell">
        <div className="glass-panel grid gap-8 rounded-[32px] px-6 py-8 lg:grid-cols-[1.2fr_0.8fr_auto] lg:px-8">
          <div>
            <p className="font-display text-2xl font-semibold">Aman Sagar</p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
              Full stack developer building responsive, polished, and scalable web
              experiences with React, Node.js, and thoughtful user experience details.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            {data.navigation.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                spy
                offset={-90}
                duration={650}
                className="cursor-pointer text-slate-300 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {data.socialLinks.map((social) => {
              const Icon = iconMap[social.label];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:-translate-y-1 hover:border-teal-300/40 hover:bg-white/10 hover:text-white"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              );
            })}

            <button
              type="button"
              onClick={() => scroll.scrollToTop({ duration: 700, smooth: true })}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-slate-950 transition hover:-translate-y-1"
              aria-label="Back to top"
            >
              <FaArrowUpLong />
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-400">
          Copyright {new Date().getFullYear()} Aman Sagar. Crafted with React, Vite, Tailwind CSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
