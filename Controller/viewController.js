
exports.Login = async (req, res, next) => {
  
    res.status(200).render('register', {
      Title: 'Log into your account',
    });
  };


