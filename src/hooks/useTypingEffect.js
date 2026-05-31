import { useEffect, useState } from 'react';

export const useTypingEffect = (
  phrases,
  typingSpeed = 90,
  deletingSpeed = 45,
  pause = 1500,
) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && displayText === currentPhrase) {
      delay = pause;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setPhraseIndex((index) => (index + 1) % phrases.length);
        return;
      }

      const nextText = isDeleting
        ? currentPhrase.slice(0, displayText.length - 1)
        : currentPhrase.slice(0, displayText.length + 1);

      setDisplayText(nextText);
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [deletingSpeed, displayText, isDeleting, pause, phraseIndex, phrases, typingSpeed]);

  return displayText;
};
