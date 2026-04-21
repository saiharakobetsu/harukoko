import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス内容｜はるここ",
  description:
    "はるここの伴走型サポートの詳細。学習計画の作成、学習状況の定期共有、保護者サポートの3ステップで、不登校のお子さんとご家族を支えます。",
};

const steps = [
  {
    no: "STEP 1",
    icon: "📋",
    title: "学習計画の作成",
    bullets: [
      "今の状態を一緒に整理",
      "何から始めるかを決める",
      "「これならできそう」という量から始める",
    ],
    paragraphs: [
      "お話を伺ったうえで、無理なく始められる学習計画をつくります。",
      "つくった学習計画は、ご様子や学習状況に応じて調整していきます。",
    ],
    accent: {
      lead: "無理に詰め込むのではなく、",
      strong: "“続けられる形”を一緒につくります。",
    },
  },
  {
    no: "STEP 2",
    icon: "✉️",
    title: "学習状況を定期的に共有",
    bullets: [],
    paragraphs: [
      "学習状況の共有を通して、お子さまの頑張っている点を確認し、つまずいているところを一緒に整理します。",
      "「やれなかった日」があっても大丈夫です。無理のないペースで進めていきましょう。",
      "また、学習のご様子などもわかる範囲で教えてください。お子さんの頑張れているところを見つけ、",
    ],
    accent: {
      lead: "保護者の方と二人三脚で、",
      strong: "一緒に安心して学べる環境を整えましょう。",
    },
  },
  {
    no: "STEP 3",
    icon: "🤝",
    title: "保護者サポート",
    bullets: [
      "お子さんへの声のかけ方",
      "「もっとやった方がいい？」などのお悩み",
      "出席扱い制度の具体的な進め方など",
    ],
    paragraphs: [
      "家庭学習でお困りのことがあれば、いつでもお気軽にご相談ください。",
      "保護者の方が「これでいいんだ」と思えることは、お子さんにとっても大きな安心になります。",
    ],
    accent: {
      lead: "ささいなことでも、",
      strong: "ぜひ遠慮なくご相談ください。",
    },
  },
];

export default function ServicePage() {
  return (
    <>
      {/* ===== ページタイトル ===== */}
      <div className="page-title-bar">
        <h1>サービス内容</h1>
      </div>

      {/* ===== イントロ ===== */}
      <section className="section-white">
        <div className="inner" style={{ maxWidth: "720px" }}>
          <p style={{
            textAlign: "center",
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "#555",
            lineHeight: "2.1",
          }}>
            はるここは、「毎回時間を決めて教えるオンライン授業」ではありません。<br />
            家庭学習が止まらないように、<br />
            <strong style={{ color: "var(--color-green)" }}>
              お子さんが無理のないペースで学ぶための、伴走型のサポート
            </strong>
            です。<br />
            ご家庭の状況に合わせて、次の3つのステップで関わっていきます。
          </p>
        </div>
      </section>

      {/* ===== 3ステップ ===== */}
      <section className="section-light">
        <div className="inner">
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {steps.map((step, i) => (
              <div key={step.no}>
                <article style={{
                  background: "#fff",
                  borderRadius: "16px",
                  padding: "36px 36px",
                  boxShadow: "0 2px 12px rgba(58,175,169,0.08)",
                  borderLeft: "5px solid var(--color-green)",
                }}>
                  <p style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    color: "var(--color-orange)",
                    letterSpacing: "0.18em",
                    marginBottom: "6px",
                  }}>{step.no}</p>
                  <h2 style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "var(--color-green)",
                    marginBottom: "20px",
                  }}>
                    <span style={{ marginRight: "8px" }}>{step.icon}</span>{step.title}
                  </h2>

                  {step.bullets.length > 0 && (
                    <ul style={{
                      paddingLeft: "22px",
                      marginBottom: "20px",
                      color: "#444",
                      fontSize: "15px",
                      lineHeight: "2",
                    }}>
                      {step.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  )}

                  {step.paragraphs.map((p, j) => (
                    <p key={j} style={{
                      fontSize: "15px",
                      color: "#555",
                      lineHeight: "2",
                      marginBottom: "12px",
                    }}>{p}</p>
                  ))}

                  <p style={{
                    fontSize: "15px",
                    color: "#333",
                    fontWeight: "bold",
                    lineHeight: "1.9",
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px dashed var(--color-green-light)",
                  }}>
                    {step.accent.lead}<br />
                    <span style={{ color: "var(--color-orange-dark)" }}>{step.accent.strong}</span>
                  </p>
                </article>

                {/* 矢印（最後以外） */}
                {i < steps.length - 1 && (
                  <div style={{
                    textAlign: "center",
                    padding: "16px 0",
                    color: "var(--color-green)",
                    fontSize: "26px",
                    opacity: 0.45,
                  }}>▼</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== サービスに含まれるもの ===== */}
      <section className="section-white">
        <div className="inner" style={{ maxWidth: "760px" }}>
          <h2 className="section-title">サービスに含まれるもの</h2>
          <ul style={{
            listStyle: "none",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
            marginTop: "36px",
          }}>
            {[
              { t: "オンライン教材「すらら」", d: "国語・算数(数学)・英語などを自宅で学習" },
              { t: "個別の学習計画作成", d: "お子さんの状態に合わせた無理のない計画" },
              { t: "学習状況の定期共有", d: "頑張りを一緒に確認しながら継続" },
              { t: "保護者からのご相談対応", d: "声かけ・進め方など、なんでもご相談OK" },
              { t: "出席扱い制度のサポート", d: "学校との連携・手続きをサポート" },
              { t: "教材費・管理費なし", d: "月額にすべて含まれます" },
            ].map((item) => (
              <li key={item.t} style={{
                background: "var(--color-green-light)",
                borderRadius: "12px",
                padding: "18px 20px",
              }}>
                <p style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "var(--color-green)",
                  marginBottom: "6px",
                }}>✓ {item.t}</p>
                <p style={{ fontSize: "13px", color: "#555", lineHeight: "1.7" }}>{item.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{
        background: "var(--color-green)",
        padding: "64px 5%",
        textAlign: "center",
        color: "#fff",
      }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
            まずは無料でご相談ください
          </h2>
          <p style={{ fontSize: "15px", marginBottom: "28px", opacity: 0.95, lineHeight: 1.9 }}>
            お子さんの状況をお聞きし、はるここが合うかどうかを<br />
            一緒に考えます。無理な勧誘は一切しません。
          </p>
          <Link href="/contact" style={{
            display: "inline-block",
            background: "#fff",
            color: "var(--color-green)",
            fontWeight: "bold",
            fontSize: "17px",
            padding: "14px 40px",
            borderRadius: "50px",
            borderBottom: "3px solid rgba(0,0,0,0.1)",
          }}>
            お問い合わせ・無料相談
          </Link>
        </div>
      </section>
    </>
  );
}
