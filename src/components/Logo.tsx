import fullLogo from "@/assets/logo-full.png.asset.json";
import markLogo from "@/assets/logo-mark.png.asset.json";

interface LogoProps {
  className?: string;
  variant?: "full" | "mark";
}

export function Logo({ className, variant = "full" }: LogoProps) {
  const src = variant === "mark" ? markLogo.url : fullLogo.url;
  return (
    <img
      src={src}
      alt="Nice Moraes Imobiliária"
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}
