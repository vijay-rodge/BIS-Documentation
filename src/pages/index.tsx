import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.primaryButton)}
            to="/docs/introduction/overview">
            Explore System Documentation
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.secondaryButton)}
            to="/blog">
            Research & Benchmarks
          </Link>
        </div>
      </div>
    </header>
  );
}

const FeatureList = [
  {
    title: 'Authoritative Standards Discovery',
    description: (
      <>
        Natural language resolution to official Indian Standards (IS), cross-referencing
        gazette notifications, Quality Control Orders (QCOs), and BSB Edge preview documentation.
      </>
    ),
  },
  {
    title: 'Zero-Hallucination Compliance Engine',
    description: (
      <>
        Strict deterministic guardrails verify every clause number, testing threshold, and
        mandatory certification scheme against Tier-1 official Government of India sources.
      </>
    ),
  },
  {
    title: 'Laboratory & Testing Mapping',
    description: (
      <>
        Instant discovery of recognized BIS Central, Regional, and Branch laboratories,
        NABCB/NABL accreditations, and exact test schedules across all product categories.
      </>
    ),
  },
];

function FeaturesSection() {
  return (
    <section className="padding-vert--xl">
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className={clsx('col col--4', styles.cardContainer)}>
              <div className="card padding--lg shadow--md" style={{height: '100%'}}>
                <Heading as="h3">{props.title}</Heading>
                <p>{props.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Engineering Documentation"
      description="Authoritative Conversational AI for Indian Standards and BIS Services">
      <HomepageHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
