import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import CountrySelector from "../ui/country-selector";
import { COUNTRIES } from "@/lib/countries";
import Router from "next/router";
import { useModal } from '@/components/Modals/ModalContext';

// Update the ContactForm component
export default function FreeTrialForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState("GB");
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [blockedDomains, setBlockedDomains] = useState([]);
    const { closeModal } = useModal();

    useEffect(() => {
        // Fetch the JSON file containing 4700 emails
        const fetchEmails = async () => {
            try {
                const response = await axios.get('/domainBlock.json');
                const data = response.data;
                const extractedDomains = data.map(item => Object.values(item)[0]); // Extract domains
                setBlockedDomains(extractedDomains); // Set extracted domains as blockedDomains
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };
        fetchEmails();
    }, []);

    const formSchema = z.object({
        name: z.string().min(1, { message: "Name is required." }),
        email: z.string()
            .min(1, { message: "Email is required." })
            .email({ message: "Invalid email format." })
            .refine((email) => {
                // Extract the domain from the email address
                const domain = email.split("@")[1];
                // Check if the domain is not in the blocked list
                return !blockedDomains.includes(domain);
            }, { message: "Please enter a valid business email." }),
        company: z.string().min(1, "Company Name is required."),
        country: z.string().min(1, "Country is required."),
        phoneNumber: z.string().optional().refine((phone) => {
            if (country === "IN") {
                return phone.length >= 10;
            }
            return true;
        }, { message: "Please enter a valid number." }),
        terms: z.boolean().refine(value => value === true, "You must agree to the terms."),
        pageURL: z.string(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            country: "GB",
            phoneNumber: "",
            terms: false,
            pageURL: typeof window !== 'undefined' ? window.location.href : '',
        },
    });

    const onSubmit = async (data) => {
        setSubmitting(true);
        const countryName = COUNTRIES.find(c => c.value === country)?.title || 'Not specified';

        const formData = {
            name: data.name,
            email: data.email,
            company: data.company,
            countryName,
            pageURL: data.pageURL,
            tag: "Free Trial",
        };

        const message = `
                <h1>Free Trial Patronum Form Submission</h1>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company Name:</strong> ${data.company}</p>
                <p><strong>Country:</strong> ${countryName}</p>
                <p><strong>Phone Number:</strong> ${data.phoneNumber}</p>
                <p><strong>Page URL:</strong> ${data.pageURL}</p>
                <p><strong>Terms Agreement:</strong> ${data.terms ? 'Agreed' : 'Not Agreed'}</p>
            `;
        try {
            // Send data to Mailchimp
            await axios.post('/api/mail-chimp', formData);

            // Send email
            await axios.post('/api/mail', {
                message: message,
                subject: "Free Trial Patronum Form Submission",
            });

            form.reset();
            setSubmitting(false);
            setSubmissionSuccess(true);
            setTimeout(() => {
                closeModal();
                Router.push("/thank-you");
            }, 1000);
        } catch (error) {
            setSubmitting(false);
            setSubmissionError('Error sending email. Please try again later.');
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="lg:space-y-[2vw]  install-patronum-form md:space-y-[5.5vw] space-y-[5vw] ">

                {/* Form fields */}
                {/* Name field */}
                <FormField
                    // className="mb-0"
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="required ">
                            <FormControl>
                                <Input placeholder="Full Name*" className="lg:placeholder:text-[1.2vw]  md:placeholder:text-[3.5vw] md:text-[3.5vw] lg:text-[1.2vw] md:pb-[3vw] lg:pb-[1vw] placeholder:text-[4.5vw] text-[4.5vw]  placeholder:text-black" {...field} />
                            </FormControl>
                            <FormMessage className="text-[3vw] lg:text-[1vw] md:text-[2vw]"/>
                        </FormItem>
                    )}
                />

                {/* Email field */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="required">
                            <FormControl>
                                <Input placeholder="Business Email*" className="lg:placeholder:text-[1.2vw]  md:placeholder:text-[3.5vw] md:text-[3.5vw] lg:text-[1.2vw] md:pb-[3vw] lg:pb-[1vw] placeholder:text-[4.5vw] text-[4.5vw]  placeholder:text-black" {...field} />
                            </FormControl>
                            <FormMessage className="text-[3vw] lg:text-[1vw] md:text-[2vw]"/>
                        </FormItem>
                    )}
                />

                {/* Company field */}
                <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem className="required">
                            <FormControl>
                                <Input placeholder="Company Name*" className="lg:placeholder:text-[1.2vw]  md:placeholder:text-[3.5vw] md:text-[3.5vw] lg:text-[1.2vw] md:pb-[3vw] lg:pb-[1vw] placeholder:text-[4.5vw] text-[4.5vw]  placeholder:text-black" {...field} />
                            </FormControl>
                            <FormMessage  className="text-[3vw] lg:text-[1vw] md:text-[2vw]"/>
                        </FormItem>
                    )}
                />

                {/* Country Selector Field */}
                <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                        <FormItem className="required">
                            <FormControl>
                                <CountrySelector
                                    id={"country-selector"}
                                    open={isOpen}
                                    onToggle={() => setIsOpen(!isOpen)}
                                    onChange={(value) => {
                                        setCountry(value);
                                        field.onChange(value);
                                    }}

                                    selectedValue={COUNTRIES.find((option) => option.value === country)}
                                />
                            </FormControl>
                            <FormMessage className="text-[3vw] lg:text-[1vw] md:text-[2vw]" />
                        </FormItem>
                    )}
                />

                {/* Phone Number field - conditional rendering */}
                {country === "IN" && (
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem className="required">
                                <FormControl>
                                    <Input type="number" placeholder="Phone Number*" className="lg:placeholder:text-[1.2vw] md:placeholder:text-[3.5vw] md:text-[3.5vw] lg:text-[1.2vw] md:pb-[3vw] lg:pb-[1vw] placeholder:text-[4.5vw] text-[4.5vw] placeholder:text-black" {...field} />
                                </FormControl>
                                <FormMessage className="text-[3vw] lg:text-[1vw] md:text-[2vw]" />
                            </FormItem>
                        )}
                    />
                )}

                {/* Terms checkbox field */}
                <FormField
                    control={form.control}
                    name="terms"
                    render={({ field }) => (
                        <FormItem className="terms">
                            <div className="flex items-center gap-2">
                                <FormControl>
                                    <Checkbox
                                      className="w-[4vw] h-[4vw] lg:h-[1vw] lg:w-[1vw] md:w-[3vw] md:h-[3vw]"
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel className="md:text-[3vw] lg:text-[1.2vw] text-[3.5vw]">
                                    <span>I agree to the</span>
                                    <Link href="/privacy-policy" target="_blank" className="text-primary relative after:absolute after:bg-primary after:h-[1px] after:left-0 after:bottom-[-2px] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full"> Privacy Policy</Link>
                                </FormLabel>
                            </div>
                            <FormMessage className="text-[3vw] lg:text-[1vw] md:text-[2vw]" />
                        </FormItem>
                    )}
                />

                {/* Submit button */}
                <div className="w-full flex justify-center ">

                <Button id="submit_install" type="submit" disabled={submitting} className="md:!text-[3vw] w-fit mx-auto lg:!text-[1.5vw] hover:bg-primary duration-300">
                    {submitting ? 'Submitting...' : 'Submit'}
                </Button>

                </div>
                {submissionError && <p className="text-red-500 text-[3vw] lg:text-[1vw] md:text-[2vw]">{submissionError}</p>}
                {submissionSuccess && <p className="text-green-500 text-[3vw] lg:text-[1vw] md:text-[2vw]">Email sent successfully!</p>}
            </form>
        </Form>
    );
}
