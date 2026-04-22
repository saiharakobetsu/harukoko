import Link from "next/link";

type Props = {
  title?: string;
  body?: string;
};

export default function CtaSection({
  title = "まずは無料でご相談ください",
  body = "お子さんの状況をお聞きし、はるここが合うかどうかを\n一緒に考えます。無理な勧誘は一切しません。",
}: Props) {
  return (
    <section style={{
      background: "var(--color-green)",
      padding: "64px 5%",
      textAlign: "center",
      color: "#fff",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(22px, 3vw, 26px)", fontWeight: "bold", marginBottom: "16px" }}>
          {title}
        </h2>
        <p style={{
          fontSize: "16px",
          marginBottom: "32px",
          opacity: 0.9,
          lineHeight: 1.9,
          whiteSpace: "pre-line",
        }}>
          {body}
        </p>
        <Link href="/contact" className="btn-white">
          お問い合わせ・無料相談
        </Link>
      </div>
    </section>
  );
}
