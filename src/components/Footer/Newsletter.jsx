import { useEffect, useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from 'axios';
import { Input } from "@/components/ui/input";

const Newsletter = () => {
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [blockedDomains, setBlockedDomains] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            try {
                const response = await axios.get('/domainBlock.json');
                const data = response.data;
                const extractedDomains = data.map(item => Object.values(item)[0]);
                setBlockedDomains(extractedDomains);
            } catch (error) {
                console.error('Error fetching emails:', error);
            }
        };
        fetchEmails();
    }, []);

    const formSchema = z.object({
        email: z.string()
            .min(1, { message: "Email is required." })
            .email({ message: "Invalid email format." })
            .refine((email) => {
                // Extract the domain from the email address
                const domain = email.split("@")[1];
                // Check if the domain is not in the blocked list
                return !blockedDomains.includes(domain);
            }, { message: "Please enter a business email." }),
        pageURL: z.string(),
    });

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            pageURL: typeof window !== 'undefined' ? window.location.href : '',
        },
    });

    const onSubmit = async (data) => {
        setSubmitting(true);

        const formData = {
            email: data.email,
            pageURL: data.pageURL,
            tag: "Patronum Newsletter",
        };

        try {
            // Send data to Mailchimp
            await axios.post('/api/newsletter', formData);

            form.reset();
            setSubmitting(false);
            setSubmissionSuccess(true);

            setTimeout(() => {
                setSubmissionSuccess(false);
            }, 3000);
        } catch (error) {
            setSubmitting(false);
            const errorMessage = error.response?.data?.error || 'Please try again later.';
            setSubmissionError(errorMessage);

            setTimeout(() => {
                setSubmissionError(null);
            }, 3000);
        }
    };

    return (
        <div className="block lg:mt-[3vw] mt-[10vw] lg:mb-0 md:mb-4 mb-4 lg:w-[100%] w-[100%]">
            <h6 className="lg:text-[1.5vw] md:text-[4vw] text-[6vw] lg:text-left text-center font-medium aeonik tracking-wide mb-[20px]">Subscribe to our Newsletter</h6>
            <Form {...form} className="relative">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start lg:justify-start justify-center lg:h-[2.5vw] md:h-[7vw] h-[10vw] gap-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="required w-[70%] h-full">
                                <FormControl>
                                    <Input placeholder="Enter Your Email" {...field} className="bg-transparent h-full lg:text-lg md:text-2xl text-xl border-white border-b-2 focus-visible:border-white" data-news />
                                </FormControl>
                                <FormMessage className="md:text-lg text-sm text-left md:static absolute" />
                            </FormItem>
                        )}
                    />
                    <button className={`bg-head text-white h-full items-center group lg:min-w-[3vw] md:min-w-[10vw] lg:py-2 text-center flex justify-center lg:px-4 md:px-6 px-2 rounded-lg hover:bg-white hover:text-primary duration-200 autofill:bg-transparent lg:text-lg md:text-2xl text-base min-w-[16vw]`} type="submit" disabled={submitting}>
                        {submitting ? <img className="w-6 h-6 invert animate-spin group-hover:invert-0" src="/assets/icons/loading.png" alt="loading icon" loading="lazy" /> : <img className="w-6 h-6 invert -rotate-90 group-hover:invert-0 group-hover:rotate-[-135deg] duration-200 transition-all" src="/assets/icons/arrow-down-big.svg" alt="arrow icon" loading="lazy" />}
                    </button>
                </form>
                {submissionError && <p className="text-red-500 absolute md:text-lg text-sm text-left mt-2 ml-2">{submissionError}</p>}
                {submissionSuccess && <p className="text-white absolute text-left md:text-lg text-sm mt-2 ml-2">Subscribed Successfully!</p>}
            </Form>
        </div>
    )
}

export default Newsletter;