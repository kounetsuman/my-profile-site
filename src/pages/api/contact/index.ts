import { NextApiResponse, NextApiRequest } from 'next';
import { postContact } from '~/api/contact/post_contact';

const Contact = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        await postContact(req.body);
        res.status(200).end();
    } catch (e) {
        res.status(e.status).json(e.message);
    }
};

export default Contact;
