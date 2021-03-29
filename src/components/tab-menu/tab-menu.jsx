import React, { useState } from 'react';
import { TABS } from '../../utils/const';
import TabSpecification from '../tab-specification/tab-specification';
import TabReview from '../tab-review/tab-review';
import TabContact from '../tab-contact/tab-contact';

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState('Характеристики');
  const [specification, review, contact] = TABS;

  const handleButtonClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.textContent);
  };

  return (
    <div className="container block-tabs">
      <div className="block-tabs__nav">
        {TABS.map((name, index) =>
          <button type='button' aria-label='переключить таб'
            key={`${index}-${name}`}
            onClick={handleButtonClick}
            className={name === activeTab ? 'block-tabs__nav-btn block-tabs__nav-btn--checked' : 'block-tabs__nav-btn'}>
            {name}
          </button>)}
      </div>
      <TabSpecification isActive={activeTab === specification}/>
      <TabReview isActive={activeTab === review}/>
      <TabContact isActive={activeTab === contact} />
    </div>
  );
}

export default TabMenu;
