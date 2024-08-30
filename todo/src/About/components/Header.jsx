import { SocialIcons } from "./SocialIcons";

export function Header() {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-lg">
      <div className="h-[25dvh] flex flex-col justify-center items-center py-6 gap-6">
        <SocialIcons />
        <div className="flex flex-col gap-2 text-center text-accent-grey">
          <h1 className="font-mono text-xl">
            Made with ❤️ by{" "}
            <a
              target="_blank"
              href="https://www.smgsankar.com"
              className="font-semibold font-[cursive] underline"
              title="smgsankar"
            >
              smgsankar
            </a>
          </h1>
          <div>
            <p>
              Icons from{" "}
              <a
                target="_blank"
                href="https://www.flaticon.com/authors/freepik"
                className="font-semibold underline decoration-[0.5px]"
                title="Freepik"
              >
                Flaticon by Freepik
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
