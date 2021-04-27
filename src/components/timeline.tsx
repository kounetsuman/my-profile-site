import { TWITTER_URL } from '~/lib/const';
const Timeline = (): JSX.Element => {
    return (
        <div>
            <a
                className={`twitter-timeline`}
                href={`${TWITTER_URL}?ref_src=twsrc%5Etfw`}
            />
        </div>
    );
};

export default Timeline;
