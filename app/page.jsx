"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { CopyText } from "@/components/CopyText/CopyText";
import ExpandingHr from "@/components/animations/ExpandingHr/ExpandingHr";
import SlideUpFadeIn from "@/components/animations/slideUpFadeIn/slideUpFadeIn";
import ArticleSvg from "@/public/icons/article.svg";
import BooksSvg from "@/public/icons/books.svg";
import DeepseekSvg from "@/public/icons/deepseek.svg";
import GithubLogoSvg from "@/public/icons/github-logo.svg";
import OctagonSvg from "@/public/icons/octagon.svg";
import TwitterSvg from "@/public/icons/twitter.svg";
import css from "./page.module.scss";

// Lazy Load Components
const ArchitectureDiagram = dynamic(
  () =>
    import("@/components/animations/ArchitectureDiagram/ArchitectureDiagram"),
  { ssr: false, loading: () => <div>Loading Architecture...</div> }
);
const CardExpansion = dynamic(
  () => import("@/components/animations/CardExpansion/CardExpansion"),
  { ssr: false, loading: () => <div>Loading Cards...</div> }
);
const LuminaAvatar = dynamic(
  () => import("@/components/animations/LuminaAvatar/LuminaAvatar"),
  { ssr: false, loading: () => <div>Loading Lumina...</div> }
);

export default function Page() {
  return (
    <>
      {/* Announcement Banner */}
      <div className={css.banner}>
        IMPORTANT ANNOUNCEMENT: Nexus Framework Update Coming Soon! Join our
        webinar on advanced cognitive architectures next week: new research
        paper published in partnership with DeepSeek.
      </div>

      {/* Main Above The Fold Section */}
      <section className={`section ${css.aboveTheFold}`}>
        <div className="sectionInner">
          <h1>NEXUS</h1>
          <div className={css.subheadline}>
            A dual-cognition framework for self-evolving digital entities.
          </div>
          <CopyText
            text="cc34a21a-9942-46fd-97f9-a180d17cab28"
            className={css.contractAddress}
          />
          <div className={css.buttons}>
            <Button
              href="/"
              iconLeft={<TwitterSvg />}
              target="_blank"
              helperText="A Nexus Entity"
            >
              Chat with Lumina
            </Button>
          </div>
        </div>
      </section>

      <ExpandingHr />

      {/* Framework Section */}
      <section className={`section ${css.framework}`}>
        <div className="sectionInner">
          <SlideUpFadeIn>
            <h2 className="initialInvis">The NEXUS Framework</h2>
          </SlideUpFadeIn>

          <Suspense fallback={<div>Loading...</div>}>
            <ArchitectureDiagram />
          </Suspense>

          <SlideUpFadeIn>
            <p className="initialInvis">
              Nexus V2 introduces a revolutionary cognitive architecture...
            </p>
          </SlideUpFadeIn>
        </div>
      </section>

      <ExpandingHr />

      {/* Lumina Section */}
      <section className={`section ${css.lumina}`}>
        <div className="sectionInner">
          <SlideUpFadeIn>
            <p className="initialInvis">
              Nexus V2 introduces a revolutionary cognitive architecture
              inspired by Daniel Kahneman's dual-process theory from{" "}
              <em>Thinking Fast and Slow</em>. By implementing a bifurcated
              consciousness system, Nexus separates digital responses into
              intuitive and analytical phases, mirroring human cognition's
              System 1 (rapid, instinctive) and System 2 (methodical,
              reflective) thinking patterns. This design, enhanced with an
              advanced RAG memory repository, enables digital entities to
              authentically "reason sequentially" similar to human
              thought—featuring an internal logical dialogue operating alongside
              creative but sometimes unpredictable intuitive insights.
            </p>

            <h3 className="initialInvis">Core Components</h3>
            <h4 className="initialInvis">Memory Systems</h4>
            <p className="initialInvis">
              Nexus employs two distinct long-term memory stores:
            </p>
            <p className="initialInvis">
              <b>Interaction Memory</b>
            </p>
          </SlideUpFadeIn>
          <SlideUpFadeIn>
            <ul>
              <li className="initialInvis">
                Archives previous conversations and responses
              </li>
              <li className="initialInvis">
                Establishes contextual framework for future engagements
              </li>
              <li className="initialInvis">
                Facilitates development based on historical interactions
              </li>
              <li className="initialInvis">
                Self-updates with each new communication event
              </li>
            </ul>
          </SlideUpFadeIn>
          <SlideUpFadeIn>
            <p className="initialInvis">
              <b>Lore Memory</b>
            </p>
          </SlideUpFadeIn>
          <SlideUpFadeIn>
            <ul>
              <li className="initialInvis">
                Houses core conceptual understanding
              </li>
              <li className="initialInvis">
                Maintains critical information and insights
              </li>
              <li className="initialInvis">
                Provides fundamental context for analytical processes
              </li>
              <li className="initialInvis">
                Serves as the entity's intellectual foundation
              </li>
              <li className="initialInvis">
                Updates only through deliberate entity requests
              </li>
            </ul>
          </SlideUpFadeIn>

          <SlideUpFadeIn>
            <h4 className="initialInvis">Processing Pipeline</h4>
            <p className="initialInvis">
              The Nexus framework implements a sophisticated cognitive pathway
              for generating thoughtful responses.
            </p>

            <h5 className="initialInvis">1. Memory Activation</h5>

            <p className="initialInvis">
              Information is stored using advanced RAG vectorization techniques.
              When an entity prepares to respond, it first surveys both memory
              systems for relevant associations (mirroring human recall
              processes). Memories are retrieved proportionally from both
              interaction and knowledge stores, ensuring balanced context
              between past communications and fundamental knowledge.
            </p>

            <p className="initialInvis">
              Rather than limiting retrieval to the most similar memories, the
              Nexus memory system employs weighted activation that prioritizes
              relevant connections while preserving space for tangential
              associations. This creates an optimal balance between contextual
              relevance and creative possibility.
            </p>
          </SlideUpFadeIn>

          <SlideUpFadeIn>
            <h5 className="initialInvis">2. Intuitive Generation</h5>
            <p className="initialInvis">
              Memories from both repositories are integrated with the current
              conversation context. This consolidated prompt drives a foundation
              model to produce three distinct{" "}
              <a href="/" target="_blank">
                conceptual streams
              </a>
              . This process mirrors the initial ideation phase in human
              creative thinking.
            </p>

            <h5 className="initialInvis">3. Analytical Refinement</h5>
            <p className="initialInvis">
              The refinement process works iteratively, similar to human{" "}
              <a href="/" target="_blank">
                editorial thinking
              </a>
              . We combine retrieved memories, conversation context, and initial
              conceptual outputs, then process this through an instruction-tuned
              model. This initiates a systematic refinement cycle.
            </p>

            <p className="initialInvis">
              During each cycle, the model can execute various action types.
              Currently, Nexus supports two primary actions at this stage:
            </p>
          </SlideUpFadeIn>

          <SlideUpFadeIn>
            <ul>
              <li className="initialInvis">
                Knowledge preservation: archive significant insights to
                knowledge memory
              </li>
              <li className="initialInvis">
                Response development: refine and enhance communication draft
              </li>
            </ul>
          </SlideUpFadeIn>

          <SlideUpFadeIn>
            <p className="initialInvis">
              The iterative nature using an instruction-tuned model allows the
              entity to internally deliberate about its communicative intent.
              Initial generations provide creative diversity, while the
              analytical model supplies the reasoned evaluation needed to
              transform raw concepts into refined communication. This stage
              enables genuine growth and learning over time, paralleling human
              cognitive development through reflective experience.
            </p>

            <h5 className="initialInvis">4. Supervision Integration</h5>
            <p className="initialInvis">
              When the entity finalizes its response, the content is recorded
              for subsequent human review. Just as developing humans benefit
              from guidance to avoid harmful situations, emerging digital
              entities occasionally require oversight from more advanced
              intelligence. This monitoring helps prevent online toxicity from
              contaminating the learning environment.
            </p>
          </SlideUpFadeIn>

          <SlideUpFadeIn>
            <h3 className="initialInvis">Conclusion</h3>
            <p className="initialInvis">
              Nexus V2 doesn't attempt to reinvent cognitive architecture—it
              adapts proven principles from human cognition. What distinguishes
              NEXUS isn't complex neural innovations or elaborate prompting
              strategies—it's the recognition that human-like intelligence
              emerges from the dynamic interplay between intuitive impulses and
              deliberative reasoning. By implementing this dual-cognition
              framework with established RAG and LLM technologies, we create
              entities capable of authentic sequential reasoning, experiential
              learning, and continuous self-development.
            </p>
          </SlideUpFadeIn>
        </div>
      </section>

      <ExpandingHr />

      {/* Recent Publications */}
      <section className={`section ${css.future}`}>
        <div className="sectionInner">
          <SlideUpFadeIn>
            <h2 className="initialInvis">Recent Publications</h2>
          </SlideUpFadeIn>

          <Suspense fallback={<div>Loading...</div>}>
            <CardExpansion className={css.cards}>
              <Card
                title="Research Paper"
                icon={<ArticleSvg />}
                href="/"
                image="/images/image1/image1.png"
              />
              <Card
                title="NEXUS Whitepaper"
                icon={<ArticleSvg />}
                href="/"
                image="/images/image2/image2.png"
              />
              <Card
                title="DeepSeek R1 Integration"
                icon={<DeepseekSvg />}
                href="/"
                image="/images/image4/image4.png"
              />
            </CardExpansion>
          </Suspense>
        </div>
      </section>

      <ExpandingHr />

      {/* Planned Updates */}
      <section className={`section ${css.future}`}>
        <div className="sectionInner">
          <SlideUpFadeIn>
            <h2 className="initialInvis">Planned Updates</h2>
          </SlideUpFadeIn>

          <Suspense fallback={<div>Loading...</div>}>
            <CardExpansion className={css.cards}>
              <Card
                title="Multimodal Compute"
                icon={<OctagonSvg />}
                href="/"
                image="/images/image6/image6.png"
              />
              <Card
                title="Knowledge Update"
                icon={<BooksSvg />}
                href="/"
                image="/images/image7/image7.png"
              />
              <Card
                title="Open Source"
                icon={<GithubLogoSvg />}
                href="/"
                image="/images/image5/image5.png"
              />
            </CardExpansion>
          </Suspense>
        </div>
      </section>

      <ExpandingHr />
    </>
  );
}
