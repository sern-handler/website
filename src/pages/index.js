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
    <header className={clsx('hero hero--primary-darker', styles.heroBanner)}>
      <div className="container">
        <div className='container'>
        <div className="row">
            <div className={ "col col--6 " }>
                <h1
                 className={clsx("hero__title", styles['padding-vert--md'])}
                 style={ { fontSize : '450%' }}
                 >
                  <b>{siteConfig.title.slice(6)}</b>
                 </h1>     
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <Link
                  className="button button--secondary button--lg"
                  to="docs/guide/walkthrough/cli">
                   sern init
                </Link>
            </div>
            <div className="col col--6">
              <img src={logo} alt="logo" height={'100%'}/>
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
      title={siteConfig.title}
      description="Description will go into a meta tag in"
      >
      <HomepageHeader/>
      <main className='user-select-none'>
         <div className='hero'> 
            <HomepageFeatures/>
         </div>      
      </main>
    </Layout>
  );
}
