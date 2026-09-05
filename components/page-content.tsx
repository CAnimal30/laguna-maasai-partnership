/* oxlint-disable next/no-html-link-for-pages -- Native navigation intentionally avoids client-router dependency for this informational site. */
import { Page } from '@/components/site-shell';

const archive = [
  { year: '2014', title: 'Classroom desks', note: 'Historical record', detail: 'The historical record describes a student-led effort that raised funds for desks made locally in Kenya.' },
  { year: '2015', title: 'Energy goal', note: 'Verify current status', detail: 'Existing materials describe a proposed renewable-energy project. Its completion and current status need confirmation.' },
  { year: '2018–', title: 'Education support', note: 'Details to be confirmed', detail: 'Past site content describes scholarship support. Current biographies and permissions are being reviewed.' },
  { year: '2023', title: 'Water project', note: 'Verify current status', detail: 'A past partnership effort included a rain-barrel auction connected to a well goal. The outcome needs current verification.' },
];

function ArrowLink({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a className={`arrow-link${light ? ' arrow-link-light' : ''}`} href={href}>{children}<span aria-hidden="true">→</span></a>;
}

function Eyebrow({ children, sun = false }: { children: React.ReactNode; sun?: boolean }) {
  return <p className={`eyebrow${sun ? ' eyebrow-sun' : ''}`}>{children}</p>;
}

function EditorialImage({ src, className, alt = '' }: { src: string; className?: string; alt?: string }) {
  // oxlint-disable-next-line next/no-img-element
  return <img className={`editorial-image ${className ?? ''}`} src={src} alt={alt} />;
}

function SupportBand() {
  const routes = [
    ['Get involved', 'Find a way to participate as a student, family, or community group.', '/get-involved#participate'],
    ['Explore the jewelry', 'Learn about the program and the status of future sales.', '/jewelry'],
    ['Support the work', 'Read about online giving and the information still being confirmed.', '/get-involved#support'],
  ];
  return <section className="support-band" aria-labelledby="support-band-title"><div className="support-band-inner frame"><div className="support-band-intro"><Eyebrow sun>Participate</Eyebrow><h2 id="support-band-title">Support the<br />partnership.</h2><p>There are many ways to get involved. Your support helps us keep this relationship strong and student-led.</p></div><div className="support-choices">{routes.map(([title, text, href], index) => <a href={href} className="support-choice reveal" key={title}><span className="choice-number">0{index + 1}</span><strong>{title}</strong><p>{text}</p></a>)}</div></div></section>;
}

export function HomePage() {
  return <Page>
    <section className="home-hero" aria-labelledby="home-title"><div className="home-hero-art" aria-hidden="true"></div><div className="frame hero-layout"><div className="hero-copy"><p className="hero-kicker">Laguna Maasai Partnership</p><p className="hero-context">A student-led initiative within<br />Laguna Beach High School Model United Nations</p><h1 id="home-title">Two places.<br />One ongoing<br />partnership.</h1><p className="hero-summary">Connecting Laguna Beach students and the Oloolaimutia community through a relationship that began in 2012.</p><div className="hero-actions"><a className="button button-primary" href="/our-story">Learn our story</a><a className="button button-quiet" href="/get-involved">Get involved</a></div></div></div></section>

    <section className="manifesto section-cream"><div className="frame manifesto-grid"><div><Eyebrow>A student-led partnership</Eyebrow><h2>Built by students.<br />Sustained through<br />relationship.</h2><span className="tiny-rule" aria-hidden="true"></span></div><div className="manifesto-copy"><p>Laguna Maasai Partnership is a student-led initiative within Laguna Beach High School Model United Nations. Its purpose is to nurture a long-term connection with the Oloolaimutia community—rooted in listening, learning, fundraising, and shared priorities.</p><p>Our goal is simple: to learn together, support what matters, and grow a relationship that lasts.</p></div></div></section>

    <section className="origin section-paper"><div className="frame origin-grid"><div className="origin-paper" aria-hidden="true"></div><div className="origin-mark"><Eyebrow>Our origin</Eyebrow><h2>2012</h2></div><div className="origin-copy"><p>Our partnership began in 2012 when Laguna Beach High School students and members of the Oloolaimutia community came together to start a long-term relationship rooted in curiosity, respect, and mutual learning.</p><p>What started as a student initiative has grown into an ongoing commitment to collaboration and connection.</p><ArrowLink href="/our-story">Read our origin story</ArrowLink></div></div></section>

    <section className="relationship section-cream"><div className="frame"><div className="relationship-heading"><Eyebrow>A relationship, not a one-time project</Eyebrow><h2>Two places, one relationship.</h2><span className="tiny-rule" aria-hidden="true"></span></div><div className="relationship-grid"><article className="place-story reveal"><span className="place-orb place-orb-green" aria-hidden="true">01</span><h3>Laguna Beach</h3><p>Students learn, lead, and build connections that extend beyond the classroom.</p></article><EditorialImage src="/relationship-editorial.png" className="relationship-art" alt="" /><article className="place-story reveal"><span className="place-orb place-orb-clay" aria-hidden="true">02</span><h3>Oloolaimutia</h3><p>A community shaping priorities and guiding the future of shared work.</p></article></div></div></section>

    <section className="impact-band" aria-labelledby="impact-title"><div className="frame"><div className="impact-heading"><div><Eyebrow sun>Our impact</Eyebrow><h2 id="impact-title">Accountability<br />with context.</h2></div><p>These are historical project records, not current performance claims. Each will be updated only after its source, status, and context are confirmed.</p></div><div className="impact-ledger">{archive.map((item, index) => <article className="reveal" key={item.title}><span className="ledger-index" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.detail}</p><small>{item.note}</small></article>)}</div><ArrowLink href="/impact" light>Explore the project archive</ArrowLink></div></section>

    <section className="jewelry-feature section-cream"><div className="frame jewelry-grid"><div className="jewelry-copy"><Eyebrow>Maasai jewelry</Eyebrow><h2>Handmade work.<br />A shared connection.</h2><span className="tiny-rule" aria-hidden="true"></span><p>Jewelry has been an important part of the partnership’s history. Before presenting inventory, prices, artisan stories, or purchase options, the program is confirming the details that make those pages accurate and fair.</p><ArrowLink href="/jewelry">Explore the jewelry program</ArrowLink></div><EditorialImage src="/jewelry-editorial.png" className="jewelry-art" alt="Illustrative jewelry program motif" /></div></section>
    <SupportBand />
  </Page>;
}

export function StoryPage() {
  return <Page><section className="page-hero page-hero-cream"><div className="frame page-hero-grid"><div><Eyebrow>Our story</Eyebrow><h1>A relationship built to last.</h1><p className="lede">The partnership began with a visit and grew through years of student commitment, communication, and care.</p></div><EditorialImage src="/relationship-editorial.png" className="page-hero-art" alt="" /></div></section><section className="section-paper story-intro"><div className="frame two-column"><div><Eyebrow>The beginning</Eyebrow><h2>2012: a visit, a conversation, a new commitment.</h2></div><div><p>Historical materials say that Jun Shen, an LBHS MUN advisor, visited Oloolaimutia Elementary School in 2012. After returning to Laguna Beach, he shared what he had learned with students. They formed what became the Laguna Maasai Partnership within LBHS MUN.</p><p className="notice">This account will be reviewed with the current program and community partners before it becomes a complete public narrative.</p></div></div></section><section className="timeline-section"><div className="frame"><Eyebrow sun>A living timeline</Eyebrow><div className="timeline">{[['2012', 'A visit becomes a relationship', 'Historical materials document the beginning of a connection between Laguna Beach and Oloolaimutia.'], ['2014–2023', 'Students carry the work forward', 'Fundraising, school-focused projects, and jewelry sales appear across the archived partnership record.'], ['Now', 'Listen, verify, continue', 'The next chapter depends on current priorities, consented stories, and transparent ways to participate.']].map(([year, title, detail]) => <article className="reveal" key={year}><span>{year}</span><h3>{title}</h3><p>{detail}</p></article>)}</div></div></section><NextStep /></Page>;
}

export function ImpactPage() {
  return <Page><section className="page-hero page-hero-dark"><div className="frame impact-hero-grid"><div><Eyebrow sun>Our impact</Eyebrow><h1>A record of shared effort.</h1><p className="lede">The project archive is a starting point. It is not a live dashboard, and historical information remains clearly marked until updated.</p></div><aside><Eyebrow sun>About this archive</Eyebrow><p>Past projects are shown with their dates and known limits. Current outcomes are still being confirmed.</p></aside></div></section><section className="archive section-paper"><div className="frame"><div className="archive-heading"><div><Eyebrow>Project archive</Eyebrow><h2>Historical work,<br />clearly labeled.</h2></div><p>We are preserving the record while creating space for future updates that distinguish past claims from confirmed current information.</p></div><div className="archive-list">{archive.map((item) => <article key={item.title}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.detail}</p></div><small>{item.note}</small></article>)}</div></div></section><NextStep /></Page>;
}

export function JewelryPage() {
  return <Page><section className="page-hero page-hero-clay"><div className="frame page-hero-grid"><div><Eyebrow>Maasai jewelry</Eyebrow><h1>Made by hand. Connected by a story.</h1><p className="lede">The jewelry program is part of the partnership’s history. Its next public chapter will be shaped by accurate, partner-approved context.</p></div><EditorialImage src="/jewelry-editorial.png" className="page-hero-art jewelry-page-image" alt="Illustrative jewelry program motif" /></div></section><section className="section-cream jewelry-story"><div className="frame two-column"><div><Eyebrow>The program</Eyebrow><h2>Handmade work deserves a careful introduction.</h2></div><div><p>Historical partnership materials describe handmade jewelry reaching Laguna Beach, where LBHS students offered pieces through local sales. Details about current makers, inventory, pricing, sales routes, and the flow of funds are being confirmed before publication.</p><p className="notice">Online jewelry orders are not available yet. Current pieces, sale dates, and purchasing details are being confirmed.</p></div></div></section><SupportBand /></Page>;
}

const paths = [['Support financially', 'Payment destination, account ownership, fees, and tax information will be shown here once confirmed.'], ['Join the student effort', 'Information about participation through LBHS MUN will be added with current leadership and meeting details.'], ['Host a fundraiser', 'Students, families, and community groups can organize a future event with guidance from the partnership.'], ['Learn and share', 'Read the origin story and share this website with someone who would like to learn about the partnership.']];

export function GetInvolvedPage() {
  return <Page><section className="page-hero page-hero-green"><div className="frame page-hero-grid"><div><Eyebrow sun>Get involved</Eyebrow><h1>Find your part in the partnership.</h1><p className="lede">Learn the story, explore the jewelry program, or find out how students and supporters can take part.</p></div><EditorialImage src="/relationship-editorial.png" className="page-hero-art" alt="" /></div></section><section id="participate" className="section-paper path-section"><div className="frame"><Eyebrow>Choose a path</Eyebrow><h2>Take part in a way that fits.</h2><div className="path-grid">{paths.map(([title, description], index) => <article className="reveal" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p><a className="arrow-link" href={index === 3 ? "/our-story" : index === 0 ? "#support" : "#questions"}>{index === 3 ? "Read and share our story" : index === 0 ? "Online giving status" : "Participation questions"}<span aria-hidden="true">→</span></a></article>)}</div></div></section><section id="support" className="support-details"><div className="frame two-column"><div><Eyebrow sun>Support the partnership</Eyebrow><h2>Giving, with a clear purpose.</h2></div><div><p>Before accepting contributions online, the partnership will publish where funds go, who is responsible for the account, available payment methods, any fees or restrictions, tax status, and what a supporter can expect next.</p><p className="notice">Online donations are not available yet. The official payment destination and contact details are being confirmed.</p></div></div></section><Questions /></Page>;
}

function NextStep() {
  return <section className="page-next"><div className="frame"><p>Keep the connection going.</p><a className="button button-quiet" href="/get-involved">Find your way to get involved <span aria-hidden="true">&nbsp;→</span></a></div></section>;
}

function Questions() {
  return <section id="questions" className="faq-section section-cream"><div className="frame faq-layout"><div><Eyebrow>A few practical questions</Eyebrow><h2>Good to know.</h2></div><div className="faq-list">
    <details><summary>Is the partnership part of LBHS MUN?</summary><p>Yes. Laguna Maasai Partnership is a student-led initiative within Laguna Beach High School Model United Nations, with a relationship to Oloolaimutia that began in 2012.</p></details>
    <details><summary>Can I donate through this website?</summary><p>Not yet. The approved payment destination, account owner, fees, and tax information are being confirmed. This website does not collect payments or donor details.</p></details>
    <details><summary>Can I buy jewelry?</summary><p>Current pieces, prices, and sale arrangements are being confirmed. You can <a href="/jewelry">read about the jewelry program</a> in the meantime.</p></details>
    <details><summary>How can students or community groups participate?</summary><p>Student participation is connected to LBHS MUN. Current meeting details, leadership, the official contact route, and guidance for group fundraisers will be added once confirmed. For now, <a href="/our-story">learn and share the partnership’s story</a>.</p></details>
    <details><summary>Are the projects shown here current?</summary><p>The <a href="/impact">project archive</a> describes historical work. Unconfirmed outcomes are labeled, and historical records should not be read as current fundraising goals.</p></details>
  </div></div></section>;
}
