import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";

// lucide-react não distribui mais ícones de marcas — SVG próprio
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
import { nav, site, stores, whatsappLink } from "@/lib/site";
import { Wordmark } from "@/components/site/wordmark";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <Wordmark onDark />
          <p className="text-sm leading-relaxed text-navy-200">
            {site.tagline} Óculos de grau, sol e lentes com atendimento de
            verdade — no Ceará e para todo o Brasil.
          </p>
          <div className="flex gap-3 pt-1">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener"
              aria-label="Instagram da Ótica Acesso"
              className="rounded-md p-2 text-navy-200 outline-none transition-colors hover:bg-navy-900 hover:text-gold-300 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp da Ótica Acesso"
              className="rounded-md p-2 text-navy-200 outline-none transition-colors hover:bg-navy-900 hover:text-gold-300 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
            >
              <MessageCircle className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-300">
            Navegação
          </h3>
          <ul className="space-y-1 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-block rounded-sm py-1.5 text-navy-200 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-300">
            Nossas lojas
          </h3>
          <ul className="space-y-3 text-sm">
            {stores.map((store) => (
              <li key={store.slug} className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <span className="text-navy-200">
                  <span className="font-medium text-white">
                    {store.city} — {store.state}
                  </span>
                  <br />
                  {store.address}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold-300">
            Atendimento
          </h3>
          <ul className="space-y-2 text-sm text-navy-200">
            <li>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="transition-colors hover:text-white"
              >
                WhatsApp: (88) 99664-7553
              </a>
            </li>
            <li>Entregamos seu óculos em até 24 horas*</li>
            <li>Envio para todo o Brasil</li>
          </ul>
          <p className="mt-4 text-xs text-navy-300">
            *Consulte condições para o seu tipo de lente.
          </p>
        </div>
      </div>

      <div className="border-t border-navy-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-navy-300 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <Link
            href="/privacidade"
            className="rounded-sm py-1 text-navy-300 outline-none transition-colors hover:text-navy-100 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
          >
            Política de Privacidade
          </Link>
          <p>Varjota · Ipu · Reriutaba — Ceará</p>
        </div>
      </div>
    </footer>
  );
}
