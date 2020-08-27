module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    try {


        switch (true) {
            case typeof err === 'string':
                // custom application error
                const is404 = err.toLowerCase().endsWith('not found');
                const statusCode = is404 ? 404 : 400;
                return res.status(statusCode).json({ message: err });
            case err.name === 'UnauthorizedError':
                // jwt authentication error
                return res.status(401).json({ message: 'Unauthorized' });
            default:
                return res.status(500).json({ message: err.message });
        }
    }
    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });

    }
}