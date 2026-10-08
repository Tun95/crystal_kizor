// src/utilities/assets/assetLookup.ts
// Drop files into src/assets/images or src/assets/logos using the names listed
// in the README there. If a file exists it is used; otherwise a labelled
// placeholder is shown. No code changes needed.
const toMap = (mods: Record<string, string>) =>
  Object.fromEntries(
    Object.entries(mods).map(([path, url]) => [
      path.split("/").pop()!.replace(/\.[^.]+$/, ""),
      url,
    ]),
  );

const images = toMap(
  import.meta.glob("../../assets/images/*.{jpg,jpeg,png,webp,avif,svg}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>,
);

const logos = toMap(
  import.meta.glob("../../assets/logos/*.{png,webp,svg,jpg,jpeg}", {
    eager: true,
    query: "?url",
    import: "default",
  }) as Record<string, string>,
);

export const getImage = (name: string): string | undefined => images[name];
export const getLogo = (name: string): string | undefined => logos[name];
