
class Product {
    constructor(ProductCode, ProductName, Stock, Price) {
        this.ProductCode = ProductCode;
        this.ProductName = ProductName;
        this.Stock = Stock;
        this.Price = Price;
    }
    
    display() {
        console.log(`BEFORE SALES`)
        console.log('Product Code :' + this.ProductCode);
        console.log('Product Name :' + this.ProductName);
        console.log('Price of one item :' + this.Price);

    }
}

class Activity extends Product {
    constructor(ProductName, Stock, Price, CustomerName, ProductCode, QuantitySold) {
        super(ProductCode, ProductName, Stock, Price);
        this.CustomerName = CustomerName;
        this.QuantitySold = QuantitySold;
    }

 display1() {
      super.display();
      console.log(' CustomerName :' +this.CustomerName );
      console.log(' QuantitySold :' + this.QuantitySold );
    }
    sales() {
        console.log(`AFTER SALES`);
        console.log(' CustomerName :' +this.CustomerName );
        console.log(' Required Quantity :' +this.QuantitySold );
        if (this.Stock == 0) {
            console.log(`sorry we donot have that product`);
        }
        else {
            var AvailableStock = this.Stock - this.QuantitySold;
            if (AvailableStock >= 0) {
                console.log(`Required Quantity is Available`);
                this.Stock = AvailableStock;
                var totalprice = this.QuantitySold *  this.Price;
                console.log(`The total price is :`+totalprice);
            } else {
                console.log(`There is no such quantity Available, available quantity is:`+this.Stock );
                var totalprice = this.Stock *  this.Price;
                console.log(`The total price is :`+totalprice);
                this.Stock = 0;
            }
        }
      
        console.log(`Currently Available stock after the sales :`+this.Stock);
    }
}
var ins = new Activity('ball',50,10,'sharon',101,20);
ins.sales()
ins.display()

