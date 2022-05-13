import _ from 'lodash'
import { v4 as uuidv4 } from 'uuid'
import { loremIpsum } from 'lorem-ipsum'
import { TextBlock, TitleBlock } from './constants.js'

type ObjArray = Array<{}>;

let data: TitleBlock[] = [] 


const makeTextBlock = (orderNum: number, index: number): TextBlock => {
  let textBlock: TextBlock = {
  id: uuidv4(),
  orderNumber: `${orderNum}.${index}`,
  type: 'text-block',
  text: loremIpsum(),
  }
  return textBlock 
}


const makeTitleBlock = (orderNum: number)=> {
  let titleBlock: TitleBlock = {
  id: uuidv4(),
  orderNumber: `${orderNum}.`,
  type: 'title-block',
  text: loremIpsum(),
  data:[..._.times(200, (i):TextBlock=> makeTextBlock(orderNum, i))]
  }
  console.log('titleBlock', titleBlock)
  return titleBlock
}

type OrderNumber = number;

_.times(30, (i) => {
  const orderNum: OrderNumber = i + 1
  data.push(makeTitleBlock(orderNum))
  // console.log('data push', data.type)
})

export { data } 
