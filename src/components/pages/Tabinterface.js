import React, { useState } from 'react';

function TabbedInterface() {
  const [activeTab, setActiveTab] = useState('Section1');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="tab">
        <button className={activeTab === 'Section1' ? 'active' : ''} onClick={() => handleTabClick('Section1')}>Section 1</button>
        <button className={activeTab === 'Section2' ? 'active' : ''} onClick={() => handleTabClick('Section2')}>Section 2</button>
        <button className={activeTab === 'Completed' ? 'active' : ''} onClick={() => handleTabClick('Completed')}>Section 3</button>
      </div>

      <div id="Featured" className="tabcontent" style={{ display: activeTab === 'Featured' ? 'block' : 'none' }}>
        <h3>Section 1</h3>
        <p>This is the content of section 1.</p>
      </div>

      <div id="In Progress" className="tabcontent" style={{ display: activeTab === 'In Progress' ? 'block' : 'none' }}>
        <h3>Section 2</h3>
        <p>This is the content of section 2.</p>
      </div>

      <div id="Completed" className="tabcontent" style={{ display: activeTab === 'Completed' ? 'block' : 'none' }}>
        <h3>Completed</h3>
        <p>This is the content oftion 3.</p>
      </div>
    </div>
  );
}

export default TabbedInterface;
