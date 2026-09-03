import Link from 'next/link';

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
  return <header className="site-header"><div className="header-inner"><Wordmark /><nav className="desktop-nav" aria-label="Primary navigation">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</nav><Link className="button button-sun header-support" href="/get-involved#support">Support the Partnership <span aria-hidden="true">→</span></Link><details className="mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><nav aria-label="Mobile navigation">{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}<Link className="button button-sun" href="/get-involved#support">Support the Partnership</Link></nav></details></div></header>;
}

export function Footer() {
  return <footer className="site-footer"><div className="footer-grid"><div><Wordmark /><p>The Laguna Maasai Partnership is a student-led initiative within Laguna Beach High School Model United Nations.</p></div><div className="footer-nav"><p className="eyebrow">Explore</p>{links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div><div><p className="eyebrow">A note on this site</p><p>Current support details, contact information, stories, and imagery are being reviewed with the partnership before public launch.</p><Link className="text-link light-link" href="/get-involved#support">See ways to participate <span aria-hidden="true">→</span></Link></div></div><div className="footer-bottom"><span>© Laguna Maasai Partnership</span><span>Built with care for an ongoing relationship.</span></div></footer>;
}

export function Page({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main">{children}</main><Footer /></>;
}
