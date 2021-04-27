import matter from 'gray-matter';
import { Post, MicrocmsReq } from '~/api/types';
import { DOWNLOAD_POST_LIMIT, MICROCMS_BASEURL, MICROCMS_GET_HEADER, MAX_SUMMARY_LENGTH } from '~/api/const';
import { desc } from '~/lib/sort';

type sorted = 'created' | 'updated';

export const getAllContents = async (sorted: sorted = 'created'): Promise<Post[]> => {
    console.log(`[getAllContents] start`);
    console.log(`[getAllContents]Get Total PostCount API access start`);

    const firstUrls = `${MICROCMS_BASEURL}/blog`;
    console.log(`[getAllContents] url=${firstUrls}`);

    const firstRes = await fetch(firstUrls, MICROCMS_GET_HEADER);
    const json = await firstRes.json();
    const totalCount = json.totalCount;

    console.log(`[getAllContents]Get Total PostCount API access end`);
    console.log(`[getAllContents]Get All Post API access start`);

    console.log(
        `[getAllContents] For the acquisition limit is 5MB, so I want to loop to some extent to prevent errors.`
    );
    console.log(`[getAllContents] @ref https://document.microcms.io/content-api/get-list-contents`);

    const totalPageCount = Math.ceil(totalCount / DOWNLOAD_POST_LIMIT);
    const results = await [...Array(totalPageCount)]
        .map(async (_, i) => {
            console.log(`[getAllContents]API request count: ${i + 1}/${totalPageCount}`);
            const query = new URLSearchParams({
                offset: String(DOWNLOAD_POST_LIMIT * i),
                limit: String(DOWNLOAD_POST_LIMIT),
            });
            const urls = `${MICROCMS_BASEURL}/blog?${query}`;
            console.log(`[getAllContents] url=${urls}`);

            const result = await fetch(urls, MICROCMS_GET_HEADER);
            const json = await result.json();
            return json.contents as MicrocmsReq[];
        })
        .reduce(
            async (c: Promise<MicrocmsReq[]>, p: Promise<MicrocmsReq[]>): Promise<MicrocmsReq[]> =>
                (await c).concat(await p)
        );

    console.log(`[getAllContents]Get All Post API access end`);
    console.log(`[getAllContents]Sorted posts start`);

    const sortedResults = results.sort((a, b) => {
        if (sorted === 'created') {
            return desc(a.createdAt, b.createdAt);
        }
        if (sorted === 'updated') {
            return desc(a.updatedAt, b.updatedAt);
        }
        return 0;
    });

    console.log(`[getAllContents]Sorted posts end`);
    console.log(`[getAllContents]Convert post types start`);

    const contents = sortedResults.map((r) => {
        const matterResult = matter(r.body);
        const { id, createdAt, updatedAt, publishedAt, revisedAt } = r;
        const { title, topics, published } = matterResult.data;
        const body = matterResult.content;
        const summary = body.substr(0, MAX_SUMMARY_LENGTH);
        return {
            id,
            summary,
            body,
            title,
            tagList: topics,
            published,
            createdAt,
            updatedAt,
            publishedAt,
            revisedAt,
        } as Post;
    });

    console.log(`[getAllContents]Convert post types end`);
    console.log(`[getAllContents] end`);

    return contents;
};
