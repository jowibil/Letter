import * as React from "react";

// By: ri
// See: https://v0.app/icon/ri/play-fill
// Example: <IconRiPlayFill width="24px" height="24px" style={{color: "#000000"}} />

export const IconRiPlayFill = ({
    height = "1em",
    fill = "currentColor",
    focusable = "false",
    ...props
}: Omit<React.SVGProps<SVGSVGElement>, "children">) => (
    <svg
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height={height}
        focusable={focusable}
        {...props}
    >
        <path
            fill={fill}
            d="M19.376 12.416L8.777 19.482A.5.5 0 0 1 8 19.066V4.934a.5.5 0 0 1 .777-.416l10.599 7.066a.5.5 0 0 1 0 .832"
        />
    </svg>
);
