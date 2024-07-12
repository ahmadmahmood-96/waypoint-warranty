import Icon1 from "@/public/icon-1.png";
import Icon2 from "@/public/icon-2.png";
import Icon3 from "@/public/icon-3.png";
import Icon4 from "@/public/icon-4.png";
import Icon5 from "@/public/icon-5.png";
import Icon6 from "@/public/icon-6.png";
import Icon7 from "@/public/icon-7.png";
import Icon8 from "@/public/icon-8.png";
import Icon9 from "@/public/icon-9.png";
import Icon10 from "@/public/icon-10.png";
import Icon11 from "@/public/icon-11.png";
import Icon12 from "@/public/icon-12.png";
import ProductImage1 from "@/public/product-image1.png";
import ProductImage2 from "@/public/product-image2.png";
import ProductImage3 from "@/public/product-image3.png";
import Image, { StaticImageData } from "next/image";

type Products = {
  id?: number;
  number: string;
  icon: JSX.Element;
  title: string;
  pageTitle?: string;
  description?: string;
  coverageHighlights?: string[];
  eligibility?: string[];
  videoLink?: string;
  images?: StaticImageData[];
};

const productDetails: Products[] = [
  {
    id: 0,
    number: "01",
    icon: <Image src={Icon1} alt="icon-1" className="w-16" />,
    title: "Waypoint Vehicle Service Contract",
    pageTitle: "Vehicle Service Contract",
    description:
      "For new and pre-owned vehicles, Certified Pre-Owned, and Commercial Usage",
    coverageHighlights: [
      "Lift Kit coverage available",
      "Four levels of coverage: Platinum, Gold Plus, Gold, Powertrain",
      "Deductible options of $0, $50 disappearing, Nationwide",
      "$100, $250 (pre-owned only) coverage",
      "Credit Card payments available for out-of-network dealers",
      "Towing expenses covered up to $75",
      "Emergency Travel Expense Reimbursement up to $375",
      "Covers seals & gaskets on all levels of coverage",
      "Credit Card payments available for out-of-network dealers",
      "Insured by Virginia Surety, A-vA.M. Best Rated",
    ],
    eligibility: [
      "Available on new and used vehicles",
      "Mileage up to 140,000",
      "Available on all Asian, Domestics and European vehicles",
      "Term limits range from 6/6,000 to 120/125,00",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink:
      "https://www.youtube.com/watch?v=8MygUVxCnH0&pp=ygUUY2FyIGluc3BlY3Rpb24gdmlkZW8%3D",
  },
  {
    id: 1,
    number: "02",
    icon: <Image src={Icon2} alt="icon-2" className="w-20 h-12" />,
    title: "Pre-Owned Vehicle Service Contract",
    pageTitle: "Pre-Owned Vehicle Service Contract",
    description: "For pre-owned vehicles",
    coverageHighlights: [
      "Two levels of coverage: Preferred (powertrain plus). Standard (powertrain)",
      "Deductible options of $50 disappearing and $100",
      "Nationwide coverage",
      "Credit Card payments available",
      "Towing expenses covered up to $75",
      "Emergency Travel Expense Reimbursement up to $375",
      "Insured by Virginia Surety, A- A.M. Best Rated",
    ],
    eligibility: [
      "Used Vehicles",
      "Current plus 15 model years back",
      "Mileage parameters 80,000 miles - 180,000 miles",
      "Term limit include 12/12,000, 18/18,000, 24/24,000, and 36/36,000",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/H6vFtE5sLCo",
  },
  {
    id: 2,
    number: "03",
    icon: <Image src={Icon3} alt="icon-3" className="w-16 h-12" />,
    title: "Term Care Vehicle Service Contract",
    pageTitle: "Term Care Vehicle Service Contract",
    description: "Platinum level coverage for the term of the contract",
    coverageHighlights: [
      "Additional Maintenance type coverage including:",
      "Brake Pad Replacement",
      "Battery Replacement",
      "Unlimited Headlamp Replacements",
      "Belts and Hoses",
      "Windshield Wiper Blade Replacement",
      "Unlimited Electrical Coverage",
      "Wheel Alignment Coverage Towing Reimbursement Coverage",
      "Emergency Travel Expense Reimbursement up to $375 per occurrence",
      "Rental Reimbursement $0 Deductible Nationwide coverage",
      "Claim Credit Card payments available for out-of-network repair facilities",
      "Insured by Virginia Surety, A- A.M. Best Rated",
    ],
    eligibility: [
      "Current plus 1 model year and odometer less than 10,000 miles",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/ghCP-wuB9qI",
  },
  {
    id: 3,
    number: "04",
    icon: <Image src={Icon4} alt="icon-4" className="w-16" />,
    title: "Total Tech Vehicle Service Contract",
    pageTitle: "Total Tech Vehicle Service Contract",
    description:
      "Only the following parts and/or Systems are covered. Parts and systems not listed are not covered.",
    coverageHighlights: [
      "Touch/Display Screens",
      "Home Link System",
      "Blind Spot Detection Systems",
      "Navigation Systems",
      "Factory Installed OEM Audio System",
      "Lane Departure Warning Systems",
      "Keyless Access and Remote Start Systems",
      "Parking Assist Systems",
      "DVD Player System",
      "Intelligent Cruise Control Systems",
      "Forward, Backup and 360 Degree Camera Systems",
      "Tire Pressure Monitoring Systems (TPMS)",
      "Video and Gaming Systems",
      "Adaptive Lighting Control Systems",
      "Wi Fi Data Connection Systems",
      "Accessory Power Point Connection Systems Rental Reimbursement",
      "$100 Deductible & $50 disappearing deductible Nationwide coverage",
      "Claim Credit Card payments available for out-of-network repair facilities",
      "Insured by Virginia Surety, A- A.M. Best Rated",
    ],
    eligibility: [
      "Current plus 5 model years and odometer less than 60,000 miles",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/yRgMmgGLLig",
  },
  {
    id: 4,
    number: "05",
    icon: <Image src={Icon5} alt="icon-5" className="w-16" />,
    title: "EV Battery Vehicle Service Contract",
    pageTitle: "EV Battery Vehicle Service Contract",
    description:
      "EV Battery replacement or repair if your battery fails or does not charge to expected range performance based on your Vehicle's age and mileage.",
    coverageHighlights: [
      "$100 Deductible",
      "Nationwide coverage 48/48 Term available",
      "30 day / 1,000 mile waiting period required",
      "For convenience, all EV's are classified under one rate",
      "Claim Credit Card payments available for out-of-network repair facilities",
      "Insured by Virginia Surety, A- A.M. Best Rated",
    ],
    eligibility: [
      "Current plus 4 model years and odometer less than 100,000 miles",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/mTzI08GE51I",
  },
  {
    id: 5,
    number: "06",
    icon: <Image src={Icon6} alt="icon-6" className="w-14 h-14 mt-1" />,
    title: "Lifetime Limited Powertrain Warranty",
    pageTitle: "Limited Powertrain Warranty",
    description: "Lifetime Powertrain Coverage",
    coverageHighlights: [
      "Coverage is Identical to Manufacturer's Powertrain Warranty",
      "$100 Deductible",
      "Good anywhere in the US and Canada",
      "Claim Credit Card payments available for out-of-network repair facilities.",
      "Insured by Virginia Surety, A- A.M. Best Rated",
    ],
    eligibility: [
      "New Vehicles-Current Model year or 1 back, up to 5,000 miles on the odometer.",
      "Used Vehicles-Current Model year and up to 10 back, up to 100,000 miles on the odometer",
      "Limited Warranty may only be issued at the time of vehicle purchase, prior to delivery.",
      "Acura, Buick, Cadillac, Chevrolet, Chrysler, Dodge, Fiat, Ford, Genesis, GMC, Honda, Hyundai, Infiniti, Isuzu, Jeep, Kia, Lexus, Lincoln, Mazda, Mercury, Mitsubishi, Nissan, Pontiac, Ram, Saturn, Scion, Subaru, Suzuki, Toyota",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/orEtrXMyYW4",
  },
  {
    id: 6,
    number: "07",
    icon: <Image src={Icon7} alt="icon-7" className="w-16 h-14" />,
    title: "Certified Pre-Owned Powertrain Warranty",
    pageTitle: "Pre-Owned Powertrain Warranty",
    description: "EMatches or exceeds OEM Warranty Coverage",
    coverageHighlights: [
      "Additional Platinum level coverage for first 12 months/12,000 miles (not just 3 months/3000 miles)",
      "Powertrain Coverage after first 12 months/12,000 mile Platinum coverage",
      "Value Added Benefits-Up to $50 reimbursements for the following Roadside Services: Towing, Lock-Out Assistance, Battery Services, Gas, Oil, Fluid & Water Delivery, Flat Tire",
    ],
    eligibility: [
      "Limited warranty may only be issued at the time of vehicle purchase, prior to delivery",
      "Vehicle age and mileage limitations apply (see list)",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/orEtrXMyYW4",
  },
  {
    id: 7,
    number: "08",
    icon: <Image src={Icon8} alt="icon-8" className="w-16 h-14" />,
    title: "Used Vehicle Limited Warranty",
    pageTitle: "Vehicle Limited Warranty",
    description: "Variety of options available:",
    coverageHighlights: [
      "30 day/1,000 mile",
      "60 day/2,000 mile",
      "3 months/3,000 mile",
      "6 months/6,000 mile",
      "12 months/12,000 mile",
      "Stated coverage including engine, transmission, transaxle, drive axle, brakes, steering, electrical components. (Please refer to limited warranty certificate for specific parts listed for coverage.)",
      "$50 Deductible",
      "Nationwide coverage",
      "Claim Credit Card payments available for out-of-network repair facilities.",
      "Insured by Virginia Surety, A- A.M. Best Rated",
    ],
    eligibility: [
      "Limited Warranty may only be issued at the time of vehicle purchase, prior to delivery",
      "Vehicles to be used commercially, for competition, for speed events, or rented to others are not eligible",
      "Trucks over one (1) ton and motor homes are not eligible for coverage",
      "Vehicles manufactured as non-U.S. specification vehicles are not eligible",
      "Total loss, salvaged, rebuilt, and flood damaged vehicles are not eligible",
      "Vehicles modified from the manufacturer's original specifications are not eligible",
      "Current plus 15 model years back",
      "Must have less than 175,000 miles on the odometer",
      "Note: Limited Warranty must be placed on all eligible vehicles",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/4EhArMOAL-I",
  },
  {
    id: 8,
    number: "09",
    icon: <Image src={Icon9} alt="icon-9" className="w-16 h-14" />,
    title: "GAP",
    pageTitle: "GAP",
    description: "Up to 96 Month Term",
    coverageHighlights: [
      "120% or 150% Coverage Limit",
      "Maximum Benefit payment of $50,000",
      "Insured by Virginia Surety, A- A.M. Best Rated",
      "Protects vehicles valued up to $125,000 MSRP",
      "Commercial Usage Coverage available",
      "Customized options available upon request",
    ],
    eligibility: ["Available on new and used vehicles", "No age limit"],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/orEtrXMyYW4",
  },
  {
    id: 9,
    number: "10",
    icon: <Image src={Icon10} alt="icon-10" className="w-16 h-14" />,
    title: "Pre-Paid Maintenance",
    pageTitle: "Pre-Paid Maintenance",
    description: "Fully Customizable Program",
    coverageHighlights: [
      "Multiple Term Limits",
      "Multiple Mileage Intervals",
      "Manufacturer Specific Programs",
      "Adjustable reimbursement amounts",
      "Roadside Assistance",
      "Embedded Key Replacement Available",
      "Customizable Customer Retention Giveaways",
      "Wraparound Programs for OEM Service Giveaways: ToyotaCare, Volkswagen/BMW, Ford and Chrysler CPO Programs",
      "Administered fully online",
      "Unused services refunded to Dealer",
    ],
    eligibility: ["None"],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/ymk-eWhV-cs",
  },
  {
    id: 10,
    number: "11",
    icon: <Image src={Icon11} alt="icon-11" className="w-16 h-14" />,
    title: "Tire and Road Hazard",
    pageTitle: "Tire and Road Hazard",
    coverageHighlights: [
      "Tire(s) Repair or Replacement",
      "Wheel(s) Repair or Replacement",
      "Valve Stems",
      "Mounting and Balancing",
      "Sales Tax Included (where applicable)",
      "Optional Rental Coverage up to $30 per day for a maximum of 5 days",
      "1-7 year coverage",
      "$0 Deductible",
      "Insured by Virginia Surety A- A.M. Best Rated",
      "Cosmetic Coverage available",
    ],
    eligibility: [
      "Available on new and used vehicles",
      "No age limit",
      "Luxury vehicles included (Bentley, Maserati, Jaguar)",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/H8lkf5bltng",
  },
  {
    id: 11,
    number: "12",
    icon: <Image src={Icon12} alt="icon-12" className="w-16 h-14" />,
    title: "Theft and Ancillary Products",
    pageTitle: "Theft and Ancillary Products",
    coverageHighlights: [
      "Window Etching",
      "Vehicle Labeling Systems",
      "Vehicle Replacement Guarantee",
      "Lo-Jack",
      "Satellite/GPS Tracking Systems",
    ],
    eligibility: [
      "Appearance Protection Paint/Fabric/Leather Headlights/Wheels",
      "Paintless Dent Repair",
      "Windshield Protection",
      "Lease Excess Wear & Tear",
      "Identity Theft Protection",
      "ValueShield® Diminished Value Protection",
      "Bundled Products",
      "Cosmetic Wheel Coverage",
      "Automotive Deductible Reimbursement",
      "Key Replacement",
      "Roadside Assistance",
      "Nitrogen Tire Programs",
    ],
    images: [ProductImage1, ProductImage2, ProductImage3],
    videoLink: "https://www.youtube.com/embed/ciioE17S6SA",
  },
];

export default productDetails;
