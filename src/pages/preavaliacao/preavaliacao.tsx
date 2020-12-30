import React, { useEffect } from 'react';
import Wizard from '../../shared/components/Wizard/Wizard';

function Preavaliacao() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <section className="infoContainerFlex">
        <Wizard />
      </section>
    </>
  );
}

export default Preavaliacao;
