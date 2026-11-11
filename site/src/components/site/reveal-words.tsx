import { cn } from "@/lib/utils";

/**
 * Manchete que "sobe" palavra por palavra. CSS puro (ver .reveal-word em
 * globals.css): o texto está no HTML desde o servidor, sem JavaScript no
 * cliente e sem divergência de hidratação; com "reduzir movimento" aparece
 * parado. `start` desloca o atraso para encadear dois trechos seguidos.
 */
export function RevealWords({
  text,
  start = 0,
  className,
}: {
  text: string;
  start?: number;
  className?: string;
}) {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          {/* Folga vertical (py + -my) para o overflow-hidden não cortar hastes
              e caudas de fontes script; o layout da linha não muda. */}
          <span className="-my-[0.12em] inline-block overflow-hidden py-[0.12em] align-bottom">
            <span
              className={cn("reveal-word inline-block", className)}
              style={{ ["--i" as string]: start + i }}
            >
              {word}
            </span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
