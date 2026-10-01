/* oxlint-disable jsx-a11y/no-noninteractive-element-interactions -- Native details remains keyboard-operable; delegated clicks close links and Escape restores summary focus. */
/* oxlint-disable next/no-html-link-for-pages -- Internal route clicks are intercepted by the app router; fragment and external anchors remain native. */
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const links = [
  { href: '/our-story', label: 'Our Story' },
  { href: '/impact', label: 'Our Impact' },
  { href: '/jewelry', label: 'Maasai Jewelry' },
  { href: '/get-involved', label: 'Get Involved' },
];

function BrandLockup({ className, onNavigate }: { className: string; onNavigate?: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void }) {
  return <Link className={`brand-lockup ${className}`} href="/" aria-label="Laguna Maasai Partnership home" onClick={onNavigate ? (event) => onNavigate(event, '/') : undefined}><img src="/laguna-maasai-mark-header.png" alt="" /><span className="brand-wordmark"><span>Laguna Maasai</span><span>Partnership</span></span></Link>;
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const navigate = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    router.push(href);
  };
  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 48);
    const initialUpdate = requestAnimationFrame(update);
    window.addEventListener('scroll', update, { passive: true });
    return () => { cancelAnimationFrame(initialUpdate); window.removeEventListener('scroll', update); };
  }, []);
  return <header className={`site-header${isScrolled ? ' is-condensed' : ''}`}><div className="header-inner"><BrandLockup className="header-brand" onNavigate={navigate} /><nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link href={link.href} key={link.href} onClick={(event) => navigate(event, link.href)} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}</nav><Link className="header-support" href="/get-involved#support" onClick={(event) => navigate(event, '/get-involved#support')}><span>Support the Partnership</span><b aria-hidden="true">→</b></Link><details className="mobile-menu" ref={menuRef} onKeyDown={(event) => { if (event.key === 'Escape') { event.currentTarget.open = false; event.currentTarget.querySelector('summary')?.focus(); } }} onClick={(event) => { if ((event.target as HTMLElement).closest('a') && menuRef.current) menuRef.current.open = false; }}><summary aria-label="Toggle navigation"><i></i><i></i></summary><nav aria-label="Mobile navigation">{links.map((link) => <Link href={link.href} key={link.href} onClick={(event) => navigate(event, link.href)} aria-current={pathname === link.href ? 'page' : undefined}>{link.label}</Link>)}<Link className="button button-primary" href="/get-involved#support" onClick={(event) => navigate(event, '/get-involved#support')}>Support the Partnership</Link></nav></details></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="frame footer-grid"><div><BrandLockup className="footer-brand" /><p>A student-led initiative within<br />Laguna Beach High School Model United Nations.</p></div><div className="footer-location"><p>Laguna Beach, California, USA</p><p>Partnership details are being reviewed before public launch.</p></div><nav aria-label="Footer navigation">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<Link href="/credits">Credits</Link></nav></div><div className="frame footer-bottom"><span>© Laguna Maasai Partnership</span><span>Laguna Beach ↔ Oloolaimutia, Kenya</span></div></footer>;
}

function SiteEffects() {
  const router = useRouter();
  useEffect(() => {
    const openLinkedRecord = () => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target instanceof HTMLDetailsElement) target.open = true;
    };
    openLinkedRecord();
    window.addEventListener('hashchange', openLinkedRecord);
    return () => window.removeEventListener('hashchange', openLinkedRecord);
  }, []);
  useEffect(() => {
    const navigateInternally = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement).closest('a');
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target || anchor.hasAttribute('download')) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || !url.pathname.startsWith('/') || anchor.hasAttribute('data-native-navigation')) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      event.preventDefault();
      router.push(`${url.pathname}${url.search}${url.hash}`);
    };
    document.addEventListener('click', navigateInternally);
    return () => document.removeEventListener('click', navigateInternally);
  }, [router]);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const targets = document.querySelectorAll<HTMLElement>('.home-introduction,.places-section,.work-feature,.jewelry-editorial,.invitation,.story-cover,.story-photo,.story-reading,.process-section,.timeline-section,.archive,.availability-section,.participation-section,.support-details,.faq-section,.credits-page,.desk-feature,.project-teasers>a,.participation-card');
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    targets.forEach((target) => { target.classList.add('reveal'); if (target.getBoundingClientRect().top > window.innerHeight) target.classList.add('reveal-pending'); observer.observe(target); });
    return () => observer.disconnect();
  }, []);
  return null;
}

export function Page({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><SiteEffects /><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}>{children}</main><Footer /></>;
}
