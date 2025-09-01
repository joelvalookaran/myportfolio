import React, { useEffect } from 'react';

/**
 * Renders a responsive grid of Instagram post embeds using the official embed script.
 * Usage:
 * <InstagramEmbeds postUrls={[
 *   'https://www.instagram.com/p/POST_ID_1/',
 *   'https://www.instagram.com/p/POST_ID_2/'
 * ]} />
 */
export default function InstagramEmbeds({ postUrls = [] }) {
  useEffect(() => {
    // Ensure Instagram embed script exists, then process embeds
    const existingScript = document.getElementById('instagram-embed-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'instagram-embed-script';
      script.async = true;
      script.defer = true;
      script.src = 'https://www.instagram.com/embed.js';
      script.onload = () => {
        if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
          window.instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
        window.instgrm.Embeds.process();
      }
    }
  }, [postUrls]);

  if (!postUrls.length) {
    return null;
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '16px'
    }}>
      {postUrls.map((url, idx) => (
        <blockquote
          key={idx}
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#fff',
            border: 0,
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: 0,
            minWidth: 0,
            padding: 0
          }}
        />
      ))}
    </div>
  );
}


