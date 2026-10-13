"use client";

import { useState } from "react";

export default function CopyrightYear() {
  const [year] = useState(() => new Date().getFullYear());
  return (
    <span suppressHydrationWarning>
      &copy; {year} Afaq Ul Islam. All rights reserved.
    </span>
  );
}