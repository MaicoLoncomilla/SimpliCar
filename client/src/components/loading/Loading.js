import React from 'react';

import sLoading from './loading.module.css';

export default function Loading() {
  return (
    <div className={sLoading.loader}>
      <span></span>
    </div>
  )
}