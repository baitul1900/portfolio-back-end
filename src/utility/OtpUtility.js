const nodemailer = require('nodemailer');

const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

const sendOtp = async (email, otp) => {
    let transporter = nodemailer.createTransport({
        host: 'mail.teamrabbil.com',
        port: 25,
        secure: false,
        auth: {
            user: "info@teamrabbil.com",
            pass: '~sR4[bhaC[Qs'
        },
        tls: {
            rejectUnauthorized: false
        },
    });

    let mailOptions = {
        from: 'your Otp verification code',
        to: email, // Use the 'email' parameter here
        subject: 'Your OTP verification code', // Example subject
        text: `Your OTP code is: ${otp}` // Example message
    }

    return await transporter.sendMail(mailOptions);
}

module.exports = {
    generateOtp,
    sendOtp
};
