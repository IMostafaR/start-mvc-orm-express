export const isSignedIn = (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    return res.json({
      status: "failed",
      message: "Please sign in to add notes",
    });
  }

  next();
};
