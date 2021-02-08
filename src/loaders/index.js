import expressLoader from './express';
import logger from "./logger";

export default async ({app}) => {

    await expressLoader({app});
    logger.log("info", "Express Loader has initialized successfully! ✅");

};
