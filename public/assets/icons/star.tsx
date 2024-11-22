export const StarIcon = ({
  fill = "currentColor",
  className,
  ...props
}: {
  fill?: string;
  className?: string;
  props?: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' className={className} {...props}>
      <path
        d='M17.3039 7.97274L13.7882 11.0063L14.8593 15.5431C14.9184 15.7893 14.9032 16.0476 14.8156 16.2852C14.728 16.5229 14.5719 16.7292 14.3671 16.8782C14.1623 17.0272 13.9179 17.1121 13.6648 17.1222C13.4118 17.1324 13.1614 17.0673 12.9453 16.9352L8.99995 14.5071L5.0523 16.9352C4.83622 17.0666 4.58613 17.131 4.3335 17.1205C4.08087 17.11 3.837 17.0249 3.63261 16.8761C3.42822 16.7272 3.27243 16.5212 3.18488 16.284C3.09732 16.0468 3.08191 15.789 3.14058 15.5431L4.21558 11.0063L0.699951 7.97274C0.508778 7.80752 0.370518 7.58963 0.302438 7.34629C0.234358 7.10296 0.239475 6.84496 0.317151 6.60452C0.394826 6.36407 0.541618 6.15184 0.739193 5.99432C0.936768 5.83681 1.17637 5.74099 1.42808 5.71884L6.03745 5.34696L7.81558 1.04384C7.91182 0.809319 8.07563 0.608718 8.28618 0.467538C8.49673 0.326358 8.7445 0.250977 8.998 0.250977C9.2515 0.250977 9.49927 0.326358 9.70982 0.467538C9.92036 0.608718 10.0842 0.809319 10.1804 1.04384L11.9578 5.34696L16.5671 5.71884C16.8193 5.74017 17.0596 5.83545 17.2579 5.99275C17.4562 6.15005 17.6037 6.36236 17.6819 6.6031C17.76 6.84383 17.7654 7.10228 17.6973 7.34606C17.6292 7.58984 17.4907 7.80811 17.2992 7.97352L17.3039 7.97274Z'
        fill={fill}
      />
    </svg>
  );
};