import React from 'react';

const TabMenuNav = () => {
  return (
    <div className="block-tabs_nav">
      <button className="block-tabs_nav-btn block-tabs_nav-btn--checked">Характеристики</button>
      <button className="block-tabs_nav-btn block-tabs_nav-btn">Отзывы</button>
      <button className="block-tabs_nav-btn block-tabs_nav-btn">Контакты</button>
    </div>
  );
}

export default TabMenuNav;
