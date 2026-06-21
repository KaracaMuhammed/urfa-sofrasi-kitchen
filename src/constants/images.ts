const imageUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const images = {
  logo: imageUrl("images/urfa-logo.png"),
  exterior: imageUrl("images/urfa-exterior-new.png"),
  interior: imageUrl("images/urfa-interior-new.png"),
  foodMix: imageUrl("images/urfa-food-mix.png"),
  foodLahmacun: imageUrl("images/urfa-food-lahmacun.png"),
  foodPide: imageUrl("images/urfa-food-pide.png"),
  menuPage1: imageUrl("images/menu-page-1.png"),
  menuPage2: imageUrl("images/menu-page-2.png"),
} as const;
