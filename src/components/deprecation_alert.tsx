import { Alert } from '@material-ui/lab';

const DAY = 1000 * 60 * 60 * 24;
const YEAR = DAY * 365;
const MONTH = YEAR / 12;

type DeprecationAlertProps = {
    date: string;
};

export const DeprecationAlert = ({ date }: DeprecationAlertProps): JSX.Element => {
    const current = new Date(date);
    const today = new Date();
    const diff = today.getTime() - current.getTime();
    const month = Math.floor(diff / MONTH);
    const year = Math.floor(diff / YEAR);

    if (year > 0) {
        return (
            <Alert severity="warning">{`この記事は最終更新日から${year}年以上が経過しています。`}</Alert>
        );
    }

    if (month > 0) {
        return (
            <Alert severity="warning">{`この記事は最終更新日から${month}か月以上が経過しています。`}</Alert>
        );
    }

    return <></>;
};
