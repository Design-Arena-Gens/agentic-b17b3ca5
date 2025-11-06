import { Blueprint } from "@/lib/blueprints";
import styles from "@/app/page.module.css";

export const BlueprintDeck = ({ blueprints }: { blueprints: Blueprint[] }) => {
  return (
    <div className={styles.matrix}>
      <h2 className={styles.panelTitle}>Strategic Blueprints</h2>
      <div className={styles.gridSplit}>
        {blueprints.map((blueprint) => (
          <article key={blueprint.id} className={`${styles.blueprintCard} glass`}>
            <header className={styles.blueprintHeader}>
              <span className={styles.capabilityBadge}>{blueprint.name}</span>
              <p className={styles.blueprintSpark}>{blueprint.spark}</p>
            </header>
            <div className={styles.phaseList}>
              {blueprint.phases.map((phase) => (
                <section key={phase.name} className={styles.phase}>
                  <div>
                    <h3 className={styles.phaseTitle}>{phase.name}</h3>
                    <p className={styles.phaseFocus}>{phase.focus}</p>
                  </div>
                  <div className={styles.phaseSplit}>
                    <div>
                      <p className={styles.phaseListTitle}>Execution Pulses</p>
                      <ul className={styles.checkList}>
                        {phase.actions.map((action) => (
                          <li key={action}>{action}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className={styles.phaseListTitle}>Signature Outputs</p>
                      <ul className={styles.checkList}>
                        {phase.deliverables.map((deliverable) => (
                          <li key={deliverable}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
