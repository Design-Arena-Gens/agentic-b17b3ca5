import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";
import { Capability } from "@/data/capabilities";

const microPresets = [
  {
    id: "sparks",
    label: "Spark Inspiration",
    template:
      "Give me three provocative reframes of this brief that challenge default thinking and open new creative pathways."
  },
  {
    id: "checks",
    label: "Reality Check",
    template:
      "List hidden constraints, regulatory considerations, or resource gaps that could derail execution. Prioritize by impact."
  },
  {
    id: "momentum",
    label: "Momentum Boost",
    template:
      "Outline the first 72 hours of action with micro-milestones, owners, and proof of progress signals."
  }
];

type PromptComposerProps = {
  capability: Capability;
};

export const PromptComposer = ({ capability }: PromptComposerProps) => {
  const [prompt, setPrompt] = useState(capability.guidance.prompt);
  const [response, setResponse] = useState("");

  useEffect(() => {
    setPrompt(capability.guidance.prompt);
    setResponse("");
  }, [capability]);

  const synthesize = () => {
    const generated = [
      `🧠 Brief Echo:\n${prompt}`,
      "🔍 Investigative Lanes:",
      ...capability.guidance.questions.map((question, index) => `${index + 1}. ${question}`),
      "\n🎯 Signature Outputs:",
      ...capability.guidance.outputs.map((output, index) => `${index + 1}. ${output}`)
    ].join("\n");

    setResponse(generated);
  };

  return (
    <section className={styles.composer}>
      <div className={styles.panelTitle}>Prompt Composer</div>
      <fieldset className={styles.composerFieldset}>
        <label className={styles.composerLabel}>
          Instruction nucleus
          <textarea
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            className={styles.composerTextarea}
          />
        </label>
        <div className={styles.composerControls}>
          {microPresets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              className={styles.microButton}
              onClick={() => setPrompt((current) => `${current.trim()}\n\n${preset.template}`.trim())}
            >
              {preset.label}
            </button>
          ))}
          <button type="button" className={styles.primaryButton} onClick={synthesize}>
            Generate Scenario Brief
          </button>
        </div>
      </fieldset>
      <div className={styles.output}>
        <span className={styles.outputTitle}>Synthesis Draft</span>
        <p className={styles.outputText}>{response || "Refine the instruction nucleus and synthesize."}</p>
      </div>
    </section>
  );
};
