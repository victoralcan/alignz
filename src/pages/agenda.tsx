import React, { useEffect } from 'react';
import Wizard from '../shared/components/Wizard/Wizard';

function Agenda() {
  let beginView: HTMLElement;
  useEffect(() => {
    beginView.scrollIntoView({ behavior: 'smooth' });
  }, []);
  return (
    <>
      <div id="beginView" ref={(el) => {
        beginView = el;
      }}/>
    <section className="infoContainerFlex">
      <Wizard />
    </section>
      </>
  );
}

export default Agenda;
