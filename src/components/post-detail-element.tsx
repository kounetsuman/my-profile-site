import Date from '~/components/date';
import MarkdownPreview from '~/components/markdown-preview';
import TagList from '~/components/tag_list';
import { DeprecationAlert } from '~/components/deprecation_alert';
import { Alert } from '@material-ui/lab';
import { PostDetail } from '~/api/types';
import { SharedButton } from '~/components/shared-button';
import { MY_ORIGIN } from '~/lib/const';

type P = {
    props: PostDetail;
};

const PostDetailElement = ({ props }: P): JSX.Element => {
    return (
        <>
            <header className={`bg-cover sm:text-sm text-xs`}>
                <div className={`mb-8`}>
                    <span className={`mr-2`}>
                        {`作成: `}
                        <Date dateString={props.createdAt} />
                    </span>
                    <span className={`mr-2`}>
                        {`更新: `}
                        <Date dateString={props.updatedAt} />
                    </span>
                </div>
                <h3 className={`mb-4 text-2xl`}>{props.title}</h3>
                <SharedButton
                    title={`${props.title}`}
                    url={`${MY_ORIGIN}/blog/post/${props.id}`}
                ></SharedButton>
                <div className={`mb-4`}>
                    <DeprecationAlert date={props.updatedAt} />
                </div>
                <div className={`pb-4`}>
                    <Alert severity="info">{`このPOSTは約${props.time2FinishReading}分で読めます。`}</Alert>
                </div>
                <div className={`mb-4`}>
                    <TagList list={props.tagList} title={props.title} />
                </div>
            </header>
            <main className={`pt-4 flex-col`}>
                <div className={`pb-4 border-t`} />
                <MarkdownPreview content={props.contentHtml} />
            </main>
            <footer className={`pt-4`}>
                <div className={`pb-4 border-t`} />
            </footer>
        </>
    );
};

export default PostDetailElement;
