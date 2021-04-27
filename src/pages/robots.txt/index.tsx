import { GetServerSidePropsContext } from 'next';
import { IS_DEVELOP, MY_ORIGIN } from '~/lib/const';

export const getServerSideProps = async ({
    res,
}: GetServerSidePropsContext): Promise<{ props: {} }> => {
    const robotsContent = getRobots();

    res.statusCode = 200;
    // Cashed 24Hr.
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.setHeader('Content-Type', 'text/plain');
    res.end(robotsContent);

    return {
        props: {},
    };
};

const getRobots = (): string => {
    if (IS_DEVELOP) {
        return `User-agent: *
Disallow: /`;
    } else {
        return `User-agent: *
Allow: /
Sitemap: ${MY_ORIGIN}/sitemap.xml`;
    }
};

const Robots = (): null => null;
export default Robots;
