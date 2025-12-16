import React from "react";
import { useInView } from "react-intersection-observer";
import DonateLayout from "./layout/DonateLayout";
import DonateHeader from "./components/DonateHeader";
import WhyDonate from "./components/WhyDonate";
import PaymentInfo from "./components/PaymentInfo";

import DonateGrid from "./components/DonateGrid";

const Donate = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDonationLink = () => {
    window.open("https://pay.ababank.com/77Lo2oCdT26yWVW98", "_blank");
  };

  return (
    <DonateLayout
      containerRef={ref}
      animate={inView}
      headerNode={<DonateHeader />}
      contentNode={
        <DonateGrid
          whyDonateNode={<WhyDonate />}
          paymentInfoNode={<PaymentInfo onDonateClick={handleDonationLink} />}
        />
      }
    />
  );
};

export default Donate;
