const jwt = require('jsonwebtoken');

exports.auth = (req,res,next) => {

    const token = req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({msg: "Not token provided"});
    try{
        const decoded = jwt.verify(token, process.env.SECRET_JW);
        req.user = decoded;
        next();
    } catch(e) {
        res.status(403).json({ msg: 'Invalid token' });
    }
}


exports.isAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ msg: 'Access denied: Admins only' });
  }
  next();
};