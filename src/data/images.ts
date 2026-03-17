import Logo from "@/assets/logo.png";

type ImageLoading = "eager" | "lazy";
type ImageDecoding = "sync" | "async" | "auto";
type FetchPriority = "high" | "low" | "auto";

interface ModernFormats {
  avif?: string;
  webp?: string;
}

export interface AppImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: ImageLoading;
  decoding?: ImageDecoding;
  fetchPriority?: FetchPriority;
  formats?: ModernFormats;
}

const createModernFormats = (path: string): ModernFormats => ({
  avif: `/optimized${path.replace(/\.(png|jpe?g)$/i, ".avif")}`,
  webp: `/optimized${path.replace(/\.(png|jpe?g)$/i, ".webp")}`,
});

export const imageAssets = {
  logo: {
    src: Logo,
    alt: "Logo da Technology Gym",
    width: 200,
    height: 200,
    loading: "lazy",
    decoding: "async",
  },
  homeHero: {
    src: "/home.png",
    alt: "Alunos treinando na Technology Gym",
    width: 1600,
    height: 900,
    loading: "eager",
    decoding: "async",
    fetchPriority: "high",
    formats: createModernFormats("/home.png"),
  },
  enrollmentHero: {
    src: "/home.png",
    alt: "Espaço interno da Technology Gym",
    width: 1600,
    height: 900,
    loading: "eager",
    decoding: "async",
    fetchPriority: "high",
    formats: createModernFormats("/home.png"),
  },
  faqIllustration: {
    src: "/iconScroll.png",
    alt: "Ilustração decorativa da seção de perguntas frequentes",
    width: 600,
    height: 600,
    loading: "lazy",
    decoding: "async",
    formats: createModernFormats("/iconScroll.png"),
  },
  gymFacade: {
    src: "/gymfacade.jpg",
    alt: "Fachada da unidade da Technology Gym",
    width: 640,
    height: 384,
    loading: "lazy",
    decoding: "async",
    formats: createModernFormats("/gymfacade.jpg"),
  },
  logoLoopIcon: {
    src: "/iconScroll.png",
    alt: "Ícone da Technology Gym",
    width: 96,
    height: 96,
    loading: "lazy",
    decoding: "async",
    formats: createModernFormats("/iconScroll.png"),
  },
  logoLoopTechnology: {
    src: "/tecnologyScroll.png",
    alt: "Nome Technology Gym",
    width: 220,
    height: 96,
    loading: "lazy",
    decoding: "async",
    formats: createModernFormats("/tecnologyScroll.png"),
  },
  activities: {
    zumba: {
      src: "/zumba.jpg",
      alt: "Zumba Technology",
      width: 640,
      height: 384,
      loading: "lazy",
      decoding: "async",
      formats: createModernFormats("/zumba.jpg"),
    },
    crossfit: {
      src: "/crossfit.jpg",
      alt: "Crossfit Technology",
      width: 640,
      height: 384,
      loading: "lazy",
      decoding: "async",
      formats: createModernFormats("/crossfit.jpg"),
    },
    yoga: {
      src: "/yoga.jpg",
      alt: "Yoga Technology",
      width: 640,
      height: 384,
      loading: "lazy",
      decoding: "async",
      formats: createModernFormats("/yoga.jpg"),
    },
    weigths: {
      src: "/weigths.jpg",
      alt: "Weigths Technology",
      width: 640,
      height: 384,
      loading: "lazy",
      decoding: "async",
      formats: createModernFormats("/weigths.jpg"),
    },
    swimming: {
      src: "/swimming.jpg",
      alt: "Swimming Technology",
      width: 640,
      height: 384,
      loading: "lazy",
      decoding: "async",
      formats: createModernFormats("/swimming.jpg"),
    },
  },
} as const satisfies Record<string, unknown>;
