import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const financeData = [
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "AU Bank CC",
        "PRODUCT": "All Credit Cards Except LIT",
        "COMMISSION": "Rs 1500",
        "LINK": "https://clnk.in/vrFb",
        "CONDITIONS": "Payout on All Cards Except LIT",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4341/medium/image_%2828%29.png?1646395656"
    },
     {
        "CATEGORY": "Credit Card",
        "COMPANY": "AU Bank CC",
        "PRODUCT": "LIT Credit Card (LTF)",
        "COMMISSION": "Rs 1312.5",
        "LINK": "https://clnk.in/vrFb",
        "CONDITIONS": "Payout on LIT Credit Card (LTF)",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4341/medium/image_%2828%29.png?1646395656"
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "AU Bank CC",
        "PRODUCT": "Insta Pay Credit Card",
        "COMMISSION": "0",
        "LINK": "https://clnk.in/vrFb",
        "CONDITIONS": "Payout on Insta Pay Credit Card",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4341/medium/image_%2828%29.png?1646395656"
    },
    {
        "CATEGORY": "Insurance",
        "COMPANY": "Acko Insurance",
        "PRODUCT": "Bike Insurance",
        "COMMISSION": "22.5% / Sale",
        "LINK": "https://clnk.in/vrFr",
        "CONDITIONS": "Payout on bike",
        "LOGO": "https://cdn0.cuelinks.com/merchant/3261/medium/acko_logo.JPG?1532416648"
    },
    {
        "CATEGORY": "Insurance",
        "COMPANY": "Acko Insurance",
        "PRODUCT": "Car Policy Purchase : Car Comprehensive",
        "COMMISSION": "26.25% / Sale",
        "LINK": "https://clnk.in/vrFI",
        "CONDITIONS": "Payout on Car Policy Purchase : Car comprehensive",
        "LOGO": "https://cdn0.cuelinks.com/merchant/3261/medium/acko_logo.JPG?1532416648"
    },
    {
        "CATEGORY": "Insurance",
        "COMPANY": "Acko Insurance",
        "PRODUCT": "Car Policy Purchase : Third Party Sale",
        "COMMISSION": "12% Sale",
        "LINK": "https://clnk.in/vrFI",
        "CONDITIONS": "Payout on Car Policy Purchase : Third Party Sale",
        "LOGO": "https://cdn0.cuelinks.com/merchant/3261/medium/acko_logo.JPG?1532416648"
    },
    {
        "CATEGORY": "Loan",
        "COMPANY": "Aditya Birla Capital Home Loan",
        "PRODUCT": "Home Loan",
        "COMMISSION": "Rs 210",
        "LINK": "https://clnk.in/vrFv",
        "CONDITIONS": "Payout Disbursal",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4295/medium/New_Project_-_2022-01-06T153514.639.png?1641463744"
    },
    {
        "CATEGORY": "Telecom",
        "COMPANY": "Airtel",
        "PRODUCT": "DTH",
        "COMMISSION": "Rs 472",
        "LINK": "https://clnk.in/vrFy",
        "CONDITIONS": "Payout on Sale of DTH connection",
        "LOGO": ""
    },
    {
        "CATEGORY": "Telecom",
        "COMPANY": "Airtel",
        "PRODUCT": "Prepaid to Postpaid",
        "COMMISSION": "Rs 630",
        "LINK": "https://clnk.in/vrFR",
        "CONDITIONS": "Payout on shift from Prepaid to postpaid",
        "LOGO": "https://cdn0.cuelinks.com/merchant/191/medium/Airtel.png?1487932883"
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "American Express",
        "PRODUCT": "Platinum CC",
        "COMMISSION": "Rs 4050",
        "LINK": "https://clnk.in/vrF4",
        "CONDITIONS": "Payout Card Dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "American Express",
        "PRODUCT": "Platinum Reserve CC",
        "COMMISSION": "Rs 2025",
        "LINK": "https://clnk.in/vrF8",
        "CONDITIONS": "Payout",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "American Express",
        "PRODUCT": "Smartearn CC",
        "COMMISSION": "Rs 945",
        "LINK": "https://clnk.in/vrGc",
        "CONDITIONS": "Payout on Card Dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "American Express",
        "PRODUCT": "Membership Rewards CC",
        "COMMISSION": "Rs 1575",
        "LINK": "https://clnk.in/vrGe",
        "CONDITIONS": "Payout on Card Dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "American Express",
        "PRODUCT": "Platinum Travel CC",
        "COMMISSION": "Rs 1837.5",
        "LINK": "https://clnk.in/vrGj",
        "CONDITIONS": "Payout on Card Dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Myzone",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Flipkart",
        "COMMISSION": "1012.5",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Select",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Aura",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Privilege",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Indian Oil Credit Card",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Indian Oil Credit Card RuPay",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Health Card",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Magnus",
        "COMMISSION": "2700",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Spicejet",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Atlas",
        "COMMISSION": "2700",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Samsung Signature Credit card",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Rewards Credit card",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Samsung Infinite Card",
        "COMMISSION": "2700",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis Airtel Card",
        "COMMISSION": "1890",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "AXIS LIC Platinum",
        "COMMISSION": "742.5",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Axis Bank",
        "PRODUCT": "Axis LIC Signature",
        "COMMISSION": "1316.25",
        "LINK": "https://clnk.in/vrGS",
        "CONDITIONS": "Once the Card Dispatch Lead is counted",
        "LOGO": ""
    },
    {
        "CATEGORY": "Finance",
        "COMPANY": "Bajaj Finance",
        "PRODUCT": "Bajaj Insta EMI Card",
        "COMMISSION": "Rs 180",
        "LINK": "https://clnk.in/vrG5",
        "CONDITIONS": "Payout on KYC approved",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Bank of Baroda",
        "PRODUCT": "CC",
        "COMMISSION": "Rs 708.75",
        "LINK": "https://clnk.in/vrG7",
        "CONDITIONS": "Payout on Card Dispatched",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "Federal Bank",
        "PRODUCT": "CC",
        "COMMISSION": "Rs 992.25",
        "LINK": "https://clnk.in/vrG9",
        "CONDITIONS": "Payout on card dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "HSBC",
        "PRODUCT": "HSBC Cashback CC",
        "COMMISSION": "Rs 2175",
        "LINK": "https://clnk.in/vrHc",
        "CONDITIONS": "Once the Card Dispatch Lead is count",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "ICICI Bank",
        "PRODUCT": "CC",
        "COMMISSION": "Rs 1312.50",
        "LINK": "https://clnk.in/vrHe",
        "CONDITIONS": "Payout on Card Dispatch",
        "LOGO": "https://cdn0.cuelinks.com/merchant/605/medium/ICICI-Credit-Card.png?1545998861"
    },
    {
        "CATEGORY": "Finance",
        "COMPANY": "IDFC Bank",
        "PRODUCT": "IDFC Bank Salary Account",
        "COMMISSION": "Rs 595.5",
        "LINK": "https://clnk.in/vrHg",
        "CONDITIONS": "Payout on open Salary Account",
        "LOGO": ""
    },
    {
        "CATEGORY": "Finance",
        "COMPANY": "IDFC Bank",
        "PRODUCT": "IDFC Bank Saving Account",
        "COMMISSION": "Rs 397.5",
        "LINK": "https://clnk.in/vrHi",
        "CONDITIONS": "Payout Per Account Open",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "IDFC Bank",
        "PRODUCT": "Payout",
        "COMMISSION": "1012.5",
        "LINK": "https://clnk.in/vrHk",
        "CONDITIONS": "NTB User / Successful Card Dispatch",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4279/medium/New_Project_-_2021-12-17T181814.271.png?1639745344"
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "IDFC Bank",
        "PRODUCT": "WOW Card",
        "COMMISSION": "337.5",
        "LINK": "https://clnk.in/vrHk",
        "CONDITIONS": "NTB User / Successful Card Dispatch",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4279/medium/New_Project_-_2021-12-17T181814.271.png?1639745344"
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "IDFC Bank",
        "PRODUCT": "ETB & ETCC User",
        "COMMISSION": "0",
        "LINK": "https://clnk.in/vrHk",
        "CONDITIONS": "NTB User / Successful Card Dispatch",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4279/medium/New_Project_-_2021-12-17T181814.271.png?1639745344"
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "IndusInd Bank",
        "PRODUCT": "CC",
        "COMMISSION": "Rs 1800",
        "LINK": "https://clnk.in/vrHo",
        "CONDITIONS": "Payout on card disbursal",
        "LOGO": "https://cdn0.cuelinks.com/merchant/2752/medium/Indusland.png?1596460384"
    },
    {
        "CATEGORY": "Finance",
        "COMPANY": "IndusInd Bank",
        "PRODUCT": "IndusInd Bank Saving Account",
        "COMMISSION": "Rs 450",
        "LINK": "https://clnk.in/vrHq",
        "CONDITIONS": "Payout on Successful Account open with Deposit of 1000 INR",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "SBI",
        "PRODUCT": "SBI Sprint Cashback CC",
        "COMMISSION": "Rs 1470",
        "LINK": "https://clnk.in/vrHv",
        "CONDITIONS": "Payout on Card Dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "SBI",
        "PRODUCT": "SBI Sprint Simply Save CC",
        "COMMISSION": "Rs 1470",
        "LINK": "https://clnk.in/vrHx",
        "CONDITIONS": "Payout on Credit Card Dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "SBI",
        "PRODUCT": "SBI Sprint Simply Click",
        "COMMISSION": "Rs 1470",
        "LINK": "https://clnk.in/vrHy",
        "CONDITIONS": "Payout on Credit Card Dispatch",
        "LOGO": ""
    },
    {
        "CATEGORY": "Others",
        "COMPANY": "Surveoo",
        "PRODUCT": "",
        "COMMISSION": "Rs 39.74",
        "LINK": "https://clnk.in/vrHE",
        "CONDITIONS": "Payout on Registration only",
        "LOGO": "https://cdn0.cuelinks.com/merchant/4993/medium/logo.png?1684757752"
    },
    {
        "CATEGORY": "Credit Card",
        "COMPANY": "HDFC",
        "PRODUCT": "Tata Neu HDFC CC",
        "COMMISSION": "Rs 472.50",
        "LINK": "https://clnk.in/vrHJ",
        "CONDITIONS": "Payout applicable on Card Dispatch + Transaction",
        "LOGO": ""
    }
];

const FinanceSection = () => {
    const categories = [...new Set(financeData.map(item => item.CATEGORY))];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Finance</h2>
            <Accordion type="single" collapsible className="w-full">
                {categories.map((category, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{category}</AccordionTrigger>
                        <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {financeData.filter(item => item.CATEGORY === category).map((item, itemIndex) => (
                                    <Card key={itemIndex}>
                                        <CardHeader>
                                            <CardTitle>{item.COMPANY}</CardTitle>
                                            <CardDescription>{item.PRODUCT}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p><strong>Commission:</strong> {item.COMMISSION}</p>
                                            <p><strong>Conditions:</strong> {item.CONDITIONS}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild>
                                                <a href={item.LINK} target="_blank" rel="noopener noreferrer">Apply Now</a>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default FinanceSection;
