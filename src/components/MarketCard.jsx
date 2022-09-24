import { ForwardSVG } from '../assets';
import propertImg from '../assets/images/property-img.png';

const MarketCard = () => {
  return (
    <div className='market-card-container'>
      <div className='market-card-wrapper'>
        <div>
          <div className='img-container'>
            <img src={propertImg} alt='property' />
            <div className='available'>Available</div>
          </div>
          <h1>Property #0</h1>
          <h3>San Francisco, CA</h3>
          <progress value={90} max={100} min={0} />
          <div className='progress-status'>
            <span>Progress:</span>
            <span>90/100</span>
          </div>
          <div className='irr-payout'>
            <div className='irr'>
              <h5>Project IRR</h5>
              <h4>18.6%</h4>
            </div>
            <div className='border' />
            <div className='payout'>
              <h5>Cash Payout</h5>
              <h4>6.44%</h4>
            </div>
          </div>
          <div className='button-view-purchase'>
            <button className='purchase'>Purchase</button>
            <button className='view-details'>View Details</button>
            <ForwardSVG />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
