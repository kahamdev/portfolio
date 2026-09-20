import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Application Security Engineer | Portfolio",
  description: "A demonstration portfolio covering application security, DevSecOps, cloud and Kubernetes security.",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
