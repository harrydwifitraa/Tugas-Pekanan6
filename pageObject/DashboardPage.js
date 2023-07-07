

class DashboardPage {

    get cartIcon(){
        return $('#shopping_cart_container')
    }

    get aTitle(){
        return $('.title=Products')
    }

    get sortDropDown(){
        return $('[data-test=product_sort_container]')
    }

    get itemsPriceList(){
        return $('.inventory_item_price')
    }

    sort(option){
        this.sortDropDown.waitForDisplayed();
        if(option === 'Price (low to high)')
          this.sortDropDown.selectByAttribute('value', 'lohi');
          else if(option === 'Price (high to low)')
            this.sortDropDown.selectByAttribute('value', 'hilo');
      }
    
      // verifyItemSorted(option){
      //   let sorted = true;
      //   const priceList = this.itemsPriceList.map((element) => parseFloat(element.getText().substring(1)))
      //   if(option === 'Price (low to high)'){
      //     for(let count=0; count<priceList.length-1; count++){
      //       if(priceList[count]>priceList[count+1]){
      //         sorted = false;
      //         break;
      //       }
      //     }
      //     expect(sorted).to.be.true;
      //   }
      // }
      get sortActive(){
        return $('.active_option')
      }

      get LabsBackpack(){
        return $('#item_4_title_link')
      }

      get btnAddCartLabsBackpack(){
        return $('#add-to-cart-sauce-labs-backpack')
      }

      get btnRemoveLabsBackpack(){
        return $('#remove-sauce-labs-backpack')
      }

      get TshirtRed(){
        return $('#item_3_title_link')
      }

      get btnAddCartTshirtRed(){
        return $('button[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]')
      }

      get cardBadge(){
        return $('.shopping_cart_badge')
      }

      chooseProduct(productName){
        if (productName === 'Sauce Labs Backpack'){
          this.LabsBackpack.click()
        }
        else if(productName === 'Test.allTheThings() T-Shirt (Red)'){
          this.TshirtRed.click()
        }
      }
}

export default new DashboardPage()