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
    // ... paste the rest of the JSON array here
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