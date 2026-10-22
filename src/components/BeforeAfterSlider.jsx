import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight, Sparkles } from 'lucide-react';

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'ANTES',
  afterLabel = 'DESPUÉS',
  alt = 'Comparación antes y después',
  className = ''
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef(null);

  // Calculate position from clientX
  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
    if (!hasInteracted) setHasInteracted(true);
  }, [hasInteracted]);

  // Pointer / Mouse / Touch Handlers
  const handlePointerDown = (e) => {
    setIsDragging(true);
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0]?.clientX);
    if (clientX !== undefined) {
      updatePosition(clientX);
    }
  };

  useEffect(() => {
    const handlePointerMove = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0]?.clientX);
      if (clientX !== undefined) {
        updatePosition(clientX);
      }
    };

    const handlePointerUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      window.addEventListener('touchmove', handlePointerMove, { passive: true });
      window.addEventListener('touchend', handlePointerUp);
    }

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging, updatePosition]);

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setSliderPosition((prev) => Math.max(0, prev - 5));
      setHasInteracted(true);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setSliderPosition((prev) => Math.min(100, prev + 5));
      setHasInteracted(true);
    } else if (e.key === 'Home') {
      e.preventDefault();
      setSliderPosition(0);
      setHasInteracted(true);
    } else if (e.key === 'End') {
      e.preventDefault();
      setSliderPosition(100);
      setHasInteracted(true);
    }
  };

  return (
    <div className={`ba-slider-wrapper ${className}`}>
      <div
        ref={containerRef}
        className={`ba-slider-container ${isDragging ? 'is-dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onTouchStart={handlePointerDown}
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Deslizador interactivo para comparar antes y después"
        onKeyDown={handleKeyDown}
      >
        {/* AFTER Image (Bottom layer) */}
        <div className="ba-layer ba-after-layer">
          <img
            src={afterImage}
            alt={`${alt} - ${afterLabel}`}
            draggable="false"
            className="ba-image"
          />
          <div
            className="ba-badge ba-badge-after"
            style={{ opacity: sliderPosition > 85 ? 0.2 : 1 }}
          >
            <Sparkles size={13} className="ba-badge-icon" />
            <span>{afterLabel}</span>
          </div>
        </div>

        {/* BEFORE Image (Top layer with clip-path) */}
        <div
          className="ba-layer ba-before-layer"
          style={{
            clipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`,
            WebkitClipPath: `polygon(0% 0%, ${sliderPosition}% 0%, ${sliderPosition}% 100%, 0% 100%)`
          }}
        >
          <img
            src={beforeImage}
            alt={`${alt} - ${beforeLabel}`}
            draggable="false"
            className="ba-image"
          />
          <div
            className="ba-badge ba-badge-before"
            style={{ opacity: sliderPosition < 15 ? 0.2 : 1 }}
          >
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Divider line & central draggable handle */}
        <div
          className="ba-divider"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="ba-divider-line" />
          <div className="ba-handle" title="Arrastra hacia los lados para comparar">
            <ChevronsLeftRight size={18} className="ba-handle-icon" />
          </div>
          <div className="ba-divider-line" />
        </div>

        {/* First-time Interactive Hint */}
        {!hasInteracted && (
          <div className="ba-interaction-hint">
            <span>← Desliza para comparar →</span>
          </div>
        )}
      </div>

      {/* Preset Buttons for Quick Toggling */}
      <div className="ba-presets">
        <button
          type="button"
          className={`ba-preset-btn ${sliderPosition >= 95 ? 'active' : ''}`}
          onClick={() => { setSliderPosition(100); setHasInteracted(true); }}
        >
          <span className="ba-preset-full">Ver Estado Inicial (Antes)</span>
          <span className="ba-preset-short">Antes</span>
        </button>
        <button
          type="button"
          className={`ba-preset-btn ${sliderPosition >= 45 && sliderPosition <= 55 ? 'active' : ''}`}
          onClick={() => { setSliderPosition(50); setHasInteracted(true); }}
        >
          Comparar 50/50
        </button>
        <button
          type="button"
          className={`ba-preset-btn ${sliderPosition <= 5 ? 'active' : ''}`}
          onClick={() => { setSliderPosition(0); setHasInteracted(true); }}
        >
          <span className="ba-preset-full">Ver Resultado Final (Después)</span>
          <span className="ba-preset-short">Después</span>
        </button>
      </div>
    </div>
  );
}

export default BeforeAfterSlider;
