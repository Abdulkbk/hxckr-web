export default function GithubIcon({
  fill = "black",
  ...props
}: {
  fill?: string;
  props?: React.SVGProps<SVGSVGElement>;
}) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7599 0.5C5.13182 0.5 0.582031 5.08333 0.582031 10.7535C0.582031 15.286 3.49724 19.1227 7.54141 20.4806C8.04703 20.5827 8.23224 20.26 8.23224 19.9885C8.23224 19.7508 8.21557 18.936 8.21557 18.0871C5.38432 18.6983 4.79474 16.8648 4.79474 16.8648C4.33974 15.6765 3.66557 15.371 3.66557 15.371C2.73891 14.7429 3.73307 14.7429 3.73307 14.7429C4.76099 14.8108 5.30036 15.7954 5.30036 15.7954C6.21016 17.3571 7.6762 16.9158 8.26599 16.6442C8.35016 15.9821 8.61995 15.5237 8.90641 15.2692C6.64828 15.0315 4.27245 14.1488 4.27245 10.2102C4.27245 9.08979 4.67661 8.17312 5.31703 7.46021C5.21599 7.20563 4.86203 6.15292 5.41828 4.74396C5.41828 4.74396 6.27766 4.47229 8.21536 5.79646C9.04497 5.57201 9.90052 5.45784 10.7599 5.45687C11.6193 5.45687 12.4954 5.57583 13.3043 5.79646C15.2422 4.47229 16.1016 4.74396 16.1016 4.74396C16.6579 6.15292 16.3037 7.20563 16.2027 7.46021C16.8599 8.17312 17.2474 9.08979 17.2474 10.2102C17.2474 14.1488 14.8716 15.0144 12.5966 15.2692C12.9674 15.5917 13.2874 16.2027 13.2874 17.1704C13.2874 18.5454 13.2708 19.649 13.2708 19.9883C13.2708 20.26 13.4562 20.5827 13.9616 20.4808C18.0058 19.1225 20.921 15.286 20.921 10.7535C20.9377 5.08333 16.3712 0.5 10.7599 0.5Z"
        fill="white"
      />
    </svg>
  );
}