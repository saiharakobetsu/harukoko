"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "ホーム",         href: "/" },
  { label: "サービス紹介",   href: "/#service" },
  { label: "料金",           href: "/#price" },
  { label: "よくある質問",   href: "/#faq" },
  { label: "お問い合わせ",   href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      background: "#fff",
      borderBottom: "2px solid var(--color-green-light)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "0 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "64px",
      }}>
        {/* ロゴ */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image src="/logo.png" alt="はるここ ロゴ" width={48} height={48} style={{ objectFit: "contain" }} />
          <span style={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "var(--color-green)",
            letterSpacing: "0.05em",
          }}>はるここ</span>
        </Link>

        {/* PC ナビ */}
        <nav style={{ display: "flex", gap: "24px", alignItems: "center" }}
          className="pc-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#555",
            }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-main" style={{
            fontSize: "14px",
            padding: "8px 20px",
          }}>
            無料相談
          </Link>
        </nav>

        {/* ハンバーガー（SP） */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          aria-label="メニュー"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: "block",
              width: "24px",
              height: "2px",
              background: "var(--color-green)",
              borderRadius: "2px",
              transition: "all 0.2s",
            }} />
          ))}
        </button>
      </div>

      {/* SP ドロワー */}
      {open && (
        <nav style={{
          background: "#fff",
          borderTop: "1px solid var(--color-green-light)",
          padding: "16px 5%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "16px", fontWeight: "bold", color: "#555", padding: "4px 0" }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-main"
            onClick={() => setOpen(false)}
            style={{ textAlign: "center", marginTop: "8px" }}>
            無料相談はこちら
          </Link>
        </nav>
      )}

      <style>{`
        @media (max-width: 768px) {
          .pc-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
