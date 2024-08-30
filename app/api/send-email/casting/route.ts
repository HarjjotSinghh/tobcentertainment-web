import { NextResponse } from "next/server";
import mailgun from "mailgun-js";

export async function POST(req: Request) {
    try {
        const mg = mailgun({
            apiKey: process.env.MAILGUN_API_KEY!,
            domain: process.env.MAILGUN_DOMAIN!,
            protocol: "https:",
            port: 443,
            timeout: 30000,
            retry: { times: 3, interval: 1000 },
            host: "api.eu.mailgun.net"
        });

        const { name, email, phone, age, gender, experience, portfolio } = await req.json();

        const response = await new Promise<any>((resolve, reject) => {
            mg.messages().send(
                {
                    from: `${name} <${process.env.SMTP_USER}>`,
                    to: process.env.TO_EMAIL!,
                    subject: "New Casting Application",
                    text: `
                        Name: ${name}
                        Email: ${email}
                        Phone: ${phone}
                        Age: ${age}
                        Gender: ${gender}
                        Experience: ${experience}
                        Portfolio: ${portfolio || 'Not provided'}
                    `,
                    html: `
                        <h2>New Casting Application</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Age:</strong> ${age}</p>
                        <p><strong>Gender:</strong> ${gender}</p>
                        <p><strong>Experience:</strong><br>${experience}</p>
                        <p><strong>Portfolio:</strong> ${portfolio || 'Not provided'}</p>
                    `
                },
                (error, body) => {
                    if (error) reject(error);
                    else resolve(body);
                }
            );
        });

        console.log("Email sent:", response);
        return NextResponse.json({
            message: "Application submitted successfully",
            status: 200
        });
    } catch (error: any) {
        console.error("Error sending application:", error);
        return NextResponse.json({
            message: "Error submitting application",
            error: error.message,
            status: 500
        }, { status: 500 });
    }
}
