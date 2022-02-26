export interface Recipe {
  id: number
  name: string
  description: string
  loot: Loot[]
  components: Recipe[]
}

export interface Loot {
  name: string
  qty: number
}
