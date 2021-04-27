type MarkdownPreviewProps = {
    content: string;
};

const MarkdownPreview = ({ content }: MarkdownPreviewProps): JSX.Element => {
    return (
        <div className={``}>
            <div className={`markdown-body`} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default MarkdownPreview;
