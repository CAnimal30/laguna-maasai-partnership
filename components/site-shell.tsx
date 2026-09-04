'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type MouseEvent } from 'react';

const links = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/jewelry', label: 'Maasai Jewelry' },
  { href: '/get-involved', label: 'Get Involved' },
];

export function Wordmark() {
  const navigateHome = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.location.assign('/');
  };
  return <Link className="wordmark" href="/" onClick={navigateHome} aria-label="Return to the Laguna Maasai Partnership home page"><span aria-hidden="true" className="wordmark-mark">✦</span><span>Laguna Maasai<br /> Partnership</span></Link>;
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigateFromHeader = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    window.location.assign(event.currentTarget.href);
  };
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 56);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}><div className="header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link href={link.href} onClick={navigateFromHeader} key={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={pathname === link.href ? 'is-active' : undefined}>{link.label}</Link>)}</nav><Link className="button button-sun header-support" href="/get-involved#support" onClick={navigateFromHeader} aria-current={pathname === '/get-involved' ? 'page' : undefined} aria-label="Support the Partnership"><span className="support-long">Support the Partnership</span><span className="support-short">Support</span><span aria-hidden="true">→</span></Link><details className="mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><nav aria-label="Mobile navigation">{links.map((link) => <Link href={link.href} onClick={navigateFromHeader} key={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={pathname === link.href ? 'is-active' : undefined}>{link.label}</Link>)}<Link className="button button-sun" href="/get-involved#support" onClick={navigateFromHeader}>Support the Partnership</Link></nav></details></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-art" aria-hidden="true"></div><div className="footer-grid"><div className="footer-about"><Wordmark /><p>A student-led initiative within Laguna Beach High School Model United Nations.</p></div><nav className="footer-nav" aria-label="Footer navigation"><p className="eyebrow">Explore</p>{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav><div className="footer-note"><p className="eyebrow">A note on this site</p><p>Current support details, contact information, stories, and imagery are being reviewed with the partnership before public launch.</p><Link className="text-link light-link" href="/get-involved#support">Ways to participate <span aria-hidden="true">→</span></Link></div></div><div className="footer-bottom"><span>© Laguna Maasai Partnership</span><span>Built with care for an ongoing relationship.</span></div></footer>;
}

function SiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    const targets = document.querySelectorAll<HTMLElement>('.relationship-spread article, .impact-list article, .timeline article, .path-grid article, .jewelry-grid');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.14 });
    targets.forEach((target) => observer.observe(target));
    return () => { observer.disconnect(); document.documentElement.classList.remove('motion-ready'); };
  }, []);
  return null;
}

export function Page({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteEffects /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></>;
}
