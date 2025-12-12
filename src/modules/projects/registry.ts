import React from "react";

export const projectRegistry: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  "mangrove-2025": () => import("../mangrove/index.tsx"),
  "book-2026": () => import("../book/index.tsx"),
};
