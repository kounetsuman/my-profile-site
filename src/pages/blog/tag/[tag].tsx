import React from 'react';
import { useBreadcrumb } from '~/lib/use-breadcrumb';
import PostListElement from '~/components/post-list-element';
import PageHead from '~/components/page-head';
import { getAllContents } from '~/api/blog/get_all_contents';
import SearchInput from '~/components/search-input';
import { Post, TagDetail } from '~/api/types';
import { findBlogByTag } from '~/api/blog/find_blog_by_tags';
import { CardOutside } from '~/components/card-outside';
import { ISR_TIME } from '~/lib/const';
import { tagDetails } from '~/lib/tag';
import { NextPage } from 'next';
import Main from '~/components/main';

type P = {
    contents: Post[];
    hitCount: number;
    tag: string | string[];
    allTagDetails: TagDetail[];
};

type blogTagPaths = `/blog/tag/${string}`;

const BlogTagTag: NextPage<P> = ({ contents, hitCount, tag, allTagDetails }): JSX.Element => {
    useBreadcrumb([
        {
            id: 1,
            text: 'Home',
            href: '/',
        },
        {
            id: 2,
            text: 'Blog',
            href: `/blog/tag/${tag}`,
        },
        {
            id: 3,
            text: `"${String(tag)}"`,
        },
    ]);

    return (
        <Main tagRankingList={allTagDetails}>
            <PageHead
                subtitle={`Blog page. tags for "${String(tag)}"`}
                description={`Blog list`}
                image={``}
                url={``}
            />
            <CardOutside action={false}>
                <SearchInput />
            </CardOutside>
            <div className={`text-white`}>
                {`Blog page. tags for "${String(tag)}". ${hitCount} hits.`}
            </div>
            {contents.map((content) => (
                <PostListElement props={content} key={content.id} />
            ))}
        </Main>
    );
};

export const getStaticProps = async (context: {
    params: { tag: string };
}): Promise<{
    props: P;
    revalidate: number;
}> => {
    const tag = decodeURIComponent(context.params.tag);
    const posts = await findBlogByTag(String(tag));
    const { contents, hitCount } = posts;

    // tag ranking list
    const allPosts = await getAllContents();
    const allTagDetails = tagDetails(allPosts);

    return {
        props: {
            contents,
            hitCount,
            tag,
            allTagDetails,
        },
        revalidate: ISR_TIME,
    };
};

export const getStaticPaths = async (): Promise<{
    paths: blogTagPaths[];
    fallback: boolean;
}> => {
    const posts = await getAllContents();
    const allTagDetails = tagDetails(posts);
    const paths = allTagDetails.map((t) => `/blog/tag/${encodeURIComponent(t.name)}` as blogTagPaths);

    return { paths, fallback: false };
};

export default BlogTagTag;
