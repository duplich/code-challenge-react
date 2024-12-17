# Coding Challenge: Product Dashboard

## Overview
Create the best **Product Dashboard** you can using **React** and **TypeScript** using the static JSON provided as a jump-off point. **Time Limit**: **1 hour**

## Objective
Create a dashboard that can parse and display data from `products.ts` (JSON), implement sorting and filtering features, handle data inconsistencies gracefully, and showcase your decision-making and problem-solving skills.

## Dataset
The `products.ts` file contains hundreds of entries with the following fields: `ProductID`, `Name`, `Category`, `Price`, `Stock`, and `Rating`. The data includes various inconsistencies:

- Missing values
- Invalid data types (e.g., non-numeric price)
- Negative numbers in `Stock`
- Ratings outside the 1-5 range
- Duplicate `ProductID`s

## Tasks

### Core Tasks

1. **Data Parsing and Display**
   - Read and parse `products.ts` (this is already setup by default)
   - Implement your React UI Framework of choice
   - Display the data in a table format

2. **Sorting**
   - Enable sorting by columns (e.g., Price, Stock, Rating)
   - Allow ascending and descending order

3. **Filtering**
   - Implement filtering options (e.g., Category, Stock availability)
   - Allow users to filter products based on criteria

4. **Data Handling**
   - Handle missing or invalid data gracefully


### Optional Enhancements
- Add search functionality
- Implement pagination or virtualization for performance
- Write unit tests for components or functions
- Ensure responsive design for various screen sizes

## Setup Instructions

### Prerequisites
- **Node.js** (v18 or higher)
- **npm**

### Project Initialization

1. **Install Dependencies**
```bash
npm install
```

2. **Start the Development Server**
```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


