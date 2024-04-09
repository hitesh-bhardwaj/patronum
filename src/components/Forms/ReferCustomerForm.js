import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useState } from 'react';
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import CountrySelector from "../ui/country-selector";
import { COUNTRIES } from "@/lib/countries";

const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required."}),
    email: z.string().min(1, {message: "Email is required."}).email({message: "Invalid email format."}),
    company: z.string().min(1, {message: "Company Name is required."}),
    country: z.string().min(1, "Country is required."),
    textarea: z.string().min(1, {message: "Message is Required."}),
    terms: z.boolean().refine(value => value === true, {message: "You must agree to the terms."}),
    pageURL: z.string(),
});

// Update the ContactForm component
export default function ReferCustomerForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [country, setCountry] = useState("GB");
    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        company: "",
        country: "GB",
        textarea: "",
        terms: false,
        pageURL: typeof window !== 'undefined' ? window.location.href : '', // Use window only in client-side context
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
        };

        const message = `
            <h1><strong>Refer Customer Form Submission</strong></h1>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Organisation Name:</strong> ${data.company}</p>
            <p><strong>Country:</strong> ${countryName}</p>
            <p><strong>Message:</strong> ${data.textarea}</p>
            <p><strong>Terms Agreement:</strong> ${data.terms ? 'Agreed' : 'Not Agreed'}</p>
        `;
        try {
            // Send email
            await axios.post('/api/send-email', {
                message: message,
                subject: "Refer Customer Submission",
            });

             // Send data to Mailchimp
             await axios.post('/api/mail-chimp', formData);
            
            form.reset();
            setSubmitting(false);
            setSubmissionSuccess(true);
        } catch (error) {
            setSubmitting(false);
            setSubmissionError('Error sending email. Please try again later.');
        }
    };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 contact-form">
        {/* Form fields */}
        {/* Name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="required">
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company field */}
        <FormField 
            control={form.control}
            name="company"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Organisation Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Organisation Name" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Country Selector Field */}
        <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
                <FormItem className="required">
                    <FormLabel>Country</FormLabel>
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
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Email field */}
        <FormField 
            control={form.control}
            name="email"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Business Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Your Email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Email field */}
        <FormField 
            control={form.control}
            name="textarea"
            render= {({ field }) => (
                <FormItem className="required mobile">
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Type Your Message Here." className="resize-none" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Terms checkbox field */}
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="terms">
                <div className="flex items-center gap-2">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                        />
                    </FormControl>
                    <FormLabel>
                        <span>I agree to the</span>
                        <Link href="/privacy-policy" target="_blank" className="text-primary relative after:absolute after:bg-primary after:h-[1px] after:left-0 after:bottom-[-2px] after:scale-0 hover:after:scale-100 after:duration-300 after:w-full"> Privacy Policy</Link>
                    </FormLabel>
                </div>
                <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <Button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
        </Button>
        {submissionError && <p className="text-red-500 text-[1vw]">{submissionError}</p>}
        {submissionSuccess && (
            <p className="text-green-500 text-[1vw]">Email sent successfully!</p>
        )}
      </form>
    </Form>
  );
}