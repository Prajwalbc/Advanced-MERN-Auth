exports.getPrivateRoute = (req, res, next) => {
  const userName = req.user.username;

  //private data
  res.status(200).json({
    success: true,
    data: `${userName}`,
  });
};
