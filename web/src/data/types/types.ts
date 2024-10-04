export type HeroPageBlock = {
  _key: string;
  _type: 'heroPageBlock';
  heroTitle: string | null;
  heroDescription: string | null;
  heroImage: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
    };

    alt?: string;
    _type: 'image';
  } | null;
};
