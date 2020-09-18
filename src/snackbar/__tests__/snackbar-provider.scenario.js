/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';

import {SnackbarProvider, useSnackbar, DURATION} from '../index.js';

function Child() {
  const {enqueue} = useSnackbar();

  return (
    <div>
      <button onClick={() => enqueue({message: 'one'})}>queue one</button>
      <button
        onClick={() => {
          enqueue({message: 'one'});
          enqueue({message: 'two'});
          enqueue({message: 'three'});
        }}
      >
        queue three
      </button>
    </div>
  );
}

export default function Parent() {
  return (
    <SnackbarProvider>
      <Child />
    </SnackbarProvider>
  );
}