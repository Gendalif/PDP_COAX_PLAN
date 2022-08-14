export interface IMeal {
  id: string;
  title: string;
  picture: string;
}

export interface IMealInfo extends IMeal {
  ingredients: string;
  description: string;
}
