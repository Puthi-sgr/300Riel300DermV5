import React from "react";

type Props = {
  headerNode?: React.ReactNode;
  galleryNode: React.ReactNode;
};

const GalleryLayout: React.FC<Props> = ({ headerNode, galleryNode }) => {
  return (
    <div className="rounded-2xl bg-white shadow-lg p-6 space-y-3">
      <div>{headerNode}</div>

      <div className="rounded-xl bg-eco-50/60 p-4">{galleryNode}</div>
    </div>
  );
};

export default GalleryLayout;
