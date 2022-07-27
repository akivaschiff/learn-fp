export enum Category {
  Meat,
  Dairy,
  Parve,
  Other,
}

export type Ingredient = {
  name: string,
  isKosher: boolean,
  category: Category,
};

export type Recipe = {
  name: string,
  ingredients: Ingredient['name'][],
};
