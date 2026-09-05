import { useSeo } from '../lib/seo';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { WhyUs } from '../components/sections/WhyUs';
import { Products } from '../components/sections/Products';
import { ProductDemos } from '../components/sections/ProductDemos';
import { Capabilities } from '../components/sections/Capabilities';
import { ProcessCompact } from '../components/sections/Process';

export default function Home() {
  useSeo({
    title: 'SRI REAL TIME — Enterprise Systems, AI Automation & Digital Engineering',
    description:
      'SRI REAL TIME designs, builds and deploys enterprise-grade digital systems — ERP, CRM, SCM, inventory and MIS platforms, AI automation, and mobile and web products engineered to scale.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <Services variant="teaser" />
      <WhyUs />
      <Products />
      <ProductDemos />
      <Capabilities variant="teaser" />
      <ProcessCompact />
    </>
  );
}
