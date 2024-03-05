"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "../ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";

import { useState } from 'react';
import axios from 'axios';

const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required."}),
    email: z.string().min(1, {message: "Email is required."}).email({message: "Invalid email format."}),
    company: z.string().min(1, "Company Name is required."),
    phone: z.string().refine(isValidPhoneNumber, "Invalid phone number."),
    terms: z.boolean().refine(value => value === true, "You must agree to the terms."),
});

// Update the ContactForm component
export default function ContactForm() {

    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        company: "",
        phone: "",
        terms: false,
        },
    });

    const onSubmit = async (data) => {
        setSubmitting(true);
        try {

            // Format the email message
            const message = `
                <h1>New Form Submission</h1>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Company Name:</strong> ${data.company}</p>
                <p><strong>Phone Number:</strong> ${data.phone}</p>
            `;

            // <p><strong>Terms Agreement:</strong> ${data.terms ? 'Agreed' : 'Not Agreed'}</p>

            // Make a POST request to your API route
            const response = await axios.post('/api/send-email', {
                message: message, // Pass the formatted message to the API
            });
            // console.log('Email sent:', response.data);
            form.reset();
            setSubmitting(false);
            setSubmissionSuccess(true);
        } catch (error) {
            // console.error('Error sending email:', error);
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
        {/* Company field */}
        <FormField 
            control={form.control}
            name="company"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Company Name" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Phone Input Field */}
        <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem className="flex flex-col items-start required mobile">
                    <FormLabel className="text-left">Mobile Number</FormLabel>
                    <FormControl className="w-full">
                        <PhoneInput 
                            international
                            defaultCountry="US"
                            placeholder="Enter Mobile Number" 
                            {...field} 
                        />
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
        {/* <Button type="submit">Submit</Button> */}

        <Button type="submit" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Submit'}
        </Button>
        {submissionError && <p className="text-red-500">{submissionError}</p>}
        {submissionSuccess && (
            <p className="text-green-500">Email sent successfully!</p>
        )}
      </form>
    </Form>
  );
}