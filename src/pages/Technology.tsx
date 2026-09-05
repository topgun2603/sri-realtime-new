import { useSeo } from '../lib/seo';
import { PageHero } from '../components/layout/PageHero';
import { TechStack } from '../components/sections/TechStack';

export default function Technology() {
  useSeo({
    title: 'Technology',
    description:
      'The stack SRI REAL TIME builds on: React, Next.js, Flutter, Node.js, FastAPI, PostgreSQL, MongoDB, Redis, TensorFlow, PyTorch, LangChain, AWS, Azure, Docker and Kubernetes.',
    path: '/technology',
  });

  return (
    <>
      <PageHero
        visual="technology"
        eyebrow="Technology"
        title={<>The stack behind the systems</>}
        description="We choose tools you can hire for and systems can live on. Filter by layer to see what we build with and what each part is genuinely good at."
      />
      <TechStack />
    </>
  );
}
