/* oxlint-disable jsx-a11y/no-noninteractive-element-interactions -- Native details remains keyboard-operable; delegated clicks close links and Escape restores summary focus. */
/* oxlint-disable next/no-html-link-for-pages -- Native navigation intentionally avoids client-router dependency for this informational site. */
'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/jewelry', label: 'Maasai Jewelry' },
  { href: '/get-involved', label: 'Get Involved' },
];

export function Wordmark() {
  return <a className="wordmark" href="/" aria-label="Return to the Laguna Maasai Partnership home page"><span className="wordmark-leaf" aria-hidden="true">❧</span><span>Laguna Maasai<br />Partnership</span></a>;
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 48);
    const initialUpdate = requestAnimationFrame(update);
    window.addEventListener('scroll', update, { passive: true });
    return () => { cancelAnimationFrame(initialUpdate); window.removeEventListener('scroll', update); };
  }, []);
  return <header className={`site-header${isScrolled ? ' is-condensed' : ''}`}><div className="header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <a href={link.href} key={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</a>)}</nav><a className="header-support" href="/get-involved#support"><span>Support the Partnership</span><b aria-hidden="true">→</b></a><details className="mobile-menu" ref={menuRef} onKeyDown={(event) => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus(); } }} onClick={(event) => { if ((event.target as HTMLElement).closest('a') && menuRef.current) menuRef.current.open = false; }}><summary aria-label="Toggle navigation"><i></i><i></i></summary><nav aria-label="Mobile navigation">{links.map((link) => <a href={link.href} key={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</a>)}<a className="button button-primary" href="/get-involved#support">Support the Partnership</a></nav></details></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="frame footer-grid"><div><Wordmark /><p>A student-led initiative within<br />Laguna Beach High School Model United Nations.</p></div><div className="footer-location"><p>Laguna Beach, California, USA</p><p>Partnership details are being reviewed before public launch.</p></div><nav aria-label="Footer navigation">{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</nav></div><div className="frame footer-bottom"><span>© Laguna Maasai Partnership</span><span>Built with care for an ongoing relationship.</span></div></footer>;
}

function SiteEffects() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    targets.forEach((target) => { if (target.getBoundingClientRect().top > window.innerHeight) target.classList.add('reveal-pending'); observer.observe(target); });
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Page({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteEffects /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></>;
}
