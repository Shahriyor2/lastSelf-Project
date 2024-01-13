import React from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="124" cy="121" r="124" />
      <rect x="0" y="257" rx="10" ry="10" width="247" height="27" />
      <rect x="0" y="398" rx="5" ry="5" width="70" height="24" />
      <rect x="2" y="308" rx="0" ry="0" width="6" height="0" />
      <rect x="119" y="400" rx="5" ry="5" width="133" height="22" />
      <rect x="0" y="297" rx="10" ry="10" width="252" height="88" />
    </ContentLoader>
  );
};
