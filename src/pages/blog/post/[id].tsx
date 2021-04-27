import PostDetailElement from '~/components/post-detail-element';
import { useBreadcrumb } from '~/lib/use-breadcrumb';
import React from 'react';
import PageHead from '~/components/page-head';
import { Post, PostDetail, TagDetail } from '~/api/types';
import { selectBlogById } from '~/api/blog/select_blog_by_id';
import { getAllContents } from '~/api/blog/get_all_contents';
import { ISR_TIME } from '~/lib/const';
import { CardOutside } from '~/components/card-outside';
import { NextPage } from 'next';
import Main from '~/components/main';
import { tagDetails } from '~/lib/tag';

type blogIdPaths = `/blog/post/${string}`;

interface P {
    postDetail: PostDetail;
    allTagDetails: TagDetail[];
};

const BlogPostId: NextPage<P> = ({ postDetail, allTagDetails }): JSX.Element => {
    useBreadcrumb([
        {
            id: 1,
            text: 'Home',
            href: '/',
        },
        {
            id: 2,
            text: 'Blog',
            href: '/blog/1',
        },
        {
            id: 3,
            text: postDetail.title,
        },
    ]);

    return (
        <Main tagRankingList={allTagDetails}>
            <PageHead
                subtitle={`${postDetail.title}`}
                description={`${postDetail.summary}`}
                image={``}
                url={``}
            ></PageHead>
            <CardOutside action={false}>
                <PostDetailElement props={postDetail} />
            </CardOutside>
        </Main>
    );
};

export const getStaticProps = async (context: {
    params: { id: string };
}): Promise<{
    props: P;
    revalidate: number;
}> => {
    const id = context.params.id;
    const postDetail = await selectBlogById(id);

    // tag ranking list
    const allPosts = await getAllContents();
    const allTagDetails = tagDetails(allPosts);
    
    return {
        props: {
            postDetail,
            allTagDetails,
        },
        revalidate: ISR_TIME,
    };
};

export const getStaticPaths = async (): Promise<{
    paths: blogIdPaths[];
    fallback: boolean;
}> => {
    const posts = await getAllContents();
    const paths = posts.map((c: Post) => `/blog/post/${c.id}` as blogIdPaths);

    return { paths, fallback: false };
};

export default BlogPostId;
