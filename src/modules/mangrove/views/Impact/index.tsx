import React from "react";
import { useLanguage } from "../../../../context/LanguageContext";
import OverallImpact from "./layout/OverallImpact";
import SocialMediaCampaign from "./layout/SocialMediaCampaign";
import ImpactLayout from "./layout/ImpactLayout";
import { mangroveImpact2025 } from "../../data/impactData";
import { campaignMeta, campaignStats2025 } from "../../data/campaignData";
import { Leaf, Target, Users, Activity } from "lucide-react";

const ImpactPage: React.FC = () => {
    const { t } = useLanguage();

    // Prepare overall impact items with translated labels and presentation fields
    const items = mangroveImpact2025.items.map((it, idx) => {
        switch (idx) {
            case 0:
                return {
                    ...it,
                    label: t("mangrove.impact.items.seedlings.label"),
                    accent: "#005900",
                    badge: t("mangrove.impact.cards.seedlings.badge"),
                    helper: t("mangrove.impact.cards.seedlings.helper"),
                };
            case 1:
                return {
                    ...it,
                    label: t("mangrove.impact.items.reach.label"),
                    accent: "#1d8f72",
                    badge: t("mangrove.impact.cards.reach.badge"),
                    helper: t("mangrove.impact.cards.reach.helper"),
                };
            case 2:
                return {
                    ...it,
                    label: t("mangrove.impact.items.interactions.label"),
                    accent: "#ba742d",
                    badge: t("mangrove.impact.cards.interactions.badge"),
                };
            case 3:
                return {
                    ...it,
                    label: t("mangrove.impact.items.carbon.label"),
                    accent: "#2563eb",
                    badge: t("mangrove.impact.cards.carbon.badge"),
                };
            default:
                return it;
        }
    });

    const impactProps = {
        kicker: t("mangrove.impact.kicker"),
        title: t("mangrove.impact.title"),
        subtitle: t("mangrove.impact.subtitle"),
        periodBadge: t("mangrove.impact.periodBadge"),
        items,
    };

    const campaignProps = {
        campaignMeta: {
            title: t(campaignMeta.titleKey),
            subtitle: t(campaignMeta.subtitleKey),
            period: campaignMeta.period,
        },
        campaignStats: campaignStats2025,
        t,
    };

    const overallNode = <OverallImpact {...impactProps} />;
    const socialNode = <SocialMediaCampaign {...campaignProps} />;

    return <ImpactLayout overallNode={overallNode} socialNode={socialNode} />;
};

export default ImpactPage;
