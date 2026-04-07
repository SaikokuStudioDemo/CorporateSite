import Hero from '../components/Hero';
import Message from '../components/Message';
import BusinessOverview from '../components/BusinessOverview';
import Business from '../components/Business';
import MVV from '../components/MVV';
import Company from '../components/Company';

export default function Home() {
  return (
    <main>
      <Hero />
      <Message />
      <BusinessOverview />
      <Business />
      <MVV />
      <Company />
    </main>
  );
}
