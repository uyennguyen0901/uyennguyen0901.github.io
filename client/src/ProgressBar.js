

// export default ProgressBar;
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const ProgressBar = ({label, finalPercentage, duration}) => {
  const progressRef = useRef();
  const percentage = useIncrementingNumber(finalPercentage, duration);

  useEffect(() => {
    const progress = progressRef.current;
    progress.style.width = `${percentage}%`;
  }, [percentage]);

  return (
    <div className="progress" data-aos="fade-right" data-aos-duration="1500">
      <span className="skill">{label} <i className="val">{percentage}%</i></span>
      <div className="progress-bar-wrap">
        <div ref={progressRef} className="progress-bar" role="progressbar" style={{width: 0}}  aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
