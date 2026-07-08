import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
};

type ProjectMediaCarouselProps = {
  images: ProjectImage[];
  title: string;
};

const AUTOPLAY_INTERVAL = 4600;

export function ProjectMediaCarousel({ images, title }: ProjectMediaCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
    }, AUTOPLAY_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, [hasMultipleImages, images.length, isPaused]);

  if (!images.length) {
    return null;
  }

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % images.length);
  };

  return (
    <div
      className="project-carousel"
      aria-label={`Galería de imágenes de ${title}`}
      onBlur={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="project-carousel__track">
        {images.map((image, index) => (
          <img
            key={image.src}
            className={`project-carousel__image ${
              index === activeIndex ? "project-carousel__image--active" : ""
            }`}
            src={image.src}
            alt={image.alt}
            aria-hidden={index !== activeIndex}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
      </div>

      <div className="project-carousel__glow" aria-hidden="true" />

      {hasMultipleImages ? (
        <>
          <div className="project-carousel__controls" aria-label={`Controles de galería de ${title}`}>
            <button type="button" aria-label="Imagen anterior" onClick={goToPrevious}>
              <ChevronLeft aria-hidden="true" strokeWidth={2} />
            </button>
            <button type="button" aria-label="Imagen siguiente" onClick={goToNext}>
              <ChevronRight aria-hidden="true" strokeWidth={2} />
            </button>
          </div>

          <div className="project-carousel__meta">
            <span>
              {activeIndex + 1}/{images.length}
            </span>
            <div className="project-carousel__dots" aria-label={`Diapositivas de ${title}`}>
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  className={index === activeIndex ? "project-carousel__dot--active" : ""}
                  aria-label={`Ver imagen ${index + 1} de ${images.length}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
