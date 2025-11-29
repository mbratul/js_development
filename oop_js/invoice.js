class Invoice {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  print(printer) {
    if (printer instanceof Printer) {
      printer.print(this.items);
    } else {
      throw new Error("Invalid printer");
    }
  }
}

class Printer {
  print(items) {
    console.log(`Printing on Paper total items = ${items.length}`);
  }
}
class PDFPrinter extends Printer {
  print(items) {
    console.log(`Printing on PDF total items = ${items.length}`);
  }
}
class FilePrinter extends Printer {
  print(items) {
    console.log(`Printing on File total items = ${items.length}`);
  }
}

const invoice = new Invoice();
invoice.addItem("Mouse 3 3000");
invoice.addItem("Monitor 1 12000");
invoice.addItem("SSD 1 7000");

const pdfPrinter = new PDFPrinter();
const filePrinter = new FilePrinter();

invoice.print(pdfPrinter);
