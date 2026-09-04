'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/jewelry', label: 'Maasai Jewelry' },
  { href: '/get-involved', label: 'Get Involved' },
];

export function Wordmark() {
  return <Link className="wordmark" href="/" aria-label="Return to the Laguna Maasai Partnership home page"><span className="wordmark-leaf" aria-hidden="true">❧</span><span>Laguna Maasai<br />Partnership</span></Link>;
}

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 48);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <header className={`site-header${isScrolled ? ' is-condensed' : ''}`}><div className="header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link href={link.href} key={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}</nav><Link className="header-support" href="/get-involved#support"><span>Support the Partnership</span><b aria-hidden="true">→</b></Link><details className="mobile-menu"><summary aria-label="Open navigation"><i></i><i></i></summary><nav aria-label="Mobile navigation">{links.map((link) => <Link href={link.href} key={link.href} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}<Link className="button button-primary" href="/get-involved#support">Support the Partnership</Link></nav></details></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="frame footer-grid"><div><Wordmark /><p>A student-led initiative within<br />Laguna Beach High School Model United Nations.</p></div><div className="footer-location"><p>Laguna Beach, California, USA</p><p>Partnership details are being reviewed before public launch.</p></div><nav aria-label="Footer navigation">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav></div><div className="frame footer-bottom"><span>© Laguna Maasai Partnership</span><span>Built with care for an ongoing relationship.</span></div></footer>;
}

function SiteEffects() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Page({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteEffects /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></>;
}
