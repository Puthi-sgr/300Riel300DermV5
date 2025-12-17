import React from "react";

type Props = {
  whyDonateNode: React.ReactNode;
  paymentInfoNode: React.ReactNode;
};

const DonateGrid: React.FC<Props> = ({ whyDonateNode, paymentInfoNode }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-12">
      {whyDonateNode}
      {paymentInfoNode}
    </div>
  );
};

export default DonateGrid;
