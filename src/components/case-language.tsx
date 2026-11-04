"use client";
import { useEffect } from "react";
import type { Locale } from "@/content/portfolio";
export default function CaseLanguage({ locale }: { locale: Locale }) {
  useEffect(() => { document.documentElement.lang = locale === "pt" ? "pt-BR" : "en"; }, [locale]);
  return null;
}
