import { NextPage } from 'next';
import PageHead from '~/components/page-head';
import { Alert } from '@material-ui/lab';
import Link from 'next/link';
import Timeline from '~/components/timeline';
import { useEffect } from 'react';
import Main from '~/components/main';

const Home: NextPage = () => {
    // Twitter Widget
    let isLoadwidgets = false;
    useEffect(() => {
        if (!isLoadwidgets) {
            const s = document.createElement('script');
            s.setAttribute('src', 'https://platform.twitter.com/widgets.js');
            document.body.appendChild(s);
            isLoadwidgets = true;
        }
    }, []);

    return (
        <Main>
            <PageHead
                subtitle={`Top page `}
                description={`Top page`}
                image={``}
                url={``}
            ></PageHead>
            <Alert severity="info">
                {`RSSフィードを公開しています。`}
                <Link href={`/api/blog/feed`}>
                    <span className={`active:text-blue-600 hover:text-blue-400 cursor-pointer`}>{`こちら`}</span>
                </Link>
                {`を参照`}
            </Alert>
            <div className={`border`}>
                <Timeline />
            </div>
        </Main>
    );
};

export default Home;
