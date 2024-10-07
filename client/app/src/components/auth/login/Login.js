import React, { useState, useRef, useEffect } from 'react';
import './login.scss';
import SaleImage from './saleImage.jpeg';
import googleIcon from './googleIcon.svg';

const domainOptions = ['@gmail.com', '@yahoo.com', '@outlook.com', '@hotmail.com'];

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [domain, setDomain] = useState(domainOptions[0]);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpRefs = useRef([]);

  useEffect(() => {
    if (isOtpSent) {
      otpRefs.current[0].focus();
    }
  }, [isOtpSent]);

  const handleEmailChange = (e) => {
    const value = e.target.value;

    if (value.includes('@')) {
      const [name, domainPart] = value.split('@');
      setEmailInput(name);
      if (domainPart) {
        const foundDomain = domainOptions.find((d) => d.startsWith(domainPart));
        setDomain(foundDomain || domainOptions[0]);
      }
    } else {
      setEmailInput(value);
    }
  };

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const handleOtpChange = (e, idx) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      let newOtp = [...otp];
      newOtp[idx] = value;
      setOtp(newOtp);

      if (value && idx < otp.length - 1) {
        otpRefs.current[idx + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      otpRefs.current[idx - 1].focus();
    }
  };

  const handleContinueClick = () => {
    if (emailInput) {
      setIsOtpSent(true);
    } else {
      alert('Please enter a valid email');
    }
  };

  const handleVerifyClick = () => {
    if (otp.join('').length === 4) {
      alert(`OTP verified: ${otp.join('')}`);
    } else {
      alert('Please enter a 4-digit OTP');
    }
  };

  return (
    <div className='login-container'>
      <div className='login-holder'>
        <div className='top'>
          <img src={SaleImage} alt='sales-banner' />
          <p>Flash Sale is Live! 🎉 Grab UpTo 80% Off</p>
        </div>

        <div className='bottom'>
          <h3>Login <span>or</span> Signup</h3>

          <div className='input-actions'>
            <div className='search-container'>
              <div className='email-input'>
                <input
                  type='text'
                  placeholder='Enter your email'
                  value={emailInput}
                  onChange={handleEmailChange}
                  disabled={isOtpSent}
                />
                <hr />
                <select value={domain} onChange={handleDomainChange} disabled={isOtpSent}>
                  {domainOptions.map((d, idx) => (
                    <option key={idx} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>
              <div className='google-option'>
                <img src={googleIcon} alt='google icon' />
              </div>
            </div>
          </div>

          {isOtpSent && (
            <div className='otp-input-container'>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  type='text'
                  maxLength='1'
                  value={digit}
                  ref={(el) => otpRefs.current[idx] = el}
                  onChange={(e) => handleOtpChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className={`otp-input ${digit ? 'filled' : ''}`}
                />
              ))}
            </div>
          )}

          {isOtpSent ?

          <div className='pricacy-checkbox'>
            {/* <input type='checkbox' /> */}
            <p>Didn't Received OTP? <span>Resend</span></p>
          </div>

:
          <div className='pricacy-checkbox'>
            <input type='checkbox' />
            <p>I agree to the <span>Terms and Conditions</span> & <span>Privacy Policy</span></p>
          </div>}


          <button
            onClick={isOtpSent ? handleVerifyClick : handleContinueClick}
            className={`button-continue ${isOtpSent ? 'verify' : ''}`}
          >
            {isOtpSent ? 'Verify' : 'Continue'}
          </button>

          {isOtpSent ? '' : <p className='help'>Having Trouble Logging in? <span>Get Help</span></p>}


        </div>
      </div>
    </div>
  );
}

export default Login;
