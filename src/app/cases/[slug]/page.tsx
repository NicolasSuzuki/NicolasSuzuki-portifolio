import { notFound } from "next/navigation";
import CaseStudy, { caseMetadata } from "@/components/case-study";
import { slugs } from "@/content/case-studies";
export const dynamicParams = false;
export function generateStaticParams() { return slugs.map(slug => ({ slug })); }
async function getSlug(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const match = slugs.find(value => value === slug);
  if (!match) notFound();
  return match;
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { return caseMetadata(await getSlug(params), "pt"); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { return <CaseStudy slug={await getSlug(params)} locale="pt"/>; }
