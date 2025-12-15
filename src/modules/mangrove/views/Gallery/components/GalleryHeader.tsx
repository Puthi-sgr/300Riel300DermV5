import React from "react";

type Props = {
  title: string;
  description?: string;
};

const GalleryHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="space-y-1">
        <h2 className="text-3xl font-semibold uppercase tracking-normal text-eco-700 text-center">{title}</h2>
        {description ? <p className="text-sm text-earth-700 text-center">{description}</p> : null}
      </div>
    </div>
  );
};

export default GalleryHeader;
