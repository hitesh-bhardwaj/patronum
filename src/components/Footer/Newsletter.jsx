import { useEffect, useState } from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
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
            }, { message: "Please enter a valid email." }),
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
            setSubmissionError('Please try again later.');
    
            setTimeout(() => {
                setSubmissionError(null);
            }, 3000);
        }
    };

    return (
        <div className="block lg:mt-[3vw] mt-[4vw] md:mb-0 mb-4 lg:w-[60%] w-[100%]">
            <h6 className="lg:text-[1.3vw] md:text-[4vw] text-[5vw] lg:text-left text-center font-medium aeonik tracking-wide mb-[20px]">Subscribe to our Newsletter</h6>
            <Form {...form} className="relative">
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-start justify-between lg:h-[2.2vw] md:h-[7vw] h-[10vw] gap-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="required w-[70%] h-full">
                                <FormControl>
                                    <Input placeholder="Enter Your Email" {...field} className="bg-transparent h-full lg:text-lg md:text-2xl text-xl" data-news />
                                </FormControl>
                                <FormMessage className="md:text-lg text-sm text-left md:static absolute" />
                            </FormItem>
                        )}
                    />
                    <button className={`bg-head text-white h-full items-center lg:min-w-[5vw] md:min-w-[15vw] lg:py-2 text-center flex justify-center lg:px-4 md:px-6 px-4 rounded-full hover:bg-primary duration-200 autofill:bg-transparent lg:text-lg md:text-2xl text-base min-w-[20vw] ${submitting ? 'bg-primary text-white' : ''}`} type="submit" disabled={submitting}>
                        {submitting ? <img className="w-6 h-6 invert animate-spin" src="/assets/icons/loading.png" /> : 'Subscribe'}
                    </button>
                </form>
                {submissionError && <p className="text-red-500 absolute md:text-lg text-sm text-left mt-2 ml-2">{submissionError}</p>}
                {submissionSuccess && <p className="text-green-500 absolute text-left md:text-lg text-sm mt-2 ml-2">Email sent successfully!</p>}
            </Form>
        </div>
    )
}

export default Newsletter;