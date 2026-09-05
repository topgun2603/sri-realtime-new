import {
  siReact, siVite, siTailwindcss, siNextdotjs, siVuedotjs, siFlutter,
  siNodedotjs, siExpress, siFastapi, siDjango, siGraphql,
  siPostgresql, siMysql, siMongodb, siRedis, siSqlite, siFirebase,
  siGooglegemini, siTensorflow, siPytorch, siScikitlearn, siLangchain, siHuggingface,
  siDocker, siKubernetes, siGithubactions, siTerraform,
  siOdoo, siSap, siTypescript, siClaude,
} from 'simple-icons';
import { Blocks, BarChart3, type LucideIcon } from 'lucide-react';

/** A real brand logo: a 24×24 SVG path plus the official brand colour. */
interface BrandLogo {
  kind: 'brand';
  path: string;
  hex: string;
  /**
   * Some brand colours are near-black and would disappear on a dark ground.
   * When set, this is used instead on dark surfaces.
   */
  darkHex?: string;
}

/** A typographic mark, for brands whose logo isn't redistributable. */
interface LetterMark {
  kind: 'mark';
  label: string;
  hex: string;
}

/** A generic glyph, for capabilities that aren't a single product. */
interface GlyphMark {
  kind: 'glyph';
  icon: LucideIcon;
  hex: string;
}

export type TechLogo = BrandLogo | LetterMark | GlyphMark;

const brand = (
  icon: { path: string; hex: string },
  darkHex?: string,
): BrandLogo => ({ kind: 'brand', path: icon.path, hex: `#${icon.hex}`, darkHex });

/**
 * Maps each entry in TECH_EXPERTISE to a logo.
 *
 * AWS and Azure were withdrawn from the Simple Icons set at the brands'
 * request, so they render as brand-coloured lettermarks instead — which is
 * how AWS presents itself in most partner listings anyway.
 */
export const TECH_LOGOS: Record<string, TechLogo> = {
  // Frontend & mobile
  'React': brand(siReact),
  'Vite': brand(siVite),
  'Tailwind CSS': brand(siTailwindcss),
  'Next.js': brand(siNextdotjs, '#FFFFFF'),
  'Vue.js': brand(siVuedotjs),
  'Flutter': brand(siFlutter, '#54C5F8'),
  'React Native': brand(siReact),
  'TypeScript': brand(siTypescript, '#5B9DE8'),

  // Backend
  'Node.js': brand(siNodedotjs),
  'Express.js': brand(siExpress, '#FFFFFF'),
  'FastAPI': brand(siFastapi),
  'Django': brand(siDjango, '#44B78B'),
  'REST & GraphQL': brand(siGraphql),

  // Data
  'PostgreSQL': brand(siPostgresql, '#6C93E8'),
  'MySQL': brand(siMysql, '#6C9BC4'),
  'MongoDB': brand(siMongodb),
  'Redis': brand(siRedis),
  'SQLite': brand(siSqlite, '#4B9FD5'),
  'AWS RDS': { kind: 'mark', label: 'RDS', hex: '#FF9900' },
  'Firebase': brand(siFirebase, '#FFA000'),

  // AI & ML
  'Claude': brand(siClaude),
  'Gemini & GPT': brand(siGooglegemini, '#A78BFA'),
  'TensorFlow': brand(siTensorflow),
  'PyTorch': brand(siPytorch),
  'scikit-learn': brand(siScikitlearn),
  'LangChain': brand(siLangchain),
  'Hugging Face': brand(siHuggingface),

  // Cloud & DevOps
  'AWS': { kind: 'mark', label: 'AWS', hex: '#FF9900' },
  'Azure': { kind: 'mark', label: 'Azure', hex: '#3FA9F5' },
  'Docker': brand(siDocker),
  'Kubernetes': brand(siKubernetes),
  'GitHub Actions': brand(siGithubactions),
  'Terraform': brand(siTerraform, '#A78BFA'),

  // Enterprise
  'Custom ERP Modules': { kind: 'glyph', icon: Blocks, hex: '#7BA2F5' },
  'Odoo Integration': brand(siOdoo, '#B18BAC'),
  'SAP Integration': brand(siSap),
  'BI & Reporting': { kind: 'glyph', icon: BarChart3, hex: '#7BA2F5' },
};

/** Names shown in the marquee strip, in a deliberate visual order. */
export const MARQUEE_TECH = [
  'React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB',
  'Redis', 'Docker', 'Kubernetes', 'Terraform', 'Vite', 'Tailwind CSS',
  'TensorFlow', 'PyTorch', 'Claude', 'Gemini & GPT', 'LangChain', 'Flutter', 'Firebase',
];
