
import { FiMessageCircle } from 'react-icons/fi';
import { MessageCircle, Users, Code, Database, CheckCircle, GitBranch, Play } from 'lucide-react';
import HeroSection from './child/HeroSecttion';
import BenefitsSection from './child/BenefitsSection';
import InterviewDemoSection from './child/InterviewDemoSection';
import ProblemsSection from './child/ProblemSection';
import BlackCtaSection from './child/BlackCTASection';


function HomePageLayer() {
  return (
    <div>
      <HeroSection/>
      <BenefitsSection/>
    <InterviewDemoSection/>
    <ProblemsSection/>
    <BlackCtaSection/>
      </div>
  )
}

export default HomePageLayer