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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "../ui/phone-input";
import { isValidPhoneNumber } from "react-phone-number-input";

import Link from "next/link";
import { useState } from 'react';
import axios from 'axios';

const formSchema = z.object({
    name: z.string().min(1, {message: "Name is required."}),
    email: z.string().min(1, {message: "Email is required."}).email({message: "Invalid email format."}),
    company: z.string().min(1, {message: "Company Name is required."}),
    country: z.string().min(1, {message: "Country is required."}),
    phone: z.string().refine(isValidPhoneNumber, {message: "Invalid phone number."}),
    clname: z.string().min(1, {message: "Client Name is required."}),
    clemail: z.string().min(1, {message: "Client Email is required."}).email({message: "Invalid email format."}),
    clcompany: z.string().min(1, {message: "Client Company Name is required."}),
    clcountry: z.string().min(1, {message: "Client Country is required."}),
    cldomain: z.string().min(1, {message: "This field is required."}),
    cluser: z.string().min(1, {message: "This field is required."}),
    textarea: z.string().min(1, {message: "Message is Required."}),
    terms: z.boolean().refine(value => value === true, {message: "You must agree to the terms."}),
});

// Update the ContactForm component
export default function RegisterOpportunityForm() {

    const [submitting, setSubmitting] = useState(false);
    const [submissionError, setSubmissionError] = useState(null);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        company: "",
        country: "",
        clname: "",
        clemail: "",
        clcompany: "",
        clcountry: "",
        cldomain: "",
        cluser: "",
        textarea: "",
        phone: "",
        terms: false,
        },
    });

    const onSubmit = async (data) => {
        setSubmitting(true);
        try {

            // Format the email message
            const message = `
                <h1><strong>Register An Opportunity Form Submission</strong></h1>
                <h3>Partner Details:</h3>
                <p><strong>Partner Name:</strong> ${data.name}</p>
                <p><strong>Partner Email:</strong> ${data.email}</p>
                <p><strong>Partner Organisation Name:</strong> ${data.company}</p>
                <p><strong>Partner Country:</strong> ${data.country}</p>
                <p><strong>Partner Phone Number:</strong> ${data.phone}</p><br>
                <h3>Opportunity Details:</h3
                <p><strong>Client Name:</strong> ${data.clname}</p>
                <p><strong>Client Email:</strong> ${data.clemail}</p>
                <p><strong>Client Organisation Name:</strong> ${data.clcompany}</p>
                <p><strong>Client Country:</strong> ${data.clcountry}</p>
                <p><strong>Client Google Workspace Domain:</strong> ${data.cldomain}</p>
                <p><strong>Client Number of Licensed User:</strong> ${data.cluser}</p><br>
                <p><strong>Message:</strong> ${data.textarea}</p>
                <p><strong>Terms Agreement:</strong> ${data.terms ? 'Agreed' : 'Not Agreed'}</p>
            `;

            // Make a POST request to your API route
            const response = await axios.post('/api/send-email', {
                message: message, // Pass the formatted message to the API
                subject: "Opportunity Form Submission",
            });
            
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
        <div className="w-full text-center">
            <h3 className="text-[2.2vw] text-body font-medium">Partner Details</h3>
        </div>
        
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

        {/* Company field */}
        <FormField 
            control={form.control}
            name="country"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter Country" {...field}/>
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

        {/* Phone Input Field */}
        <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem className="flex flex-col items-start required">
                    <FormLabel className="text-left">Phone Number</FormLabel>
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

        <div className="w-full text-center">
            <h3 className="text-[2.2vw] text-body font-medium">Opportunity Details</h3>
        </div>

        {/* Name field */}
        <FormField
          control={form.control}
          name="clname"
          render={({ field }) => (
            <FormItem className="required">
              <FormLabel>Client Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Client Full Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Company field */}
        <FormField 
            control={form.control}
            name="clcompany"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Organisation Name</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Organisation Name" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Company field */}
        <FormField 
            control={form.control}
            name="clcountry"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Country</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Country" {...field}/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Email field */}
        <FormField 
            control={form.control}
            name="clemail"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Business Email</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Business Email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* Domain field */}
        <FormField 
            control={form.control}
            name="cldomain"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Google Workspace Domain</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Google Workspace Domain" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />

        {/* User field */}
        <FormField 
            control={form.control}
            name="cluser"
            render= {({ field }) => (
                <FormItem className="required">
                    <FormLabel>Client Number of Licensed User</FormLabel>
                    <FormControl>
                        <Input placeholder="Client Number of Licensed User" {...field} />
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