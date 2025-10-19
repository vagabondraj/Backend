const asyncHandler = (requestHandler) => async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next).
    catch((error) => {
        next(error);
    });
};

// or we can use code given below too

export { asyncHandler }

// Utility to handle asynchronous route handlers and middleware
// This function wraps an async function and catches any errors,
// passing them to the next middleware (typically an error handler).
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       success: false,
//       message: error.message || "Internal Server Error",
//     }); 
//   }
// };
