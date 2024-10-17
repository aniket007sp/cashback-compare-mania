<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Google Sheets Data Display</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        h2 {
            color: #333;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            margin-bottom: 10px;
        }
        a {
            color: #007BFF;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>

<h1>Brands by Category and Country</h1>

<!-- Section for each category -->
<div id="content"></div>

<script>
    async function fetchSheetData() {
        const url = 'https://spreadsheets.google.com/feeds/list/1vS6EMTrMrFBQmv5vH5zhkplUiz5Zs1iDIgTzsvRWI8kIzMeGMefVt37EEzeuySHn5DP-pf4bu64n8ls/1/public/values?alt=json';
        const response = await fetch(url);
        const data = await response.json();
        
        // Extract rows from the data
        const entries = data.feed.entry;

        // Object to store categorized data
        let categories = {};

        // Loop through entries and categorize data
        entries.forEach(entry => {
            const category = entry.gsx$category.$t;
            const country = entry.gsx$country.$t;
            const company = entry.gsx$company.$t;
            const link = entry.gsx$linkofthebrand.$t;

            // Initialize category if not already existing
            if (!categories[category]) {
                categories[category] = {};
            }
            
            // Initialize country in the category
            if (!categories[category][country]) {
                categories[category][country] = [];
            }

            // Add company and link to the respective country
            categories[category][country].push({
                company: company,
                link: link
            });
        });

        // Display data
        displayData(categories);
    }

    function displayData(categories) {
        const contentDiv = document.getElementById('content');
        
        // Loop through each category and country
        for (let category in categories) {
            let categoryHtml = `<h2>${category}</h2>`;
            for (let country in categories[category]) {
                categoryHtml += `<h3>${country}</h3><ul>`;
                categories[category][country].forEach(item => {
                    categoryHtml += `<li><a href="${item.link}" target="_blank">${item.company}</a></li>`;
                });
                categoryHtml += '</ul>';
            }
            contentDiv.innerHTML += categoryHtml;
        }
    }

    // Fetch and display data when the page loads
    window.onload = fetchSheetData;
</script>

</body>
</html>


// import React, { useState, useEffect } from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// const CPCDeals = () => {
//   const [deals, setDeals] = useState({});

//   useEffect(() => {
//     fetchSheetData();
//   }, []);

//   async function fetchSheetData() {
//     const url = 'https://spreadsheets.google.com/feeds/list/1n7J-hOmK5CWRGGVmqN-wfK3XRISFIkJ0hqsfwVmrd90/2/public/values?alt=json';
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
      
//       const entries = data.feed.entry;
//       const processedDeals = processDeals(entries);
//       setDeals(processedDeals);
//     } catch (error) {
//       console.error('Error fetching sheet data:', error);
//     }
//   }

//   function processDeals(entries) {
//     const processedDeals = {};
//     entries.forEach(entry => {
//       const category = entry.gsx$category.$t;
//       const brand = entry.gsx$brand.$t;
//       const offer = entry.gsx$offer.$t;
//       const link = entry.gsx$link.$t;

//       if (!processedDeals[category]) {
//         processedDeals[category] = [];
//       }
//       processedDeals[category].push({ brand, offer, link });
//     });
//     return processedDeals;
//   }

//   return (
//     <div className="my-8">
//       <h2 className="text-2xl font-bold mb-4">CPC Deals</h2>
//       <Accordion type="single" collapsible className="w-full">
//         {Object.entries(deals).map(([category, categoryDeals]) => (
//           <AccordionItem key={category} value={category}>
//             <AccordionTrigger>{category}</AccordionTrigger>
//             <AccordionContent>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {categoryDeals.map((deal, index) => (
//                   <Card key={index}>
//                     <CardContent className="p-4">
//                       <h3 className="font-semibold">{deal.brand}</h3>
//                       <p className="text-sm mt-2">{deal.offer}</p>
//                       <a 
//                         href={deal.link} 
//                         target="_blank" 
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:underline mt-2 inline-block"
//                       >
//                         View Deal
//                       </a>
//                     </CardContent>
//                   </Card>
//                 ))}
//               </div>
//             </AccordionContent>
//           </AccordionItem>
//         ))}
//       </Accordion>
//     </div>
//   );
// };

// export default CPCDeals;
