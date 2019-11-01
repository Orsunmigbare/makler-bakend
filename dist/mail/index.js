"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'test@example.com',
    from: 'test@example.com',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
const sendMail = ({ to, content, subject }) => {
    let msg = {
        to,
        from: 'Spencer at Makler',
        subject,
        html: content
    };
    sgMail.send(msg);
};
exports.sendPasswordResetToken = ({ email, token }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let content = `<div> Your password Reset Token is <b>${token}</b> <div>`, subject = 'Password Reset Token';
        yield sendMail({ to: email, content, subject });
        return true;
    }
    catch (e) {
        return false;
    }
});
//# sourceMappingURL=index.js.map