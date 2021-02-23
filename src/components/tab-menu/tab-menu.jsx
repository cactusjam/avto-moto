import React from 'react';
import TabMenuNav from '../tab-menu-nav/tab-menu-nav';
import TabMenuContent from '../tab-menu-content/tab-menu-content';

const TabMenu = () => {
  return (
    <div className="block-tabs">
      <TabMenuNav />
      <TabMenuContent />
    </div>
  );
}

export default TabMenu;
