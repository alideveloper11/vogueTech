import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
    registration: string;
    name: string;
    email: string;
    phone: string;
    postcode: string;
    issue: string;
}

export async function POST(req: NextRequest) {
    const apiUser = process.env.X_API_USER || "";
    const apiKey = process.env.X_API_KEY || "";
    const apiUrl = process.env.FORM_API_URL || "";
    const apiSlug = process.env.website_slug || "";
    try {
        const body: ContactFormData = await req.json();

        const res = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "X-API-USER": apiUser,
                "X-API-KEY": apiKey,
            },
            body: JSON.stringify({
                website_slug: apiSlug,
                vrm: body.registration,
                name: body.name,
                email: body.email,
                phone: body.phone,
                postcode: body.postcode,
                issue: body.issue,
            }),
        });

        const responseText = await res.text();

        console.log("External API Status:", res.status);
        console.log("External API Response:", responseText);

        let data;

        try {
            data = JSON.parse(responseText);
        } catch {
            data = { message: responseText };
        }

        return NextResponse.json(data, {
            status: res.status,
        });

    } catch (error) {
        console.error("Contact API Error:", error);

        return NextResponse.json(
            { message: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}