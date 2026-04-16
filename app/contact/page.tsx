"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  childName: string;
  nameKana: string;
  email: string;
  phone: string;
  grade: string;
  message: string;
};

const grades = [
  "小学1年生", "小学2年生", "小学3年生",
  "小学4年生", "小学5年生", "小学6年生",
  "中学1年生", "中学2年生", "中学3年生",
  "その他",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <div className="page-title-bar">
        <h1>お問い合わせ・無料相談</h1>
      </div>

      <section className="section-white">
        <div className="inner" style={{ maxWidth: "640px" }}>
          <p style={{ marginBottom: "32px", fontSize: "16px", lineHeight: "1.85", color: "#555" }}>
            無料相談・体験授業のご予約・ご質問など、お気軽にご連絡ください。<br />
            2営業日以内にご返信いたします。
          </p>

          {status === "success" && (
            <div style={{
              background: "#e8f7f5", border: "1px solid var(--color-green)",
              borderRadius: "10px", padding: "20px", marginBottom: "24px",
              color: "var(--color-green)", fontWeight: "bold",
            }}>
              ✅ お問い合わせを受け付けました。2営業日以内にご返信いたします。
            </div>
          )}

          {status === "error" && (
            <div style={{
              background: "#fff0f0", border: "1px solid #e05555",
              borderRadius: "10px", padding: "20px", marginBottom: "24px",
              color: "#e05555", fontWeight: "bold",
            }}>
              ❌ 送信に失敗しました。お手数ですがお電話またはメールでご連絡ください。
            </div>
          )}

          {status !== "success" && (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-group">
                <label>
                  お子さまのお名前
                  <span className="required">必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：さいはら 太郎"
                  {...register("childName", { required: "お名前を入力してください" })}
                />
                {errors.childName && <p className="form-error">{errors.childName.message}</p>}
              </div>

              <div className="form-group">
                <label>
                  お名前（カナ）
                  <span className="required">必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：サイハラ タロウ"
                  {...register("nameKana", { required: "カナを入力してください" })}
                />
                {errors.nameKana && <p className="form-error">{errors.nameKana.message}</p>}
              </div>

              <div className="form-group">
                <label>
                  メールアドレス
                  <span className="required">必須</span>
                </label>
                <input
                  type="email"
                  placeholder="例：example@mail.com"
                  {...register("email", {
                    required: "メールアドレスを入力してください",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "正しいメールアドレスを入力してください" },
                  })}
                />
                {errors.email && <p className="form-error">{errors.email.message}</p>}
              </div>

              <div className="form-group">
                <label>
                  電話番号
                  <span className="required">必須</span>
                </label>
                <input
                  type="tel"
                  placeholder="例：090-0000-0000"
                  {...register("phone", { required: "電話番号を入力してください" })}
                />
                {errors.phone && <p className="form-error">{errors.phone.message}</p>}
              </div>

              <div className="form-group">
                <label>
                  学年
                  <span className="required">必須</span>
                </label>
                <select {...register("grade", { required: "学年を選択してください" })}>
                  <option value="">-- 選択してください --</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {errors.grade && <p className="form-error">{errors.grade.message}</p>}
              </div>

              <div className="form-group">
                <label>ご相談内容・ご質問</label>
                <textarea
                  rows={5}
                  placeholder="現在の状況やご希望など、なんでもお気軽にお書きください。"
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                className="btn-main"
                disabled={status === "sending"}
                style={{
                  width: "100%",
                  background: status === "sending" ? "#aaa" : undefined,
                  borderColor: status === "sending" ? "#999" : undefined,
                  cursor: status === "sending" ? "not-allowed" : undefined,
                }}
              >
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
