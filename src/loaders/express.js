import cors from 'cors';

// import * as routes from '../api';

export default ({app}) => {
    const env = process.env.NODE_ENV;
    /**
     * Enable cors on all actions
     */
    app.use(cors());

    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err['status'] = 404;
        next(err);
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message
            }
        });
    });

};
