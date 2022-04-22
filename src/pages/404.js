import React from 'react';
import { Helmet } from 'react-helmet';
import { Header, Button } from 'flotiq-components-react';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';

const NotFoundPage = () => (
    <Layout additionalClass={['bg-light-gray']}>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <Header additionalClasses={['text-center', 'mt-20']}>
            Page not found, sorry
        </Header>
        <div className="text-center mt-5 pt-5">
            {/* Example usage of button */}
            <Link to="/"><Button label="Go back to index" /></Link>
        </div>
    </Layout>
);

export default NotFoundPage;
