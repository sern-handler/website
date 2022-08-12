import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Batteries included',
    Svg: require('@site/static/img/battery-svgrepo-com.svg').default,
    description: (
      <>
        Start or integrate a new project in minutes.
      </>
    ),
  },
  {
    title: 'Customizable',
    Svg: require('@site/static/img/puzzle-svgrepo-com.svg').default,
    description: (
      <>
         Extend or customize with community-based plugins to provide utilities, filters, and more.
      </>
    ),
  },
  {
    title: 'Modern',
    Svg: require('@site/static/img/typescript-svgrepo-com.svg').default,
    description: (
      <>
        Uses modern and powerful tooling such as
          <a href={'https://swc.rs/'}> swc</a>,
          <a href={'https://tsup.egoist.dev/'}> tsup</a>,
          <a href={'https://www.typescriptlang.org/'}> typescript</a>, and
          <a href={'https://rxjs.dev/'}> rxjs</a> to future-proof and ensure project quality.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
