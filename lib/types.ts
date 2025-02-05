export type MenuItem = {
  name: string;
  href: string;
};

export type subject = {
  title: string;
  href: string;
};

export type TitleItem = {
  title: string;
  category: string;
  text: string;
  desc: string;
  subjects: subject[];
};

export type Data = {
  headerMenus: MenuItem[];
  adminMenus: MenuItem[];
  pageTitle: TitleItem[];
};
