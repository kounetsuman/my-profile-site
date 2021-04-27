import { ReactNode } from 'react';

interface P {
    title: string;
    url: string;
}

type Index = 'Twitter' | 'Facebook' | 'Line';

const ButtonColor: { [key in Index]?: string } = {
    Twitter: `hover:bg-blue-600 bg-blue-500 ` as const,
    Facebook: `hover:bg-indigo-600 bg-indigo-500 ` as const,
    Line: `hover:bg-green-600 bg-green-500 ` as const,
};

export const SharedButton = ({ title, url }: P): JSX.Element => {
    return (
        <div className={`flex`}>
            <Twitter title={title} url={url} />
            <Facebook title={title} url={url} />
            <Line title={title} url={url} />
        </div>
    );
};

const ButtonOutside = ({ children, color }: { children?: ReactNode; color: Index }) => {
    const style = `${ButtonColor[color]} rounded-lg shadow-lg mx-2`;

    return (
        <div className={style}>
            <div className={`px-2 text-xs text-white tracking-wide cursor-pointer`}>{children}</div>
        </div>
    );
};

const Twitter = ({ title, url }: P): JSX.Element => {
    return (
        <div className={``}>
            <a
                href={`http://twitter.com/share?text=${title}&url=${url}`}
                target={`_blank`}
                rel={`noreferrer`}
            >
                <ButtonOutside color={`Twitter`}>{`Tweet`}</ButtonOutside>
            </a>
        </div>
    );
};

const Facebook = ({ title, url }: P): JSX.Element => {
    return (
        <div className={``}>
            <a
                href={`http://www.facebook.com/share.php?quote=${title}&u=${url}`}
                target="_blank"
                rel="noreferrer"
            >
                <ButtonOutside color={`Facebook`}>{`Facebook`}</ButtonOutside>
            </a>
        </div>
    );
};

const Line = ({ title, url }: P): JSX.Element => {
    const SPACE = ` `;
    return (
        <div className={``}>
            <a
                href={`http://line.me/R/msg/text/?${title}${SPACE}${url}`}
                target="_blank"
                rel="noreferrer"
            >
                <ButtonOutside color={`Line`}>{`LINE`}</ButtonOutside>
            </a>
        </div>
    );
};
