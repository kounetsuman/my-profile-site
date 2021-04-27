import { GetServerSidePropsContext } from 'next';
import { getAllContents } from '~/api/blog/get_all_contents';
import { Post } from '~/api/types';
import { MY_ORIGIN } from '~/lib/const';

export const getServerSideProps = async ({
    res,
}: GetServerSidePropsContext): Promise<{ props: {} }> => {
    const xml = await generateSitemapXml();

    res.statusCode = 200;
    // Cashed 24Hr.
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
    res.setHeader('Content-Type', 'text/xml');
    res.end(xml);

    return {
        props: {},
    };
};

const generateSitemapXml = async (): Promise<string> => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
    const blogPostRoot = `${MY_ORIGIN}/blog/post`;

    console.log(`[generateSitemapXml] setting ${blogPostRoot} start`);

    const posts: Post[] = await getAllContents();
    posts.forEach((post: Post) => {
        const url = `${blogPostRoot}/${post.id}`;
        console.log(`[generateSitemapXml] url=${url}`);
        xml += `
        <url>
          <loc>${url}</loc>
          <lastmod>${post.updatedAt}</lastmod>
          <changefreq>weekly</changefreq>
        </url>
      `;
    });

    console.log(`[generateSitemapXml] setting ${blogPostRoot} end`);

    const aboutRoot = `${MY_ORIGIN}/about`;

    console.log(`[generateSitemapXml] setting ${aboutRoot} start`);

    xml += `
    <url>
        <loc>${aboutRoot}/</loc>
        <changefreq>weekly</changefreq>
    </url>
    `;

    console.log(`[generateSitemapXml] setting ${aboutRoot} end`);

    xml += `</urlset>`;
    return xml;
};

const Sitemap = (): null => null;
export default Sitemap;
