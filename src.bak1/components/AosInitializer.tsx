"use client";

import { useEffect } from 'react';
import { initializeAOS } from '@/utils/aos'; // Import the function

export default function AosInitializer() {
  useEffect(() => {
    initializeAOS(); // Call the function after component mounts
  }, []);
  return null;
}