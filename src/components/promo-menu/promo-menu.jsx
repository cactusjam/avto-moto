import React from 'react';
import PromoMenuNav from '../promo-menu-nav/promo-menu-nav';
import PromoMenuContent from '../promo-menu-content/promo-menu-content';

const PromoMenu = () => {
  return (
    <div className="block-tabs">
      <PromoMenuNav />
      <PromoMenuContent />
    </div>
  );
}

export default PromoMenu;
