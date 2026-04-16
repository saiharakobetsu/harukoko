import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div style={{
        background: "#fff",
        borderTop: "2px solid var(--color-green-light)",
        padding: "32px 5%",
      }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          {/* ロゴ */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
            <Image src="/logo.png" alt="はるここ ロゴ" width={36} height={36} style={{ objectFit: "contain" }} />
            <span style={{ fontWeight: "bold", fontSize: "18px", color: "var(--color-green)" }}>
              はるここ
            </span>
          </div>

          <p style={{ fontSize: "13px", color: "#888", marginBottom: "20px", lineHeight: "1.7" }}>
            不登校の小中学生のための、オンライン家庭学習サポート。<br />
            運営：合同会社さいはら（神奈川県横浜市戸塚区）
          </p>

          <ul className="footer-nav" style={{ marginBottom: "20px" }}>
            <li><Link href="/">ホーム</Link></li>
            <li><Link href="/contact">お問い合わせ</Link></li>
            <li><Link href="/tokushoho">特定商取引法に基づく表記</Link></li>
          </ul>
        </div>
      </div>

      <div style={{
        background: "var(--color-green)",
        color: "#fff",
        textAlign: "center",
        padding: "8px 5%",
        fontSize: "13px",
      }}>
        copyright © 2024 Saihara All rights reserved.
      </div>
    </footer>
  );
}
