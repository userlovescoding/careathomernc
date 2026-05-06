import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { defaultSEO } from '../../config/seo';

const SEO = ({ title, description, path, ogImage }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Set Document Title
    const finalTitle = title || defaultSEO.title;
    document.title = finalTitle;

    // Helper to set/update meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(meta[\="\"]);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Set Meta Description
    const finalDescription = description || defaultSEO.description;
    setMetaTag('name', 'description', finalDescription);

    // 3. Set Open Graph Tags (OG)
    const finalUrl = \\\\;
    const finalImage = ogImage || defaultSEO.defaultImage;

    setMetaTag('property', 'og:title', finalTitle);
    setMetaTag('property', 'og:description', finalDescription);
    setMetaTag('property', 'og:url', finalUrl);
    setMetaTag('property', 'og:image', finalImage);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', defaultSEO.siteName);

    // 4. Set Canonical Link
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', finalUrl);

    // Cleanup on unmount (optional, but good for SPA if defaults are needed)
    return () => {
      // Revert to defaults if necessary, though next route's SEO component usually overwrites
    };
  }, [title, description, path, ogImage, location.pathname]);

  return null; // This component does not render any UI
};

export default SEO;
