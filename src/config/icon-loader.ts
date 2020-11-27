import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons/faPlayCircle';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';

import { library } from '@fortawesome/fontawesome-svg-core';

export const loadIcons = () => {
  library.add(faDollarSign, faPlus, faMinus, faPlayCircle, faPhone);
};
