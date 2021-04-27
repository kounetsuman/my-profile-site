import React from 'react';
import { NextPage } from 'next';
import { CardOutside } from '~/components/card-outside';
import Main from '~/components/main';

const ErrorIndex: NextPage = () => {
    return (
        <Main>
            <CardOutside action={false}>
                {`送信が失敗しました。前の画面に戻りもう一度送信してください。`}
            </CardOutside>
        </Main>
    );

};

export default ErrorIndex;
