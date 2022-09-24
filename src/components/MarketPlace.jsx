import { FilterIcon } from '../assets';
import MarketCard from './MarketCard';

const MarketPlace = () => {
  return (
    <div className='market-container'>
      <div className='market-wrapper'>
        <div className='market-heading'>
          <h1>MarketPlace</h1>
          <button className='filter-button'>
            <FilterIcon />
            <span>Filter</span>
          </button>
        </div>
        <div className='market-cards'>
          <MarketCard />
          <MarketCard />
          <MarketCard />
          <MarketCard />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
