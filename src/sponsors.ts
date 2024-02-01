import { SponsorCardProps, Tier } from "@/SponsorCard";

const createSponsor = (displayName: string, tier: Tier, link: string): SponsorCardProps => {
  return {
    displayName,
    link,
    tier,
  }
}

const sponsors: SponsorCardProps[] = [
  createSponsor("Adobe", Tier.Silver, "https://www.adobe.com/"),
  createSponsor("Ferique", Tier.Silver, "https://www.ferique.com/"),
  createSponsor("Hatch", Tier.Silver, "https://www.hatch.com/"),
  createSponsor("Nav Canada", Tier.Bronze, "https://www.navcanada.ca/"),
  createSponsor("Red Bull", Tier.InKind, "https://www.redbull.com/"),
  createSponsor("Poulet Rouge", Tier.InKind, "https://poulet-rouge.ca"),
  createSponsor("MathWorks", Tier.InKind, "https://www.mathworks.com"),
  createSponsor("WizePrep", Tier.InKind, "https://www.wizeprep.com"),
]

export default sponsors