import React from 'react';
import styled from 'styled-components';

const Dribbble = props => (
  <svg
    {...props}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.699951 13.0124C0.699951 19.7849 6.23986 25.3248 13.0124 25.3248C19.7849 25.3248 25.3248 19.7849 25.3248 13.0124C25.3248 6.23986 19.7849 0.699951 13.0124 0.699951C6.23986 0.699951 0.699951 6.23986 0.699951 13.0124ZM22.8089 14.8663C22.3458 17.3757 20.9235 19.5664 18.9893 20.9924L18.9808 20.9522C18.7529 19.8791 18.2266 17.4013 17.1735 14.4566C19.7983 14.1067 22.0602 14.639 22.8089 14.8663ZM13.0282 22.9234L13.0203 22.923H13.0124C10.7689 22.923 8.72832 22.1814 7.08367 20.9567C7.55532 20.0848 9.67157 16.8297 14.6285 15.0223C15.8759 18.3673 16.4599 21.1946 16.6553 22.2886C15.5466 22.7408 14.3178 22.9913 13.0282 22.9234ZM13.5756 12.8837C8.92396 14.4198 6.1289 18.1918 5.32472 19.4066C3.93566 17.6309 3.03171 15.4246 3.02676 13.0321C3.23391 13.0383 3.51325 13.0391 3.84754 13.032C4.46222 13.0189 5.29045 12.9786 6.26418 12.8888C8.15272 12.7146 10.5955 12.3535 13.0924 11.64C13.3011 12.0197 13.5038 12.4297 13.6746 12.8436C13.643 12.8547 13.6094 12.868 13.5756 12.8837ZM11.9543 9.44267C7.99086 10.4472 4.50233 10.5874 3.33129 10.607C4.05014 7.7949 6.00681 5.44169 8.49725 4.08729C9.00944 4.78607 10.486 6.9255 11.9543 9.44267ZM14.5782 8.66016C13.2427 6.20832 11.7915 4.11998 11.1446 3.23786C11.7415 3.14738 12.3761 3.10182 13.0124 3.10182C15.4555 3.10182 17.6971 3.97019 19.4184 5.38632C19.1995 5.64042 18.8361 6.04611 18.2442 6.5415C17.4427 7.21235 16.2533 8.01255 14.5782 8.66016ZM15.6609 10.7662C18.6805 9.43987 20.3544 7.7479 20.9678 7.03491C22.1378 8.57263 22.8447 10.5016 22.9799 12.5674C21.9489 12.3798 19.1519 11.978 16.351 12.3113L16.3316 12.2628L16.3289 12.256C16.2945 12.17 16.2546 12.0702 16.2129 11.9856C16.0997 11.722 15.9868 11.4773 15.8757 11.2367L15.875 11.235C15.803 11.079 15.7317 10.9246 15.6609 10.7662Z"
      fill="black"
    />
  </svg>
);

export default styled(Dribbble)`
  svg {
    width: 100%;
    height: 100%;
  }
  svg:hover path,
  svg:hover mask {
    fill: #3b00ff;
  }
`;
