import { React, useState, useEffect, useRef, Children } from "react";

function ScrollReveal({
  containerClassName = "",
  duration = 1,
  threshold = 0,
  margin = 0,
  cascade = false,
  damping = 1,
  anim = "",
  root = null,
  children,
  delay = 0,
  triggerOnce = false,
}) {
  const node = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const options = {
    root: root,
    rootMargin: `0px 0px ${`-${margin}px`} 0px`,
    threshold: threshold,
  };

  useEffect(() => {
    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting && triggerOnce) observer.unobserve(node.current);
    };

    let observerNodeValue = null;

    const observer = new IntersectionObserver(callbackFunction, options);
    if (node.current) observer.observe(node.current);
    observerNodeValue = node.current;

    return () => {
      if (observerNodeValue) observer.unobserve(observerNodeValue);
    };
  }, [node, options]);

  const cascadeChildren = Children.map(
    Children.toArray(children),
    (child, index) => {
      return (
        <div
          style={{
            animationDelay: `${index * damping}s`,
            animationDuration: `${duration}s`,
          }}
          ref={node}
          className={`animate__animated ${
            isVisible ? anim : `element-hidden ${containerClassName}`
          }`}
        >
          {child}
        </div>
      );
    }
  );

  return (
    <>
      {cascade ? (
        cascadeChildren
      ) : (
        <div
          style={{
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
          ref={node}
          className={`animate__animated ${
            isVisible ? anim : `element-hidden ${containerClassName}`
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
}

export default ScrollReveal;
