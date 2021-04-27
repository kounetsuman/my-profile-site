import { ReactNode } from 'react';

type P = {
    children?: ReactNode;
    action?: boolean;
};

export const CardOutside = ({ children, action = true }: P): JSX.Element => {
    const style = action ? `hover:bg-gray-200 active:bg-gray-400` : ``;

    return (
        <div className={`w-full flex-col p-3 text-gray-900`}>
            <div className={`p-4 bg-white rounded-lg shadow-lg flex-col ${style}`}>{children}</div>
        </div>
    );
};
