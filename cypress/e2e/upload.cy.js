import listPage from '../support/pages/listPage'
import itemPage from '../support/pages/itemPage'

describe('Feature: Upload Image', () => {
  // Id = 02_ListUpload
  it('Given an item, when entering the edit screen then page correspond to the item selected', () => {
    const row = 0
    listPage.visitList()
    listPage.getNumbers(row)
    listPage.accessItem(row + 1) // row + 1 because the first row is the header
    itemPage.validateItem()
  })
})