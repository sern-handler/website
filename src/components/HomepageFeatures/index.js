import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Modular',

    Svg: require('@site/static/img/puzzle-svgrepo-com.svg').default,
    description: (
      <>
        Take apart, build, or customize code with ease to create robust bots.
      </>
    ),
  },
  {
    title: 'Concise',
    Svg: require('@site/static/img/typescript-svgrepo-com.svg').default,
    description: (
      <>
        Commands are significantly smaller than other competitors.
        Write impactful, concise code.
      </>
    ),
  },
  {
    title: 'Familiar',
    Svg: require('@site/static/img/battery-svgrepo-com.svg').default,
    description: (
      <>
         Code like a traditional command handler. Feels and looks like classic v12 command handlers. 
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
