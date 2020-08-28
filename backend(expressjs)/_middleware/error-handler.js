module.exports = errorHandler;

function errorHandler(err, req, res, next) {
    try {
 

        res.status(500).json({ message: err.message });
    }

    catch (err) {
        res.status(400).json({ message: err.message || err.toString() });
       

    }
}