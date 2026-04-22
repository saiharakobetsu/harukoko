import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { childName, nameKana, email, phone, grade, source, survey, message } =
    await request.json();

  if (!childName || !nameKana || !email || !grade) {
    return NextResponse.json({ error: "必須項目が不足しています" }, { status: 400 });
  }

  const sourceText = Array.isArray(source) && source.length > 0
    ? source.join("、")
    : "（未回答）";

  const surveyText = Array.isArray(survey) && survey.length > 0
    ? survey.join("、")
    : "（未回答）";

  const { error } = await resend.emails.send({
    from: "はるここ お問い合わせフォーム <onboarding@resend.dev>",
    to: "g.hayakawa56@gmail.com",
    replyTo: email,
    subject: `【はるここ お問い合わせ】${childName} 様`,
    text: `
はるここ お問い合わせフォームより送信がありました。

━━━━━━━━━━━━━━━━━━━━━━
お子さまのお名前: ${childName}
お子さまのお名前（カナ）: ${nameKana}
学年: ${grade}
メールアドレス: ${email}
電話番号: ${phone || "（未入力）"}
━━━━━━━━━━━━━━━━━━━━━━
はるここを知ったきっかけ: ${sourceText}
アンケート: ${surveyText}
━━━━━━━━━━━━━━━━━━━━━━
ご相談内容:
${message || "（なし）"}
━━━━━━━━━━━━━━━━━━━━━━

返信先: ${email}
    `.trim(),
  });

  if (error) {
    return NextResponse.json({ error: "送信に失敗しました" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
