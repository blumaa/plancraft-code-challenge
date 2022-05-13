
interface TextBlock {
  id: string,
  orderNumber:  string,
  type:  string
  text: string,
}
interface TitleBlock {
  id: string,
  orderNumber:  string,
  type:  string
  text: string,
  data: TextBlock[]
}

export type { TextBlock, TitleBlock }
