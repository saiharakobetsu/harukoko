import Link from "next/link";

const features = [
  {
    image: "/feature-outdoor.png",
    title: "外出不要・好きな時間に",
    body: "オンライン教材「すらら」を活用し、自宅のリラックスした環境で学習。登校できなくても、学びをとめない。",
  },
  {
    image: "/feature-plan.png",
    title: "無理のない学習計画",
    body: "体調や気分に合わせて個別に計画を設計。固定時間の授業はなし。できることからひとつずつ積み重ねます。",
  },
  {
    image: "/feature-support.png",
    title: "ご家族への包括サポート",
    body: "出席扱い手続きや学校との連絡対応、保護者向けの相談にも対応。お子さんだけでなく、家族全体を支えます。",
  },
];

const flow = [
  { step: "お問い合わせ", desc: "フォームまたはお電話でお気軽にご連絡ください。" },
  { step: "無料相談",     desc: "お子さんの状況をお聞きし、サービスのご説明をします（約30分）。" },
  { step: "2週間体験",   desc: "実際に学習を体験していただけます。費用はかかりません。" },
  { step: "正式申込み",  desc: "ご納得いただいた上でお申し込みください。入会金は無料です。" },
];

const prices = [
  { grade: "小学生（全学年）", monthly: "13,200円" },
  { grade: "中学1年生",       monthly: "15,400円" },
  { grade: "中学2年生",       monthly: "17,600円" },
  { grade: "中学3年生",       monthly: "19,800円" },
];

const faqs = [
  {
    q: "不登校の期間が長くても大丈夫ですか？",
    a: "はい、大丈夫です。学力や生活リズムを問わず、今のお子さんの状態からスタートします。",
  },
  {
    q: "親が仕事中でも利用できますか？",
    a: "お子さんだけで学習できる仕組みになっています。ご不安な点はご相談ください。",
  },
  {
    q: "出席扱いになりますか？",
    a: "一定の条件のもと、学校に出席扱いとして認められるケースがあります。手続きのご相談にも応じます。",
  },
  {
    q: "途中でやめることはできますか？",
    a: "毎月末日の前日までにご連絡いただければ、翌月から解約できます。縛りはありません。",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== ヒーロー ===== */}
      <section style={{
        position: "relative",
        backgroundImage: "url('/hero.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 5% 64px",
        textAlign: "center",
      }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.68)",
        }} />
        <div style={{ maxWidth: "720px", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <p style={{
            display: "inline-block",
            background: "var(--color-orange)",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "bold",
            padding: "4px 16px",
            borderRadius: "50px",
            marginBottom: "24px",
          }}>
            不登校の小中学生専門
          </p>
          <h1 style={{
            fontSize: "clamp(26px, 5vw, 40px)",
            fontWeight: "bold",
            color: "#333",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}>
            学校に行けない日も<br />
            <span style={{ color: "var(--color-green)" }}>学びをとめない</span>
          </h1>
          <p style={{
            fontSize: "17px",
            color: "#666",
            lineHeight: "1.85",
            marginBottom: "36px",
          }}>
            一人ひとりのペースに合わせた学習計画と、<br />
            170名以上の不登校家庭を支えてきた個別サポート。<br />
            お子さんとご家族に寄り添います。
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-main">無料相談・体験授業へ</Link>
            <Link href="/#service" className="btn-outline">サービスを見る</Link>
          </div>
        </div>
      </section>

      {/* ===== 共感セクション ===== */}
      <section style={{
        background: "#fff",
        padding: "72px 5%",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <p style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "#444",
            lineHeight: "2",
            marginBottom: "32px",
          }}>
            「学校に行かないという選択を、親として尊重したい。」<br />
            でも、毎日自宅で見ていると……
          </p>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            marginBottom: "40px",
          }}>
            {[
              "「もっと勉強させた方がいいのかな」",
              "「このペースで、本当に大丈夫だろうか」",
              "「将来のことが、心配で仕方ない」",
            ].map((text) => (
              <p key={text} style={{
                display: "inline-block",
                margin: "0 auto",
                fontSize: "clamp(16px, 2.5vw, 19px)",
                fontWeight: "bold",
                color: "var(--color-green)",
                background: "var(--color-green-light)",
                padding: "10px 28px",
                borderRadius: "50px",
                lineHeight: "1.6",
              }}>{text}</p>
            ))}
          </div>
          <p style={{
            fontSize: "clamp(15px, 2vw, 18px)",
            color: "#555",
            lineHeight: "2",
            marginBottom: "32px",
          }}>
            そんな不安を、はるここが一緒に受け止めます。<br />
            一人ひとりに合わせた無理のない学習計画で、<br />
            お子さんの<span style={{ fontWeight: "bold", color: "var(--color-orange-dark)" }}>「できた」を積み重ねながら、</span><br />
            お父さん・お母さんが安心して見守れるようにサポートします。
          </p>
          <p style={{
            fontSize: "clamp(18px, 2.8vw, 24px)",
            fontWeight: "bold",
            color: "#444",
            lineHeight: "2",
            borderTop: "2px solid var(--color-green-light)",
            borderBottom: "2px solid var(--color-green-light)",
            padding: "24px 0",
          }}>
            復学をゴールにしなくても大丈夫。<br />
            ここから、少しずつ進んでいきましょう。
          </p>
        </div>
      </section>

      {/* ===== 3つの特徴 ===== */}
      <section id="service" className="section-white">
        <div className="inner">
          <h2 className="section-title">はるここの３つの特徴</h2>
          <div className="feature-grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card" style={{ textAlign: "center" }}>
                <img
                  src={f.image}
                  alt={f.title}
                  className="feature-img"
                />
                <h3 className="card-title" style={{ textAlign: "center" }}>{f.title}</h3>
                <p style={{ fontSize: "15px", lineHeight: "1.8", color: "#555", textAlign: "left" }}>{f.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <Link href="/service" className="btn-main">
              サービス内容を詳しく見る →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== 実績・数字 ===== */}
      <section style={{
        background: "var(--color-green)",
        padding: "56px 5%",
      }}>
        <div style={{
          maxWidth: "800px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "32px",
        }}>
          {[
            { num: "170名以上", label: "不登校サポート累計" },
            { num: "11年以上", label: "教育業界経験" },
            { num: "出席扱い", label: "サポート対応可" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center", color: "#fff" }}>
              <p style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                fontWeight: "bold",
                lineHeight: "1.2",
                marginBottom: "8px",
              }}>{item.num}</p>
              <p style={{
                fontSize: "14px",
                opacity: 0.9,
                letterSpacing: "0.05em",
              }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 代表紹介 ===== */}
      <section className="section-white">
        <div className="inner">
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            <img
              src="/representative.jpeg"
              alt="代表 さいはら"
              style={{
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                flexShrink: 0,
                border: "4px solid var(--color-green-light)",
              }}
            />
            <div style={{ maxWidth: "480px" }}>
              <p style={{
                fontSize: "13px",
                color: "var(--color-green)",
                fontWeight: "bold",
                marginBottom: "6px",
                letterSpacing: "0.08em",
              }}>
                はるここ 代表
              </p>
              <p style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "16px",
              }}>
                さいはら ごろう
              </p>
              <p style={{
                fontSize: "16px",
                color: "#555",
                lineHeight: "2",
              }}>
                不登校サポートに累計１７０名以上関わってきた経験から、「遅れを取り戻そうとすること」より「学びを止めないこと」が子どもの自信につながると確信しています。お子さんのペースを一緒に見つけていきましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ご利用の流れ ===== */}
      <section className="section-light">
        <div className="inner">
          <h2 className="section-title">ご利用の流れ</h2>
          <ul className="flow-list">
            {flow.map((item, i) => (
              <li key={i} className="flow-item">
                <div className="flow-num">{i + 1}</div>
                <div>
                  <p style={{ fontWeight: "bold", fontSize: "16px", marginBottom: "4px" }}>{item.step}</p>
                  <p style={{ fontSize: "15px", color: "#555" }}>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 料金 ===== */}
      <section id="price" className="section-white">
        <div className="inner">
          <h2 className="section-title">料金（税込・入会金無料）</h2>
          <p style={{ textAlign: "center", fontSize: "15px", color: "#666", marginTop: "16px" }}>
            教材費（すらら）込み。月途中入会でも日割り計算なし、翌月から正規料金です。
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="price-table">
              <thead>
                <tr>
                  <th>学年</th>
                  <th>月額</th>
                </tr>
              </thead>
              <tbody>
                {prices.map((p) => (
                  <tr key={p.grade}>
                    <th>{p.grade}</th>
                    <td style={{ fontSize: "17px" }}><b>{p.monthly}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: "13px", color: "#888", marginTop: "12px", textAlign: "center" }}>
            ※ 管理費は別途かかりません。まずはお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* ===== よくある質問 ===== */}
      <section id="faq" className="section-light">
        <div className="inner">
          <h2 className="section-title">よくある質問</h2>
          <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "20px" }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "20px 24px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}>
                <p style={{ fontWeight: "bold", color: "var(--color-green)", marginBottom: "8px", fontSize: "16px" }}>
                  Q. {faq.q}
                </p>
                <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8" }}>
                  A. {faq.a}
                </p>
              </div>
            ))}
          </div>
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
          <h2 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "16px" }}>
            まずは無料でご相談ください
          </h2>
          <p style={{ fontSize: "16px", marginBottom: "32px", opacity: 0.9, lineHeight: 1.8 }}>
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
