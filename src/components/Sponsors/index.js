import styles from './styles.module.css';
import {useEffect, useState} from "react";

export default function Sponsors() {
    const [sponsors, setSponsors] = useState({})
    useEffect(() => {
        const asyncFunction = async () => {
            fetch("https://opencollective.com/api/graphql/v2", {
                body: JSON.stringify({
                    "operationName": "BannerTopContributors",
                    "variables": {
                        "collectiveSlug": "sern"
                    },
                    "query": "query BannerTopContributors($collectiveSlug: String!) {\n  account(slug: $collectiveSlug, throwIfMissing: false) {\n    id\n    currency\n    slug\n    ... on AccountWithContributions {\n      contributors(limit: 150) {\n        totalCount\n        nodes {\n          id\n          name\n          roles\n          isAdmin\n          isCore\n          isBacker\n          since\n          image\n          description\n          collectiveSlug\n          totalAmountDonated\n          type\n          publicMessage\n          isIncognito\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}"
                }),
                method: "POST",
                headers: {
                    "content-type": "application/json"
                }
            }).then(async res => setSponsors(await res.json()))
        }
        asyncFunction()
    }, [])
    return (
        <div className={styles.sponsorLayout}>
            {sponsors.data?.account?.contributors?.nodes.filter(sp => sp.totalAmountDonated > 0).map((sponsor, index) => (
                <div key={index} className={styles.sponsorCard}>
                    <a href={`https://opencollective.com/${sponsor.collectiveSlug}`}>
                        <img src={sponsor.image} alt={sponsor.name} />
                        <h3>{sponsor.name}{sponsor.isAdmin && ' (admin)'}</h3>
                    </a>
                    <p>{sponsor.publicMessage}</p>
                    <p className={styles.sponsorMoney}>${sponsor.totalAmountDonated / 100}</p>
                </div>
            ))}
        </div>
    )
}

/*
type Response = {
  data: {
    account: Account;
  };
};

type Account = {
  id: string;
  currency: string;
  slug: string;
  contributors: Contributors;
  __typename: string;
};

type Contributors = {
  totalCount: number;
  nodes: Contributor[];
  __typename: string;
};

type Contributor = {
  id: string;
  name: string;
  roles: string[];
  isAdmin: boolean;
  isCore: boolean;
  isBacker: boolean;
  since: string;
  image: string;
  description: string | null;
  collectiveSlug: string;
  totalAmountDonated: number;
  type: string;
  publicMessage: string | null;
  isIncognito: boolean;
  __typename: string;
};
*/