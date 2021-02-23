import React from 'react';
import TabSpecification from '../tab-specification/tab-specification';
import TabReview from '../tab-review/tab-review';
import TabContact from '../tab-contact/tab-contact';

const TabMenuContent = () => {
  return (
    <div className="block-tabs_wrapper">
      <TabSpecification />
      <TabReview />
      <TabContact />
    </div>
  );
}

export default TabMenuContent;
