export default function TokushohoPage() {
  const items = [
    { label: "販売業者",     value: "合同会社さいはら" },
    { label: "代表者",       value: "裁原 吾朗" },
    { label: "所在地",       value: "神奈川県横浜市戸塚区秋葉町280-5 第6野本ビル 2階" },
    { label: "メールアドレス", value: "g.saihara@saihara-kobetsu.jp" },
    {
      label: "サービス内容",
      value: "不登校の小中学生を対象としたオンライン家庭学習サポート「はるここ」",
    },
    {
      label: "料金",
      value: (
        <>
          小学生：13,200円／月（税込）<br />
          中学1年生：15,400円／月（税込）<br />
          中学2年生：17,600円／月（税込）<br />
          中学3年生：19,800円／月（税込）<br />
          ※ 教材費（すらら）込み。入会金無料。
        </>
      ),
    },
    {
      label: "支払方法",
      value: "口座振替または銀行振込。初月は入会時に銀行振込、以降は毎月27日に翌月分を引き落とし。",
    },
    {
      label: "解約・返金",
      value: "毎月末日の前日までにご連絡いただければ翌月から解約できます。返金が発生する場合は、振込手数料を差し引いた金額をご返金します。",
    },
    {
      label: "動作環境",
      value: "インターネット接続環境と、スマートフォン・タブレット・PCのいずれかが必要です。",
    },
  ];

  return (
    <>
      <div className="page-title-bar">
        <h1>特定商取引法に基づく表記</h1>
      </div>

      <section className="section-white">
        <div className="inner">
          <div style={{ overflowX: "auto" }}>
            <table className="tokushoho-table">
              <tbody>
                {items.map((item) => (
                  <tr key={item.label}>
                    <th>{item.label}</th>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
