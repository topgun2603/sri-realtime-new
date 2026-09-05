import { useSeo } from '../lib/seo';
import { PageHero } from '../components/layout/PageHero';
import { Capabilities } from '../components/sections/Capabilities';
import { Products } from '../components/sections/Products';

export default function Work() {
  useSeo({
    title: 'Capabilities',
    description:
      'Representative solution blueprints from SRI REAL TIME: multi-warehouse supply chain ERP, intelligent document processing, omnichannel commerce with unified CRM, and field service management.',
    path: '/work',
  });

  return (
    <>
      <PageHero
        visual="work"
        eyebrow="Capabilities"
        title={<>What we are set up to build</>}
        description="Four classes of problem we solve, the architecture we would bring to each, and the products we already run ourselves."
      />
      <Capabilities variant="full" />
      <Products />
    </>
  );
}
