import RSS from 'rss';
import { Post } from '~/api/types';
import { MY_ORIGIN } from '~/lib/const';
import { getAllContents } from '../get_all_contents';

const generateFeedXml = async (): Promise<string> => {
    console.log(`[generateFeedXml] start`);
    console.log(`[generateFeedXml] get feed start`);

    const feedOptions = {
        title: 'タイトル',
        description: '説明',
        site_url: 'サイトのURL',
        feed_url: 'フィードページのURL',
        language: 'ja',
    };
    const feed = new RSS(feedOptions);
    const posts = await getAllContents();

    console.log(`[generateFeedXml] get feed end`);
    console.log(`[generateFeedXml] generate xml start`);

    const baseUrl = `${MY_ORIGIN}/blog/post/`;
    console.log(`[generateFeedXml] url=${baseUrl}[id]`);
    posts.forEach((c: Post) => {
        const url = `${baseUrl}${c.id}`;
        const title = c.title;
        const description = c.summary;
        const date = new Date(c.createdAt);
        feed.item({
            title,
            description,
            date,
            url,
        });
    });
    const xml = feed.xml();

    console.log(`[generateFeedXml] generate xml end`);
    console.log(`[generateFeedXml] end`);
    return xml;
};

export default generateFeedXml;
