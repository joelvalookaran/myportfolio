import React from 'react';

export default function Gallery() {
  // Add all known image assets from /public (JPG/PNG)
  const publicImageFiles = [
    'profile.jpg',
    'about-bg.jpg',
    'IMG_5029.JPG',
    'IMG_5030.JPG',
    'IMG_5031.JPG',
    'IMG_5032.JPG',
    'Screenshot 2025-08-29 120046.png',
    'Screenshot 2025-08-29 120125.png',
    'Screenshot 2025-08-29 120159.png',
    'Screenshot 2025-08-29 120215.png',
    'Screenshot 2025-08-29 120229.png',
    'Screenshot 2025-08-29 120248.png',
    'Screenshot 2025-08-29 120304.png',
  ];

  const images = publicImageFiles.map((file) => `${process.env.PUBLIC_URL}/${file}`);

  return (
    <div style={{ padding: '24px' }}>
      <h2 style={{ marginTop: 0 }}>Gallery</h2>
      <p style={{ marginBottom: '16px' }}>Photos & Screenshots</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '12px'
        }}
      >
        {images.map((src, idx) => (
          <div key={idx} style={{ position: 'relative', width: '100%', paddingBottom: '100%', overflow: 'hidden', borderRadius: '8px', background: '#f3f5f9' }}>
            <img
              src={src}
              alt={`gallery-${idx}`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


