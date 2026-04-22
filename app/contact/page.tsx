"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  childName: string;
  nameKana: string;
  grade: string;
  email: string;
  phone?: string;
  message: string;
};

const grades = [
  "小学1年生", "小学2年生", "小学3年生",
  "小学4年生", "小学5年生", "小学6年生",
  "中学1年生", "中学2年生", "中学3年生",
  "その他",
];

const sourceOptions = [
  "ホームページを見て",
  "知人・友人の紹介で",
  "通っていた塾の紹介で",
  "その他",
];

const surveyOptions = [
  "自宅で学習できる環境を整えたい",
  "無理のないペースで学んでほしい",
  "家庭学習の仕方が分からない",
  "出席扱い制度を活用したい",
  "復学を目指している",
  "オンライン個別面談を受けたい",
  "無料体験を受けたい",
];

const badgeStyle = (type: "required" | "optional"): React.CSSProperties => ({
  display: "inline-block",
  fontSize: "11px",
  fontWeight: "bold",
  padding: "1px 7px",
  borderRadius: "3px",
  marginLeft: "6px",
  verticalAlign: "middle",
  background: type === "required" ? "var(--color-orange)" : "#ccc",
  color: "#fff",
});

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [sources, setSources] = useState<string[]>([]);
  const [surveys, setSurveys] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const toggleCheck = (
    value: string,
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  };

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: sources, survey: surveys }),
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

              {/* ① お子さまのお名前 */}
              <div className="form-group">
                <label>
                  お子さまのお名前
                  <span style={badgeStyle("required")}>必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：さいはら 太郎"
                  {...register("childName", { required: "お名前を入力してください" })}
                />
                {errors.childName && <p className="form-error">{errors.childName.message}</p>}
              </div>

              {/* ② お子さまのお名前（カナ） */}
              <div className="form-group">
                <label>
                  お子さまのお名前（カナ）
                  <span style={badgeStyle("required")}>必須</span>
                </label>
                <input
                  type="text"
                  placeholder="例：サイハラ タロウ"
                  {...register("nameKana", { required: "カナを入力してください" })}
                />
                {errors.nameKana && <p className="form-error">{errors.nameKana.message}</p>}
              </div>

              {/* ③ 学年 */}
              <div className="form-group">
                <label>
                  学年
                  <span style={badgeStyle("required")}>必須</span>
                </label>
                <select {...register("grade", { required: "学年を選択してください" })}>
                  <option value="">-- 選択してください --</option>
                  {grades.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {errors.grade && <p className="form-error">{errors.grade.message}</p>}
              </div>

              {/* ④ メールアドレス */}
              <div className="form-group">
                <label>
                  メールアドレス
                  <span style={badgeStyle("required")}>必須</span>
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

              {/* ⑤ 電話番号（任意） */}
              <div className="form-group">
                <label>
                  電話番号
                  <span style={badgeStyle("optional")}>任意</span>
                </label>
                <input
                  type="tel"
                  placeholder="例：090-0000-0000"
                  {...register("phone")}
                />
              </div>

              {/* ⑥ はるここを知ったきっかけ */}
              <div className="form-group">
                <label style={{ marginBottom: "12px", display: "block" }}>
                  はるここを知ったきっかけ
                  <span style={badgeStyle("optional")}>任意・複数選択可</span>
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
                  {sourceOptions.map((opt) => (
                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "#444", cursor: "pointer", fontWeight: "normal" }}>
                      <input
                        type="checkbox"
                        checked={sources.includes(opt)}
                        onChange={() => toggleCheck(opt, sources, setSources)}
                        style={{ width: "16px", height: "16px", accentColor: "var(--color-green)", cursor: "pointer" }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* ⑦ アンケート */}
              <div className="form-group">
                <label style={{ marginBottom: "12px", display: "block" }}>
                  アンケート
                  <span style={badgeStyle("optional")}>任意・複数選択可</span>
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 24px" }}>
                  {surveyOptions.map((opt) => (
                    <label key={opt} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "#444", cursor: "pointer", fontWeight: "normal" }}>
                      <input
                        type="checkbox"
                        checked={surveys.includes(opt)}
                        onChange={() => toggleCheck(opt, surveys, setSurveys)}
                        style={{ width: "16px", height: "16px", accentColor: "var(--color-green)", cursor: "pointer" }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              {/* ⑧ ご相談内容 */}
              <div className="form-group">
                <label>
                  ご相談内容・ご質問
                  <span style={badgeStyle("optional")}>任意</span>
                </label>
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
