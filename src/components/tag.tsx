import Link from 'next/link';
type TagProps = {
    children: string;
};

const Tag = ({ children }: TagProps): JSX.Element => {
    return (
        <span className={`inline-block text-xs text-white mr-2 mb-1 tracking-wide cursor-pointer active:bg-blue-900 hover:bg-blue-800 bg-blue-700 rounded-lg shadow-lg`}>
            <Link href={`/blog/tag/[tag]`} as={`/blog/tag/${encodeURIComponent(children)}`}>
                <span className={`px-2 box-border`}>
                    {children}
                </span>
            </Link>
        </span>
    );
};

export default Tag;
