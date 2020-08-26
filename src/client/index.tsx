import React from 'react';
import { hydrate } from 'react-dom';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'components/organisms/CountUp' ... Remove this comment to see the full error message
import CountUp from 'components/organisms/CountUp';

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
hydrate(<CountUp />, document.querySelector('#app'));
