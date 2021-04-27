import Link from 'next/link';

type LinkableProps = {
    href: string;
    name: string;
    as?: string;
};

const Linkable = ({ href, name, as }: LinkableProps): JSX.Element => {
    return (
        <div className={`h-full cursor-pointer pr-6 pl-6 active:text-blue-200 hover:text-blue-100 focus:text-blue-100`}>
            <Link href={href} as={as}>
                {name}
            </Link>
        </div>
    );
};

export default Linkable;
