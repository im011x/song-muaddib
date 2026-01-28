// JSON-based CMS data structure
// This can be easily migrated to a database later

export interface Track {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: string[];
  image: string;
  featured: boolean;
}

export interface StudioInfo {
  name: string;
  description: string;
  image: string;
}

export interface SocialLinks {
  instagram?: string;
  youtube?: string;
  soundcloud?: string;
}

export interface SEOData {
  title: string;
  description: string;
  ogImage: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  customerRole: string;
  muaddibRole: string;
}

export interface SiteConfig {
  studio: StudioInfo;
  tracks: Track[];
  services: Service[];
  workflow: WorkflowStep[];
  social: SocialLinks;
  seo: Record<string, SEOData>;
  theme: {
    primaryColor: string;
    backgroundColor: string;
  };
}

// Sample data - in production, this would come from a database
export const siteConfig: SiteConfig = {
  studio: {
    name: "SONG MUADDIB",
    description: "프리미엄 K-Pop 작곡 및 프로덕션 스튜디오. 최고의 음악 작품을 만들어내는 창의적 공간입니다.",
    image: "/images/studio.jpg",
  },
  tracks: [
    {
      id: "1",
      title: "Midnight Dreams",
      artist: "아이돌 그룹 A",
      year: 2024,
      genre: ["Pop", "R&B"],
      image: "/images/tracks/track1.jpg",
      featured: true,
    },
    {
      id: "2",
      title: "Electric Pulse",
      artist: "솔로 아티스트 B",
      year: 2024,
      genre: ["EDM", "Pop"],
      image: "/images/tracks/track2.jpg",
      featured: true,
    },
    {
      id: "3",
      title: "City Lights",
      artist: "보이그룹 C",
      year: 2023,
      genre: ["Hip-Hop", "R&B"],
      image: "/images/tracks/track3.jpg",
      featured: false,
    },
    {
      id: "4",
      title: "Ocean Breeze",
      artist: "걸그룹 D",
      year: 2023,
      genre: ["Pop", "Ballad"],
      image: "/images/tracks/track4.jpg",
      featured: true,
    },
    {
      id: "5",
      title: "Neon Nights",
      artist: "아이돌 그룹 E",
      year: 2023,
      genre: ["EDM", "Hip-Hop"],
      image: "/images/tracks/track5.jpg",
      featured: false,
    },
    {
      id: "6",
      title: "Golden Hour",
      artist: "솔로 아티스트 F",
      year: 2022,
      genre: ["Pop", "Ballad"],
      image: "/images/tracks/track6.jpg",
      featured: false,
    },
  ],
  services: [
    {
      id: "1",
      title: "All-in-one Title Track",
      description: "Complete production package for your title track",
      price: "Starting at $5,000",
      features: [
        "Original Composition",
        "Full Production & Mixing",
        "Mastering",
        "Vocal Recording Support",
        "Unlimited Revisions"
      ],
      popular: true,
    },
    {
      id: "2",
      title: "B-Side Production",
      description: "Professional production for album tracks",
      price: "Starting at $3,000",
      features: [
        "Original Composition",
        "Full Production & Mixing",
        "Mastering",
        "2 Revisions"
      ],
      popular: false,
    },
    {
      id: "3",
      title: "Demo Production",
      description: "Quick demo production for pitch purposes",
      price: "Starting at $1,500",
      features: [
        "Original Composition",
        "Basic Production",
        "Demo Mixing",
        "1 Revision"
      ],
      popular: false,
    },
  ],
  workflow: [
    {
      number: "01",
      title: "Consultation",
      description: "프로젝트 목표와 요구사항을 파악하는 단계입니다.",
      customerRole: "비전, 스타일, 요구사항 제시",
      muaddibRole: "프로젝트 목표 이해 및 제안",
    },
    {
      number: "02",
      title: "Composition",
      description: "아티스트의 방향성과 브랜드에 맞춘 오리지널 작곡을 진행합니다.",
      customerRole: "아티스트 방향성 및 피드백 제공",
      muaddibRole: "오리지널 작곡 및 초안 제작",
    },
    {
      number: "03",
      title: "Production & Mixing",
      description: "최고 품질로 트랙을 완성하는 프로덕션 및 믹싱 단계입니다.",
      customerRole: "수정 요청 및 최종 승인",
      muaddibRole: "전문 프로덕션 및 믹싱 작업",
    },
    {
      number: "04",
      title: "Delivery",
      description: "완성된 트랙의 최종 마스터링 및 배포 준비가 완료됩니다.",
      customerRole: "최종 검토 및 승인",
      muaddibRole: "마스터링 및 배포 파일 제공",
    },
  ],
  social: {
    instagram: "https://instagram.com/songmuaddib",
    youtube: "https://youtube.com/@songmuaddib",
    soundcloud: "https://soundcloud.com/songmuaddib",
  },
  seo: {
    home: {
      title: "SONG MUADDIB - Premium K-Pop Composition Studio",
      description: "프리미엄 K-Pop 작곡 및 프로덕션 스튜디오",
      ogImage: "/images/og-home.jpg",
    },
    portfolio: {
      title: "Portfolio - SONG MUADDIB",
      description: "SONG MUADDIB의 작품 포트폴리오를 확인하세요",
      ogImage: "/images/og-portfolio.jpg",
    },
  },
  theme: {
    primaryColor: "#C5A059",
    backgroundColor: "#FCFAF8",
  },
};

// Helper functions to read/write config (in production, these would interact with a database)
export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function updateSiteConfig(updates: Partial<SiteConfig>): SiteConfig {
  Object.assign(siteConfig, updates);
  return siteConfig;
}

export function getTracks(filters?: { genre?: string; featured?: boolean }): Track[] {
  let tracks = siteConfig.tracks;

  if (filters?.genre) {
    tracks = tracks.filter(track => track.genre.includes(filters.genre!));
  }

  if (filters?.featured !== undefined) {
    tracks = tracks.filter(track => track.featured === filters.featured);
  }

  return tracks;
}

export function getTrackById(id: string): Track | undefined {
  return siteConfig.tracks.find(track => track.id === id);
}

export function getServices(): Service[] {
  return siteConfig.services;
}

export function getServiceById(id: string): Service | undefined {
  return siteConfig.services.find(service => service.id === id);
}

export function getWorkflow(): WorkflowStep[] {
  return siteConfig.workflow || [];
}
