import React from 'react';
import { hydrate } from 'react-dom';
import CountUp from 'components/organisms/CountUp';

hydrate(<CountUp />, document.querySelector('#app'));
