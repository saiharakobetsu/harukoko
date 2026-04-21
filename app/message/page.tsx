import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "代表の想い｜はるここ",
  description:
    "はるここ代表・さいはらごろうより。ただ「学校が合わなかっただけ」で子どもの可能性を閉じ込めないために、伴走型学習サポートを運営しています。",
};

export default function MessagePage() {
  return (
    <>
      {/* ===== ページタイトル ===== */}
      <div className="page-title-bar">
        <h1>代表の想い</h1>
      </div>

      {/* ===== 本文 ===== */}
      <section className="section-white">
        <div className="inner" style={{ maxWidth: "800px" }}>
          <div style={{
            display: "flex",
            gap: "48px",
            alignItems: "flex-start",
            flexWrap: "wrap",
            justifyContent: "center",
          }}>
            {/* 写真 */}
            <div style={{ flexShrink: 0, textAlign: "center" }}>
              <img
                src="/representative.jpeg"
                alt="代表 さいはら ごろう"
                style={{
                  width: "260px",
                  height: "320px",
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: "16px",
                  border: "4px solid var(--color-green-light)",
                  boxShadow: "0 4px 16px rgba(58,175,169,0.12)",
                }}
              />
              <p style={{
                marginTop: "12px",
                fontSize: "14px",
                color: "#888",
                lineHeight: "1.7",
              }}>
                代表：裁原&nbsp;&nbsp;吾朗<br />
                <span style={{ fontSize: "12px" }}>（さいはら　ごろう）</span>
              </p>
            </div>

            {/* テキスト */}
            <div style={{ flex: 1, minWidth: "260px" }}>
              <h2 style={{
                fontSize: "clamp(18px, 3vw, 22px)",
                fontWeight: "bold",
                color: "#333",
                lineHeight: "1.7",
                marginBottom: "28px",
                borderLeft: "4px solid var(--color-green)",
                paddingLeft: "16px",
              }}>
                ただ「学校が合わなかっただけ」で<br />
                子どもの可能性を閉じ込めないために。
              </h2>

              {[
                "私は個人塾を運営しながら、これまで170名以上の不登校のご家庭をサポートしてきました。",
                "不登校にもさまざまな背景がありますが、たまたま学校という枠が合わなかっただけで、他の子にはないエネルギーがあると思っています。",
                "そのエネルギーを社会で発揮できるように、「学ぶ」という行為そのものを嫌いにならないでほしい。",
                "自分のペースで学び、出席扱いの活用などを通じて自分を認めてあげるきっかけを作りたい。",
                "「自分はこれでいいんだ」と自分自身を認めてあげることができれば、その力は必ず社会で活躍する原動力になります。",
                "我が子のために日々頑張っているご家族の心にも寄り添い、すでに子どもの中にある原石を一緒に探したい。そんな想いで「はるここ」を運営しています。",
              ].map((text, i) => (
                <p key={i} style={{
                  fontSize: "16px",
                  color: "#555",
                  lineHeight: "2",
                  marginBottom: "20px",
                }}>{text}</p>
              ))}
            </div>
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
