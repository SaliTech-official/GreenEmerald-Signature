import React from 'react';
import styles from './GreenEmeraldSignature.module.css';

/**
 * Defines the props accepted by the GreenEmeraldSignature component.
 */
interface SignatureProps {
  /**
   * The language of the text. Defaults to 'en'.
   * @default 'en'
   */
  lang?: 'en' | 'fa';
  
  /**
   * The destination URL for the link.
   * @default 'https://www.instagram.com/greenemerald.studio/'
   */
  link?: string;
}

// A central object for managing text content, ensuring consistency.
const copy: { [key in 'en' | 'fa']: string } = {
  en: 'Crafted by Green Emerald',
  fa: 'طراحی و اجرا توسط زمرد سبز', // Note: Spacing is now handled by CSS 'word-spacing'
};

/**
 * The official signature bar component for the Green Emerald brand.
 * It's a self-contained, theme-agnostic component meant to be placed
 * at the very bottom of a page.
 *
 * @param {SignatureProps} props - The component's properties.
 */
const GreenEmeraldSignature: React.FC<SignatureProps> = ({
  lang = 'en',
  link = '#',
}) => {
  // Determine the correct CSS class based on the selected language.
  const langClass = lang === 'fa' ? styles.farsi : styles.english;
  
  // A combined class name for the text element for better readability.
  const textClasses = `${styles.signatureText} ${langClass}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.signatureBar}
      aria-label={`Link to ${copy.en}`} // Accessibility best practice
    >
      <span className={textClasses}>
        {copy[lang]}
      </span>
    </a>
  );
};

export default GreenEmeraldSignature;