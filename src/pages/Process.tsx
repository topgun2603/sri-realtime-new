import { useSeo } from '../lib/seo';
import { PageHero } from '../components/layout/PageHero';
import { Process as ProcessSection } from '../components/sections/Process';

export default function Process() {
  useSeo({
    title: 'Delivery Process',
    description:
      'How an SRI REAL TIME engagement runs: requirement gathering, architecture, UX and UI design, development, QA, deployment, and ongoing support and maintenance.',
    path: '/process',
  });

  return (
    <>
      <PageHero
        visual="process"
        eyebrow="Delivery process"
        title={<>From first workshop to the support desk</>}
        description="Seven stages, each with a duration, a set of activities and something concrete you receive at the end of it. No stage finishes without a deliverable."
      />
      <ProcessSection tone="default" />
    </>
  );
}
