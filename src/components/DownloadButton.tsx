import { DOWNLOAD_APP_URL } from '@/lib/constants';

type DownloadButtonProps = {
  label?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  ariaLabel?: string;
};

const sizeClasses = {
  sm: 'px-6 py-3 text-sm',
  md: 'px-8 py-4 text-base md:text-lg',
  lg: 'px-10 py-5 text-lg md:text-xl',
};

const iconSizeClasses = {
  sm: 'p-1.5',
  md: 'p-2',
  lg: 'p-2.5',
};

const svgSizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export default function DownloadButton({
  label = 'DOWNLOAD NOW',
  className = '',
  size = 'md',
  href = DOWNLOAD_APP_URL,
  ariaLabel = 'Download Juwa 777 APK for Android',
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`download-btn inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#FFD10F] bg-[#140606] text-white font-semibold hover:bg-[#FFD10F]/10 transition-all group ${sizeClasses[size]} ${className}`}
    >
      <span>{label}</span>
      <span
        className={`download-icon flex-shrink-0 rounded-full bg-[#C41E1E] group-hover:scale-110 transition-transform ${iconSizeClasses[size]}`}
      >
        <svg
          className={svgSizeClasses[size]}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </span>
    </a>
  );
}
