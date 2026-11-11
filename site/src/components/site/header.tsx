"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { nav, whatsappLink } from "@/lib/site";
import { Wordmark } from "@/components/site/wordmark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/85 backdrop-blur-md">
      <div className="bg-navy-950 text-xs font-medium text-navy-100">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-4 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
          <span aria-hidden className="hidden md:block" />
          <Link
            href="/exame-de-vista"
            className="px-2 py-2 text-center outline-none transition-colors hover:text-gold-300 focus-visible:text-gold-300 focus-visible:underline"
          >
            Exame de vista <span className="text-gold-300">gratuito</span> —
            agende em menos de 1 minuto →
          </Link>
          <div className="hidden items-center justify-end gap-5 md:flex">
            <Link
              href="/lojas"
              className="outline-none transition-colors hover:text-gold-300 focus-visible:text-gold-300 focus-visible:underline"
            >
              Encontre uma loja
            </Link>
            <a
              href={whatsappLink("Olá! Vim pelo site da Ótica Acesso.")}
              target="_blank"
              rel="noopener"
              className="outline-none transition-colors hover:text-gold-300 focus-visible:text-gold-300 focus-visible:underline"
            >
              Fale conosco
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2",
                pathname === item.href || pathname.startsWith(`${item.href}/`)
                  ? "text-navy-950"
                  : "text-muted-foreground hover:text-navy-950",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden bg-gold-500 text-navy-950 hover:bg-gold-400 sm:inline-flex"
          >
            <Link href="/exame-de-vista">Agendar exame</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="mt-8 flex flex-col gap-1 px-4">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base font-medium text-navy-950 hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-4 bg-gold-500 text-navy-950 hover:bg-gold-400"
                >
                  <Link
                    href="/exame-de-vista"
                    onClick={() => setOpen(false)}
                  >
                    Agendar exame
                  </Link>
                </Button>
                <Button asChild variant="outline" className="mt-2">
                  <a href={whatsappLink()} target="_blank" rel="noopener">
                    Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
