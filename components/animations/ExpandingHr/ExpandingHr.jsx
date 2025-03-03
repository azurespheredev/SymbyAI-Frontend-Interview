"use client";
import ScrollTriggeredAnimation from "@/components/ScrollTriggeredAnimation/ScrollTriggeredAnimation";
import gsap from "@/dependencies/gsap";

function animate(root) {
  const target = root.querySelector("hr");

  let tl = gsap.timeline({ defaults: { ease: "sine.inOut", duration: 0.8 } });
  tl.set(target, { willChange: "transform" });
  tl.fromTo(target, { scaleX: 0 }, { scaleX: 1 });

  return tl;
}

export default function ExpandingHr({ className }) {
  return (
    <ScrollTriggeredAnimation
      animation={animate}
      className={className}
      threshold={0.4}
    >
      <hr className="initialInvis" />
    </ScrollTriggeredAnimation>
  );
}
