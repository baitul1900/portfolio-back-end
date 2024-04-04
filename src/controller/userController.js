const {userProfileCreate,verifyOtpService, loginUserService, readProfileService, updateUserService, recoverAccountService} = require('../service/userService');
const osUtils = require('os-utils');


// Controller function to get CPU performance data
exports.getCpuPerformance = (req, res) => {
    osUtils.cpuUsage((cpuUsage) => {
      // Calculate progress based on CPU usage
      const progress =parseFloat(cpuUsage.toFixed(2)) * 100;
      const cores = osUtils.cpuCount(); // Assume CPU usage percentage as progress
      res.json({ progress });
    });
};


exports.userRegistration = async (req, res) => {
    try {
        let resBody = await userProfileCreate(req);
    return res.status(200).json(resBody);
    }
    catch (e) {
        return res.status(500).json({status: "fail", messages: "something went wrong"})
        console.error('Error in userRegistration:', e);
    }
}

exports.userLoginController = async (req, res) => {
    try {
        let result = await loginUserService(req);
        if (result['status'] === "success") {
            let cookieOption = { expires: new Date(Date.now() + 24 * 6060 * 1000), httpOnly: false };

            res.cookie('token', result['token'], cookieOption);
            return res.status(200).json(result);
        }
    } catch (e) {
        console.error('Error in userLoginController:', e); // Add this line to log errors
        return res.status(500).json({ status: "fail", message: "something went wrong" });
    }
};




exports.profileDetails = async (req, res)=> {
    try {
        let result = await readProfileService(req);
        if (result.status === "success") {
            return res.status(200).json(result);
        } else {
            return res.status(404).json(result); // Return 404 if user profile not found
        }
    }
    catch (e) {
        return res.status(500).json({status: "fail", messages: "something went wrong"})
    }
};


exports.updateProfile = async (req, res)=> {
    let result = await updateUserService(req);
    return res.status(200).json(result);
}

exports.accountRecoverController = async (req, res)=> {
    let result = await recoverAccountService(req);
    return res.status(200).json(result);
}

exports.verifyOtpController = async (req, res)=> {
    let result = await verifyOtpService(req);
    return res.status(200).json({status: "success", data: result});
}; 