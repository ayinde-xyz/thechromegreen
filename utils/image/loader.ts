import type { ImageLoaderProps } from "next/image";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality ?? "auto"}`];
  return `https://res.cloudinary.com/dbgxwchuy/image/upload/${params.join(",")}/v1778581300/thechromegreen/${src}`;
}

// https://res.cloudinary.com/dbgxwchuy/image/upload/v1778581300/thechromegreen/aboutus1_fr4nsb.jpg
