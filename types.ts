// Fix: Import React to resolve 'Cannot find namespace React' error.
import React from 'react';

export interface Prophet {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  videoCount: number;
  story: string;
}