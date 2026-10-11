import { useRef, useEffect, useState } from 'react';

/**
 * High-performance, lazy-loading, auto-pausing video component.
 * - Only sets video source when approaching the viewport (prevents downloading megabytes of video on page load)
 * - Plays only when visible in viewport; immediately pauses when offscreen
 * - Automatically pauses when browser tab is inactive / backgrounded
 * - Enforces hardware-accelerated GPU layer with zero compositor lag
 */
export default function OptimizedVideo({
  src,
  poster,
  className = '',
  style = {},
  aspectRatio,
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  rootMargin = '150px 0px 150px 0px',
  threshold = 0.15,
}) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // 1. Viewport observer for lazy-loading source and play/pause management
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  // 2. Play / Pause control based on visibility
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (isInView && autoPlay && document.visibilityState === 'visible') {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Ignore auto-play abort or interruption errors
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, shouldLoad, autoPlay]);

  // 3. Tab visibility listener: pause when tab is inactive, resume if in view
  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current;
      if (!video || !shouldLoad) return;

      if (document.visibilityState === 'hidden') {
        video.pause();
      } else if (isInView && autoPlay) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isInView, shouldLoad, autoPlay]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform: 'translateZ(0)',
        willChange: 'transform',
        ...(aspectRatio ? { aspectRatio } : {}),
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        className="w-full h-full object-cover object-center block"
        style={{
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
