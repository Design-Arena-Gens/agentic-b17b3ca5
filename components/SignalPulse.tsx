import styles from "@/app/page.module.css";

const signals = [
  {
    metric: "0.32s",
    label: "Inference Latency Window",
    trend: "+22% faster vs last sprint"
  },
  {
    metric: "98.7%",
    label: "Scenario Guidance Confidence",
    trend: "ensemble consensus ↑"
  },
  {
    metric: "14",
    label: "Active Domain Meshes",
    trend: "3 new knowledge clusters synced"
  }
];

export const SignalPulse = () => (
  <section className={`${styles.panel} glass`}>
    <h2 className={styles.panelTitle}>Operational Telemetry</h2>
    <div className={styles.signalGrid}>
      {signals.map((signal) => (
        <article key={signal.label} className={styles.signalCard}>
          <span className={styles.signalMetric}>{signal.metric}</span>
          <span className={styles.signalLabel}>{signal.label}</span>
          <span className={styles.signalTrend}>{signal.trend}</span>
        </article>
      ))}
    </div>
  </section>
);
