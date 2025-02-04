// pages/_app.js

import Layout from "../../components/Layout";  // Import Layout component
import "../app/globals.css";  // Your global styles

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
