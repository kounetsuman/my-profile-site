import { parseISO, format } from 'date-fns';

type DateProps = {
    dateString: string;
};

const Date = ({ dateString }: DateProps): JSX.Element => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy hh:mm')}</time>;
};

export default Date;
