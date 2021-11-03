import * as React from 'react';
import './index.scss';

function HomePage() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (ref.current) {
        window.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [ref]);

  const handleKeyDown = React.useCallback((e) => {
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 67) {
      // 复制
      console.log('复制');
    }
    if ((e.ctrlKey || e.metaKey) && e.keyCode === 86) {
      // 粘贴
      console.log('粘贴');
    }
  }, []);

  return (
    <div className="home-container">
      <div className="text-container" ref={ref}>
        欢迎来到我的世界
      </div>
      <div className="action-button">点击进入</div>
      <svg width="0" height="0">
        <filter id="displacement-text-filter">
          <feTurbulence baseFrequency="0.02" seed="0">
            <animate
              attributeName="seed"
              dur="1s"
              keyTimes="0;0.5;1"
              values="1;2;3"
              repeatCount="indefinite"
            ></animate>
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
    </div>
  );
}

export default HomePage;
