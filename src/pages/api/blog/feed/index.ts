import { NextApiRequest, NextApiResponse } from 'next';
import generateFeedXml from '~/api/blog/feed/generate_feed_xml';

const BlogFeed = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const result = await generateFeedXml();
        res.statusCode = 200;
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
        res.setHeader('Content-Type', 'text/xml');
        res.end(result);
    } catch (e) {
        res.status(e.status).json(e.message);
    }
};

export default BlogFeed;
