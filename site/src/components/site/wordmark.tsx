import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Logo oficial horizontal da Ótica Acesso (PNG transparente, 2172x724 — D-020).
 * Fundos claros usam a versão navy (logo.png); fundos escuros usam a
 * versão com texto branco (logo-footer.png) — D-021.
 */
export function Wordmark({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="Ótica Acesso — página inicial"
    >
      <Image
        src={onDark ? "/images/logo-footer-clean.png" : "/images/logo-clean.png"}
        alt="Ótica Acesso — Sua visão é a nossa prioridade"
        width={2172}
        height={724}
        priority={!onDark}
        className="h-12 w-auto"
      />
    </Link>
  );
}
