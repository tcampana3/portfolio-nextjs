// components/withBasePath.js
export const withBasePath = (src) => {
  // 1) Prefer Next's runtime assetPrefix (set when basePath/assetPrefix are active)
  const runtimePrefix =
    typeof window !== "undefined" && window.__NEXT_DATA__?.assetPrefix
      ? window.__NEXT_DATA__.assetPrefix
      : "";

  // 2) Fall back to build-time public env (if you added this in next.config.mjs)
  const envPrefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // 3) Pick whichever is set (runtime wins), and normalize
  const base = runtimePrefix || envPrefix || "";
  const path = src.startsWith("/") ? src : `/${src}`;

  // Avoid double-prefixing (e.g., if src already starts with base)
  return base && path.startsWith(base) ? path : `${base}${path}`;
};
