type component = {
    name: string;
    recipe: string;
    slug: string;
    url : string;
}

export type Recipe = {
  id: number
  base_layer: component
  condiment: component
  mixin: component
  seasoning : component
  shell : component
}
