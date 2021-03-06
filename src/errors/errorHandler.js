function errorHandler(error, requests, response, next) {
    console.log(error);
    const { status = 500, message = "Something went wrong!" } = error;
    response.status(status).json({ error: message });
}
module.exports = errorHandler;