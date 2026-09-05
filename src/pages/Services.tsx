import { useSeo } from '../lib/seo';
import { PageHero } from '../components/layout/PageHero';
import { Services as ServicesSection } from '../components/sections/Services';
import { Process } from '../components/sections/Process';

export default function Services() {
  useSeo({
    title: 'Services',
    description:
      'Enterprise systems, applied AI and digital products: ERP, CRM, SCM, inventory, MIS, e-commerce, AI assistants, document processing, mobile apps, web platforms and cloud engineering.',
    path: '/services',
  });

  return (
    <>
      <PageHero
        visual="services"
        eyebrow="Services"
        title={<>Systems your business can actually run on</>}
        description="Thirteen services across three disciplines, delivered by one team on one architecture. Pick the discipline closest to your problem and start there."
      />
      <ServicesSection variant="full" />
      <Process tone="muted" />
    </>
  );
}
