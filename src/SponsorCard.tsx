import Image from "next/image";

export enum Tier {
  Diamond,
  Gold,
  Silver,
  Bronze,
  InKind,
}

export interface SponsorCardProps {
  displayName: string;
  tier: Tier;
  link: string;
}

const SponsorCard = ({ displayName, link }: SponsorCardProps) => {
  const logoFromDisplayName =
    "/sponsor-logos/" + displayName.replace(" ", "-").toLowerCase() + ".png";

  return (
    <a
      href={link}
      className="rounded-md bg-white p-4 transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-neutral-300"
    >
      <div
        className={"relative"
        }
      >
        <Image
          className="object-contain"
          src={logoFromDisplayName}
          height={100}
          width={200}
          alt={displayName}
        ></Image>
      </div>
    </a>
  );
};

export default SponsorCard;
