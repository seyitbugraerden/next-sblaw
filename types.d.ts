interface BannerProps {
  text: string;
}
interface VisionProps {
  baslik: string;
  text: string;
  icon: string;
}
interface ParamsType {
  params: {
    slug: string;
  };
}

interface CardDataElements {
  img: string;
  title: string;
  description: string;
  url: string;
}

interface BlogType {
  data: BlogTypeElement;
}

interface BlogTypeElement {
  title: string;
  category: string;
  slug: string;
  description: string;
  value: string;
}
