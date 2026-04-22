import Link from "next/link";
import type { Metadata } from "next";
import PageTitleBar from "@/components/PageTitleBar";

export const metadata: Metadata = {
  title: "よくある質問｜はるここ",
  description:
    "はるここへのよくあるご質問。勉強の無理強い・パソコンの使い方・出席扱い・料金・退会方法など、気になる点をまとめました。",
};

const faqs = [
  {
    category: "サービスについて",
    items: [
      {
        q: "勉強の無理強いはしませんか？",
        a: [
          "決して無理強いすることはございません。",
          "はるここが最も大切にしているのは「安心」して学べる土台づくりです。心が疲れている時に無理をさせると、かえって逆効果になってしまうこともあります。",
          "頭ではやらなきゃと思っていても、体や心がついてこないときに必要なのは休息、つまり心の充電です。",
          "「こんなペースでいいのかな」「もっとやらせた方がいいですよね？」と不安に思う親御さんに「大丈夫。焦らずゆっくり進めていきましょう。」とお伝えするのが私の役目です。",
        ],
      },
      {
        q: "パソコンが苦手でも大丈夫ですか？",
        a: [
          "サポートしますのでご安心ください。",
          "学習で使用する「すらら」は、マウス操作が中心の直感的な設計になっています。操作方法に不安がある場合は、すららの画面を一緒に見ながら使い方をサポートいたします。",
          "LINEでも随時サポートしておりますのでご安心ください。",
        ],
      },
      {
        q: "子どもとのやり取りは必須ですか？",
        a: [
          "いいえ、必須ではありません。",
          "不登校のお子さんの中には大人に対する不信や怖さを感じている子もいらっしゃいます。そのため、基本的には保護者さんとやり取りさせていただきますので、安心して学んでいただきたいと思います。",
          "もちろんやり取りしたいお子さんも大歓迎なので、「子どもにも応援のメッセージを送ってあげてほしい」などご希望がございましたらお気軽にご相談ください。",
        ],
      },
      {
        q: "すららで分からない問題が出てきたらどうすればいいですか？",
        a: [
          "すららの「質問機能」をご活用ください。",
          "すららには分からない問題が出てきたときに質問できる機能があります。そちらからご質問いただくか、LINEでのやり取りの中でご質問いただく形でも大丈夫です。",
          "ご質問の内容に応じて「すらら」でどこを復習すれば良いかをアドバイスしたり、直接解説させていただきます。",
        ],
      },
    ],
  },
  {
    category: "出席扱いについて",
    items: [
      {
        q: "すららでの学習は必ず「出席扱い」になりますか？",
        a: [
          "認められる可能性は高いですが、「出席扱い」として認められるかどうかはあくまで学校側の判断になります。",
          "すららは出席扱いに認定されるための要件を満たしているため、「出席扱い」として認められるケースが増えてきています。（2024年までのデータで約81%の承認率）",
          "とはいえ最終判断は学校側に委ねられてしまうため、必ず認められるとお約束することはできません。",
          "学校に相談する際のポイントなどもアドバイスさせていただきますので、一緒に進めていきましょう。",
        ],
      },
    ],
  },
  {
    category: "料金・お支払いについて",
    items: [
      {
        q: "毎月の料金の支払方法はどうなっていますか？",
        a: [
          "口座振替にて毎月27日に翌月分の料金を引き落としいたします。",
          "ご入会時に口座振替の登録をネット上でしていただき、ご指定の口座から口座振替にて引き落とさせていただきます。",
          "口座振替による引き落としが開始するまではお振り込みにてご入金をお願いいたします。",
        ],
      },
      {
        q: "月の途中で入会した場合、料金はどうなりますか？",
        a: [
          "初月の料金は「日割り計算」になります。",
          "「月のはじめまで待たないと損をしてしまうかも……」と心配いただく必要はありません。お子さんの「やってみようかな」というタイミングで、いつでもスタートすることができます。",
          "入会日によって料金が変わってしまうため、ご入会時には1ヶ月分の料金をお振り込みいただきますが、翌月の費用で調整いたします。",
        ],
      },
    ],
  },
  {
    category: "休会・退会について",
    items: [
      {
        q: "休会（退会）したい場合はどうすればいいですか？",
        a: [
          "毎月末日前日までのご連絡で翌月の利用を取りやめることが可能です。",
          "例えば3月末で休会（退会）したい場合は3月30日までにご連絡いただければ翌月の利用を停止させていただきます。※末日前日が土日祝日の場合は前営業日までにご連絡ください。",
          "翌月分の引き落としがかかる場合は、口座振替手数料と振込手数料を差し引いた金額を返金させていただきます。",
          "毎月10日までにご連絡いただければ翌月の請求自体を取りやめることが可能ですので、お早めのご連絡をお願いいたします。",
        ],
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <PageTitleBar title="よくある質問" />

      <section className="section-white">
        <div className="inner" style={{ maxWidth: "760px" }}>
          {faqs.map((cat) => (
            <div key={cat.category} style={{ marginBottom: "56px" }}>
              {/* カテゴリ見出し */}
              <h2 style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "var(--color-green)",
                borderLeft: "4px solid var(--color-green)",
                paddingLeft: "12px",
                marginBottom: "20px",
                letterSpacing: "0.05em",
              }}>
                {cat.category}
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {cat.items.map((faq, i) => (
                  <div key={i} style={{
                    background: "#fff",
                    border: "1px solid #e0f0ee",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 2px 8px rgba(58,175,169,0.06)",
                  }}>
                    <div style={{
                      padding: "18px 24px",
                      background: "var(--color-green-light)",
                    }}>
                      <p style={{ fontWeight: "bold", color: "var(--color-green)", fontSize: "16px", lineHeight: "1.7" }}>
                        Q. {faq.q}
                      </p>
                    </div>
                    <div style={{ padding: "18px 24px" }}>
                      {faq.a.map((line, j) => (
                        <p key={j} style={{
                          fontSize: "15px",
                          color: j === 0 ? "#333" : "#555",
                          fontWeight: j === 0 ? "bold" : "normal",
                          lineHeight: "1.9",
                          marginBottom: j < faq.a.length - 1 ? "12px" : "0",
                        }}>
                          {j === 0 ? `A. ${line}` : line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* その他相談 */}
          <div style={{
            background: "var(--color-green-light)",
            borderRadius: "16px",
            padding: "28px 32px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "16px", color: "#444", lineHeight: "2", marginBottom: "20px" }}>
              他にご不明な点がございましたら、<br />
              お気軽にお問い合わせください。
            </p>
            <Link href="/contact" className="btn-main">
              お問い合わせ・無料相談
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
