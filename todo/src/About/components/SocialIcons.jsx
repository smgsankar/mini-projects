import { socialLinks } from "../../Common/utils/constants";

export function SocialIcons() {
  return (
    <div className="flex gap-8 justify-center">
      {socialLinks.map((link) => {
        const { name, url, icon } = link;

        return (
          <a key={name} href={url} target="_blank" rel="noreferrer">
            <img src={icon} alt={name} className="w-12 h-12" />
          </a>
        );
      })}
    </div>
  );
}
