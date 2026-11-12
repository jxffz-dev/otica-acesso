import type { NextConfig } from "next";

/**
 * Cabeçalhos de segurança (D-044).
 *
 * CSP SEM nonce de propósito: o nonce exige renderização dinâmica e tiraria o
 * site do modo estático (mais lento e mais caro). Para um site sem login, sem
 * formulário com servidor e sem conteúdo de usuário, uma CSP fixa que só libera
 * as origens que o site realmente usa já bloqueia o essencial (scripts e
 * imagens de terceiros, iframes e objetos não previstos, clickjacking).
 * Limite honesto: 'unsafe-inline' em script-src/style-src é necessário porque o
 * Next e o framer-motion injetam trechos inline; por isso ela NÃO protege
 * contra um XSS que injete script inline (o site não tem entrada de usuário).
 *
 * Só em produção: em `next dev` o React exige 'unsafe-eval'.
 */
const isProd = process.env.NODE_ENV === "production";

const csp = [
  "default-src 'self'",
  // va.vercel-scripts.com: reserva do Vercel Analytics (em produção ele usa /_vercel/insights, mesma origem)
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  // Mapa incorporado das lojas (Google Maps)
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Recursos do aparelho que o site não usa ficam desligados.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
  },
  // Isola a janela do site de páginas abertas por ele (links do WhatsApp etc.).
  { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
  ...(isProd ? [{ key: "Content-Security-Policy", value: csp }] : []),
];

const nextConfig: NextConfig = {
  // Otimizador de imagens: só aceita arquivos das pastas que o site usa. Qualquer
  // outro caminho responde 400 (reduz a superfície dos avisos de segurança do
  // otimizador de imagens do Next).
  images: {
    localPatterns: [
      { pathname: "/images/**", search: "" },
      { pathname: "/brands/**", search: "" },
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
