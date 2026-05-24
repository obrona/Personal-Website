import type { CSSProperties } from "react";

import styles from "./Saturn.module.css";

export interface SaturnProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  ariaLabel?: string;
}

function toCssSize(size: number | string | undefined, fallback: string) {
  if (typeof size === "number") {
    return `${size}px`;
  }

  return size ?? fallback;
}

export function Saturn({
  width,
  height,
  className,
  ariaLabel,
}: SaturnProps) {
  const style = {
    width: toCssSize(width, "240px"),
    height: toCssSize(height, "160px"),
  } satisfies CSSProperties;

  return (
    <div
      className={[styles.saturn, className].filter(Boolean).join(" ")}
      style={style}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      <div className={styles.glow} />
      <div className={styles.ringsBack}>
        <div className={styles.ringDust} />
      </div>
      <div className={styles.planet}>
        <div className={styles.bandTop} />
        <div className={styles.bandMiddle} />
        <div className={styles.bandBottom} />
        <div className={styles.shadow} />
      </div>
      <div className={styles.ringsFront}>
        <div className={styles.ringDust} />
      </div>
    </div>
  );
}
