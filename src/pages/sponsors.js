import './sponsors.css';
import Layout from '@theme/Layout';
import Sponsors from "../components/Sponsors";
export default function ( ) {
    return (
        <Layout>
            <header className='header'>
                <h1 className={"hero__title"}>
                    Sponsors
                </h1>
                <p className={"hero__subtitle"}>
                    These amazing people help us keep the project alive. A big thanks from the team!
                </p>
            </header>
            <Sponsors />
        </Layout>
    )
}
