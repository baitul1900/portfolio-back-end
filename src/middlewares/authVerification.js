
const { decodeToken } = require('../helpers/jwtAuth');

// module.exports = async (req, res, next) => {
//     try {
//         let token = req.headers['authorization'];
//         if (!token) {
//             token = req.cookies['token'];
//         }

//         if (!token) {
//             return res.status(401).json({ status: "fail", data: "Unauthorized" });
//         }

//         // Extract token from "Bearer <token>" format
//         token = token.split(' ')[1];

//         console.log('Received Token:', token); // Log the received token

//         // Verify the token
//         const decoded = jwt.verify(token, process.env.JWT_KEY);

//         // Log the decoded token
//         console.log('Decoded Token:', decoded);


//         // Check if decoding was successful
//         if (!decoded || !decoded.email) {
//             return res.status(401).json({ status: "fail", data: "Unauthorized" });
//         }

//         // Attach decoded email to request headers
//         req.headers.email = decoded.email;

//         // Move to the next middleware or route handler
//         next();
//     } catch (error) {
//         console.error('Error decoding or verifying token:', error);
//         return res.status(401).json({ status: "fail", data: "Unauthorized" });
//     }
// };

// module.exports=(req,res,next)=>{

//     // Receive Token
//     let token = req.headers['authorization'];
//     if(!token){
//         token=req.cookies['token']
//     }

//     if (!token) {
//                     return res.status(401).json({ status: "fail", data: "Unauthorized" });
//                 }
        
//                 // Extract token from "Bearer <token>" format
//                 token = token.split(' ')[1];


//   // Token Decode
//   let decoded=decodeToken(token)


//   // Request Header Email+UserID Add
//   if(decoded===null){
//       return res.status(401).json({status:"fail", message:"Unauthorized"})
//   }
//   else {
//     let email=decoded['email'];
//     let user_id=decoded['user_id'];
//     req.headers.email=email;
//     req.headers.user_id=user_id;
//     next();
//   }
// }

module.exports = (req, res, next) => {
  try {
      // Receive Token from Authorization header or cookies
      let token = req.headers['authorization'];
      if (!token) {
          token = req.cookies['token'];
      }

      if (!token) {
          return res.status(401).json({ status: "fail", data: "Unauthorized" });
      }
      
      // Extract token from "Bearer <token>" format
      if (token.startsWith('Bearer ')) {
          token = token.slice(7); // Remove 'Bearer ' prefix
      }

      // Token Decode
      let decoded = decodeToken(token);

      // Request Header Email and UserID Add
      if (decoded === null) {
          return res.status(401).json({ status: "fail", message: "Unauthorized" });
      } else {
          let email = decoded['email'];
          let user_id = decoded['user_id'];
          req.headers.email = email;
          req.headers.user_id = user_id;
          next();
      }
  } catch (error) {
      console.error('Error decoding token:', error);
      return res.status(401).json({ status: "fail", data: "Unauthorized" });
  }
};
