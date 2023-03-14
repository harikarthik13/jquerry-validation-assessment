class Product {
    constructor(ProductCode, ProductName, Stock, Price) {
        this.ProductCode = ProductCode;
        this.ProductName = ProductName;
        this.Stock = Stock;
        this.Price = Price;
    }
    get avail() {
        return this.Stock;
    }   

    display() {
        console.log('Product Code :' + this.ProductCode);
        console.log('Product Name :' + this.ProductName);
        console.log('Available Stock :' + this.Stock);
        console.log('Price :' + this.Price);

    }
}

class Activity extends Product {
    constructor(CustomerName, ProductCode, QuantitySold, TotalAmount) {
        super(ProductCode);
        this.CustomerName = CustomerName;
        this.QuantitySold = QuantitySold;
        this.TotalAmount = TotalAmount;
    }
    sales() {
        var AvailableStock = this.stock - this.QuantitySold;
        if (AvailableStock >= 0) {
            console.log(`Required Quantity is Available ${this.QuantitySold}`);
            this.Stock = AvailableStock;
        } else {
            console.log(`There is no such quantity Available, available quantity ${this.Stock}`);
            this.Stock = 0;
        }
        
    
}
}
