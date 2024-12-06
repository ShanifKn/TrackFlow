import React from "react";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import ProductDetails from "../assets/ProductDetails";

interface Product {
  id: number;
  value: string;
}
const ProductArray = () => {
  const [value, setValue] = useState<string>(""); // For managing the selected product value
  const [products, setProducts] = useState<Product[]>([{ id: 0, value: "" }]); // State to manage multiple product selections
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Dummy data for product options
  const branches = [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Product 3" },
    // Add more products as needed
  ];

  // Function to add a new product section
  const addNewProduct = () => {
    setProducts([...products, { id: products.length, value: "" }]);
  };

  return (
    <>
      <div className="flex gap-3 justify-between items-start">
        <h1 className="font-semibold text-black text-xl tracking-wide">Add Product</h1>

        <Button
          className=" text-white bg-[#006666] hover:bg-emerald-800 "
          onClick={addNewProduct} // Add a new product section when clicked
        >
          Add New Product
        </Button>
      </div>

      {/* Render all product sections dynamically */}
      {products.map((product, index) => (
        <div
          key={product.id}
          className="grid grid-cols-4 gap-3 mt-3 items-end">
          <div className="grid w-full items-center gap-2  col-span-2">
            <Label htmlFor="category">Product {index + 1}</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-haspopup="true"
                  className="w-full justify-between h-12 text-gray-500">
                  {branches.find((framework) => framework.value === product.value)?.label || "Select product..."}
                  <ChevronsUpDown className="opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-full p-0">
                <Command>
                  <CommandInput
                    placeholder="Search product..."
                    className="h-9"
                  />
                  <CommandList>
                    <CommandEmpty>No product found.</CommandEmpty>
                    <CommandGroup>
                      {branches.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            const updatedProducts = [...products];
                            updatedProducts[index].value = currentValue;
                            setProducts(updatedProducts);
                          }}>
                          {framework.label}
                          <Check className={`ml-auto ${product.value === framework.value ? "opacity-100" : "opacity-0"}`} />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex gap-3 col-span-2 items-end">
            <div className="grid   items-center gap-2">
              <Label htmlFor={`quantity-${product.id}`}>Quantity</Label>
              <Input
                type="number"
                id={`quantity-${product.id}`}
                className="h-12 w-28"
                value={1}
                readOnly={true}
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor={`specifcation-${product.id}`}>Specifcation</Label>
              <Input
                type="text"
                id={`specifcation-${product.id}`}
                className="h-12"
                placeholder="Colour / Size / Brand"
              />
            </div>

            <div className="grid w-full items-center gap-2">
              <Label htmlFor={`sup-${product.id}`}>Sub Type</Label>
              <Input
                type="text"
                id={`sup-${product.id}`}
                className="h-12"
                placeholder=""
              />
            </div>

            <Button
              className="text-black "
              variant="link"
              onClick={handleOpenDialog}>
              View
            </Button>

            <ProductDetails
              open={dialogOpen}
              onClose={handleCloseDialog}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductArray;
