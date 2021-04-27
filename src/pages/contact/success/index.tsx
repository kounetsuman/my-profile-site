import React from 'react';
import { NextPage } from 'next';
import { CardOutside } from '~/components/card-outside';
import Main from '~/components/main';

const ErrorIndex: NextPage = () => {
    return (
        <Main>
            <CardOutside action={false}>{`送信しました。`}</CardOutside>;
        </Main>
    )
};

export default ErrorIndex;
