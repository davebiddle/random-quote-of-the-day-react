import * as React from "react";

const SvgLoadingSpinner = (props) => {
  return (
    <svg width={113} height={113} viewBox="0 0 29.898 29.898" {...props}>
      <g
        transform="translate(14.946 14.95) scale(.26458)"
        strokeLinecap="round"
        strokeWidth={15}
      >
        <path id="loading-spinner_svg__a" d="M0 35v14" />
        <g stroke="#166f6f">
          <use
            transform="rotate(210)"
            width="100%"
            height="100%"
            strokeOpacity={0.26}
            xlinkHref="#loading-spinner_svg__a"
          />
          <use
            transform="rotate(240)"
            width="100%"
            height="100%"
            strokeOpacity={0.33}
            xlinkHref="#loading-spinner_svg__a"
          />
          <use
            transform="rotate(-90)"
            width="100%"
            height="100%"
            strokeOpacity={0.4}
            xlinkHref="#loading-spinner_svg__a"
          />
        </g>
        <use
          transform="rotate(-60)"
          width="100%"
          height="100%"
          stroke="#186d6d"
          strokeOpacity={0.47}
          xlinkHref="#loading-spinner_svg__a"
        />
        <use
          transform="rotate(-30)"
          width="100%"
          height="100%"
          stroke="#186d6d"
          strokeOpacity={0.54}
          xlinkHref="#loading-spinner_svg__a"
        />
        <use
          width="100%"
          height="100%"
          stroke="#176d6d"
          strokeOpacity={0.61}
          xlinkHref="#loading-spinner_svg__a"
        />
        <use
          transform="rotate(30)"
          width="100%"
          height="100%"
          stroke="#176d6d"
          strokeOpacity={0.68}
          xlinkHref="#loading-spinner_svg__a"
        />
        <g stroke="#176e6e">
          <use
            transform="rotate(60)"
            width="100%"
            height="100%"
            strokeOpacity={0.75}
            xlinkHref="#loading-spinner_svg__a"
          />
          <use
            transform="rotate(90)"
            width="100%"
            height="100%"
            strokeOpacity={0.82}
            xlinkHref="#loading-spinner_svg__a"
          />
          <use
            transform="rotate(120)"
            width="100%"
            height="100%"
            strokeOpacity={0.89}
            xlinkHref="#loading-spinner_svg__a"
          />
          <use
            transform="rotate(150)"
            width="100%"
            height="100%"
            strokeOpacity={0.95}
            xlinkHref="#loading-spinner_svg__a"
          />
        </g>
        <use
          transform="scale(-1)"
          width="100%"
          height="100%"
          fill="#167070"
          stroke="#167070"
          xlinkHref="#loading-spinner_svg__a"
        />
      </g>
    </svg>
  );
};

export default SvgLoadingSpinner;
