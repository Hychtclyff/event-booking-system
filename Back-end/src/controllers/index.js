import { res200 } from '../utils/response.js'

export const index = (req, res) => {
    res200('Eventify API v1 Ready to use (❁´◡`❁) Happy Coding guys!', null, res);
};