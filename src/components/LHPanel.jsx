import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HomeSVG, MarketSVG } from '../assets';

const LHPanel = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  const [active, setActive] = useState({
    home: pathname === '/' ? 'active-home' : null,
    market: pathname === '/market' ? 'active-market' : null,
  });
  const navigate = useNavigate();
  const handleClickHome = () => {
    setActive({
      home: 'active-home',
      market: null,
    });
    navigate('/');
  };
  const handleClickMarket = () => {
    setActive({
      home: null,
      market: 'active-market',
    });
    navigate('/market');
  };

  return (
    <div className='left-panel'>
      <div className='left-panel-wrapper'>
        <div
          className={`left-panel-option ${active.home}`}
          onClick={handleClickHome}
        >
          <HomeSVG active={active.home === 'active-home'} />
          <span>Home</span>
        </div>
        <div
          className={`left-panel-option ${active.market}`}
          onClick={handleClickMarket}
        >
          <MarketSVG active={active.market === 'active-market'} />
          <span>Marketplace</span>
        </div>
      </div>
    </div>
  );
};

export default LHPanel;
