import jwt from 'jsonwebtoken'
const adminAuth = async(req, res,next)=>{
   try{
    let { token } = req.cookie;
    if (!token) {
      return res.status(400).json({ message: 'Not Aithorized Login Again' });
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      return res.status(400).json({ message: 'Not Aithorized Login Again, Invalid Token' });
    }
    req.adminEmail = process.env.ADMIN_EMAIL;
    next();

   }catch(error){
   console.log("adminAuth error")
   return res.status(500).json({message: `adminAuth error ${error}`})
   }
}
export default adminAuth