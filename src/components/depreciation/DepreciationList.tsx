import React from "react";
import DepreciationTable from "./DepreciationTable";

const products: any[] = [
  {
    _id: 1,
    assetId: "RH0131200101",
    category: "Vehicles-RH001",
    Audit_Category: "Motor Vehicles",
    type: "Pickup",
    branch: "Al Ain",
    description: "4x4 pickup truck suitable for off-road and heavy-duty transportation.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 2,
    assetId: "RH0131200102",
    category: "Electronics-RH002",
    Audit_Category: "IT Equipment",
    type: "Laptop",
    branch: "Dubai",
    description: "High-performance business laptop with a sleek design and long battery life.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 3,
    assetId: "RH0131200103",
    category: "Furniture-RH003",
    Audit_Category: "Office Furniture",
    type: "Desk",
    branch: "Abu Dhabi",
    description: "Ergonomic office desk made of sustainable wood materials.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 4,
    assetId: "RH0131200104",
    category: "Appliances-RH004",
    Audit_Category: "Kitchen Equipment",
    type: "Refrigerator",
    branch: "Sharjah",
    description: "Energy-efficient refrigerator with advanced cooling technology.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 5,
    assetId: "RH0131200105",
    category: "Vehicles-RH001",
    Audit_Category: "Motor Vehicles",
    type: "SUV",
    branch: "Al Ain",
    description: "Spacious and comfortable SUV designed for family trips.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 6,
    assetId: "RH0131200106",
    category: "Electronics-RH002",
    Audit_Category: "Home Electronics",
    type: "Smart TV",
    branch: "Dubai",
    description: "4K Ultra HD Smart TV with built-in streaming capabilities.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 7,
    assetId: "RH0131200107",
    category: "Furniture-RH003",
    Audit_Category: "Office Furniture",
    type: "Chair",
    branch: "Abu Dhabi",
    description: "Adjustable office chair with lumbar support for maximum comfort.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 8,
    assetId: "RH0131200108",
    category: "Appliances-RH004",
    Audit_Category: "Laundry Equipment",
    type: "Washing Machine",
    branch: "Sharjah",
    description: "Front-load washing machine with multiple wash settings.",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: 9,
    assetId: "RH0131200109",
    category: "Vehicles-RH001",
    Audit_Category: "Motor Vehicles",
    type: "Motorbike",
    branch: "Al Ain",
    description: "Compact and fuel-efficient motorbike for daily commutes.",
    imageUrl: "https://via.placeholder.com/150",
  },
];

const DepreciationList = () => {
  return (
    <>
      <DepreciationTable data={products} />
    </>
  );
};

export default DepreciationList;
