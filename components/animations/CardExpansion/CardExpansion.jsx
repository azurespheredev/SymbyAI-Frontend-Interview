"use client";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import gsap from "@/dependencies/gsap";

function animate(root) {
  let tl = gsap.timeline({ defaults: { ease: "sine.inOut", duration: 0.15 } });
  tl.set(root.querySelectorAll(".initialInvis"), { visibility: "visible" });
  tl.fromTo(
    root.children,
    { scale: 0, opacity: 0, transformOrigin: "center center" },
    { scale: 1, opacity: 1, stagger: 0.05 }
  );

  return tl;
}

export default function CardExpansion({ children, className }) {
  return (
    <ScrollTriggeredAnimation
      animation={animate}
      className={className}
      threshold={0.4}
    >
      {children}
    </ScrollTriggeredAnimation>
  );
}
