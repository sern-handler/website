import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo from '@site/static/img/sern-logo.png'
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary-lighter', styles.heroBanner)}>
      <div className="container">
        <div className='container'>
        <div className="row">
            <div className={ "col col--6" }>
                <h1
                 allowFontScaling
                 numberOfLines={1} 
                 adjustsFontSizeToFit
                 className={clsx("hero__title", styles['padding-vert--md'])}
                 style={styles['herotitle_font']}
                 >
                  <b>{siteConfig.title.slice(6)}</b>
                 </h1>     
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <Link
                  className="button button--secondary button--lg"
                  to="docs/guide/walkthrough/new-project">
                   npm create @sern/bot
                </Link>
            </div>
            <div className="col col--6">
              <img src={logo} alt="logo" height="auto" width="auto" />
            </div>
          </div>
          <div className={styles.buttons}>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout 
      title="sern - Handlers. Redefined."
      description="Description will go into a meta tag in"
      >
      <HomepageHeader/>
      <main className='user-select-none'>
         <div> 
            <HomepageFeatures/>
         </div>      
      </main>
    </Layout>
  );
}
