import { useAmp } from 'next/amp';
import SNSLink from '~/components/sns_link';
import { DEFAULT_ICON, HANDLE_NAME, MY_FIRST_NAME, MY_LAST_NAME } from '~/lib/const';

const imgProfile: JSX.Element = (
    <>
        <img
            src={DEFAULT_ICON}
            alt={`My profile icon`}
            loading={`lazy`}
            width={64}
            height={64}
        />
    </>
);

const imgProfileAMP: JSX.Element = (
    <>
        <amp-img    
            src={DEFAULT_ICON}
            alt={`My profile icon`}
            width={64}
            height={64}
            layout={`responsive`}
        />
    </>
);

const Profile = (): JSX.Element => {
    const isAmp = useAmp();
    return (
        <div>
            {isAmp ? imgProfileAMP : imgProfile}
            <div className={``}>
                <div className={`font-semibold text-sm py-2`}>{`${MY_FIRST_NAME} ${MY_LAST_NAME}`}</div>
                <div className={`font-semibold text-xs py-2`}>{`@${HANDLE_NAME}`}</div>
                <div className={``}>
                    <SNSLink></SNSLink>
                </div>
            </div>
        </div>
    );
};

export default Profile;
