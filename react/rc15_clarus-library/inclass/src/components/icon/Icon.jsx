import { SvgIcon } from "./Icon.style";

const Icon = ({ icon, path, hoverColor }) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    hoverColor={hoverColor}
    fill="currentColor"
    className={`bi bi-${icon}`}>
    <path d={path} />
  </SvgIcon>
);
export default Icon;
