import React from 'react';
import { useBreadcrumb } from '~/lib/use-breadcrumb';
import PostListElement from '~/components/post-list-element';
import PageHead from '~/components/page-head';
import { NextPage, NextPageContext } from 'next';
import SearchInput from '~/components/search-input';
import { Post, TagDetail } from '~/api/types';
import { findBlogByKeyword } from '~/api/blog/find_blog_by_keyword';
import { CardOutside } from '~/components/card-outside';
import Main from '~/components/main';
import { tagDetails } from '~/lib/tag';
import { getAllContents } from '~/api/blog/get_all_contents';

interface P {
    contents: Post[];
    hitCount: number;
    keyword: string | string[];
    allTagDetails: TagDetail[];
};

const BlogSearch: NextPage<P> = ({ contents, hitCount, keyword, allTagDetails }): JSX.Element => {
    useBreadcrumb([
        {
            id: 1,
            text: 'Home',
            href: '/',
        },
        {
            id: 2,
            text: 'Blog',
            href: `/blog/search?keyword=${keyword}`,
        },
        {
            id: 3,
            text: `"${String(keyword)}"`,
        },
    ]);

    return (
        <Main tagRankingList={allTagDetails}>
            <PageHead
                subtitle={`Blog page. search for "${String(keyword)}"`}
                description={`Blog list`}
                image={``}
                url={``}
            />
            <CardOutside action={false}>
                <SearchInput />
            </CardOutside>
            <div className={`text-white`}>
                {`Blog page. search for "${String(keyword)}". ${hitCount} hits.`}
            </div>
            {contents.map((content) => (
                <PostListElement props={content} key={content.id} />
            ))}
        </Main>
    );
};

export const getServerSideProps = async (params: NextPageContext) => {
    const { keyword } = params.query;
    const posts = await findBlogByKeyword(keyword);
    const { contents, hitCount } = posts;

    // tag ranking list
    const allPosts = await getAllContents();
    const allTagDetails = tagDetails(allPosts);

    return {
        props: {
            contents,
            hitCount,
            keyword,
            allTagDetails,
        },
    };
};

export default BlogSearch;
