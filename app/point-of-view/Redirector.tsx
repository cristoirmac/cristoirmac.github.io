'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Client-side forward for the retired /point-of-view/ route. Static export cannot issue a
// real 301, so the canonical tag + noindex on the page carry the SEO signal and this handles
// the visitor. The page body has a visible link for anyone without JS.
export default function Redirector({ to }: { to: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(to);
  }, [router, to]);

  return null;
}
