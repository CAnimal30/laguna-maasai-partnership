'use client';

import { HandHeart, Mail, Sprout } from 'lucide-react';
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
  return <Link className="wordmark" href="/" aria-label="Laguna Maasai Partnership home"><span aria-hidden="true" className="wordmark-mark">✦</span><span>Laguna Maasai<br />Partnership</span></Link>;
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
  return <header className={`site-header ${isScrolled ? 'site-header-scrolled' : ''}`}><div className="header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link href={link.href} onClick={navigateFromHeader} key={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={pathname === link.href ? 'is-active' : undefined}>{link.label}</Link>)}</nav><Link className="button button-sun header-support" href="/get-involved#support" onClick={navigateFromHeader} aria-current={pathname === '/get-involved' ? 'page' : undefined}>Support the Partnership <span aria-hidden="true">→</span></Link><details className="mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><nav aria-label="Mobile navigation">{links.map((link) => <Link href={link.href} onClick={navigateFromHeader} key={link.href} aria-current={pathname === link.href ? 'page' : undefined} className={pathname === link.href ? 'is-active' : undefined}>{link.label}</Link>)}<Link className="button button-sun" href="/get-involved#support" onClick={navigateFromHeader}>Support the Partnership</Link></nav></details></div></header>;
}

const footerCalls = [
  { href: '/get-involved', icon: HandHeart, title: 'Get involved', text: 'Join events, help with initiatives, and bring friends along.' },
  { href: '/get-involved#support', icon: Mail, title: 'Stay in touch', text: 'Reach out when the official contact route is confirmed.' },
  { href: '/get-involved#support', icon: Sprout, title: 'Support the work', text: 'Help sustain the relationship through connection and learning.' },
];

export function Footer() {
  return <footer className="site-footer"><div className="footer-art" aria-hidden="true"></div><div className="footer-callouts">{footerCalls.map(({ href, icon: Icon, title, text }) => <Link className="footer-callout" href={href} key={title}><span className="footer-icon"><Icon aria-hidden="true" size={29} strokeWidth={1.25} /></span><strong>{title}</strong><p>{text}</p></Link>)}</div><div className="footer-grid"><div><Wordmark /><p>The Laguna Maasai Partnership is a student-led initiative within Laguna Beach High School Model United Nations.</p></div><div className="footer-nav"><p className="eyebrow">Explore</p>{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div><div><p className="eyebrow">A note on this site</p><p>Current support details, contact information, stories, and imagery are being reviewed with the partnership before public launch.</p><Link className="text-link light-link" href="/get-involved#support">See ways to participate <span aria-hidden="true">→</span></Link></div></div><div className="footer-bottom"><span>© Laguna Maasai Partnership</span><span>Built with care for an ongoing relationship.</span></div></footer>;
}

function SiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    const targets = document.querySelectorAll<HTMLElement>('.place-pair article, .impact-list article, .timeline article, .path-grid article, .footer-callout, .jewelry-grid');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.14 });
    targets.forEach((target) => observer.observe(target));
    return () => { observer.disconnect(); document.documentElement.classList.remove('motion-ready'); };
  }, []);
  return null;
}

export function Page({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteEffects /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></>;
}
