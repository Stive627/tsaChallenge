import React from 'react';
import Svg, { Path } from 'react-native-svg';

const WaveSvg = () => (
  <Svg viewBox="0 0 1440 320"  rotation={180} style={{marginTop:20}} xmlns="http://www.w3.org/2000/svg" width="100%" height={100}>
    <Path
      fill="#C77DFF"
      fillOpacity="1" 
      d="M0,32L40,64C80,96,160,160,240,192C320,224,400,224,480,213.3C560,203,640,181,720,197.3C800,213,880,267,960,256C1040,245,1120,171,1200,154.7C1280,139,1360,181,1400,202.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    />
  </Svg>
);

export default WaveSvg;
