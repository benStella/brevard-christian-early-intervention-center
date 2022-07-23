const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      res.redirect('/adminLogin');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;