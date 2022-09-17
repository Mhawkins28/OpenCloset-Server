const router = require('express').Router();
// const passport = require('passport');

router.get('/', function(req, res) {
    res.redirect('/user');
  });

router.get('/login/success', (req, res) => {
  if(req.user) {
    res.status(200).json({
      success:true,
      message: "successful",
      user:req.user,
      // cookie: req.cookies
      // jwt
    })

  }
})

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success:false,
    message: "failure"
  })
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3001/')
})


router.get('/logout', function(req, res){
  req.logout(()=> {
    res.redirect('user/login');
  });
});

module.exports = router