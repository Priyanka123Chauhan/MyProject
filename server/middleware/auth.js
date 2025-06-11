const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Unauthorized, JWT token is required!' });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Unauthorized! Wrong or expired token.' });
    }
};

module.exports = ensureAuthenticated;


// const jwt = require('jsonwebtoken');
// const ensureAuthenticaed = (req,res,next) =>
// {
//     if(!auth)
//     {
//         return res.status(403).json({message:'Unauthorized, JWt token is required!!'})
//     }

//     try{
//         const decoded = jwt.verify(auth,process.env.SECRET_KEY);
//         req.user= decoded;
//         next();

//     }
//     catch(err)
//     {
//         return res.status(403).json({message:'UnAuthorized!Wrong,Token!! or Expired'})
//     }
// }

// module.exports = ensureAuthenticaed;