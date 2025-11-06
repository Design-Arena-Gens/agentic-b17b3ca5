"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";
import { capabilities } from "@/data/capabilities";
import { CapabilityCard } from "@/components/CapabilityCard";
import { PromptComposer } from "@/components/PromptComposer";
import { BlueprintDeck } from "@/components/BlueprintDeck";
import { blueprints } from "@/lib/blueprints";
import { SignalPulse } from "@/components/SignalPulse";

export default function Home() {
  const [activeCapabilityId, setActiveCapabilityId] = useState(capabilities[0].id);
  const activeCapability = useMemo(
    () => capabilities.find((capability) => capability.id === activeCapabilityId) ?? capabilities[0],
    [activeCapabilityId]
  );

  return (
    <main>
      <div className={styles.container}>
        <section className={styles.hero}>
          <p className="gradient-text">Welcome to Omni Assistant</p>
          <h1 className={styles.heroTitle}>An ultra-intelligent co-pilot for every human ambition.</h1>
          <p className={styles.heroSubtitle}>
            Omni distills breakthroughs, imagines futures, orchestrates missions, and navigates critical decisions with
            composure. Activate any capability matrix and the assistant responds with tailored guidance, structured
            playbooks, and composable insights designed for action.
          </p>
          <div className={styles.heroCTA}>
            <a className={styles.primaryButton} href="#capability-matrix">
              Engage Capability Matrix
            </a>
            <a className={styles.secondaryButton} href="#prompt-composer">
              Generate Omni Scenario
            </a>
          </div>
        </section>

        <section id="capability-matrix" className={styles.matrix}>
          <header>
            <p className={styles.panelTitle}>Capability Matrix</p>
            <p className={styles.heroSubtitle}>
              Traverse Omni&apos;s core intelligences. Tap a capability to unlock domain-specific prompts, investigative
              questions, and signature deliverables.
            </p>
          </header>
          <div className={styles.matrixGrid}>
            {capabilities.map((capability) => (
              <CapabilityCard
                key={capability.id}
                capability={capability}
                active={capability.id === activeCapabilityId}
                onSelect={(selected) => setActiveCapabilityId(selected.id)}
                className={`${styles.capabilityCard} glass`}
                activeClassName={styles.capabilityCardActive}
                badgeClassName={styles.capabilityBadge}
                descriptionClassName={styles.capabilityDescription}
                domainListClassName={styles.capabilityDomains}
                domainClassName={styles.capabilityDomain}
              />
            ))}
          </div>
        </section>

        <section className={`${styles.panel} glass`}>
          <h2 className={styles.panelTitle}>{activeCapability.title}</h2>
          <div className={styles.gridSplit}>
            <div className={styles.promptGrid}>
              <div>
                <span className={styles.stackItemLabel}>Instruction Blueprint</span>
                <p className={styles.promptText}>{activeCapability.guidance.prompt}</p>
              </div>
              <div>
                <span className={styles.stackItemLabel}>Investigative Questions</span>
                <ul className={styles.stackList}>
                  {activeCapability.guidance.questions.map((question) => (
                    <li key={question} className={styles.stackItem}>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <span className={styles.stackItemLabel}>Signature Outputs</span>
              <ul className={styles.stackList}>
                {activeCapability.guidance.outputs.map((output) => (
                  <li key={output} className={styles.stackItem}>
                    {output}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="prompt-composer" className={`${styles.panel} glass`}>
          <PromptComposer capability={activeCapability} />
        </section>

        <BlueprintDeck blueprints={blueprints} />

        <SignalPulse />
      </div>
    </main>
  );
}
