import OverallImpact from "./layout/OverallImpact";
import SocialMediaCampaign from "./layout/SocialMediaCampaign";

const ImpactPage: React.FC = () => (
    <section className="rounded-[40px] border border-white/60 bg-gradient-to-br from-[#eef9f3] via-white to-[#f5fff9] p-6 sm:p-8 lg:p-12 space-y-10">
        <OverallImpact />
        <SocialMediaCampaign />
    </section>
);

export default ImpactPage;
