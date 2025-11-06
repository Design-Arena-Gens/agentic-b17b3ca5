import { Capability } from "@/data/capabilities";

type CapabilityCardProps = {
  capability: Capability;
  onSelect: (capability: Capability) => void;
  active: boolean;
  className: string;
  activeClassName: string;
  badgeClassName: string;
  descriptionClassName: string;
  domainListClassName: string;
  domainClassName: string;
};

export const CapabilityCard = ({
  capability,
  onSelect,
  active,
  className,
  activeClassName,
  badgeClassName,
  descriptionClassName,
  domainListClassName,
  domainClassName
}: CapabilityCardProps) => {
  return (
    <button
      type="button"
      className={`${className} ${active ? activeClassName : ""}`}
      onClick={() => onSelect(capability)}
    >
      <span className={badgeClassName}>{capability.title}</span>
      <p className={descriptionClassName}>{capability.description}</p>
      <ul className={domainListClassName}>
        {capability.domains.map((domain) => (
          <li key={domain} className={domainClassName}>
            {domain}
          </li>
        ))}
      </ul>
    </button>
  );
};
