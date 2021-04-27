import Date from '~/components/date';
import Link from 'next/link';
import TagList from '~/components/tag_list';
import { Post } from '~/api/types';
import { CardOutside } from '~/components/card-outside';

type P = {
    props: Post;
};

const PostListElement = ({ props }: P): JSX.Element => {
    return (
        <Link href={`/blog/post/[id]`} as={`/blog/post/${props.id}`} key={props.id}>
            <a>
                <CardOutside>
                    <header className={`bg-cover`}>
                        <span className={`mb-4 text-2xl`}>{props.title}</span>
                        <div className={`mb-4 text-grey-darker text-sm flex-1`}>
                            <Date dateString={props.createdAt} />
                        </div>
                        <TagList list={props.tagList} title={props.title} />
                    </header>
                    <main className={`p-4 flex-1 flex flex-col`}>
                        <p>{props.summary}</p>
                    </main>
                </CardOutside>
            </a>
        </Link>
    );
};
export default PostListElement;
