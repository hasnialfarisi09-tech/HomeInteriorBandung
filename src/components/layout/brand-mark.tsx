import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/** Intrinsic size of the generated H.I.B. logo files. */
const LOGO_WIDTH = 1970;
const LOGO_HEIGHT = 1432;

const RENDER_WIDTH = 165;
const RENDER_HEIGHT = Math.round((RENDER_WIDTH * LOGO_HEIGHT) / LOGO_WIDTH);

const SIZES = {
  header: "h-8 w-auto sm:h-9 lg:h-10 object-contain",
  footer: "h-10 w-auto sm:h-12 lg:h-14 object-contain",
} as const;

type BrandMarkProps = {
  /** "dark" renders the colored logo for light surfaces; "light" renders crisp white/bright variant for dark surfaces. */
  tone?: "dark" | "light";
  size?: keyof typeof SIZES;
  className?: string;
  /** Omit the link when the mark sits inside another link or a heading. */
  asLink?: boolean;
  eager?: boolean;
};

/**
 * Official Home Interior Bandung brand mark.
 */
export function BrandMark({
  tone = "dark",
  size = "header",
  className,
  asLink = true,
  eager = false,
}: BrandMarkProps) {
  const image = (
    <Image
      src={
        tone === "dark"
          ? "/logo/hib-logo-dark.png"
          : "/logo/hib-logo-light.png"
      }
      alt={site.name}
      width={RENDER_WIDTH}
      height={RENDER_HEIGHT}
      loading={eager ? "eager" : "lazy"}
      fetchPriority="low"
      className={SIZES[size]}
    />
  );

  if (!asLink) {
    return <span className={cn("inline-flex items-center", className)}>{image}</span>;
  }

  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label={`${site.name} - beranda`}
    >
      {image}
    </Link>
  );
}
