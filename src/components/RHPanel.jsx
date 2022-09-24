import { Outlet } from 'react-router-dom';

const RHPanel = () => {
  return (
    <div className='right-panel'>
      <Outlet />
    </div>
  );
};

export default RHPanel;
