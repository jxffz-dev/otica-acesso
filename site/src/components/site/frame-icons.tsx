import { cn } from "@/lib/utils";

export type FrameShape =
  | "gatinho"
  | "retangular"
  | "aviador"
  | "quadrado"
  | "oval"
  | "geometrico"
  | "redondo"
  | "sobrancelha";

/**
 * Silhuetas de armação em traço — ilustrações originais (não são fotos de
 * produto nem de terceiros). A lente esquerda é desenhada uma vez e espelhada
 * para a direita, o que mantém os formatos assimétricos (gatinho) corretos.
 */
function leftLens(shape: FrameShape) {
  const cx = 33;
  switch (shape) {
    case "redondo":
      return <circle pathLength={1} cx={cx} cy={26} r={17} />;
    case "oval":
      return <ellipse pathLength={1} cx={cx} cy={26} rx={19} ry={14} />;
    case "retangular":
      return <rect pathLength={1} x={cx - 20} y={14} width={40} height={24} rx={5} />;
    case "quadrado":
      return <rect pathLength={1} x={cx - 18} y={10} width={36} height={32} rx={8} />;
    case "aviador":
      return (
        <path pathLength={1} d="M13 14 H53 C53 30 43 42 33 42 C23 42 13 30 13 14 Z" />
      );
    case "gatinho":
      return (
        <path pathLength={1} d="M12 10 L50 15 Q55 17 53 26 Q50 40 36 40 Q20 40 14 28 Z" />
      );
    case "geometrico":
      return <polygon pathLength={1} points="13,26 23,11 43,11 53,26 43,41 23,41" />;
    case "sobrancelha":
      // Browline: barra grossa em cima, aro fino embaixo
      return (
        <>
          <path pathLength={1} d="M13 12 H53 V29 Q53 41 38 41 H28 Q13 41 13 29 Z" />
          <path pathLength={1} d="M13 17 H53" />
        </>
      );
  }
}

export function FrameIcon({
  shape,
  className,
}: {
  shape: FrameShape;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 52"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn("frame-draw w-full", className)}
    >
      <g>
        {leftLens(shape)}
        <path pathLength={1} d="M13 17 L4 14" />
      </g>
      <g transform="translate(120 0) scale(-1 1)">
        {leftLens(shape)}
        <path pathLength={1} d="M13 17 L4 14" />
      </g>
      <path pathLength={1} d="M53 22 Q60 16 67 22" />
    </svg>
  );
}

/**
 * `photo` é opcional: quando preenchido, o cartão do seletor mostra a foto (com
 * o nome do formato sobreposto); sem foto, mostra a silhueta dourada.
 * Para ativar: salve a foto em /public/images/formatos/<formato>.jpg (3:2, sem
 * texto nem logos) e preencha `photo: "/images/formatos/<formato>.jpg"`.
 * Prompt das fotos: docs/PROMPT-FOTOS-FORMATOS.md
 */
export const frameShapes: {
  shape: FrameShape;
  label: string;
  hint: string;
  photo?: string;
}[] = [
  { shape: "gatinho", label: "Gatinho", hint: "Elegância marcante", photo: "/images/formatos/gatinho.jpg" },
  { shape: "retangular", label: "Retangular", hint: "Sóbrio e versátil", photo: "/images/formatos/retangular.jpg" },
  { shape: "aviador", label: "Aviador", hint: "Clássico atemporal", photo: "/images/formatos/aviador-claro.jpg" },
  { shape: "quadrado", label: "Quadrado", hint: "Presença e estilo", photo: "/images/formatos/quadrado.jpg" },
  { shape: "oval", label: "Oval", hint: "Suave e discreto", photo: "/images/formatos/oval.jpg" },
  { shape: "geometrico", label: "Geométrico", hint: "Ousado e moderno", photo: "/images/formatos/geometrico.jpg" },
  { shape: "redondo", label: "Redondo", hint: "Ar retrô e criativo", photo: "/images/formatos/redondo.jpg" },
  { shape: "sobrancelha", label: "Sobrancelha", hint: "Sofisticação clássica", photo: "/images/formatos/sobrancelha.jpg" },
];
