import { NextResponse } from "next/server";
import { clearSessionCookie } from "../../../lib/session";
import { siteOrigin } from "../../../lib/site-origin";

export function POST(): NextResponse {
    const response = NextResponse.redirect(new URL("/key", siteOrigin()), {
        status: 303,
    });
    clearSessionCookie(response);
    return response;
}
