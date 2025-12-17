import React, { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FacebookPost } from "../../../../dto/Facebook.dto";
import { fetchFacebookPosts } from "../../../../services/FacebookService";
import GalleryLayout from "./layout/GalleryLayout";
import GalleryHeader from "./components/GalleryHeader";
import GalleryCarousel from "./components/GalleryCarousel";
import GalleryFooter from "./components/GalleryFooter";

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const prefersReducedMotion = useReducedMotion();
  const [facebookPosts, setFacebookPosts] = useState<FacebookPost[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const getPosts = async () => {
      const data = await fetchFacebookPosts(controller.signal);
      if (!controller.signal.aborted) {
        setFacebookPosts(data);
      }
    };

    getPosts();

    return () => controller.abort();
  }, []);

  const headerNode = (
    <GalleryHeader
      prefersReducedMotion={prefersReducedMotion ?? false}
      inView={inView}
    />
  );

  const galleryNode = (
<GalleryCarousel
          posts={facebookPosts}
          prefersReducedMotion={prefersReducedMotion ?? false}
        />
  )

  return (
    <GalleryLayout
      containerRef={ref}
      animate={inView}
      prefersReducedMotion={prefersReducedMotion ?? false}
      headerNode={headerNode}
      galleryNode={
        galleryNode
        
      }
      footerNode={<GalleryFooter />}
    />
  );
};

export default Gallery;
