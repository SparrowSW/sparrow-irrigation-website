import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}
export default function GlassCard({ children, className }: Props) {
  return (
    <div className={clsx("glass glass-hover", className)}>{children}</div>
  );
}