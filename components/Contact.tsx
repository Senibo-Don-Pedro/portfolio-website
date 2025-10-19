"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Mail, Phone, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      alert("Thank you for your message! I'll get back to you soon.");
    }, 1500);
  }

  const contactInfo = [
    { icon: <MapPin className="h-5 w-5" />, label: "Location", value: "Lagos, Nigeria", link: null },
    { icon: <Mail className="h-5 w-5" />, label: "Email", value: "senibodonpedro@gmail.com", link: "mailto:senibodonpedro@gmail.com" },
    { icon: <Phone className="h-5 w-5" />, label: "Phone", value: "+234 808 075 8943", link: "tel:+2348080758943" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", value: "senibo-don-pedro", link: "https://www.linkedin.com/in/senibo-don-pedro" },
    { icon: <Github className="h-5 w-5" />, label: "GitHub", value: "senibodonpedro", link: "https://github.com/senibo-don-pedro" },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {/* Contact form kept commented for now */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-4 text-primary">{info.icon}</div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        {info.link ? (
                          <Link
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </Link>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <h3 className="font-medium mb-4">Available for:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Full-time</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Contract</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Freelance</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Consulting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
